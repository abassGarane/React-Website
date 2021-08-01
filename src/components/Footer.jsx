// eslint-disable-next-line
import React from 'react';
import { Facebook, Twitter, LinkedIn } from '@material-ui/icons';

function Footer() {
	return (
		<Footer>
			<div className='first'>
				<h4>Ashabito</h4>
				<p>
					We are giving our students the best and suitable services for building
					there bright future
				</p>
				<div className='social-media'>
					<div className='media'>
						<Facebook />
					</div>
					<div className='media'>
						<Twitter />
					</div>
					<div className='media'>
						<LinkedIn />
					</div>
				</div>
			</div>
			<div className='footer__lists'>
				<h1>Company</h1>
				<ul>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Careers</a>
					</li>
					<li>
						<a href='#'>Mobile</a>
					</li>
					<li>
						<a href='#'>How it Works</a>
					</li>
					<li>
						<a href='#'>Contact Us</a>
					</li>
				</ul>
			</div>
			<div className='footer__lists'>
				<h4>Support</h4>
				<ul>
					<li>
						<a href='#'>Support Career</a>
					</li>
					<li>
						<a href='#'>24h Service</a>
					</li>
					<li>
						<a href='#'>Quick Chat</a>
					</li>
					<li>
						<a href='#'>Blog</a>
					</li>
				</ul>
			</div>
			<div className='footer__lists'>
				<h4>Contact Us</h4>
				<ul>
					<li>
						<a href='#'>Our Office</a>
					</li>
					<li>
						<a href='#'>Our Center</a>
					</li>
					<li>
						<a href='#'>Press</a>
					</li>
					<li>
						<a href='#'>Resources</a>
					</li>
				</ul>
			</div>
		</Footer>
	);
}

export default Footer;
