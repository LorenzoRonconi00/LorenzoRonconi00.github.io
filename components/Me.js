import Image from "next/image";

const Me = () => {
  return <div className="hidden xl:block absolute left-4 -bottom-10 mix-blender-color-dodge
  z-10 w-[200px] xl:w-[560px]">
    <Image 
    src={'/avatar.png'}
    width={560}
    height={500}
    className="w-full h-full"
    alt=""
    />
  </div>;
};

export default Me;
