import { useState } from "react";
import Container from "../components/Container/Container";

const Home = () => {
	const [modalProfile, setModalProfile] = useState("hidden");
	const [show, setShow] = useState("hidden");
	const closeAll = () => {
		if (modalProfile === "") {
			setModalProfile("hidden");
		}
		if (show === "") {
			setShow("hidden");
		}
	};
	return (
		<main onClick={() => closeAll()}>
			<Container show={show} setShow={setShow} />
		</main>
	);
};

export default Home;
