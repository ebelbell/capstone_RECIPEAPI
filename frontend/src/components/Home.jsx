import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link here

const Home = () => {
  const [recipes, setRecipes] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Optional: for loading state
  const [error, setError] = useState(null); // Optional: for error handling

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('/api/recipe');
        console.log(response.data); // Log the response data
        setRecipes(response.data); // Ensure response.data is an array
      } catch (err) {
        console.error(err);
        setError('Failed to fetch recipes'); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/recipe/${recipe._id}/edit`}>{recipe.name}</Link> - {recipe.allergens.join(', ')}
          </li>
        ))}
      </ul>
      <Link to="/recipe/new">Create New Recipe</Link>
    </div>
  );
};

export default Home;
