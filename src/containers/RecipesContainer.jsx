import { React, useState, useEffect } from 'react';

import List from '../components/List';
import { getRecipes, getURlParam, setURLParam } from '../utils/services';

const RecipesContainer = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchRecepies = async (searchTerm) => {
    const recipes = await getRecipes(searchTerm);
    setRecipes(recipes);
  };

  useEffect(() => {
    const param = getURlParam();
    if (param) {
      setSearchTerm(param);
      fetchRecepies(param);
    }
  }, []);

  const handleOnChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setURLParam(searchTerm);
      fetchRecepies(searchTerm);
    }
  };

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        value={searchTerm}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <List recipes={recipes} />
    </div>
  );
};

export default RecipesContainer;
