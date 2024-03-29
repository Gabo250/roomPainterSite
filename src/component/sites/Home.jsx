import Marketing from "../home/Marketing";
import WorkProgress from "../home/WorkProgress";
import useMetaDataChange from "../hooks/useMetaDataChange";
import { metaDatas } from "../utility/datas";

const META = metaDatas.home;

function Home() {
  useMetaDataChange(META.description, META.title, window.location.href);

  return (
    <>
      <section className="relative bg-gradient-to-l from-white to-slate-200 to-[50%] py-32 md:bg-gradient-to-t">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute left-0 top-0 z-[10] -translate-y-[80%]"
        >
          <path
            fill="#e2e8f0"
            fillOpacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,106.7C480,107,600,117,720,154.7C840,192,960,256,1080,256C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <article>
          <div className="ml-40 mt-12 flex w-[600px] flex-col items-start md:ml-6 md:w-11/12">
            <h2
              className="relative mb-7 text-[2rem] font-bold after:absolute after:left-0 after:top-full after:h-[6px]
                            after:w-4/6 after:bg-yellow-800 after:content-['']"
            >
              Rólam
            </h2>
            <p className="pr-5 text-left text-[1.05rem] leading-7">
              <span className="mr-2 text-[1.6rem] font-semibold">
                Geringer János
              </span>
              vagyok,{" "}
              <span className="text-[1.2rem] font-bold text-green-800">
                Szobafestő-mázoló
              </span>{" "}
              végzettséggel rendelkezem. Tanulmányaim befejezése után nem sokkal
              volt szerencsém kimenni németországba dolgozni 2 évig, ahol mester
              szakemberek mellett dolgozhattam fejlesztve a szaktudásomat
              illetve kitanultam a gipszkartonozást. A megfelelő tudás
              megszerzésével haza jöttem, hogy itthon valósítsam meg magam így
              néhány év után elindítottam az egyéni vállalkozásomat, mára már 6
              éve vagyok egyéni vállalkozó, rengeteg ügyfelemnek segítettem
              megvalósítani az elképzeléseit. Célom, hogy segítsek ügyfeleimnek
              otthonaikat és környezetüket szebbé és kényelmesebbé tenni.
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
