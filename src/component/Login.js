import React from "react";
import Footer from "./Footer";
import NavMenu from "./NavMenu";

function Login() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="text-light w-50 mx-auto" style={{ marginTop: "10vh" }}>
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
      </div>
    </>
  );
}

export default Login;
