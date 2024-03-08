import React from 'react';
import { useData } from '../DataContext';
import { useTranslation } from 'react-i18next';
import axios from 'axios';


export const Home = () => {
  const { userData, loading } = useData();
  const { t } = useTranslation();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{t('Home Page')}</h2>
      <h3>{t('User Data')}:</h3>
      <ul>
        {userData.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
