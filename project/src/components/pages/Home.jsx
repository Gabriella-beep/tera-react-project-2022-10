import React from "react";
import logo from "../../images/logo.svg";

export default function Home() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => console.log("userEffect"), []);

  const handleUserChange = () => console.log
  ("onChange");

  const handleConfirmClick = () => console.log("onClick");


  console.log("antes do return");

  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select onChange={ handleUserChange}  className="home__select-users">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
      <button onClick={ handleConfirmClick} className="button-primary">Entrar</button>
    </div>
  );
}
