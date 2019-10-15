import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getJokes } from '../store/jokes/actions';
import { selectJokes, selectJokesIsRequesting } from '../store/jokes/selectors';
import { selectShouldRefetchJokes } from '../store/system/selectors';

import { LoadingSpinner } from '../components/LoadingSpinner';
import { Paginator } from '../components/Paginator';
import { JokeCard } from '../components/JokeCard';

const AllJokesPage = () => {
  const dispatch = useDispatch();

  const shouldRefetchJokes = useSelector(selectShouldRefetchJokes);
  const isJokesRequesting = useSelector(selectJokesIsRequesting);
  const jokes = useSelector(selectJokes);

  useEffect(() => {
    /* If system state says we should refetch, dispatch a fetch */
    if (shouldRefetchJokes) {
      dispatch(getJokes());
    }
  }, [shouldRefetchJokes]);

  return (
    <div className="AllJokesPage">
      <h2>All Jokes</h2>
      {isJokesRequesting ? (
        <LoadingSpinner />
      ) : jokes.length ? (
        <Paginator items={jokes}>
          {({ activeItems }) => (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {activeItems.map(joke => (
                <JokeCard key={joke.id} joke={joke} />
              ))}
            </div>
          )}
        </Paginator>
      ) : (
        <h4>No jokes were found.</h4>
      )}
    </div>
  );
};

export { AllJokesPage };
