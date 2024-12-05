import Image from "next/image";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SkillTest from "../components/SkillTest";

export default function Home() {
  return (
   <div className="flex flex-col min-h-screen overflow-hidden  bg-white ">
    <Header/>
    <main className="lg:grid lg:grid-cols-[1fr,4.5fr] grid-cols-none gap-2 md:h-full overflow-hidden">
    <SideBar/>
    <SkillTest/>
    </main>
   </div>
  );
}
