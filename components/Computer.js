import Image from "next/image";

const Computer = () => {
  return <div className="hidden xl:block absolute -left-12 bottom-36 mix-blender-color-dodge
  animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
    <Image 
    src={'/computer.png'}
    width={260}
    height={200}
    className="w-full h-full"
    alt=""
    />
  </div>;
};

export default Computer;
