import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';  
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <AppBar position="relative" sx={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="Logo" style={{ height: '40px' }} />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
