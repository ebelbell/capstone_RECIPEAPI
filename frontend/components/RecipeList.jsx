import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Fetch recipes from the backend
        axios.get('http://localhost:3000/recipe')
          .then(response => setRecipes(response.data))
          .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div>
            <h1>Recipe List</h1>
            <ul>
                {/* iterate over each recipe object and transform each recipe object into a list item */}
                {recipes.map(recipe => (
                    <li key={recipe._id}>{recipe.recipeTitle}</li> // create alist item for each recipe by their id
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
