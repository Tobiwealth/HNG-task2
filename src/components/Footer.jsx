import React from 'react';

const Footer = () => {
	return (
		<div className="flex flex-col justify-around items-center gap-8 lg:gap-16 p-8 lg:p-12 lg:pb-20">
			<div className="flex justify-between items-center gap-12 text-2xl lg:text-4xl">
				<i className="fab fa-facebook-square"></i>
				<i className="fa-brands fa-instagram"></i>
				<i className="fa-brands fa-twitter"></i>
				<i className="fa-brands fa-youtube"></i>
			</div>
			<div className="flex flex-col md:flex-row justify-around items-center gap-8 text-sm md:text-base lg:text-xl font-bold text-[#111827]">
				<p>Conditions of Use</p>
				<p>Privacy & Policy</p>
				<p>Press Room</p>
			</div>
			<div className="text-base text-center lg:text-left lg:text-xl font-bold text-[#6B7280]">
				&copy; 2021 MovieBox by Adriana Eka Prayudha  
			</div>
		</div>
	)
}

export default Footer;