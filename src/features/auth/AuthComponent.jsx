import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";

const AuthComponent = () => {


    const dispatch = useDispatch();
    const isAuthenticated = useSelector( (state) => state.auth.isAuthenticated );
    const user = useSelector( (state) => state.auth.user );

    const handleLogin = () => {
        dispatch(login({ name: 'Jane Doe', email: 'jane@doe.com' }));
    }

    const handleLogout = () => {
        dispatch(logout());
    }


  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <p>Your email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  )
}
export default AuthComponent