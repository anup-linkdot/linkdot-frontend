import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Category from '../components/Auth/Category'
import Username from '../components/Auth/Username'
import Intro from '../components/Auth/Intro';
import Loader from '../components/Auth/Loader';
import Email from '../components/Auth/Email';
import Dashboard from '../components/Dashboard/Dashboard';
// import PrivateRoute from '../routes/private-route';
// import ProtectedRoute from '../routes/protected-route';

const Routing = () => (
    <Router>
        <Routes>
            <Route
                path="/intro"
                element={
                    <Login />
                }
            >
                <Route path={''} element={<Intro />} />
                <Route path={'category'} element={<Category />} />
                <Route path={'username'} element={<Username />} />
                <Route path={'email'} element={<Email />} />
                <Route path={'welcome'} element={<Loader />} />
            </Route>
            <Route
                path='/dashboard'
                element={<Dashboard />}
            >

            </Route>
        </Routes>
    </Router>
);

export default Routing;
