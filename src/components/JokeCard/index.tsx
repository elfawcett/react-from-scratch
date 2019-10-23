import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToFavorites, removeFromFavorites } from '../../store/favorites/actions';
import { selectFavorites } from '../../store/favorites/selectors';

import './JokeCard.css';

import { IJoke } from '../../types';

type TJokeCardProps = {
  key: number;
  joke: IJoke;
};

const JokeCard = ({ joke: { id, joke, categories } }: TJokeCardProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  return (
    <div className="JokeCard">
      <div className="header">
        {isFavorite(favorites, id) ? (
          <button className="remove" onClick={() => dispatch(removeFromFavorites(id))}>
            Remove from Favorites
          </button>
        ) : (
          <button className="add" onClick={() => dispatch(addToFavorites(id))}>
            Add to Favorites
          </button>
        )}
      </div>
      <div className="body">{joke}</div>
      <div className="footer">
        <span>Joke ID: {id}</span>

        {categories.length ? (
          <div className="categories">
            {categories.map((category, index) => (
              <button key={index} disabled>
                {category}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );

  function isFavorite(items: number[], jokeId: number) {
    return items.indexOf(jokeId) > -1;
  }
};

export { JokeCard };
