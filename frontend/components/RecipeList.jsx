import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    recipeTitle: '',
    ingredients: '',
    allergens: []
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('/api/recipes'); // Replace with your backend API endpoint
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };



  return (
    <div>
      <h1>Recipe App</h1>
      
    </div>
  );
}

export default RecipeApp;
