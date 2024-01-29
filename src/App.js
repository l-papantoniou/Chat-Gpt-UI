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
import {AuthProvider} from './shared/AuthContext';
import ProtectedRoute from "./routes/ProtectedRoute";
import HotelCompaniesPage from "./containers/HotelCompaniesPage";
import EditHotelPage from "./containers/EditHotelPage";
import AIContentCreationPage from "./containers/AIContentCreationPage";

const App = () => (
    <AuthProvider>
        <ThemeProvider>
            <Router>
                <AppContainer>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<SignUpPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>

                        <Route element={<ProtectedRoute/>}>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/add-hospitality-venue" element={<InputHotelPage/>}/>
                            <Route path="/settings" element={<SettingsPage/>}/>
                            <Route path="/hospitality-venues" element={<HotelCompaniesPage/>}/>
                            <Route path="/edit-hospitality-venue/:hotelId" element={<EditHotelPage/>}/>
                            <Route path="/ai-content-creation" element={<AIContentCreationPage/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Route>
                    </Routes>
                </AppContainer>
            </Router>
        </ThemeProvider>
    </AuthProvider>
);


export default App;
