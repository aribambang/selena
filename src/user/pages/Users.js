import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'ari',
      image:
        'https://pbs.twimg.com/profile_images/1112089331034816512/1IDFQIJe_400x400.png',
      placesCount: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
