//Imports
import { useState, useEffect } from "react";
import axios from 'axios';

function addRecipe() {
    const [recipeName, setRecipes] = useState([]); 


useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:3000/recipe');
            setRecipes(response.data);
        } catch (err) {
        console.log('Cannot fetch recipes: ', err); 
        }
    };
    fetchRecipes();
}, []);

return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;