import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const history = useHistory()

	const registry = () => {
		window.alert("link to your registry here")
	}

	return (
		<div id='nav-menu'>
			<div className='nav-left'>
				<span>
					<NavLink exact to="/">Home</NavLink>
				</span>
				<span>
					<NavLink to='/story'>Our Story</NavLink>
				</span>
				<span>
					<NavLink to='/location'>Location and Hotels</NavLink>
				</span>
				<span>
					<NavLink to='/photos'>Photos</NavLink>
				</span>
				<span>
					<div onClick={() => registry()}>Registry</div>
				</span>
			</div>
			<div className='nav-right'>
				<div className='rsvp' onClick={() => history.push('/rsvp') }>RSVP</div>
			</div>
		</div>
	);
}

export default Navigation;
