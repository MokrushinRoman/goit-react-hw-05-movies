import PropTypes from 'prop-types';
import { useState } from 'react';
import { errorToast } from 'helpers';
import { Toaster } from 'react-hot-toast';

const SearchForm = ({ submit }) => {
  const [query, setQuery] = useState('');

  const onInputChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    const normalizedQuery = query.toLowerCase().trim();
    e.preventDefault();

    if (!normalizedQuery) {
      return errorToast('Enter some value before submit!');
    }

    submit(normalizedQuery);
    setQuery('');
  };

  return (
    <>
      <Toaster />
      <form onSubmit={onSubmit}>
        <label htmlFor="movies" className="visually-hidden">
          Search Movies
        </label>
        <input id="movies" type="text" value={query} onChange={onInputChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
