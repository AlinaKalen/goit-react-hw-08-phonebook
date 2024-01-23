import { useAuth } from '../../components/UseAut/UseAut';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LoggedNav/LoggedNav';
import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
      <h1 className={css.AppHeader}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </h1>
  );
};

export default AppBar;