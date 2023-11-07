/**
 * It creates a burger nav 'X' icon
 * 
 * @param burgNavClicked A boolean state from the parent
 * @param setBurgClicked A state from the parent to set the state
 * 
 * @returns burger 'X' element
 */
function BurgerNav({ burgNavClicked, setBurgNavClicked }) {
    const handleClick = () => {
        setBurgNavClicked(!burgNavClicked);        
    }

    return (
        <>
            <label className="relative hidden w-10 h-10 cursor-pointer select-none sm:block z-[1]">
                <button aria-label="Burger menu" onClick={ handleClick } className="absolute h-0 w-0 opacity-0 cursor-pointer" />

                <div className="relative flex flex-col justify-center items-center gap-y-2 top-1/2 -translate-y-[50%]">
                    <span className={`relative w-8 h-[2.5px] bg-black transition-transform duration-500 shadow-[0px_0px_5px_0px_rgba(0,0,0,.7)] ${ burgNavClicked ? 'translate-y-[calc(.5rem+2.5px)] rotate-[405deg]' : '' }`} />
                    <span className={`relative w-6 h-[2.5px] ml-2 bg-black transition-transform duration-500 shadow-[0px_0px_5px_0px_rgba(0,0,0,.7)] ${ burgNavClicked ? '-translate-x-[.22rem] rotate-[405deg]' : '' }`} />
                    <span className={`relative w-8 h-[2.5px] bg-black transition-transform duration-500 shadow-[0px_0px_5px_0px_rgba(0,0,0,.7)] ${ burgNavClicked ? '-translate-y-[calc(.5rem+2.5px)] -rotate-[405deg]' : '' }`} />
                </div>
               
            </label>

            <span className={`absolute top-[50%] left-[88%] -translate-x-[50%] -translate-y-[50%] bg-slate-500 bg-opacity-50
                                backdrop-blur-[8px] w-0 h-0 rounded-full transition-[width,height] duration-200 z-[-1]
                                ${ burgNavClicked ? 'w-[45rem] h-[45rem]' : '' }`} /> 
        </>
    );
}

export default BurgerNav;