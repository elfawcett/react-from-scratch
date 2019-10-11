import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrentPage } from '../store/system/selectors';
import { setCurrentPage } from '../store/system/actions';

import { Pages } from '../constants';
import { LandingPage } from '../pages/landing';
import { AllJokesPage } from '../pages/allJokes';
import { MyFavoritesPage } from '../pages/myFavorites';
import { RandomJokePage } from '../pages/randomJoke';
import { NotFoundPage } from '../pages/notFound';

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
  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Chuck Norris Jokes</h1>
      <p>Select a page: </p>
      {currentPage === Pages.NOTFOUND ? (
        <button onClick={() => dispatch(setCurrentPage(Pages.LANDING))}>Go Home</button>
      ) : (
        <select onChange={event => dispatch(setCurrentPage(event.target.value as Pages))}>
          <option value={Pages.LANDING}>Landing</option>
          <option value={Pages.ALLJOKES}>All Jokes</option>
          <option value={Pages.FAVORITEJOKES}>My Favorites</option>
          <option value={Pages.RANDOMJOKE}>Random Joke</option>
        </select>
      )}

      <hr />

      {renderPage(currentPage)}
    </React.Fragment>
  );
};
