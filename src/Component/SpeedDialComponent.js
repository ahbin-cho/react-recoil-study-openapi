import { Link } from 'react-router-dom';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './SpeedDialComponent.css';

const actions = [
	{
		icon: (
			<Link to="/">
				<HomeIcon />
			</Link>
		),
		name: 'Home',
	},
	{
		icon: (
			<Link to="/favorites">
				<FavoriteIcon />
			</Link>
		),
		name: 'Favorite',
	},
];

export function SpeedDialComponent() {
	return (
		<SpeedDial
			className="speed-dial-component"
			ariaLabel="SpeedDial basic example"
			sx={{ position: 'fixed', bottom: 16, right: 16 }}
			icon={<SpeedDialIcon />}>
			{actions.map((action) => (
				<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
			))}
		</SpeedDial>
	);
}
