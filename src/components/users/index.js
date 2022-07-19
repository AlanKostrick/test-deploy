import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import axios from 'axios';
import style from './style.module.scss';
import { updateUserForm } from '../../redux/reducers/users/actions';

const Users = ({ users }) => {

    const [userState, setUserState] = useState({
        name: "",
        job: ""
    });
    const [validationErrors, setValidationErrors] = useState({});

    const userForm = useSelector(state => state.user.form);
    const { job } = userForm;

    const dispatch = useDispatch();


    const createNameHandler = (e) => {
        const value = e.target.value;
        setUserState({
            ...userState,
            [e.target.name]: value
        });
        dispatch(updateUserForm({ name: value }));
    };

    const createJobHandler = (e) => {
        const value = e.target.value;
        setUserState({
            ...userState,
            [e.target.name]: value
        });
        dispatch(updateUserForm({ job: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const foundErrors = validateForm();

        if (foundErrors !== null) {
            setValidationErrors(foundErrors);
            return;
        }

        const userData = {
            name: userState.name,
            job: job //could choose to grab from redux form 
        };

        axios.post('https://reqres.in/api/users', userData).then((response) => {
            console.log(response.status);
            console.log(response.data);
        });
    };


    const handleDelete = (userId) => {
        axios.delete(`https://reqres.in/api/users/${userId}`).then((response) => {
            console.log('Delete successful');
            console.log('Response', response);
        });
    }

    const validateForm = () => {
        if (userState.name === '') {
            return { name: "Name field is required" }
        }
        if (userState.job === '') {
            return { job: "Job field is required" }
        }

        return null;
    }


    return (
        <>
            <h1>Users content</h1>
            <div className={style.itemsContainer}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={userState.name}
                        onChange={createNameHandler}
                        placeholder='Enter name of user'
                    />
                    <p>{validationErrors.name}</p>
                    <input
                        type="text"
                        name="job"
                        value={userState.job}
                        onChange={createJobHandler}
                        placeholder='Enter job of user'
                    />
                    <p>{validationErrors.job}</p>
                    <button type="submit">Add User</button>
                </form>
                <div className={style.usersContainer}>
                    {users && users.data.map(user => (
                        <div className={style.userContainer} key={user.id}>
                            <img src={user.avatar} alt='' />
                            <NavLink to={`/users/${user.id}`}>
                                <p>{user.first_name + ' ' + user.last_name}<button onClick={() => handleDelete(user.id)}>x</button></p>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Users;