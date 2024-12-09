import Link from 'next/link';
import { PiListDashesLight } from "react-icons/pi";

const SideBar = () => {
  return (
    <section className="w-full lg:min-h-screen md:block hidden">
      <div className="border-r lg:min-h-screen text-gray-500 text-lg flex lg:flex-col items-start pt-10 lg:h-full">
        
   
        <div className="group flex items-center gap-4 w-full  pl-10 -ml-7 py-5 hover:bg-gray-200 hover:rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

          <Link href="/" className=" group-hover:text-blue-800 font-bold text-[17px]">
            Dashboard
          </Link>
        </div>

 
        <div className="group flex items-center gap-4 w-full  md:pl-10 md:-ml-7 py-5 bg-gray-200 rounded-full">
        <PiListDashesLight className="size-6 text-blue-800 " />
          <Link href="/" className=" text-blue-800 font-bold text-[17px]">
            Skill Test
          </Link>
        </div>

      
        <div className="group flex items-center gap-4 w-full  pl-10 -ml-7 py-5 hover:bg-gray-200 hover:rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-black group-hover:text-blue-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          <Link href="/" className=" group-hover:text-blue-800 font-bold text-[17px]">
            Internship
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
