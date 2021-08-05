import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import axios from 'axios';

const User = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('In useEffect before http');
    axios.get('https://reqres.in/api/users').then(response => {
      setData(response.data.data);
    });
  }, []);
  return (
    <div>
      {data.length > 0 &&
        data.map((val, index) => {
          return <UserDetails key={index} userInfo={val} />;
        })}
    </div>
  );
};

export default User;
