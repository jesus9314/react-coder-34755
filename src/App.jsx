import { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Container from "./components/Container/Container";

const App = () => {
	const [modalProfile, setModalProfile] = useState("hidden");
	const [ show, setShow] = useState('hidden');
	const closeAll = () => {
		if(modalProfile === ''){
			setModalProfile('hidden')
		}
		if(show === ''){
			setShow('hidden')
		}
	};
	return (
		<main onClick={() => closeAll()}>
			<NavBar modalProfile={modalProfile} setModalProfile={setModalProfile} />
			<Container show={show} setShow={setShow}/>
		</main>
	);
};

export default App;
