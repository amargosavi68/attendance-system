import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import MsLogin from './components/MsLogin';

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/login" element={<MsLogin />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
