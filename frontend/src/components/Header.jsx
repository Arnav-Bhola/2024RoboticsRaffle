import { useEffect, useState } from "react";
import axios from 'axios';

const Header = () => {
const [ticketsSold, setTicketsSold] = useState("") 
useEffect(() => {
  const sendRequest = async () => {
    axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTskbKwNeDFdZz_O3qhwTAfpvTdGIxb571uQ5wleV6H4BGY4h7tD-IEjhn-1fRC2XCHqGxRGOzb_x8j/pub?gid=0&single=true&output=csv')
    .then(response => {
      try {
      setTicketsSold(response.data.split("\n")[1].split(",")[2])}
      catch (e) {
        setTicketsSold(0)
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  sendRequest()
}, []) 

  return (
    <div className='flex items-center justify-center h-[91.5vh] flex-col mr-[15rem] ml-[15rem] overflow-hidden'>
      <h1 className='font-stencil text-9xl font-outline-2 text-blue-500 tracking-tight text-shadow'>
        ENFORCERS
      </h1>
      <div className='flex flex-col justify-center items-center mt-4'>
        <h2 className='text-blue-500 font-bold text-4xl font-opensans'>Robotics Raffle</h2>
        <h2 className='text-blue-500 font-bold text-4xl font-opensans'>2024&#45;2025</h2>
      </div>

      <div className='relative w-full rounded-xl pt-[0.1rem] pb-[0.1rem] bg-[#d9d9d9] mt-8'>
        a{" "}
        <div className='absolute left-0 top-0 h-full items-center progress w-[39%] flex justify-end pr-5 rounded-l-xl text-white-100'>
          <h1 className='z-10 font-opensans'>39%</h1>
        </div>
      </div>

      <div className='flex justify-between w-full mt-14 font-opensans'>
        <div className='flex flex-col w-[15rem] text-blue-500 items-center font-semibold text-2xl border-4 border-blue-500 rounded-xl pr-8 pl-8 pt-2 pb-2 text-nowrap'>
          <h3 className='text-3xl'>1401</h3>
          <h4>Tickets Sold</h4>
        </div>
        <div className='flex flex-col w-[15rem] text-blue-500 items-center font-semibold text-2xl border-4 border-blue-500 rounded-xl pr-8 pl-8 pt-2 pb-2 text-nowrap'>
          <h3 className='text-3xl'>$6000</h3>
          <h4>Sales Raised</h4>
        </div>
        <div className='flex flex-col w-[15rem] text-blue-500 items-center font-semibold text-2xl border-4 border-blue-500 rounded-xl pr-8 pl-8 pt-2 pb-2 text-nowrap'>
          <h3 className='text-3xl'>1000 Hrs</h3>
          <h4>Until Prize Pull</h4>
        </div>
      </div>
      <a className='bg-yellow-400 rounded-lg flex items-center justify-center text-center pr-12 pl-12 pt-2 pb-2 text-3xl font-bold font-opensans mt-10'>
        Buy a ticket!
      </a>
    </div>
  );
};

export default Header;
