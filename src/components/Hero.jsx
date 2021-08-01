import React from 'react';
import '../css/Hero.css';
function Hero() {
	return (
		<div className='hero'>
			<div className='hero__left'>
				<h1>
					An Exellence <br /> Center for Education
				</h1>
				<p className='desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
					aspernatur nobis veritatis in.
				</p>
				<div className='subscribe'>
					<input type='text' placeholder='Enter your Email' />
					<button type='submit'>Get Started</button>
				</div>
			</div>
			<div className='hero__right'>
				<img src='hero5.svg' alt='Woman Checking a tablet' />
			</div>
		</div>
	);
}

export default Hero;
