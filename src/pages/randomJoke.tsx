import React from 'react';

const RandomJokePage = () => (
  <div className="RandomJokePage">
    <h2>Random Joke</h2>

    <p>
      this page gets one random joke, saves it in a list, lets you go back/forward/get new random
      joke and lets you favorite a joke
    </p>

    <code>dispatch(GET_RANDOM_JOKE)</code>
  </div>
);

export { RandomJokePage };
