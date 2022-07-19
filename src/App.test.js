import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react';

import HomeScreen from './pages/home-screen';
import { Provider as ReduxProvider } from 'react-redux';
import Users from './components/users';
import configureStore from "./redux/store";

test('renders home screen h2', () => {
    render(<HomeScreen />);
    const h2Elem = screen.getByText('Home');
    expect(h2Elem).toBeInTheDocument();
});

const Wrapper = ({ children }) => (
    <ReduxProvider store={configureStore()}>{children}</ReduxProvider>
);

test('users component renders an add user button', async () => {
    render(<Users />, { wrapper: Wrapper });
    const buttonElem = screen.getByText('Add User');
    expect(buttonElem).toBeInTheDocument();
});