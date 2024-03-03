import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
      src={'/te.png'}
      alt="Avatar"
      width={400}
      height={300}
      className="translate-z-0 w-full h-full opacity-80"
      ></Image>
    </div>
  ) 
};

export default Avatar;
