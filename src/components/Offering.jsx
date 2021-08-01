import React from 'react';
import '../css/Offering.css';
import { Save, Person, Sms } from '@material-ui/icons';
function Offering() {
	return (
		<div className='offering'>
			<div className='offering__unit'>
				<div className='circle c1'>
					<Save />
				</div>
				<h6>
					1000+ Free best <br />
					online cources
				</h6>
			</div>
			<div className='offering__unit'>
				<div className='circle c2'>
					<Person />
				</div>
				<h6>
					1000+ Free best <br />
					online cources
				</h6>
			</div>
			<div className='offering__unit'>
				<div className='circle c3'>
					<Sms />
				</div>
				<h6>
					1000+ Free best <br />
					online cources
				</h6>
			</div>
		</div>
	);
}

export default Offering;
