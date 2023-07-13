import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUser } from "../store/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
        }))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp