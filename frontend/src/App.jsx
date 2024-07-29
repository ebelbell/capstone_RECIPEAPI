//imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element = {
              <RecipeList />
            } />
        </Routes>
    </Router>
);

export default App;