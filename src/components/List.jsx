import { React } from 'react';
import Card from './Card';

const List = (props) => {
  const { recipes } = props;

  return (
    <ul>
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
};

export default List;
