import { NavLink } from "react-router-dom";
import { navItems } from "../utility/datas";
import BurgerNav from "./BurgerNav";
import { useState } from "react";
import ScrollLink from "./ScrollLink";

function Nav() {
    const [burgClicked, setBurgClicked] = useState(false);

    return (
        <div className="relative w-full flex flex-row justify-evenly items-center bg-gradient-to-r from-[rgb(0_0_0_/_0)] to-slate-400 shadow-sm shadow-slate-700
                        gap-52 sm:justify-around sm:!gap-[50%] sm:py-2 sm:z-[1] xmd:gap-0">
            <img src="./img/gj-logo.webp" alt="GJ logo" className="w-14 h-[35.897px] relative" />
            
            <nav className={`relative flex flex-row gap-5 md:gap-0
                            ${ burgClicked ? `sm:absolute sm:!flex sm:flex-col sm:gap-0 sm:top-[100%] sm:left-[calc(91%-168px)] sm:items-end sm:z-[2]  sm:scale-100 sm:transition-transform sm:duration-500` 
                                            :
                                             `sm:absolute sm:!flex sm:flex-col sm:gap-0 sm:top-[100%] sm:left-[calc(91%-168px)] sm:items-end sm:translate-x-[15vw] sm:-translate-y-[60%] sm:scale-0 sm:transition-transform sm:duration-500` }`}>
                {
                    navItems.map((nav) => {                        
                            if (nav.name !== "Kapcsolat") {
                                return <NavLink key={ nav.href } to={ nav.href } style={({ isActive }) => { return isActive ? { color: 'white' } : {} }}
                                        className={`relative uppercase p-5 font-bold
                                                    after:content-[''] after:absolute after:w-[calc(100%-2.5rem)] after:scale-x-0 after:transition-transform after:duration-500 after:h-[2px] after:bg-white after:top-[80%]
                                                    after:left-[1.25rem]  hover:after:block after:origin-left after:hover:origin-right hover:after:scale-x-100
                                                    before:content-[''] before:absolute before:top-[20%] before:left-[1.25rem] before:w-[calc(100%-2.5rem)] before:transition-transform
                                                    before:duration-500 before:h-[2px] before:bg-white before:scale-x-0 before:origin-right before:hover:origin-left hover:before:scale-x-100`}
                                    >{nav.name}</NavLink>
                            }
                            else {
                                return <ScrollLink key={ nav.href } to={ nav.href } scrollInfo={ {behavior: "smooth", block: "start"} }
                                        className={`relative uppercase p-5 font-bold
                                                    after:content-[''] after:absolute after:w-[calc(100%-2.5rem)] after:scale-x-0 after:transition-transform after:duration-500 after:h-[2px] after:bg-white after:top-[80%]
                                                    after:left-[1.25rem]  hover:after:block after:origin-left after:hover:origin-right hover:after:scale-x-100
                                                    before:content-[''] before:absolute before:top-[20%] before:left-[1.25rem] before:w-[calc(100%-2.5rem)] before:transition-transform
                                                    before:duration-500 before:h-[2px] before:bg-white before:scale-x-0 before:origin-right before:hover:origin-left hover:before:scale-x-100`}
                                 >{nav.name}</ScrollLink>
                            }
                    })
                }
            </nav>

            <BurgerNav burgNavClicked={ burgClicked } setBurgNavClicked={ setBurgClicked } />
        </div>
    );
}

export default Nav;