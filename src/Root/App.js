import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { HomePage } from '../Home/HomePage';
import { FavoritePage } from '../Favorite/FavoritePage';
import './App.css';
import { SpeedDialComponent } from '../Component/SpeedDialComponent';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage/>}/>
					<Route path='/favorites' element={<FavoritePage/>}/>
				</Routes>
			<SpeedDialComponent/>
			</BrowserRouter>
		</div>
	);
}

export default App;
