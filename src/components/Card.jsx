import { React, useEffect, useState } from 'react';

import { getRecipe } from '../utils/services';

const Card = (props) => {
  const { recipe } = props;
  const { title, id, image } = recipe;
  const [isVegan, setIsVegan] = useState(false);
  const [sourceUrl, setSourceUrl] = useState('');

  useEffect(() => {
    const getRecipeInfo = async () => {
      const info = await getRecipe(id);
      setIsVegan(info.vegan);
      setSourceUrl(info.sourceUrl);
    };
    getRecipeInfo();
  }, [id]);

  const handleClick = () => {
    window.location = sourceUrl;
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt="cooked recipe" />
      <p className="title">{title}</p>
      {isVegan && <p className="vegan">Vegan</p>}
    </div>
  );
};

export default Card;
