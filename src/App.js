import React from 'react';
import ThemedContent from './components/ThemedContent';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './redux/actions';
import Switch from 'react-switch';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#333333' : '#ffffff', minHeight: '100vh', transition: 'background-color 0.3s' }}>
      <h1>Redux Theme App</h1>
      <label style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          {theme === 'light' ? <Brightness7Icon style={{ fontSize: '2rem', color: '#FFD700' }} /> : <Brightness4Icon style={{ fontSize: '2rem', color: '#FFD700' }} />}
        </div>
        <Switch
          onChange={() => dispatch(toggleTheme())}
          checked={theme === 'dark'}
          onColor="#FFD700"
          offColor="#333333"
          onHandleColor="#ffffff"
          offHandleColor="#ffffff"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={40}
          width={70}
        />
        <div style={{ marginLeft: '10px' }}>
          {theme === 'light' ? <Brightness7Icon style={{ fontSize: '2rem', color: '#FFD700' }} /> : <Brightness4Icon style={{ fontSize: '2rem', color: '#FFD700' }} />}
        </div>
      </label>
      <ThemedContent />
    </div>
  );
};

export default App;
