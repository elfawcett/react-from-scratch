import React, { useState, useEffect } from 'react';
import { IJoke } from '../types';
import { DEFAULT_PAGE_SIZE } from '../constants';

type TRenderProps = {
  children?: (props: { activeItems: IJoke[] }) => JSX.Element;
};

type TPaginatorProps = {
  items: IJoke[];
};

const Paginator = ({ items, children }: TPaginatorProps & TRenderProps) => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeItems, setActiveItems] = useState<IJoke[]>([]);

  useEffect(() => {
    setActiveItems(paginate());
  }, [items, pageSize, currentPage]);

  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1em' }}>
        <div style={{ textAlign: 'center', marginBottom: '0.5em' }}>
          Jokes per page:
          <select value={pageSize} onChange={e => changePageSize(e.target.value)}>
            {Array.from({ length: 10 }, (_, i) => (i + 1) * DEFAULT_PAGE_SIZE).map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button disabled={currentPage === 0} onClick={() => changePage(currentPage - 1)}>
            Previous Page
          </button>
          <span style={{ padding: '0 1em' }}>
            Current Page: {currentPage + 1} / {maxPages() + 1}
          </span>
          <button disabled={currentPage === maxPages()} onClick={() => changePage(currentPage + 1)}>
            Next Page
          </button>
        </div>
      </div>

      {children ? (
        children({ activeItems })
      ) : (
        <ul>
          {activeItems.map(item => (
            <li key={item.id}>{item.joke}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );

  function paginate(targets = items, page = currentPage, size = pageSize) {
    page = page * size;
    return targets.slice(page, page + size);
  }

  function maxPages(targets = items, size = pageSize) {
    return Math.floor(targets.length / size);
  }

  function changePageSize(size: string) {
    const numericSize = Math.abs(parseInt(size, 10));
    setPageSize(numericSize);
    setActiveItems(paginate(items, currentPage, numericSize));
  }

  function changePage(page: number): void {
    page = page < 0 ? 0 : page > maxPages() ? maxPages() : page;

    setCurrentPage(page);
    setActiveItems(paginate(items, page));
  }
};

export { Paginator };
