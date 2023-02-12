import React from "react";
import NavMenu from "./NavMenu";

function Login() {
  return (
    <>
      <NavMenu />
      <div className="text-light m-3 w-50 mx-auto">
        <form>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="email or username"
          />
          <input
            type="password"
            className="form-control mt-3"
            placeholder="password"
          />
          <button className="btn btn-primary mt-3 w-100" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
