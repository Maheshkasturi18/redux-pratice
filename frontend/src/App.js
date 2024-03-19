import { useState } from "react";
// import Pratice from './Pratice';
// import Pratice2 from './Pratice2';
// import Api from './Api';
import "./App.css";
import HeaderContainer from "./Containers/HeaderContainer";
import HomeContainer from "./Containers/HomeContainer";

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const handleOnSubmit = async (e) => {
  // 	e.preventDefault();
  // 	let result = await fetch(
  // 	'http://localhost:3000/register', {
  // 		method: "post",
  // 		body: JSON.stringify({ name, email }),
  // 		headers: {
  // 			'Content-Type': 'application/json'
  // 		}
  // 	})
  // 	result = await result.json();
  // 	console.warn(result);
  // 	if (result) {
  // 		alert("Data saved succesfully");
  // 		setEmail("");
  // 		setName("");
  // 	}
  // }
  return (
    <>
      {/* <h1>This is React WebApp </h1>
			<form action="">
				<input type="text" placeholder="name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} />
				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form> */}

      {/* <Pratice/>
			<Pratice2/> */}
      <HeaderContainer />
      <HomeContainer />
      {/* <Api/> */}
    </>
  );
}

export default App;
