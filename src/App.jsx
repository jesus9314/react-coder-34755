import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Producto from "./pages/Producto";
import { useState } from "react";
import Categoria from "./pages/Categoria";

const App = () => {
	const [modalProfile, setModalProfile] = useState("hidden");

	return (
		<BrowserRouter>
			<NavBar modalProfile={modalProfile} setModalProfile={setModalProfile}/>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/producto/:id" element={<Producto/>}/>
				<Route path="/categoria/:categoria" element={<Categoria />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
