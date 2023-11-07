import { PriceOfferIcon, SurveyIcon } from "./Icons";

// ****** This file is created for datas using on this website

export const navItems = [
    { name: "Főoldal", href: "/" },
    { name: "Szolgáltatások", href: "/szolgaltatasok" },
    { name: "Munkák", href: "/munkak" },
    { name: "Árak", href: "/arak" },
    { name: "Kapcsolat", href: "#conn" }
];

export const headerTexts = [
    'festés', 'mázolás', 'tapétázás', 'gipszkartonozás'
];

export const chooseMeTexts = [
    {
        name: 'Tapasztalat',
        description: 'Hosszú évek szakmai tapasztalata és több sikeres projekt áll a hátam mögött.'
    },

    {
        name: 'Minőség',
        description: 'Probálok a legjobb minőségű alapanyagokkal dolgozni, és a legjobb tudomásom szerint kivitelezni a munkát.'
    },

    {
        name: 'Pontosság',
        description: 'Minden projektet időben és költségvetésen belül fejezek be, ha nincs rajtam kívüli befolyásoló tényező.'
    }
];

export const workFlow = [
    {
        name: 'felmérés',
        description: `Előzetes időpont egyeztetés után helyszíni felmérés következik,
                      ahol megnézem a falakat, hogy milyen állapotban vannak illetve felmérem a munkaterületet.
                      A felmérés Vecsés és 20 km-es körzetében ingyenes, az ennél távolabb eső helyszínekről üzemanyag pénzt számolok fel,
                      amit levonok a végső árból az árajánlat ELFOGADÁSA esetén.`,
        icon: <SurveyIcon />
    },

    {
        name: 'árajánlat',
        description: `A felmérés elvégzése után elkészítem az árajánlatot, ami kitér minden részletre.
                      Az árajánlat elkészítése után az árajánlatot elküldöm email-en keresztül mindenkép.
                      A rejtett hibák illetve az árajánlat elfogadása utáni plusz munkák igénye további költséggel járhat,
                      amit nem tartalmaz az árajánlat.`,
        icon: <PriceOfferIcon />
    }
];

export const serviceItems = [
    {
        name: 'Szobafestés',
        description: `A szobafestés egy fontos lépés a lakás végkép kialakításában, amely jelentősen befolyásolja egy helyiség hangulatát és megjelenését.
                    Ez a folyamat magában foglalja a falak festését, és számos fontos szempontot kell figyelembe venni annak érdekében,
                    hogy a végeredmény szép és kielégítő legyen.`,
        listDescription: 
            {
                'Alapozás:': `A jó festés alapja egy jó alapozás. Az alapozó réteg segít abban, hogy a festék egyenletesen tapadjon a falra,
                            és hosszabb élettartamot biztosít a festésnek.`,
                'Színválasztás:': `A megfelelő szín kiválasztása a legfontosabb lépés. Fontos figyelembe venni a szoba méretét,
                                az általános világítást, az enteriőr stílusát és a saját preferenciákat. A világos színek tágítják
                                a tereta sötét színek rideg hangulatot keltenek, ezért célszerű kombinálni világos színekkel.`,
                'Megfelelő festéktípus:': `A választott festék típusa meghatározza a végeredmény minőségét.
                                            Vízbázisú festékek könnyen tisztíthatók és kevésbé bocsátanak ki szagot,
                                            míg olajbázisúak tartósabbak lehetnek.`,
                'Szakszerűség:': `Ha nincs tapasztalata a szobafestés terén, érdemes fontolóra venni egy szakember segítségét.
                                    Ők tapasztaltak az optimális színek, technikák és anyagok kiválasztásában.`
            },
        img: './img/festés.webp',
        icon: './img/teddy henger icon.webp',
        alt: 'falfestés teddy hengerrel',
        iconAlt: 'teddy henger icon'
    },

    {
        name: 'Mázolás',
        description: `A mázolás egy olyan festési technika, amely során vékony,
                    átlátszó festék- vagy színréteget alkalmazunk egy már meglévő felületre.
                    Mázolni sima felületre célszerű, ezért előtte gyakran le kell csiszolni a felületet.`,
        listDescription:
            {
                'Felület előkészítés:': `A sikeres mázoláshoz fontos a felület előkészítése.
                                        A tiszta, sima és alaposan előkészített felületek segítenek a mázolásnak tartós és vonzó megjelenést biztosítani.
                                        Ezért mint a fentebb említve lett gyakran csiszolni kell a felületet.`,
                'Festékválasztás:': `A megfelelő festék kiválasztása kulcsfontosságú. Célszerű jó minőségü festéket választani.`
            },
        img: './img/mázolás.webp',
        icon: './img/teddy henger icon.webp',        
        alt: 'ajtó mázolás kis teddy hengerrel',
        iconAlt: 'teddy henger icon'
    },

    {
        name: 'Tapétázás',
        description: `A tapétázás egy festés előtti művelet, ami segíthet eltüntetni a falhibákat.
                    A tapétázás egy hagyományos és népszerű módszer a belső terek megjelenésének és hangulatának átalakítására
                    is dísz tapétákkal.`,
        listDescription:
            {
                'Felület előkészítése:': `A sikeres tapétázásnak is az alapja a falak megfelelő előkészítése.
                                        Ez magában foglalhatja a falak kaparását, tisztítását, simítását, alapozását és száradási idő betartását.`,
                'Ragasztó:': `A tapéták felragasztásához szükség van megfelelő ragasztóra, amely a tapéta típusától függően változhat.`,
                'Tapéta típusok:': `Számos különböző tapéta típus létezik, beleértve a papír, vinil, textil, szövet
                                    és egyéb anyagokból készült változatokat. Minden típusnak saját előnyei és alkalmazási területei vannak.`,
                'Vágás és illesztés:': `A tapétákat általában egyenesen vágják,
                                        majd az illesztés során pontosan illesztik össze a mintázatot.
                                        A pontos vágás és illesztés kulcsfontosságú a szép végeredmény eléréséhez.`
            },
        img: './img/tapétázás.webp',
        icon: './img/tapéta icon.webp', 
        alt: 'fal tapétázás',
        iconAlt: 'tapéta icon'
    },

    {
        name: 'Gipszkartonozás',
        description: `A gipszkartonozás egy olyan építési és belső téri technika, ami során gipszből készült lapokat használunk fel.
                    Széleskörben elterjedt álmenyezetek és válaszfal kialakításában. Nagyon egyenletlen, nem egyenes falak eltakarásában
                    is jól lehet alkalmazni, ezáltal egy egyenes falfelületet kapunk, és még költséghatékony is tud lenni.`,
        listDescription:
            {
                'Gipszkarton típusok:': `A gipszkartonlapok többféle típusban elérhetők, például az egyszerű lapok, a vízálló lapok,
                                        a tűzálló lapok és a hangszigetelt lapok. Ezek a típusok különböző felhasználási területekhez és környezeti feltételekhez igazodnak.`,
                'Sík és sima felület:': `A gipszkartonlapok sima és sík felületet biztosítanak, ideálisak a festéshez vagy a tapétázáshoz.
                                        Könnyen elérhető a sima, kifinomult megjelenés.`,
                'Gyors telepítés:': `A gipszkartonok gyorsan telepíthetők, ami időt és munkát takarít meg.
                                    Az építési vagy felújítási projektek gyorsabb befejezését teszi lehetővé.`
            },
        img: './img/gipszkartonozás.webp',
        icon: './img/gipszkarton icon.webp',
        alt: 'gipszkartonozás létráról',
        iconAlt: 'gipszkarton icon'
    }
];

export const servPrices = {
    
        "Előmunkálatok": {
            "Horony vakolás (5cm mélységig)": "1 000 Ft / nm",
            "Glettelés": "750 Ft / nm",
            "Csiszolás": "160 Ft / nm",
            "Élvédőzés": "400 Ft / fm",
            "Papírtakarás": "340 Ft / nm",
            "Fóliatakarás": "200 Ft / nm",
            "Stukkózás 5cm-ig": "650 Ft-tól",
            "Stukkózás 5cm felett": "850 Ft-tól",
            "Rozetta": "1500 Ft-tól"            
        },

        "Festés": {
            "Műanyagfesték eltávolítás": "800 Ft / nm",
            "Enyves, mészfesték eltávolítás": "650 Ft / nm",
            "Színhatárképzés szalaggal": "250 Ft / fm",
            "Acrylozás (2mm-ig)": "170 Ft / fm",
            "Festés - fehér (1 réteg)": "700 Ft / nm",
            "Festés - fehér (2 réteg)": "1 400 Ft / nm",
            "Penészgátló festés (2 réteg)": "1 400 Ft / nm",
            "Homlokzatfestés - fehér (2 réteg)": "2 100 Ft / nm",
            "Díszítőfestés": "3 500 Ft-tól / nm"
        },
    
        "Mázolás": {
            "Régi mázolt felület eltávolítás": "2 500 Ft / nm",
            "Mázolás régi felületen": "7 500 ft / nm",
            "Mázolás új felületen (nagyobb hibák javításával)": "6 000 Ft / nm",
            "Csőmázolás (80mm-ig)": "450 Ft / fm",
            "Régi fémfelület mázolás": "5 500 Ft",
            "Lazúrozás vékony lazúrral (2 réteg)": "2 500 Ft / nm",
            "Lazúrozás vastag lazúrral (2 réteg)": "2 700 Ft / nm"
        },
    
        "Tapétázás": {
            "Tapéta eltávolítás": "600 Ft / nm",
            "Üvegfátyol tapéta Rakása": "1 200 Ft / nm",
            "Könnyű papír tapéta rakása": "2 500 Ft / nm",
            "Középnehéz tapéta (habos,viles) rakása": "3 500 Ft / nm",
            "Nehéz tapéta (textil,vinyl) rakása": "4 200 Ft / nm",
            "Üvegszálas tapéta rakása": "4 000 Ft / nm",
            "Hőszigetelő tapéta rakása": "3 600 Ft / nm",
            "Poszter,fotó tapéta rakása": "5 500 Ft / nm",
            "Bordűr rakása": "400 Ft / fm"
        },
    
        "Gipszkartonozás": {
            "Előtétfal": "3 500 Ft / nm",
            "Válaszfal (2x2)": "4 800 Ft / nm",
            "Válaszfal (2x1)": "4 000 Ft / nm",
            "Mennyezet (szimpla szerkezettel)": "3 800 Ft / nm",
            "Álmennyezet (dupla szerkezettel)": "4 500 Ft / nm",
            "Ragasztás": "2 800 Ft / nm",
            "Spalettázás": "2 500 Ft / nm",
            "Szigetelés": "750 Ft / nm",
            "Fóliázás": "400 Ft / nm",
            "Bandázsolás:": "750 Ft / fm"
        }   
};

export const galleryImages = {
    "Faldekoráció festés képek": [
        {
            url: "../img/gallery/kevés csikos fal.webp",
            alt: "csikos fali minázat festve a falon"
        },
        
        {
            url: "../img/gallery/sok csikos fal.webp",
            alt: "sűrű csikos fali minázat festve a falon"
        }
    ]
};