import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Links, useNavigate } from "react-router";

const ForgetPassword = () => {
  const { forgetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    forgetPassword(email)
      .then(() => {
        alert("A reset link has been sent to your mail");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Reset your Password
        </h2>
        <form onSubmit={handleForgetPassword} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Reset Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Send Reset Link
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
