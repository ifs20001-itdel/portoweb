import Link from "next/link";

import {RiWhatsappLine, RiInstagramLine, RiFacebookBoxLine, RiLinkedinBoxLine} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://wa.me/6289505811731'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>
      <Link href={'https://www.instagram.com/samueltobing20_/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/samuel.tobing.92505/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/samueltobing2002/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
    </div>
  )
};

export default Socials;
