// import { useState } from "react"
// import ProfileData from "../data/profile";
// import Navlinks from "../data/navlink";
// import {Link} from "react-scroll"
// import { BiMenu } from "react-icons/bi";
// import { MdClose } from "react-icons/md";
// const Navbar = ()=>{
//     const[isMenuOpen,setIsMenuOpen]=useState(false);

//     const toggelMenu=()=>{
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return(
//         <header className="text-white body-font fixed inset-x-0 z-50  bg-slate-900" >
//             <div className="mx-auto flex flex-row py-2 px-5 justify-between items-center lg:justify-around lg:py-3">
//                 <Link 
//                 data-aos="fade-right"
//                 data-aos-duration="1000"
//                 data-aos-once="false"
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 duration={750}
//                 to="home"
//                 className="flex justify-center items-center w-fit"
//                 >
//                 <img className="w-16 h-12 cursor-pointer ml-3 scale-125 lg:scale-150" src={ProfileData.logo} alt={ProfileData.name} />
//                 </Link>
//                 <nav
//                 data-aos="zoom-in"
//                 data-aos-duration="1000"
//                 data-aos-once="false"
//                 className="hidden md:mx-auto lg:flex flex-wrap items-center text-lg justify-center gap-12"
//                 >
//                     {Navlinks.map((item)=>{
//                          return(
//                             <Link
//                             key={item.title}
//                             spy={true}
//                             smooth={true}
//                             offset={-100}
//                             duration={750}
//                             to={item.link}
//                             className="cursor-pointer hover:text-orange-500 text-white"
//                             >
//                             {item.title}
//                             </Link>
//                         );
//                     })}
//                 </nav>
//                 <div
//                 data-aos="fade-left"
//                 data-aos-duration="1000"
//                 data-aos-once="false"
//                 className="lg:hidden mr-2"
//                 >
//                     <button onClick={toggelMenu} className="p-2 text-white" >
//                         {isMenuOpen?(<MdClose className="h-6 w-6"/>):(<BiMenu className="w-6 h-6"/>)}
//                     </button>
//                 </div>

//                 <button
//                 data-aos="fade-left"
//                 data-aos-duration="1000"
//                 data-aos-once="false"
//                 className="hidden lg:flex items-center w-fit leading-none"
//                 >
//                     <a 
//                     href={ProfileData.resume}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-white bg-orange-600 rounded-lg py-3 px-10 font-medium text-lg"
//                     >Resume</a>
//                 </button>

//                 {isMenuOpen && (
//                     <div className="min-h-[calc(100vh-4rem)] lg:hidden absolute inset-x-0 top-16 z-50 transition-all duration-1000 ease-in">
//                         <div 
//                         data-aos="zoom-in-down"
//                         data-aos-duration="500"
//                         data-aos-once="true"
//                         className="rounded-b-lg bg-slate-900 shadow-lg px-5 pb-4"
//                         >
//                             <nav
//                             className="flex flex-col gap-y-7 text-xl items-center"
//                             >
//                                 {Navlinks.map((item)=>{
//                                     return(
//                                         <Link
//                                         key={item.title}
//                                         onClick={()=>setIsMenuOpen(false)}
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-100}
//                                         duration={750}
//                                         to={item.link}
//                                         className="cursor-pointer hover:text-orange-500"
//                                         >
//                                         {item.title}
//                                         </Link>
//                                     )
//                                 })}

//                                 <a 
//                                 href={ProfileData.resume}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="text-white bg-orange-600 rounded-lg py-2.5 px-10 font-medium text-lg w-fit mx-auto"
//                                 >Resume</a>
//                             </nav>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     )
// }
// export default Navbar;

import { useState } from "react"
import ProfileData from "../data/profile";
import Navlinks from "../data/navlink";
import {Link} from "react-scroll"
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
const Navbar = ()=>{
    const[isMenuOpen,setIsMenuOpen]=useState(false);

    const toggelMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header className="text-white body-font fixed inset-x-0 z-50  bg-slate-900" >
            <div className="mx-auto flex flex-row py-2 px-5 justify-between items-center lg:justify-around lg:py-3">
                <Link 
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="false"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
                to="home"
                className="flex justify-center items-center w-fit"
                >
                <h1 className="text-3xl font-libre">Pradeep</h1>
                </Link>
                <nav
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="false"
                className="hidden md:mx-auto lg:flex flex-wrap items-center text-lg justify-center gap-12"
                >
                    {Navlinks.map((item)=>{
                         return(
                            <Link
                            key={item.title}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={750}
                            to={item.link}
                            className="cursor-pointer hover:text-orange-500 text-white"
                            >
                            {item.title}
                            </Link>
                        );
                    })}
                </nav>
                <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="false"
                className="lg:hidden mr-2"
                >
                    <button onClick={toggelMenu} className="p-2 text-white" >
                        {isMenuOpen?(<MdClose className="h-6 w-6"/>):(<BiMenu className="w-6 h-6"/>)}
                    </button>
                </div>

                <button
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="false"
                className="hidden lg:flex items-center w-fit leading-none"
                >
                    <a 
                    href={ProfileData.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white bg-orange-600 rounded-lg py-3 px-10 font-medium text-lg"
                    >Resume</a>
                </button>

                {isMenuOpen && (
                    <div className="min-h-[calc(100vh-4rem)] lg:hidden absolute inset-x-0 top-16 z-50 transition-all duration-1000 ease-in">
                        <div 
                        data-aos="zoom-in-down"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="rounded-b-lg bg-slate-900 shadow-lg px-5 pb-4"
                        >
                            <nav
                            className="flex flex-col gap-y-7 text-xl items-center"
                            >
                                {Navlinks.map((item)=>{
                                    return(
                                        <Link
                                        key={item.title}
                                        onClick={()=>setIsMenuOpen(false)}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={750}
                                        to={item.link}
                                        className="cursor-pointer hover:text-orange-500"
                                        >
                                        {item.title}
                                        </Link>
                                    )
                                })}

                                <a 
                                href={ProfileData.resume}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white bg-orange-600 rounded-lg py-2.5 px-10 font-medium text-lg w-fit mx-auto"
                                >Resume</a>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Navbar;