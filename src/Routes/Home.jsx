import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';


const Home = () => {
    const [doct, setDoct] = useState([]);

    const getDoct = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setDoct(data);
    };

    useEffect(() => {
        getDoct();
    }, []);

    return (
        <main className="">
            <h2>Home</h2>
            <div className='card-grid'>
                {doct.map((user) => (
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
