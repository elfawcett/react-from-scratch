import React from 'react';

const LandingPage: React.FC<{}> = () => (
  <div className="LandingPage">
    <h2>Landing Page</h2>

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

export { LandingPage };
