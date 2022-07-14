import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import './App.css';

function App() {
	const [value, setValue] = useState('search');
	return (
		<div className="App">
			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						console.log(newValue);
						setValue(newValue);
					}}>
					<BottomNavigationAction value="search" label="Search" icon={<SearchIcon />} />
					<BottomNavigationAction
						value="favorites"
						label="Favorites"
						icon={<FavoriteIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</div>
	);
}

export default App;
