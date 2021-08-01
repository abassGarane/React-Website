import React from 'react';
import '../css/Analytics.css';
function Analytics() {
	return (
		<div className='analytics'>
			<div className='left'>
				<img src='./training.svg' alt='Training' />
			</div>
			<div className='right'>
				<h4>
					Get trained by the <br /> worlds best teachers
				</h4>
				<p>
					Here guiding and teaching some experienced and prolific bunch of
					teachers
				</p>
				<div className='comment'>
					<p>&#10004;&#65039; Get in touch</p>
					<p>&#10004;&#65039; Sharing Experiences</p>
				</div>
				<button type='submit'>Learn more</button>
			</div>
		</div>
	);
}

export default Analytics;
