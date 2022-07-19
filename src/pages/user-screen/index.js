import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Axios from 'axios';
import style from './style.module.scss';

const UserScreen = () => {

    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const result = await Axios(`https://reqres.in/api/users/${id}`);
            setUser(result.data);
        }

        if (user) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !user && fetchUserData();
        }, 250);
        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [user]);


    const { avatar, first_name, last_name } = !loading && user.data;

    return (
        <div>
            <h2>Welcome to the individual User Page</h2>
            <section className={style.userList}>
                {loading ? <h3>Loading ...</h3> :
                    <div>
                        <img src={avatar} alt='' />
                        <p>{first_name + ' ' + last_name}</p>
                    </div>
                }
            </section>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default UserScreen;