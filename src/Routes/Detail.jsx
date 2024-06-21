import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../Components/utils/FeaturedContext'; 

const Detail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`detail-container ${theme}`}>
      <h1>Detail Dentist id: {id}</h1>
      <img src="../../public/images/doctor.jpg" alt="Imagen de doct" style={{ width: '200px' }} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default Detail;
