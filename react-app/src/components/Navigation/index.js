import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {

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
					<NavLink to='/'>Location and Hotels</NavLink>
				</span>
				<span>
					<NavLink to='/'>More Info</NavLink>
				</span>
				<span>
					<NavLink to='/'>Registry</NavLink>
				</span>
			</div>
			<div className='nav-right'>
				<div className='rsvp'>RSVP</div>
			</div>
		</div>
	);
}

export default Navigation;
