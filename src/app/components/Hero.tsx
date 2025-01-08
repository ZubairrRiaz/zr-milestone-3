'use client'
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[95%] rounded-md flex flex-col justify-between sm:justify-evenly sm:h-[600px] h-[500px] my-5 bg-gradient-to-r from-[#4a4e69] to-[#9fc6d2] animate-bg'>
          <h1 className='text-white font-bold text-[33px] sm:text-5xl font-[cursive]'>
            <div className='ml-2'>Where Trends <br /> Are Born...</div>
          </h1>
          <Link href={'/'} className='bg-[#4a4e69] text-white font-bold text-lg rounded flex justify-center p-4'>
            <button>Explore Now</button>
          </Link>
          <h1 className='text-white font-bold text-[33px] sm:text-5xl font-[cursive] flex justify-end'>
            <div className='text-white'><Image className='sm:w-[250px] sm:h-[250px]' src={'/i2.png'} alt='shirt' height={180} width={180}/></div>
          </h1>
        </div>
      </div>
      <style>
        {`
          @keyframes shine {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-bg {
            background-size: 200% 200%;
            animation: shine 5s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default HeroSection;








