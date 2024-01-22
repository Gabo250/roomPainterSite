import { PriceOfferIcon, SurveyIcon } from "./Icons";

// ****** This file is created for datas using on this website

export const navItems = [
  { name: "Főoldal", href: "/" },
  {
    name: "Szolgáltatások",
    href: "/szolgaltatasok",
    almenu: [
      { name: "Szobafestés", href: "./szobafestes" },
      { name: "Mázolás", href: "./mazolas" },
      { name: "Tapétázás", href: "./tapetazas" },
      { name: "Gipszkartonozás", href: "./gipszkartonozas" },
    ],
  },
  { name: "Munkák", href: "/munkak" },
  { name: "Árak", href: "/arak" },
  { name: "Kapcsolat", href: "#conn" },
];

export const metaDatas = {
  home: {
    title: "Lakásfelújítás Budapesten és Pest megyében - Geringer János",
    description:
      "Lakásfelújítás munkálatok után érdeklődsz mint Szobafestés, Mázolás, Gipszkartonozás, Tapétázás akkor jó helyen jársz.",
  },

  services: {
    title:
      "Lakásfelújítás Szolgáltatásaim - Szobafestés, Mázolás, Tapétázás, Gipszkartonozás - Geringer János",
    description:
      "Lakásfelújítás munkálatok leírása - mikre érdemes figyelni adott munkálatnál",
  },

  prices: {
    title: "Lakásfelújítás árak - Geringer János",
    description:
      "Részletes árlista a lakásfelújítás munkálatoknak - az árak csak a munkadíjt foglalják magukba",
  },

  gallery: {
    title: "Képek",
    description: "Néhány kép a saját munkáimról",
  },

  paint: {
    title: "Szobafestés, Tisztasági festés - Geringer János",
    description:
      "Szobafestésről minden, amit tudni érdemes, szobafestés lépései, üzlet festés, külső homlokzat festés - árak",
  },

  daub: {
    title: "Mázolás - Geringer János",
    description:
      "Mázolásról amit tudni érdemes ajtók, ablakok, nyilászárók mázolása - árak",
  },

  paperHanging: {
    title: "Tapétázás - Geringer jános",
    description:
      "Tapétázás ragasztással, amit tudni érdemes, dísztapéta rakás- árak",
  },

  plasterBoarding: {
    title: "Gipszkartonozás, Profilozás - Geringer János",
    description:
      "Minden, amit a gipszkartonozásról tudni érdemes, álmennyezet, oldalfal, válaszfal gipszkartonozás - árak",
  },
};

export const headerTexts = [
  "festés",
  "mázolás",
  "tapétázás",
  "gipszkartonozás",
];

export const chooseMeTexts = [
  {
    name: "Tapasztalat",
    description:
      "Hosszú évek szakmai tapasztalata és több sikeres projekt áll a hátam mögött.",
  },

  {
    name: "Minőség",
    description:
      "Probálok a legjobb minőségű alapanyagokkal dolgozni, és a legjobb tudomásom szerint kivitelezni a munkát.",
  },

  {
    name: "Pontosság",
    description:
      "Minden projektet időben és költségvetésen belül fejezek be, ha nincs rajtam kívüli befolyásoló tényező.",
  },
];

export const workFlow = [
  {
    name: "felmérés",
    description: `Előzetes időpont egyeztetés után helyszíni felmérés következik,
                      ahol megnézem a falakat, hogy milyen állapotban vannak illetve felmérem a munkaterületet.
                      A felmérés Vecsés és 30 km-es körzetében ingyenes, az ennél távolabb eső helyszínekről üzemanyag pénzt számolok fel,
                      amit levonok a végső árból az árajánlat elfogadása esetén.`,
    icon: <SurveyIcon />,
  },

  {
    name: "árajánlat",
    description: `A felmérés elvégzése után elkészítem az árajánlatot, ami kitér minden részletre.
                      Az árajánlat elkészítése után az árajánlatot elküldöm email-en keresztül mindenkép.
                      A rejtett hibák illetve az árajánlat elfogadása utáni plusz munkák igénye további költséggel járhat,
                      amit nem tartalmaz az árajánlat.`,
    icon: <PriceOfferIcon />,
  },
];

export const serviceItems = [
  {
    name: "Szobafestés",
    description: `A szobafestés egy fontos lépés a lakás végkép kialakításában, amely jelentősen befolyásolja egy helyiség hangulatát és megjelenését.
                    Ez a folyamat magában foglalja a falak festését, és számos fontos szempontot kell figyelembe venni annak érdekében,
                    hogy a végeredmény szép és kielégítő legyen.`,
    link: "../szobafestes",
    img: "./img/festés.webp",
    icon: "./img/teddy henger icon.webp",
    alt: "falfestés teddy hengerrel",
    iconAlt: "teddy henger icon",
  },

  {
    name: "Mázolás",
    description: `A mázolás egy olyan festési technika, amely során vékony,
                    átlátszó festék- vagy színréteget alkalmazunk egy már meglévő felületre.
                    Mázolni sima felületre célszerű, ezért előtte gyakran le kell csiszolni a felületet.`,
    link: "../mazolas",
    img: "./img/mázolás.webp",
    icon: "./img/teddy henger icon.webp",
    alt: "ajtó mázolás kis teddy hengerrel",
    iconAlt: "teddy henger icon",
  },

  {
    name: "Tapétázás",
    description: `A tapétázás egy festés előtti művelet, ami segíthet eltüntetni a falhibákat.
                    A tapétázás egy hagyományos és népszerű módszer a belső terek megjelenésének és hangulatának átalakítására
                    is dísz tapétákkal.`,
    link: "../tapetazas",
    img: "./img/tapétázás.webp",
    icon: "./img/tapéta icon.webp",
    alt: "fal tapétázás",
    iconAlt: "tapéta icon",
  },

  {
    name: "Gipszkartonozás",
    description: `A gipszkartonozás egy olyan építési és belső téri technika, ami során gipszből készült lapokat használunk fel.
                    Széleskörben elterjedt álmenyezetek és válaszfal kialakításában. Nagyon egyenletlen, nem egyenes falak eltakarásában
                    is jól lehet alkalmazni, ezáltal egy egyenes falfelületet kapunk, és még költséghatékony is tud lenni.`,
    listDescription: {
      "Gipszkarton típusok:": `A gipszkartonlapok többféle típusban elérhetők, például az egyszerű lapok, a vízálló lapok,
                                        a tűzálló lapok és a hangszigetelt lapok. Ezek a típusok különböző felhasználási területekhez és környezeti feltételekhez igazodnak.`,
      "Sík és sima felület:": `A gipszkartonlapok sima és sík felületet biztosítanak, ideálisak a festéshez vagy a tapétázáshoz.
                                        Könnyen elérhető a sima, kifinomult megjelenés.`,
      "Gyors telepítés:": `A gipszkartonok gyorsan telepíthetők, ami időt és munkát takarít meg.
                                    Az építési vagy felújítási projektek gyorsabb befejezését teszi lehetővé.`,
    },
    link: "../gipszkartonozas",
    img: "./img/gipszkartonozás.webp",
    icon: "./img/gipszkarton icon.webp",
    alt: "gipszkartonozás létráról",
    iconAlt: "gipszkarton icon",
  },
];

export const paintingDatas = {
  "Előkészület a festéshez": {
    description: `A felület előkészítése kulcsfontosságú lépés a sikeres szobafestési munkálatokhoz.
                    Az alapos előkészítés biztosítja, hogy a festék egyenletesen tapadjon, és hosszú ideig tartó eredményt érjünk el.`,
    Tisztítás: "A falfelületet portalanítani kell és alapozni a gletteléshez.",
    Glettelés:
      "Sima felület létrehozásához elengedhetetlen a glettelés, faltól függ, hogy hány rétegbe glettelünk.",
    Tapétázás:
      "Nem kötelező, de tapétát is rakhatunk a falra festés előtt, ez a plusz réteg akár szebbé teheti a felületet.",
  },

  Festés: {
    description: `A falfelület előkészítése után rá vihetjük a falra az utolsó réteget, a festéket, ez nagyban befolyásólja a lakás,
                    szoba végképét. Ehhez néhány szempontot figyelembe kell venni.`,
    Színválasztás: `A megfelelő szín kiválasztása a legfontosabb lépés. Fontos figyelembe venni a szoba méretét,
                         az általános világítást, az enteriőr stílusát és a saját preferenciákat. A világos színek tágítják
                        a tereta sötét színek rideg hangulatot keltenek, ezért célszerű kombinálni világos színekkel.`,
    "Festék típus": `A választott festék típusa meghatározza a végeredmény minőségét.
                        Vízbázisú festékek könnyen tisztíthatók és kevésbé bocsátanak ki szagot,
                        míg olajbázisúak tartósabbak lehetnek.`,
    Szakszerűség: `Ha nincs tapasztalata a szobafestés terén, érdemes fontolóra venni egy szakember segítségét.
                        Mi tapasztaltak vagyunk az optimális színek, technikák és anyagok kiválasztásában.`,
  },

  "Szobafestés ár": {
    description: `A szobafestés ára számos tényezőtől függ, és különböző régiókban, városokban eltérő lehet. Befolyásolhatja a felület
                    mérete, állapota a szükséges festék mennyisége, az, hogy a festék színt kevertetni kell-e vagy nem. Ha kevertetni kell
                    a festéket akkor a festéknek elég húzos ára is lehet.`,
  },
};

export const daubDatas = {
  "Felület előkészítése": {
    description: `A sikeres mázoláshoz fontos a felület előkészítése.
                    A tiszta, sima és alaposan előkészített felületek segítenek a mázolásnak tartós és vonzó megjelenést biztosítani.`,
    Csiszolás: `A megfelelő sima felület eléréséhez elengedhetetlen a csiszolás,
                    ha vannak hézagok a falon azt célszerű gittelni csiszolás előtt.`,
    Tisztítás: `A felületet portalanítani szükséges, hogy a máz réteg hosszantartó legyen.`,
  },

  Mázolás: {
    description: `A sikeres előkészület után jöhet mázolás, ehhez figyelembe kell venni néhány jó szempontot.`,
    "Festék választás": `A megfelelő festék kiválasztása kulcsfontosságú. Célszerű jó minőségü festéket választani, attól függően mit szeretnénk mázolni.`,
    "Megfelelő munkeszköz választása": `A máz könnyű festéket jelent, és kisebb vastagságban kerül felvitele,
                                            ezért célszerű olyan ecsetet vagy hengert választani,
                                            amely alkalmas a finomabb rétegek kialakítására.`,
  },

  "Mázolás ár": {
    description: `A mázolás ára is számos tényezőtől függ, és változhat a kivitelezési mód, a festőanyagok minősége,
                        a felület állapota, hogy esetleg mennyire kell javítani, a festő anyag színe.`,
  },
};

export const paperHangDatas = {
  "Fal előkészítése": {
    description: `A sikeres tapétázásnak is az alapja a falak megfelelő előkészítése.
                        Ez magában foglalhatja a falak kaparását, tisztítását, simítását, alapozását akár glettelését és
                        a száradási idő betartását.`,
    "Tapéta eltávolítás": `Sok esetbe már a falon van tapéta, amit elszeretnénk távolítani, ehhez sokszor szükséges lehet
                                , hogy a falat tapéta leválasztóval vagy meleg vizzel nedvesítsük a ragasztó oldódásához. Ha feloldódott a ragasztó, akkor
                                 szépen el lehet távolítani a tapétát.`,
  },
  Tapétázás: {
    description: `Ahhoz, hogy megfelőlen tudjuk feltenni a tapétát figyelembe kell venni néhány dolgot, ami elengedhetetlen
                    a szép munkához.`,
    Ragasztó: `A tapéták felragasztásához szükség van megfelelő ragasztóra, amely a tapéta típusától függően változhat.`,
    "Tapéta típusok": `Számos különböző tapéta típus létezik, beleértve a papír, vinil, textil, szövet
                            és egyéb anyagokból készült változatokat. Minden típusnak saját előnyei és alkalmazási területei vannak.`,
    "Vágás és illesztés": `A tapétákat általában egyenesen vágják,
                                majd az illesztés során pontosan illesztik össze a mintázatot.
                                A pontos vágás és illesztés kulcsfontosságú a szép végeredmény eléréséhez.`,
  },

  "Tapétázás ár": {
    description: `Az árat számos tényező befolyásólhatja, függ a tapéta típusától, attól, hogy milyen anyaggal rakjuk fel a tapétát
                        milyen az anyag minősége. Pontos árhoz kérd az akár ingyenes felmérésemet.`,
  },
};

export const plasterBoardDatas = {
  "Profilozás, Előkészület a gipszkartonozáshoz": {
    description: `A gipszkartonozás előtt profilozás szükséges, ezzel alakitjuk ki a szerkezetet, amihez rögzítjük a gipszkarton lapokat 
                        több fajta profil típus létezik. A gipszkarton profilozás rugalmas és könnyen változtatható módot kínál a belső tér kialakítására,
                        új falak és mennyezetek kialakítására, valamint különböző funkcionális területek létrehozására. `,
    "Profil kiválasztása": `Válasszuk ki a megfelelő típusú gipszkarton profilokat a tervezett alkalmazásnak megfelelően.`,
    "U-profilok": `Ezek a típusok vízszintesen alkalmazhatók, például mennyezetek vagy padlózatok kialakításához.
                        Segítenek megerősíteni a gipszkarton szerkezetet.`,
    "C-profilok": `Ezek a függőleges profilok, amelyeket általában a falaknál használnak.
                        A C-profilok segítenek meghatározni a fal körvonalát és támogatják a gipszkarton lapokat.`,
  },

  Kartonozás: {
    description: `A szerkezet kialakítása után maga a gipszkarotnozás van hátra. A gipszkartonlapok többféle típusban elérhetők,
                    például az egyszerű lapok, a vízálló lapok, a tűzálló lapok és a hangszigetelt lapok.
                    Ezek a típusok különböző felhasználási területekhez és környezeti feltételekhez igazodnak.`,
    "Típus választás": `Célnak megfelően kell kiválasztani a gipszkartont, a vízálló lapok fürdőszobákba vannak leginkább felhasználva
                            amíg a hangszigetelt lapok stúdiókba vagy olyan lakásokba van felhasználva, ahol nagyon rossz a hangszigetelés.`,
  },

  "Gipszkartonozás ár": {
    description: `A gipszkartonozás ára szintén változó tényezőktől függ, és több tényező befolyásolhatja a végső költséget. 
                        Az ár függ a gipszkarton típusától minél speciálisabb annál drágább.`,
  },
};

export const servPrices = {
  Előmunkálat: {
    id: "elomunkalat",
    "Horony vakolás (5cm mélységig)": "1 000 Ft / nm",
    Glettelés: "750 Ft / nm",
    Csiszolás: "160 Ft / nm",
    Élvédőzés: "400 Ft / fm",
    Papírtakarás: "340 Ft / nm",
    Fóliatakarás: "200 Ft / nm",
    "Stukkózás 5cm-ig": "650 Ft-tól",
    "Stukkózás 5cm felett": "850 Ft-tól",
    Rozetta: "1500 Ft-tól",
  },

  Szobafestés: {
    id: "szobafestes",
    "Műanyagfesték eltávolítás": "800 Ft / nm",
    "Enyves, mészfesték eltávolítás": "650 Ft / nm",
    "Színhatárképzés szalaggal": "250 Ft / fm",
    "Acrylozás (2mm-ig)": "170 Ft / fm",
    "Festés - fehér (1 réteg)": "700 Ft / nm",
    "Festés - fehér (2 réteg)": "1 400 Ft / nm",
    "Penészgátló festés (2 réteg)": "1 400 Ft / nm",
    "Homlokzatfestés - fehér (2 réteg)": "2 100 Ft / nm",
    Díszítőfestés: "3 500 Ft-tól / nm",
  },

  Mázolás: {
    id: "mazolas",
    "Régi mázolt felület eltávolítás": "2 500 Ft / nm",
    "Mázolás régi felületen": "7 500 ft / nm",
    "Mázolás új felületen (nagyobb hibák javításával)": "6 000 Ft / nm",
    "Csőmázolás (80mm-ig)": "450 Ft / fm",
    "Régi fémfelület mázolás": "5 500 Ft",
    "Lazúrozás vékony lazúrral (2 réteg)": "2 500 Ft / nm",
    "Lazúrozás vastag lazúrral (2 réteg)": "2 700 Ft / nm",
  },

  Tapétázás: {
    id: "tapetazas",
    "Tapéta eltávolítás": "600 Ft / nm",
    "Üvegfátyol tapéta Rakása": "1 200 Ft / nm",
    "Könnyű papír tapéta rakása": "2 500 Ft / nm",
    "Középnehéz tapéta (habos,viles) rakása": "3 500 Ft / nm",
    "Nehéz tapéta (textil,vinyl) rakása": "4 200 Ft / nm",
    "Üvegszálas tapéta rakása": "4 000 Ft / nm",
    "Hőszigetelő tapéta rakása": "3 600 Ft / nm",
    "Poszter,fotó tapéta rakása": "5 500 Ft / nm",
    "Bordűr rakása": "400 Ft / fm",
  },

  Gipszkartonozás: {
    id: "gipszkartonozas",
    Előtétfal: "3 500 Ft / nm",
    "Válaszfal (2x2)": "4 800 Ft / nm",
    "Válaszfal (2x1)": "4 000 Ft / nm",
    "Mennyezet (szimpla szerkezettel)": "3 800 Ft / nm",
    "Álmennyezet (dupla szerkezettel)": "4 500 Ft / nm",
    Ragasztás: "2 800 Ft / nm",
    Spalettázás: "2 500 Ft / nm",
    Szigetelés: "750 Ft / nm",
    Fóliázás: "400 Ft / nm",
    "Bandázsolás:": "750 Ft / fm",
  },
};

export const galleryImages = {
  "Faldekoráció festés képek": [
    {
      url: "../img/gallery/kevés csikos fal.webp",
      alt: "csikos fali minázat festve a falon",
    },

    {
      url: "../img/gallery/sok csikos fal.webp",
      alt: "sűrű csikos fali minázat festve a falon",
    },
  ],
};
