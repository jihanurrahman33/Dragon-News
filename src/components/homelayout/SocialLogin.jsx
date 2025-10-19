import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle, setUser } = use(AuthContext);
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div onClick={handleLoginWithGoogle}>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login With Google
        </button>
        <button className="btn btn-primary btn-outline w-full">
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
