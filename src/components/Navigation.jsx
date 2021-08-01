import React from 'react';
import '../css/Navigation.css';
function Navigation() {
	return (
		<div className='nav'>
			<div className='nav__logo'>
				<p>Ashabito</p>
			</div>
			<div className='nav__main'>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Services</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Courses</a>
					</li>
					<li>
						<a href='#'>Contact Us</a>
					</li>
				</ul>
			</div>
			<div className='nav__register'>
				<button className='login' type='submit'>
					Login
				</button>
				<button className='signup' type='submit'>
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Navigation;
