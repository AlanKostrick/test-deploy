import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import Users from '../../components/users';

const UsersScreen = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('https://reqres.in/api/users');
            console.log(result.data);
            setUsers(result.data);
        }

        if (users) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !users && fetchData();
        }, 1000);
        return () => clearTimeout(timer);

        // eslint-disable-next-line
    }, [users]);


    return (
        <div>
            <section>
                {loading ? <h3>Loading ...</h3> : <Users users={users} />}
            </section>
        </div>
    );
}

export default UsersScreen;