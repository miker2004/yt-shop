import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/');
    if (newValue === 1) navigate('/products');
    if (newValue === 2) navigate('/cart');
    if (newValue === 3) navigate('/account');
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)' 
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Products" icon={<StoreIcon />} />
      <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
};

export default Navigation;
