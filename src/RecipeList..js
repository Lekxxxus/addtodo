import React from "react";

const RecipeList = (recipe) => {
  return (
    <ul>
      {recipe.map((recipe) => (
        <li>{recipe.title}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
