import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

const MyAccount = () => {
  const value2 = useContext(UserContext);
  const [user, setUser] = value2.user;

  const editFormInfo = (e) => {
    const editUser = {
      id: user.id,
      name: e.target.name.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setUser(editUser);
  };

  return (
    <>
    <h1 className="title">Profile information</h1>
    <form onSubmit={editFormInfo} action="#" className="form-group profile">
      <input
        type="text"
        placeholder="name"
        name="name"
        className="name"
        defaultValue={user.name}
      />
      <input
        type="text"
        placeholder="lastName"
        name="lastName"
        className="lastName"
        defaultValue={user.lastName}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        className="email"
        defaultValue={user.email}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="passwd"
        defaultValue={user.password}
      />
      <button href="#" type="submit" className="btn btn-primary profile">
        Edit 
      </button>
    </form>
    </>
  );
};

export default MyAccount;
