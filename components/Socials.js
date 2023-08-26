import Link from "next/link";

import {RiInstagramLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link
    href={'https://github.com/LorenzoRonconi00?tab=repositories'}
    className='hover:text-accent transition-all duration-300'
    >
      <RiGithubLine />
    </Link>
    <Link
    href={'https://www.instagram.com/lorenzo.ronconi/?next=%2F'}
    className='hover:text-accent transition-all duration-300'
    >
      <RiInstagramLine />
    </Link>
    <Link
    href={'https://www.linkedin.com/in/lorenzo-ronconi-74606a1a1/'}
    className='hover:text-accent transition-all duration-300'
    >
      <RiLinkedinLine />
    </Link>
  </div>;
};

export default Socials;
