import { NavLink } from "react-router-dom";
import { navItems } from "../utility/datas";
import BurgerNav from "./BurgerNav";
import { useState } from "react";
import ScrollLink from "./ScrollLink";

const BURGERSTYLE = "md:absolute md:!flex md:flex-col md:gap-0 md:top-[100%] md:left-[calc(91%-168px)] md:items-end md:z-[2]";
const MENU_ITEM_STYLE = `after:content-[''] after:absolute after:w-[calc(100%-2.5rem)] after:scale-x-0 after:transition-transform after:duration-500 after:h-[2px] after:bg-white after:top-[80%]
                        after:left-[1.25rem]  hover:after:block after:origin-left after:hover:origin-right hover:after:scale-x-100
                        before:content-[''] before:absolute before:top-[20%] before:left-[1.25rem] before:w-[calc(100%-2.5rem)] before:transition-transform
                        before:duration-500 before:h-[2px] before:bg-white before:scale-x-0 before:origin-right before:hover:origin-left hover:before:scale-x-100`;

function Nav() {
    const [burgClicked, setBurgClicked] = useState(false);    

    const handleNavItem = () => {
        if (burgClicked){
            setBurgClicked(false);
        }
    }

    return (
        <div className="relative w-full flex flex-row justify-evenly items-center bg-gradient-to-r from-[rgb(0_0_0_/_0)] to-slate-400 shadow-sm shadow-slate-700
                        gap-52 lg:gap-20 md:justify-around md:!gap-[50%] md:py-2 md:z-[1] xmd:gap-0">
            <img src="./img/gj-logo.webp" alt="GJ logo" className="w-14 h-[35.897px] relative" />
            
            <nav className={`relative flex flex-row gap-5 md:gap-0
                            ${ burgClicked ? `${ BURGERSTYLE } md:scale-100 md:transition-transform md:duration-500` 
                                            :
                                             `${ BURGERSTYLE } md:translate-x-[40%] md:-translate-y-[60%] md:scale-0 md:transition-transform md:duration-500` }`}>
                {
                    navItems.map((nav) => {                        
                            if (nav.name !== "Kapcsolat") {
                                return (
                                        <div key={ nav.href } className="relative group flex justify-center">
                                            <NavLink onClick={ handleNavItem } to={ nav.href } style={({ isActive }) => { return isActive ? { color: 'white' } : {} }}
                                                    className={`relative uppercase font-bold p-5 ${ MENU_ITEM_STYLE } `}
                                            >    
                                              {nav.name}                                                
                                            </NavLink>                                          
                                        </div>                                 
                                )
                            }
                            else {
                                return <ScrollLink onClick={ handleNavItem } key={ nav.href } to={ nav.href } scrollInfo={ {behavior: "smooth", block: "start"} }
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
