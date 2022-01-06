import { useNavigate } from "react-router-dom";
import { UserContext, useUser } from "../context/userContext";
import { useContext } from "react";

function Login() {
  const { user } = useContext(UserContext);

  const { signIn } = useUser();
  let nav = useNavigate();

  const login = () => {
    signIn();
    nav("/");
  };

  //   useEffect(() => {}, []);

  return (
    <div className="h-screen flex">
      <div className="border border-gray-300 h-[30rem] w-[26rem] m-auto rounded-md">
        <div className="text-center mt-40">
          <img src="logo.png" alt="googleLogo" className="h-7 mx-auto my-5" />
          <h1 className="text-2xl my-5">Sign In</h1>
          <button
            className="w-64 bg-[#4285F4] text-white rounded-md shadow-lg p-2 my-5"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
