'use client';

import { destinations } from 'public/data/destinations';
import { useTimeout } from '@/hooks/use-timeout';
import DestinationCarousel from '@/components/home/destination-block/destination-carousel';
import BlockLoader from '@/components/ui/loader/block-loader';
import Section from '@/components/ui/section';

export default function PopularCategories() {
  const { state } = useTimeout();

  return (
    <>
    <div className='row-auto lg:container-fluid mt-12 pl-4 sm:pl-6 lg:mt-16 flex lg:justify-center overflow-scroll mb-2'>
    <button className="border-[1px] rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-500 hover:bg-gray-600 hover:text-gray-100 duration-300">Landmarks</button>
    <button className="border-[1px]  rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-500 hover:bg-gray-600 hover:text-gray-100 duration-300 ml-2">Museums</button>
    <button className="border-[1px]  rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 ml-2">Theme Parks</button>
    <button className="border-[1px]  rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 ml-2">Combos</button>
    <button className="border-[1px]  rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 ml-2">Zoo</button>
    <button className="border-[1px]  rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 ml-2">Adventure</button>
    <button className="border-[1px]  rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 ml-2">Water Parks</button>
    <button className="border-[1px]  rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-gray-100 duration-300 ml-2">Dinner Cruise</button>
    </div>
    </>
  );
}
