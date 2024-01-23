import { useDispatch } from 'react-redux';
import { logOut } from '../redux/authentication/AutOperations';
import { useAuth } from '../UseAut/UseAut';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <div>
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <div></div>
      </div>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;