import React from 'react';
import tv from '../img/tv.svg';

const Sidebar = () => {
	return (
		<div className="flex flex-col gap-8 w-[246px] p-8 pl-0 pr-0 border rounded-r-[45px] border-[#0000004D]">
		    <div className="flex justify-start items-center gap-4 p-4 pt-4 pb-4">
			    <img src={tv} alt="icon"/>
			    <h1 className="text-2xl font-black text-[#333333]">MobieBox</h1>
		    </div>
			<div className=" flex flex-col text-lg font-poppins font-semibold text-[#666666] gap-6 ">
				<div className="flex justify-start items-center gap-4 p-8 pt-4 pb-4">
					<i className="fa-solid fa-house"></i>
					<p>Home</p>
				</div>
				<div className="flex justify-start items-center gap-4 bg-[#BE123C1A] border-r-8 border-[#BE123C] p-8 pt-4 pb-4">
					<i className="fa fa-video-camera" aria-hidden="true"></i>
					<p>Movies</p>
				</div >
				<div className="flex justify-start items-center gap-4 p-8 pt-4 pb-4">
					<i className="fa-solid fa-tv"></i>
					<p>TV Series</p>
				</div>
				<div className="flex justify-start items-center gap-4 p-8 pt-4 pb-4">
					<i className="fa-solid fa-calendar-days"></i>
					<p>Upcoming</p>
				</div>
			</div>
			<div className="flex flex-col gap-4 bg-[#F8E7EB66] p-4 ml-6 rounded-2xl w-[170px] min-h-[210px] pt-8 pb-8">
				<p className="text-base font-poppins font-semibold text-[#333333CC]">Play movie quizes and earn free tickets</p>
				<p className="text-xs font-poppins font-medium text-[#666666]">50k people are playing now</p>
				<button className="bg-[#BE123C33] text-[#BE123C] text-xs font-medium rounded-[30px] font-poppins w-[112px] h-[30px]">Start playing</button>
			</div>
			<div className="flex justify-start items-center gap-4 p-8 pt-4 pb-4">
				<i className="fas fa-sign-out-alt"></i>
				<p>Log out</p>
			</div>
		</div>
	)
}

export default Sidebar