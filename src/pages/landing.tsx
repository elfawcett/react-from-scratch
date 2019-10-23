import React from 'react';
import { useSelector } from 'react-redux';

import { selectLastViewedJoke } from '../store/system/selectors';

const LandingPage: React.FC = () => {
  const lastViewedJoke = useSelector(selectLastViewedJoke);

  return (
    <div className="LandingPage">
      <h2>Landing Page</h2>

      <h3>Your Last Viewed Joke</h3>
      <code>{lastViewedJoke}</code>

      <p>this page probably has a welcome message</p>
      <p>show "joke of the day"</p>
      <p>show "most popular (most favorited) jokes"</p>

      <code>
        dispatch(GET_JOKE_OF_THE_DAY)
        <br />
        dispatch(GET_POPULAR_JOKES)
      </code>
    </div>
  );
};

export { LandingPage };
