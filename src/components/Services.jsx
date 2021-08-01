import React from 'react';
import { Create, Group, MenuBook } from '@material-ui/icons';
import '../css/Services.css';
function Servicee() {
	return (
		<div className='services'>
			<div className='service '>
				<div className='service__logo s1'>
					<MenuBook />
				</div>
				<h4>Get Certificate</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem
					maiores deserunt recusandae at sit?
				</p>
			</div>
			<div className='service '>
				<div className='service__logo s2'>
					<Group />
				</div>
				<h4>Get Certificate</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem
					maiores deserunt recusandae at sit?
				</p>
			</div>
			<div className='service '>
				<div className='service__logo s3'>
					<Create />
				</div>
				<h4>Get Certificate</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem
					maiores deserunt recusandae at sit?
				</p>
			</div>
		</div>
	);
}

export default Servicee;
