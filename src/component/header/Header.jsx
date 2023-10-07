import { headerTexts } from "../utility/datas";
import Nav from "./Nav";
import TimedText from "./TimedText";

function Header() {
    return(
        <header className="relative overflow-hidden z-[1]">
            <Nav />
            <div className="relative bg-brushes bg-no-repeat bg-cover bg-fixed w-full h-[40rem] grayscale-[70%] z-[-1]"></div>
            <TimedText text={ headerTexts } interval={ 2000 } />
        </header>
    );
}

export default Header;