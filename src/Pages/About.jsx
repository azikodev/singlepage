import React from 'react';
import { useData } from '../DataContext.jsx';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { userData, loading } = useData();
  const { t } = useTranslation();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{t('About Page')}</h2>
      <h3>{t('User Data')}:</h3>
      <ul>
        {userData.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
