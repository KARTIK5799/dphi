import { AppBar, Toolbar } from '@mui/material';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <AppBar position="relative" sx={{ backgroundColor: '#fff' }}>
      <Toolbar>
        <img src={Logo} alt="Logo" style={{ height: '40px' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
