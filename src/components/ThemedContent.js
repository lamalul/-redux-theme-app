import React from 'react';
import { useSelector } from 'react-redux';

const ThemedContent = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <p>This is some themed content.</p>
    </div>
  );
};

export default ThemedContent;
