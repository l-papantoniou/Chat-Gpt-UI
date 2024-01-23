import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignUpPage from "./containers/SignUpPage";
import AppContainer from "./containers/AppContainer";
import {InputHotelPage} from "./containers/InputHotelPage";
import {ThemeProvider} from "./containers/ThemeProvider";

const App = () => (
    <ThemeProvider>
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
    </ThemeProvider>
);

export default App;
