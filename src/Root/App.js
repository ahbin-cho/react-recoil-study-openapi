import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import './App.css';

function App() {
	const [bottomNavi, setBottomNavi] = useState('search');

	return (
		<div className="App">
			<div>
				<InputBase
					// sx={{ ml: 1, flex: 1 }}
					placeholder="Search Google Maps"
					className="searchInput"
				/>
				<IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
					<SearchIcon />
				</IconButton>
			</div>
			<Container>
				<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
			</Container>
			<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
				<BottomNavigation
					showLabels
					value={bottomNavi}
					onChange={(event, newValue) => {
						console.log(newValue);
						setBottomNavi(newValue);
					}}>
					<BottomNavigationAction value="search" label="검색" icon={<SearchIcon />} />
					<BottomNavigationAction
						value="favorites"
						label="즐겨찾기"
						icon={<FavoriteIcon />}
					/>
				</BottomNavigation>
			</Paper>
		</div>
	);
}

export default App;
