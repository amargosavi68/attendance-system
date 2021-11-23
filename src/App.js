import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import MsLogin from './components/MsLogin';
import MsDashboard from "./components/MsDashboard";
import { initializeIcons } from '@fluentui/react';

initializeIcons();

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<MsDashboard />} />
					<Route path="/login" element={<MsLogin />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
