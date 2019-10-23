import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, ReactWrapper } from 'enzyme';

import { Paginator } from '../Paginator';
import { IJoke } from '../../types';

describe('<Paginator />', () => {
  const items = [
    { id: 1, joke: 'Abba' },
    { id: 2, joke: 'Dabba' },
    { id: 3, joke: 'Doo' },
    { id: 4, joke: 'Scooby' },
    { id: 5, joke: 'Dooby' },
    { id: 6, joke: 'Moo' },
    { id: 7, joke: 'Cows' },
    { id: 8, joke: `Don't` },
    { id: 9, joke: 'Bother' },
    { id: 10, joke: 'Me' },
    { id: 11, joke: 'At' },
    { id: 12, joke: 'All' },
    { id: 13, joke: 'Unless' },
    { id: 14, joke: 'They' },
    { id: 15, joke: 'Speak' },
    { id: 16, joke: 'Poetry' },
  ] as IJoke[];

  const PaginatorWithItems = () => (
    <Paginator items={items}>
      {({ activeItems }) => (
        <div>
          {activeItems.map(({ id, joke }) => {
            return (
              <span className="_test" key={id}>
                {joke}
              </span>
            );
          })}
        </div>
      )}
    </Paginator>
  );

  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<PaginatorWithItems />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('paginates an array to deault page size of 9', () => {
    const expected = wrapper.find('span._test');

    expect(expected.length).toBe(9);
    expect(wrapper.containsMatchingElement(<span>Current Page: 1 / 2</span>)).toBe(true);
  });
});
