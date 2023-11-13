import Marketing from "./Marketing";
import WorkProgress from "./WorkProgress";
import useTitleChange from "../utility/useTitleChange";

function Home() {
    useTitleChange("Geringer János - Lakásfelújítás Vecsésen, Budapesten és Pest megyében");

    return (
        <>
            <section className="relative py-32 bg-gradient-to-l from-white to-[50%] to-slate-200 md:bg-gradient-to-t">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 -translate-y-[80%] z-[10]">
                    <path fill="#e2e8f0" fillOpacity="1" d="M0,128L60,122.7C120,117,240,107,360,106.7C480,107,600,117,720,154.7C840,192,960,256,1080,256C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>

                <article>
                    <div className="flex flex-col items-start w-[600px] ml-40 mt-12 md:ml-6 md:w-11/12">
                        <h2 className="relative text-[2rem] mb-7 font-bold after:absolute after:top-full after:left-0 after:content-['']
                                        after:h-[6px] after:w-4/6 after:bg-yellow-800">Rólam</h2>
                        <p className="text-left text-[1.05rem] leading-7 2xsm:text-justify pr-5">
                            <span className="text-[1.6rem] mr-2 font-semibold">Geringer János</span>
                            vagyok, <span className="text-green-800 text-[1.2rem] font-bold">Szobafestő-mázoló</span> végzettséggel rendelkezem.
                            Tanulmányaim befejezése után nem sokkal volt szerencsém kimenni németországba dolgozni 2 évig, ahol mester szakemberek
                            mellett dolgozhattam fejlesztve a szaktudásomat illetve kitanultam a gipszkartonozást.
                            A megfelelő tudás megszerzésével haza jöttem, hogy itthon valósítsam meg magam így néhány év után elindítottam az egyéni vállalkozásomat,
                            mára már 6 éve vagyok egyéni vállalkozó, rengeteg ügyfelemnek segítettem megvalósítani az elképzeléseit.
                            Célom, hogy segítsek ügyfeleimnek otthonaikat és környezetüket szebbé és kényelmesebbé tenni.
                        </p>
                    </div>
                </article>
            </section>

            <WorkProgress />
            <Marketing />            
        </>
    );
}

export default Home;