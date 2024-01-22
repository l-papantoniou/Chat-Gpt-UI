import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignUpPage from "./containers/SignUpPage";
import AppContainer from "./containers/AppContainer";
import {InputHotelPage} from "./containers/InputHotelPage";

const App = () => (
    <Router>
        <AppContainer>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/>
                <Route path="/input" element={<InputHotelPage/>}/>
                {/* Add more routes here */}
            </Routes>
        </AppContainer>
    </Router>
);

export default App;
