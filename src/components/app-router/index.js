import { Route, Routes } from 'react-router-dom';

//import ContactScreen from '../../pages/contact-screen';
import Error404Screen from '../../pages/error-404-screen';
import HomeScreen from '../../pages/home-screen';
import React from 'react';
import UserScreen from '../../pages/user-screen';
import UsersScreen from '../../pages/users-screen';

const ContactScreen = React.lazy(() => import('../../pages/contact-screen'));

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/contact" element={
                <React.Suspense fallback={<>...</>}>
                    <ContactScreen />
                </React.Suspense>
            } />
            <Route exact path="/users" element={<UsersScreen />} />
            <Route exact path='/users/:id' element={<UserScreen />} />
            <Route path='*' element={<Error404Screen />} />
        </Routes>
    );
}

export default AppRouter;