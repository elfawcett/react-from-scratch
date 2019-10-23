import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentPage } from '../store/system/selectors';
import { setCurrentPage } from '../store/system/actions';

import { Pages } from '../constants';
import { LandingPage } from '../pages/landing';
import { AllJokesPage } from '../pages/allJokes';
import { MyFavoritesPage } from '../pages/myFavorites';
import { RandomJokePage } from '../pages/randomJoke';
import { NotFoundPage } from '../pages/notFound';

import './App.css';

const renderPage = (page: Pages) => {
  switch (page) {
    case Pages.LANDING:
      return <LandingPage />;
    case Pages.ALLJOKES:
      return <AllJokesPage />;
    case Pages.FAVORITEJOKES:
      return <MyFavoritesPage />;
    case Pages.RANDOMJOKE:
      return <RandomJokePage />;
    default:
      return <NotFoundPage />;
  }
};

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>

      <div
        className="Navigator"
        style={{
          paddingBottom: '1em',
          borderBottom: 'solid 1px midnightblue',
        }}
      >
        <p>Select a page: </p>
        {currentPage === Pages.NOTFOUND ? (
          <button onClick={() => dispatch(setCurrentPage(Pages.LANDING))}>Go Home</button>
        ) : (
          <select
            value={currentPage}
            onChange={event => dispatch(setCurrentPage(event.target.value as Pages))}
          >
            <option value={Pages.LANDING}>Landing</option>
            <option value={Pages.ALLJOKES}>All Jokes</option>
            <option value={Pages.FAVORITEJOKES}>My Favorites</option>
            <option value={Pages.RANDOMJOKE}>Random Joke</option>
          </select>
        )}
      </div>

      {renderPage(currentPage)}
    </div>
  );
};
