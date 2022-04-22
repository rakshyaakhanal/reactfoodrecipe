import React, { useState } from 'react';
import Axios from 'axios';
import RecipeTile from './RecipeTile';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState('vegan');

  const YOUR_APP_ID = '82e453da';
  const YOUR_APP_KEY = '3bb5d1a3b992f408b9003effd74c9c22';

  // const url='https://api.edamam.com/search?q=chicken&app_id=98ae43c9&app_key=5dadbe216d63560310fe00f37bd98dec&from=0&to=3&calories=591-722&health=alcohol-free';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipes = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className='app'>
      <h1 onClick={getRecipes}>Food Recipe Plaza🍔</h1>
      <form className='searchForm' onSubmit={onSubmit}>
        <input type='text' placeholder='Enter Ingredients' className='input' value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <input type='submit' className='submit' value='Search' />

        <select className='healthlabels'>
          <option value='vegan' onClick={() => setHealthLabel('vegan')}>Vegan</option>
          <option value='vegetarian' onClick={() => setHealthLabel('vegetarian')}>Vegetarian</option>
          <option value='palao' onClick={() => setHealthLabel('palao')}>Palao</option>
          <option value='dairy-free' onClick={() => setHealthLabel('dairy-free')}>Dairy-free</option>
          <option value='glutten-free' onClick={() => setHealthLabel('glutten-free')}>Glutten-free</option>
          <option value='wheat-free' onClick={() => setHealthLabel('wheat-free')}>Wheat-free</option>
          <option value='low-sugar' onClick={() => setHealthLabel('low-sugar')}>Low-sugar</option>
          <option value='egg-free' onClick={() => setHealthLabel('egg-free')}>Egg-free</option>
          <option value='peanut-free' onClick={() => setHealthLabel('peanut-free')}>Peanut-free</option>
          <option value='tree-nut-free' onClick={() => setHealthLabel('tree-nut-free')}>Tree-nut-free</option>
          <option value='soy-free' onClick={() => setHealthLabel('soy-free')}>Soy-free</option>
          <option value='fish-free' onClick={() => setHealthLabel('fish-free')}>Fish-free</option>
          <option value='shellfish-free' onClick={() => setHealthLabel('shellfish-free')}>Shellfish-free</option>
        </select>
      </form>

      <div className='recipes'>
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
