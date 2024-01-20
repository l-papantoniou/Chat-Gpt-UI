import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import NavigationBar from './components/NavigationBar';

const App = () => (
    <Router>
        <NavigationBar/>
        <Routes>

            <Route path="/login" element={<LoginPage/>}/>
            {/* Add more routes here */}
        </Routes>
    </Router>
);

export default App;
