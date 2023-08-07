import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const history = useHistory()

	return (
		<div id='nav-menu'>
			<div className='nav-left'>
				<span>
					<NavLink exact to="/">Home</NavLink>
				</span>
				<span>
					<NavLink to='/'>Our Story</NavLink>
				</span>
				<span>
					<NavLink to='/location'>Location and Hotels</NavLink>
				</span>
				<span>
					<NavLink to='/'>More Info</NavLink>
				</span>
				<span>
					<NavLink to='/'>Registry</NavLink>
				</span>
			</div>
			<div className='nav-right'>
				<div className='rsvp' onClick={() => history.push('/rsvp') }>RSVP</div>
			</div>
		</div>
	);
}

export default Navigation;
