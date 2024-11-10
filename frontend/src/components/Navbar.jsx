import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className='flex xl:justify-evenly md:justify-between justify-center gap-16 items-center pb-[0.75rem] pt-[0.75rem] xl:pr-[13rem] pr-[8rem] xl:pl-[13rem] pl-[8rem] h-[8.5vh] bg-blue-500 relative shadow-2xl'>
      <div className='min-w-[20%] h-full flex justify-start  text-start justify-self-start brightness-100 hover:brightness-150 cursor-pointer'>
        <a
          className='h-full w-fit justify-self-start'
          href='https://farmingtonrobotics.org/'
        >
          <img
            src={logo}
            className='h-full w-fit justify-self-start'
          />
        </a>
      </div>
      <div className='w-full items-center xl:justify-evenly justify-self-center text-white-200 text-[1.3rem] font-opensan0 no-wrap hidden xl:flex'>
        <a
          href='https://farmingtonrobotics.org/about'
          className='hover:-translate-y-[0.1rem] transition-all duration-100'
        >
          About
        </a>
        <a
          href='https://farmingtonrobotics.org/donate'
          className='hover:-translate-y-[0.1rem] transition-all duration-100'
        >
          Donate
        </a>
        <a
          href='https://farmingtonrobotics.org/sponsors'
          className='hover:-translate-y-[0.1rem] transition-all duration-100'
        >
          Sponsors
        </a>
        <a
          href='https://farmingtonrobotics.org/contact'
          className='hover:-translate-y-[0.1rem] transition-all duration-100'
        >
          Contact Us
        </a>
      </div>
      <div className='h-fit lg:w-[30%] w-fit items-center justify-end hidden md:flex'>
        <a
          className='inline-block align-top mt-0 mb-0 mr-[5px] ml-[5px] w-[32px] h-[32px] bg-cover hover:scale-[1.1] transition-all duration-200'
          id='twitter-link'
          href='https://twitter.com/team178'
        ></a>
        <a
          className='inline-block align-top mt-0 mb-0 mr-[5px] ml-[5px] w-[32px] h-[32px] bg-cover hover:scale-[1.1] transition-all duration-200'
          id='facebook-link'
          href='https://www.facebook.com/FRC178'
        ></a>
        <a
          className='inline-block align-top mt-0 mb-0 mr-[5px] ml-[5px] w-[32px] h-[32px] bg-cover hover:scale-[1.1] transition-all duration-200'
          id='instagram-link'
          href='https://www.instagram.com/team178/'
        ></a>
        <a
          className='inline-block align-top mt-0 mb-0 mr-[5px] ml-[5px] w-[32px] h-[32px] bg-cover hover:scale-[1.1] transition-all duration-200'
          id='youtube-link'
          href='http://www.youtube.com/user/Team178Enforcers'
        ></a>
        <a
          className='inline-block align-top mt-0 mb-0 mr-[5px] ml-[5px] w-[32px] h-[32px] bg-cover hover:scale-[1.1] transition-all duration-200'
          id='github-link'
          href='https://github.com/team178'
        ></a>
      </div>
    </div>
  );
};

export default Navbar;
