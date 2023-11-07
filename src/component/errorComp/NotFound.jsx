import { NotFoundIcon } from "../utility/Icons";
import useTitleChange from "../utility/useTitleChange";

function NotFound() {
    useTitleChange("Az oldal nem található");

    return (
        <section className="relative flex justify-center items-center h-[40vh] bg-neutral-800">
            <p className="flex flex-col items-center text-[2rem] text-center text-gray-300 sm:text-[1.5rem]">
                <NotFoundIcon />
                <span className="text-[3rem] text-red-300 font-bold mr-5 sm:text-[3rem] sm:mr-2">404</span>
                <span className="text-[1.5rem] italic text-red-100 sm:text-[1.5rem]">{ window.location.href }</span>Az oldal nem található!
            </p>
        </section>
    );
}

export default NotFound;