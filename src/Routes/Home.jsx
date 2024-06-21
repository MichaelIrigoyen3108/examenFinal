import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Home = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <main className="">
            <h2>Home</h2>
            <div className='card-grid'>
                {users.map((user) => (
                    <Card
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                    />
                ))}
            </div>
        </main>
    );
}

export default Home;
