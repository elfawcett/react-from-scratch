import React from 'react';
import { useDispatch } from 'react-redux';

import { setLastViewedJoke } from '../store/system/actions';

const RandomJokePage = () => {
  const dispatch = useDispatch();

  return (
    <div className="RandomJokePage">
      <h2>Random Joke</h2>

      <button onClick={() => dispatch(setLastViewedJoke(3))}>
        SET last viewed joke to joke id 3
      </button>

      <p>
        this page gets one random joke, saves it in a list, lets you go back/forward/get new random
        joke and lets you favorite a joke
      </p>

      <code>dispatch(GET_RANDOM_JOKE)</code>
    </div>
  );
};

export { RandomJokePage };
