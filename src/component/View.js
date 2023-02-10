import React, { useEffect, useState } from "react";

function View() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("http://localhost:3001/getAllUsers")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.results);
        console.log(result.results);
      });
  }, []);
  const deleteUser = (id) => {
    let confirm = window.confirm("Are you sure want to delete this user?");
    if (confirm) {
      fetch(`http://localhost:3001/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          alert(result.message);
        });
    }
  };
  return (
    <div>
      <h2 className="text-center bg-dark text-light">Admin Dashboard</h2>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.hobby}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(item._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-info">Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default View;
