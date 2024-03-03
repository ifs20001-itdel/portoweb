import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link 
        href={'/work'} 
        className= 'realtive w-[80px] h-[80px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image
          src={'/rounded-text.png'}
          width={100}
          height={100}
          alt=""
          className='animate-spin-slow w-full h-full max-w-[65px] max-h-[65px]'
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
