import React, { useState } from 'react';

import { PAGES } from '../constants';
import { LandingPage } from '../pages/landing';
import { AllJokesPage } from '../pages/allJokes';
import { MyFavoritesPage } from '../pages/myFavorites';
import { RandomJokePage } from '../pages/randomJoke';
import { NotFoundPage } from '../pages/notFound';

const renderPage = (page: PAGES) => {
  switch (page) {
    case PAGES.LANDING:
      return <LandingPage />;
    case PAGES.ALLJOKES:
      return <AllJokesPage />;
    case PAGES.FAVORITEJOKES:
      return <MyFavoritesPage />;
    case PAGES.RANDOMJOKE:
      return <RandomJokePage />;
    default:
      return <NotFoundPage />;
  }
};

export const App = (config: any) => {
  const [currentPage, setCurrentPage] = useState(PAGES.LANDING);

  return (
    <React.Fragment>
      <h1>Chuck Norris Jokes</h1>
      <p>Select a page: </p>
      <select onChange={event => setCurrentPage(event.target.value as PAGES)}>
        <option value={PAGES.LANDING}>Landing</option>
        <option value={PAGES.ALLJOKES}>All Jokes</option>
        <option value={PAGES.FAVORITEJOKES}>My Favorites</option>
        <option value={PAGES.RANDOMJOKE}>Random Joke</option>
      </select>

      <hr />

      {renderPage(currentPage)}
    </React.Fragment>
  );
};
