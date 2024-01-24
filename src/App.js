import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignUpPage from "./containers/SignUpPage";
import AppContainer from "./containers/AppContainer";
import AboutPage from "./containers/AboutPage";
import {InputHotelPage} from "./containers/InputHotelPage";
import {ThemeProvider} from "./containers/ThemeProvider";
import NotFoundPage from "./containers/NotFoundPage";
import HomePage from "./containers/HomePage";
import SettingsPage from "./containers/SettingsPage";

const App = () => (
    <ThemeProvider>
        <Router>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/sign-up" element={<SignUpPage/>}/>
                    <Route path="/input" element={<InputHotelPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/settings" element={<SettingsPage/>}/>
                    <Route path="*" element={<NotFoundPage />} />
                    {/* Add more routes here */}
                </Routes>
            </AppContainer>
        </Router>
    </ThemeProvider>
);

export default App;
