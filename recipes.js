// Setul complet de rețete pentru aplicația „Arome & Gust”
const recipes = [
    // ==========================================
    // PASTE (10 Rețete)
    // ==========================================
    {
        id: "paste-carbonara",
        title: "Paste Carbonara clasice",
        desc: "O rețetă tradițională italiană, cremoasă și plină de gust. Fără smântână - doar ouă proaspete, guanciale crocant și mult Pecorino Romano.",
        category: "Paste",
        difficulty: "Mediu",
        duration: 25,
        servings: 2,
        image: "assets/carbonara.png",
        ingredients: [
            { value: 200, unit: "g", name: "paste (spaghetti sau rigatoni)" },
            { value: 100, unit: "g", name: "guanciale sau pancetta de calitate" },
            { value: 2, unit: "buc", name: "ouă întregi" },
            { value: 2, unit: "gălbenușuri", name: "gălbenușuri de ou" },
            { value: 75, unit: "g", name: "brânză Pecorino Romano (sau Parmezan)" },
            { value: 1, unit: "linguriță", name: "piper negru proaspăt măcinat" },
            { value: null, unit: "", name: "Sare marină pentru apa pastelor" }
        ],
        utensils: [
            "Tigaie încăpătoare",
            "Oală mare pentru paste",
            "Răzătoare fină pentru brânză",
            "Bol de sticlă",
            "Clește pentru paste",
            "Polonic"
        ],
        steps: [
            { title: "Fierberea pastelor", text: "Pune o oală mare cu apă la fiert. Când dă în clocot, adaugă sare din abundență. Pune pastele la fiert și fierbe-le al dente (cu 1-2 minute mai puțin decât scrie pe ambalaj)." },
            { title: "Pregătirea cărnii", text: "Taie guanciale sau pancetta în cubulețe sau fâșii. Pune-le într-o tigaie rece, fără ulei adăugat, la foc mediu. Prăjește-le până când grăsimea se topește și devin crocante. Oprește focul." },
            { title: "Sosul cremos", text: "În bolul de sticlă, bate cele 2 ouă întregi cu cele 2 gălbenușuri. Adaugă brânza Pecorino Romano rasă fin și piperul proaspăt măcinat. Amestecă bine până obții o pastă omogenă." },
            { title: "Combinarea", text: "Scurge pastele (păstrând o cană de apă caldă) și pune-le în tigaie peste guanciale. Amestecă 1 minut pentru a se răcori ușor (să nu devină omletă)." },
            { title: "Emulsionarea", text: "Toarnă amestecul de ou peste paste. Adaugă imediat un polonic de apă de paste fierbinte. Amestecă energic. Sosul se va îngroșa datorită amidonului. Servește imediat cu extra piper și brânză." }
        ]
    },
    {
        id: "lasagna-bolognese",
        title: "Lasagna Bolognese",
        desc: "Straturi delicioase de foi de lasagna, sos Ragu preparat la foc mic, sos catifelat Béchamel și brânză mozzarella topită la cuptor.",
        category: "Paste",
        difficulty: "Dificil",
        duration: 90,
        servings: 6,
        image: "assets/lasagna.png",
        ingredients: [
            { value: 12, unit: "foi", name: "foi de lasagna" },
            { value: 500, unit: "g", name: "carne tocată amestec (vită și porc)" },
            { value: 1, unit: "buc", name: "ceapă galbenă tocată" },
            { value: 1, unit: "buc", name: "morcov mediu ras fin" },
            { value: 400, unit: "g", name: "sos de roșii pasate (passata)" },
            { value: 100, unit: "ml", name: "vin roșu sec" },
            { value: 50, unit: "g", name: "unt (pentru sosul béchamel)" },
            { value: 50, unit: "g", name: "făină de grâu (pentru sosul béchamel)" },
            { value: 600, unit: "ml", name: "lapte cald (pentru sosul béchamel)" },
            { value: 300, unit: "g", name: "mozzarella rasă" },
            { value: 50, unit: "g", name: "parmezan ras" },
            { value: null, unit: "", name: "Sare, piper și nucșoară măcinată" }
        ],
        utensils: [
            "Tavă dreptunghiulară termorezistentă (aproximativ 20x30 cm)",
            "Oală medie pentru sos Ragu",
            "Cratiță mică pentru sos Béchamel",
            "Răzătoare",
            "Spatulă"
        ],
        steps: [
            { title: "Sosul Ragu", text: "Călește ceapa și morcovul cu puțin ulei. Adaugă carnea tocată, condimentează cu sare și piper și rumenește-o. Toarnă vinul roșu, lasă-l să se evapore, apoi adaugă sosul de roșii. Fierbe la foc mic 30-40 minute." },
            { title: "Sosul Béchamel", text: "Topște untul într-o cratiță, adaugă făina și amestecă rapid timp de 1 minut. Toarnă treptat laptele cald, amestecând continuu cu un tel pentru a evita cocoloașele. Fierbe până se îngroașă, apoi adaugă sare, piper și un praf de nucșoară." },
            { title: "Asamblarea", text: "Preîncălzește cuptorul la 180°C. Pune un strat subțire de sos béchamel pe fundul tăvii, apoi așază primul strat de foi de lasagna. Pune un strat de sos Ragu, toarnă sos béchamel și presară mozzarella rasă." },
            { title: "Straturile", text: "Repetă procesul de asamblare de încă 3 ori. Pe ultimul strat de foi pune doar sos béchamel, mozzarella din abundență și parmezanul ras." },
            { title: "Coacerea", text: "Acoperă tava cu folie de aluminiu și coace timp de 25 de minute. Îndepărtează folia și mai coace încă 15 minute până când se formează o crustă aurie superbă. Las-o să se odihnească 10 minute înainte de a o tăia." }
        ]
    },
    {
        id: "paste-cacio-pepe",
        title: "Paste Cacio e Pepe",
        desc: "O capodoperă a simplității romane. Doar trei ingrediente mari se îmbină pentru a crea o explozie aromată intensă de piper și brânză.",
        category: "Paste",
        difficulty: "Mediu",
        duration: 15,
        servings: 2,
        image: "https://images.unsplash.com/photo-1621996346565-e3bb69182a59?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 200, unit: "g", name: "spaghetti de bună calitate" },
            { value: 1.5, unit: "lingurițe", name: "boabe de piper negru întregi" },
            { value: 100, unit: "g", name: "brânză Pecorino Romano rasă fin" },
            { value: null, unit: "", name: "Sare grunjoasă pentru fierberea pastelor" }
        ],
        utensils: [
            "Oală pentru paste",
            "Tigaie din inox sau aluminiu",
            "Moc pisat sau zdrobitor de piper",
            "Răzătoare foarte fină",
            "Tel mic sau furculiță"
        ],
        steps: [
            { title: "Pregătirea piperului", text: "Zdrobește boabele de piper grosier într-un pisez. Pune piperul zdrobit într-o tigaie uscată, la foc mediu, și prăjește-l 1-2 minute până când începe să își elibereze aroma intensă." },
            { title: "Fierberea", text: "Fierbe spaghetti în apă ușor sărată (folosește mai puțină apă decât de obicei pentru a obține o concentrație mai mare de amidon)." },
            { title: "Pasta de brânză", text: "Pune Pecorino Romano ras fin într-un bol. Adaugă treptat un polonic din apa de fierbere a pastelor (călduță, nu clocotită) și amestecă viguros cu un tel până când obții o pastă fină și cremoasă." },
            { title: "Sosul în tigaie", text: "Toarnă un polonic de apă de paste peste piperul prăjit din tigaie. Adaugă pastele scurse direct în tigaie și amestecă la foc mic 1 minut pentru a absorbi aromele." },
            { title: "Crema finală", text: "Ia tigaia complet de pe foc (foarte important!). Las-o să se răcească 30 de secunde, apoi toarnă pasta de brânză Pecorino. Amestecă energic cu cleștele pentru a crea emulsia cremoasă caracteristică. Servește imediat!" }
        ]
    },
    {
        id: "penne-arrabbiata",
        title: "Penne all'Arrabbiata",
        desc: "Un preparat clasic din regiunea Lazio, faimos pentru sosul său picant de roșii cu usturoi și ardei iute roșu proaspăt.",
        category: "Paste",
        difficulty: "Ușor",
        duration: 20,
        servings: 2,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 200, unit: "g", name: "paste penne rigate" },
            { value: 400, unit: "g", name: "roșii cuburi în sos (conservă)" },
            { value: 2, unit: "căței", name: "usturoi feliat subțire" },
            { value: 1, unit: "buc", name: "ardei iute roșu proaspăt (tocat)" },
            { value: 3, unit: "linguri", name: "ulei de măsline extra virgin" },
            { value: 0.5, unit: "legătură", name: "pătrunjel verde tocat" },
            { value: null, unit: "", name: "Sare și parmezan ras după gust" }
        ],
        utensils: [
            "Tigaie medie",
            "Oală pentru paste",
            "Tocător și cuțit"
        ],
        steps: [
            { title: "Fierberea penne-lor", text: "Fierbe pastele penne în apă cu sare conform instrucțiunilor de pe pachet pentru a fi al dente." },
            { title: "Baza sosului", text: "Încinge uleiul de măsline într-o tigaie. Adaugă usturoiul feliat și ardeiul iute tocat. Călește la foc mic 1-2 minute până când usturoiul devine ușor auriu (nu îl arde, altfel devine amar)." },
            { title: "Sosul de roșii", text: "Adaugă roșiile cuburi și un praf de sare. Lasă sosul să fiarbă la foc mediu-mic timp de 10-12 minute până când se îngroașă frumos." },
            { title: "Combinarea", text: "Scurge pastele și pune-le direct în tigaie peste sos. Amestecă bine pe foc timp de 1 minut pentru ca sosul să pătrundă în paste." },
            { title: "Decorul", text: "Oprește focul, presară pătrunjel verde proaspăt tocat și servește fierbinte, eventual cu puțin parmezan sau pecorino deasupra." }
        ]
    },
    {
        id: "pesto-genovese",
        title: "Paste cu Pesto alla Genovese",
        desc: "Paste aromate și proaspete acoperite de un sos pesto catifelat de busuioc, muguri de pin prăjiți, usturoi și brânzeturi fine italiene.",
        category: "Paste",
        difficulty: "Ușor",
        duration: 15,
        servings: 2,
        image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 200, unit: "g", name: "paste (trofie, penne sau fusilli)" },
            { value: 50, unit: "g", name: "frunze de busuioc proaspăt" },
            { value: 20, unit: "g", name: "muguri de pin" },
            { value: 1, unit: "cățel", name: "usturoi" },
            { value: 50, unit: "ml", name: "ulei de măsline extravirgin de calitate" },
            { value: 40, unit: "g", name: "Parmezan ras (Parmigiano Reggiano)" },
            { value: 20, unit: "g", name: "brânză Pecorino rasă" },
            { value: null, unit: "", name: "Un praf de sare" }
        ],
        utensils: [
            "Moc cu pistil (sau un robot de bucătărie mic)",
            "Oală pentru paste",
            "Tigaie mică"
        ],
        steps: [
            { title: "Mugurii de pin", text: "Prăjește mugurii de pin într-o tigaie uscată timp de 1-2 minute până când devin ușor aurii. Lasă-i să se răcească." },
            { title: "Fierberea pastelor", text: "Pune pastele la fiert în apă clocotită cu sare." },
            { title: "Pisarea ingredientelor", text: "Dacă folosești un mojar, pisează usturoiul cu puțină sare, apoi adaugă mugurii de pin și pisează-i. Adaugă treptat frunzele de busuioc, folosind o mișcare circulară pentru a le strivi pereții celulari, nu pentru a le toca." },
            { title: "Adăugarea brânzei și uleiului", text: "Adaugă parmezanul ras și pecorino, apoi toarnă uleiul de măsline treptat în timp ce amesteci, până obții o textură cremoasă. (Dacă folosești robot, pulsează scurt ingredientele pentru a nu oxida busuiocul)." },
            { title: "Amestecul final", text: "Pune pastele scurse într-un bol. Adaugă sosul pesto și 2 linguri de apă caldă de la paste pentru a-l subția ușor. Amestecă bine și servește rece sau la temperatura camerei." }
        ]
    },
    {
        id: "tagliatelle-ciuperci",
        title: "Tagliatelle cu ciuperci și smântână",
        desc: "O mâncare cremoasă de toamnă. Tagliatelle proaspete învăluite într-un sos bogat de ciuperci sălbatice, usturoi și smântână dulce de gătit.",
        category: "Paste",
        difficulty: "Ușor",
        duration: 25,
        servings: 2,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 200, unit: "g", name: "paste tagliatelle (proaspete)" },
            { value: 300, unit: "g", name: "ciuperci (hribi, gălbiori sau champignon)" },
            { value: 2, unit: "căței", name: "usturoi tocat" },
            { value: 1, unit: "buc", name: "ceapă mică tocată fin" },
            { value: 200, unit: "ml", name: "smântână lichidă de gătit (minim 30% grăsime)" },
            { value: 30, unit: "g", name: "unt" },
            { value: 1, unit: "lingură", name: "ulei de măsline" },
            { value: 30, unit: "g", name: "parmezan ras" },
            { value: null, unit: "", name: "Sare, piper și cimbru proaspăt" }
        ],
        utensils: [
            "Tigaie mare antiaderentă",
            "Oală pentru fierbere",
            "Tocător și cuțit"
        ],
        steps: [
            { title: "Fierberea pastelor", text: "Fierbe tagliatelle în apă cu sare. Dacă sunt paste proaspete, vor fierbe în doar 2-3 minute." },
            { title: "Călire legume", text: "Încinge untul și uleiul într-o tigaie. Călește ceapa și usturoiul timp de 2-3 minute până se înmoaie." },
            { title: "Gătirea ciupercilor", text: "Curăță ciupercile, taie-le felii mari și adaugă-le în tigaie cu cimbrul. Condimentează cu sare și piper. Prăjește la foc iute 6-8 minute până scade apa lăsată de ciuperci și încep să se rumenească." },
            { title: "Sosul cremos", text: "Toarnă smântâna lichidă de gătit peste ciuperci. Lasă să fiarbă la foc mic 3-4 minute până începe să se îngroașă sosul." },
            { title: "Asamblare", text: "Pune pastele scurse în tigaie, adaugă parmezanul ras și amestecă ușor pe foc timp de 1 minut. Servește imediat, fierbinte." }
        ]
    },
    {
        id: "paste-frutti-di-mare",
        title: "Spaghetti frutti di mare",
        desc: "O rețetă rafinată cu iz marin. Fructe de mare asortate gătite rapid în sos delicios de roșii cu vin alb și usturoi.",
        category: "Paste",
        difficulty: "Mediu",
        duration: 30,
        servings: 2,
        image: "https://images.unsplash.com/photo-1563379971899-660589a01cc3?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 200, unit: "g", name: "paste spaghetti" },
            { value: 300, unit: "g", name: "mix fructe de mare (creveți, midii, calamari, caracatiță)" },
            { value: 200, unit: "g", name: "roșii cherry tăiate în jumătăți" },
            { value: 3, unit: "căței", name: "usturoi zdrobit" },
            { value: 80, unit: "ml", name: "vin alb sec" },
            { value: 3, unit: "linguri", name: "ulei de măsline" },
            { value: 0.5, unit: "legătură", name: "pătrunjel proaspăt tocat" },
            { value: null, unit: "", name: "Sare și piper negru" }
        ],
        utensils: [
            "Tigaie wok sau tigaie foarte adâncă",
            "Oală pentru paste",
            "Sită pentru scurs"
        ],
        steps: [
            { title: "Pastele", text: "Fierbe spaghetti al dente în apă sărată." },
            { title: "Prăjirea fructelor de mare", text: "Încinge uleiul într-o tigaie mare. Adaugă usturoiul și lasă-l 1 minut să își lase aroma. Adaugă fructele de mare spălate bine și scurse. Gătește-le la foc iute 3 minute." },
            { title: "Stingerea cu vin", text: "Toarnă vinul alb peste fructele de mare. Lasă-l să dea în clocot și să se evapore alcoolul (cca. 2 minute)." },
            { title: "Sosul de roșii", text: "Adaugă roșiile cherry tăiate, sare și piper. Redu focul și lasă să fiarbă 5-7 minute până când roșiile se înmoaie și formează un sos." },
            { title: "Finalizare", text: "Pune pastele scurse în tigaie, amestecă totul bine, presară pătrunjelul tocat și oprește focul. Servește fierbinte." }
        ]
    },
    {
        id: "spaghetti-aglio-olio",
        title: "Spaghetti Aglio, Olio e Peperoncino",
        desc: "Poate cea mai rapidă și economică rețetă de paste din lume, dar incredibil de aromată datorită infuzării optime a uleiului.",
        category: "Paste",
        difficulty: "Ușor",
        duration: 12,
        servings: 2,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 200, unit: "g", name: "spaghetti de grâu dur" },
            { value: 4, unit: "căței", name: "usturoi feliat subțire" },
            { value: 1, unit: "buc", name: "ardei iute uscat sau proaspăt (tocat)" },
            { value: 60, unit: "ml", name: "ulei măsline extravirgin presat la rece" },
            { value: 0.5, unit: "legătură", name: "pătrunjel proaspăt tocat" }
        ],
        utensils: [
            "Tigaie din inox",
            "Oală mare pentru fierbere paste"
        ],
        steps: [
            { title: "Pastele", text: "Fierbe pastele în apă clocotită cu multă sare." },
            { title: "Infuzarea uleiului", text: "În tigaie, pune uleiul de măsline rece, feliile de usturoi și ardeiul iute. Pune tigaia la foc mic. Lasă usturoiul să se prăjească extrem de încet până devine auriu deschis. Nu-l lăsa să se maronească!" },
            { title: "Emulsia", text: "Când pastele sunt aproape gata, adaugă un polonic de apă din oală în tigaia cu ulei. Va sfârâi și va forma un sos cremos datorită amidonului." },
            { title: "Combinarea", text: "Pune pastele scurse direct în tigaie și sotează-le timp de 1 minut, amestecând continuu." },
            { title: "Servirea", text: "Adaugă pătrunjelul tocat fin, oprește focul și servește imediat. Delicios!" }
        ]
    },
    {
        id: "tortellini-al-forno",
        title: "Tortellini al Forno la cuptor",
        desc: "Tortellini umpluți cu brânză, copți într-un sos bogat și cremos de roșii cu parmezan și mozzarella topită și întinsă.",
        category: "Paste",
        difficulty: "Mediu",
        duration: 35,
        servings: 4,
        image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 500, unit: "g", name: "tortellini cu brânză (proaspete)" },
            { value: 400, unit: "g", name: "sos de roșii marinara" },
            { value: 100, unit: "ml", name: "smântână lichidă" },
            { value: 200, unit: "g", name: "mozzarella proaspătă (tăiată cuburi)" },
            { value: 50, unit: "g", name: "parmezan ras" },
            { value: 1, unit: "lingură", name: "ulei de măsline" },
            { value: null, unit: "", name: "Sare, piper și busuioc proaspăt" }
        ],
        utensils: [
            "Vas termorezistent de copt",
            "Oală pentru paste",
            "Tigaie pentru amestecat"
        ],
        steps: [
            { title: "Fierberea", text: "Preîncălzește cuptorul la 200°C. Fierbe tortellini în apă cu sare cu 2 minute mai puțin decât scrie pe instrucțiuni." },
            { title: "Sosul cremos", text: "Într-o tigaie, amestecă sosul de roșii cu smântâna lichidă, uleiul de măsline și condimentele. Lasă să fiarbă la foc mic 3 minute." },
            { title: "Amestecarea", text: "Scurge tortellini și adaugă-i în tigaie peste sos. Pune și jumătate din cantitatea de mozzarella și amestecă." },
            { title: "Pregătirea pentru copt", text: "Toarnă compoziția în vasul de copt. Pune deasupra restul de mozzarella și parmezanul ras uniform." },
            { title: "Coacerea", text: "Coace timp de 15-20 de minute până când brânza este topită și face bule aurii la suprafață. Decorează cu busuioc proaspăt." }
        ]
    },
    {
        id: "gnocchi-gorgonzola",
        title: "Gnocchi cu sos de gorgonzola",
        desc: "Gnocchi moi din cartofi scăldați într-un sos catifelat și intens de brânză gorgonzola și decorați cu miez de nucă crocant.",
        category: "Paste",
        difficulty: "Ușor",
        duration: 15,
        servings: 2,
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 500, unit: "g", name: "gnocchi proaspeți din cartofi" },
            { value: 150, unit: "g", name: "brânză Gorgonzola dulce" },
            { value: 150, unit: "ml", name: "smântână lichidă de gătit" },
            { value: 30, unit: "g", name: "miez de nucă mărunțit" },
            { value: 30, unit: "g", name: "parmezan ras" },
            { value: null, unit: "", name: "Sare și piper alb după gust" }
        ],
        utensils: [
            "Tigaie adâncă",
            "Oală pentru fierbere gnocchi",
            "Tigaie mică pentru prăjit nuci"
        ],
        steps: [
            { title: "Nucile", text: "Prăjește nucile mărunțite într-o tigaie uscată timp de 1-2 minute pentru a fi mai aromate și crocante. Pune-le deoparte." },
            { title: "Sosul", text: "Într-o tigaie adâncă, pune smântâna de gătit și gorgonzola tăiată bucățele la foc mic. Amestecă constant până când brânza se topește complet și sosul devine fin." },
            { title: "Fierberea gnocchi-lor", text: "Fierbe gnocchi în apă cu sare. Ei se fierb foarte rapid - în momentul în care se ridică la suprafața apei, sunt gata!" },
            { title: "Combinarea", text: "Scoate gnocchi cu o spumieră direct în sosul de gorgonzola. Adaugă parmezanul ras și amestecă ușor." },
            { title: "Servire", text: "Pune gnocchi în farfurie, presară deasupra nucile rumenite și mult piper alb sau negru proaspăt măcinat." }
        ]
    },

    // ==========================================
    // DESERTURI (10 Rețete)
    // ==========================================
    {
        id: "cheesecake-fructe",
        title: "Cheesecake cu fructe de pădure",
        desc: "Un desert rafinat, cremos și răcoritor, ideal pentru zilele calde deoarece nu necesită coacere. Gustul dulce-acrișor este perfect echilibrat.",
        category: "Desert",
        difficulty: "Ușor",
        duration: 45,
        servings: 8,
        image: "assets/cheesecake.png",
        ingredients: [
            { value: 250, unit: "g", name: "biscuiți digestivi" },
            { value: 125, unit: "g", name: "unt topit" },
            { value: 500, unit: "g", name: "cremă de brânză fină" },
            { value: 200, unit: "ml", name: "smântână pentru frișcă rece" },
            { value: 100, unit: "g", name: "zahăr pudră vanilat" },
            { value: 1, unit: "linguriță", name: "extract de vanilie" },
            { value: 300, unit: "g", name: "fructe de pădure" },
            { value: 2, unit: "linguri", name: "zahăr (pentru sos)" },
            { value: 1, unit: "lingură", name: "zeamă de lămâie" }
        ],
        utensils: [
            "Formă de tort cu inel detașabil",
            "Mixer electric",
            "Spatulă",
            "Cratiță mică pentru sos"
        ],
        steps: [
            { title: "Blatul", text: "Mărunțește biscuiții fin, amestecă-i cu untul topit și presează-i pe fundul formei de tort. Pune-i la frigider." },
            { title: "Crema de brânză", text: "Mixează crema de brânză cu zahărul pudră și extractul de vanilie până devine fină." },
            { title: "Încorporare frișcă", text: "Bate frișca și încorporeaz-o ușor în crema de brânză folosind o spatulă." },
            { title: "Răcire", text: "Toarnă crema peste blatul de biscuiți și pune tortul la frigider pentru cel puțin 4-6 ore." },
            { title: "Sosul de fructe", text: "Fierbe fructele de pădure cu 2 linguri de zahăr și lămâie 8 minute. Lasă sosul să se răcească și toarnă-l pe cheesecake înainte de servire." }
        ]
    },
    {
        id: "tiramisu-clasic",
        title: "Tiramisu clasic italian",
        desc: "Cel mai iubit desert italian. Pișcoturi însiropate în cafea espresso aromată cu Amaretto și o cremă spumoasă de mascarpone.",
        category: "Desert",
        difficulty: "Mediu",
        duration: 30,
        servings: 6,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 400, unit: "g", name: "pișcoturi Savoiardi" },
            { value: 500, unit: "g", name: "brânză Mascarpone" },
            { value: 4, unit: "buc", name: "ouă proaspete (separate în albușuri și gălbenușuri)" },
            { value: 100, unit: "g", name: "zahăr tos" },
            { value: 300, unit: "ml", name: "cafea espresso tare (răcită)" },
            { value: 30, unit: "ml", name: "lichior Amaretto sau esență de rom" },
            { value: 3, unit: "linguri", name: "cacao calitativă pentru pudrat" }
        ],
        utensils: [
            "Tavă dreptunghiulară din sticlă/ceramică",
            "Două boluri mari",
            "Mixer electric",
            "Sită mică de pudrat"
        ],
        steps: [
            { title: "Crema de gălbenuș", text: "Mixează gălbenușurile cu zahărul până se albesc și își dublează volumul. Adaugă mascarpone și mixează la viteză mică până devine o cremă omogenă." },
            { title: "Spuma de albuș", text: "Bate albușurile spumă foarte fermă cu un praf de sare. Încorporează spuma treptat în crema de gălbenuș, amestecând ușor, de jos în sus, cu o spatulă." },
            { title: "Însiroparea", text: "Amestecă cafeaua espresso rece cu lichiorul Amaretto într-un vas plat. Trece fiecare pișcot prin cafea timp de 1 secundă pe fiecare parte (nu le lăsa să se satureze complet)." },
            { title: "Montarea", text: "Așază un strat de pișcoturi pe fundul tăvii. Pune jumătate din cremă și întinde-o uniform. Pune al doilea strat de pișcoturi însiropate și restul de cremă." },
            { title: "Răcirea și pudrarea", text: "Pune tiramisu-ul la frigider pentru cel puțin 6 ore. Înainte de servire, pudrează uniform un strat generos de cacao." }
        ]
    },
    {
        id: "lava-cake",
        title: "Lava Cake de ciocolată",
        desc: "Un desert spectaculos cu exterior de pandișpan fin și interior din ciocolată caldă și curgătoare, servit cu înghețată de vanilie.",
        category: "Desert",
        difficulty: "Mediu",
        duration: 25,
        servings: 4,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 100, unit: "g", name: "ciocolată neagră cu minim 60% cacao" },
            { value: 80, unit: "g", name: "unt cu minim 80% grăsime" },
            { value: 2, unit: "buc", name: "ouă întregi" },
            { value: 2, unit: "gălbenușuri", name: "gălbenușuri de ou" },
            { value: 50, unit: "g", name: "zahăr tos" },
            { value: 35, unit: "g", name: "făină albă" },
            { value: 1, unit: "praf", name: "sare" },
            { value: null, unit: "", name: "Unt și cacao pentru tapetat formele" }
        ],
        utensils: [
            "4 forme ramekin din ceramică",
            "Bol metalic pentru bain-marie",
            "Mixer sau tel",
            "Tavă de copt"
        ],
        steps: [
            { title: "Topirea ciocolatei", text: "Preîncălzește cuptorul la 200°C. Topește ciocolata și untul împreună pe baie de aburi (bain-marie) până se omogenizează complet, apoi lasă compoziția să se răcească ușor." },
            { title: "Mixarea ouălor", text: "Într-un bol, bate cele 2 ouă, cele 2 gălbenușuri și zahărul cu mixerul timp de 4-5 minute, până obții o spumă deschisă la culoare." },
            { title: "Aluatul", text: "Toarnă ciocolata topită peste amestecul de ouă. Adaugă făina cernută și praful de sare. Încorporează-le ușor folosind o spatulă." },
            { title: "Pregătirea formelor", text: "Unge formele ramekin foarte bine cu unt și pudrează-le cu pudră de cacao (nu făină, altfel va arăta inestetic). Împarte aluatul în mod egal în forme." },
            { title: "Coacerea de precizie", text: "Coace timp de exact 11-13 minute. Marginile trebuie să fie ferme, iar centrul să fie ușor moale și tremurător. Scoate formele, lasă-le 1 minut, apoi răstoarnă-le pe farfurii. Servește instant cu înghețată de vanilie." }
        ]
    },
    {
        id: "papanasi-traditionali",
        title: "Papanași tradiționali",
        desc: "Cel mai faimos desert românesc. Gogoși pufoase din brânză dulce de vaci, servite cu smântână din belșug și dulceață acrișoară.",
        category: "Desert",
        difficulty: "Mediu",
        duration: 40,
        servings: 4,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 500, unit: "g", name: "brânză dulce de vaci (bine scursă)" },
            { value: 2, unit: "buc", name: "ouă" },
            { value: 70, unit: "g", name: "griș de grâu" },
            { value: 150, unit: "g", name: "făină albă de grâu" },
            { value: 50, unit: "g", name: "zahăr tos" },
            { value: 1, unit: "linguriță", name: "bicarbonat de sodiu" },
            { value: 1, unit: "buc", name: "coajă de lămâie rasă" },
            { value: 200, unit: "g", name: "smântână fermentată (minim 20% grăsime)" },
            { value: 200, unit: "g", name: "dulceață (de afine, zmeură sau vișine)" },
            { value: 500, unit: "ml", name: "ulei pentru prăjit" }
        ],
        utensils: [
            "Tigaie adâncă sau cratiță pentru prăjit în baie de ulei",
            "Bol mare",
            "Tocător (pentru modelat)",
            "Spumieră"
        ],
        steps: [
            { title: "Aluatul", text: "Într-un bol, pasează brânza bine scursă cu o furculiță. Adaugă ouăle, zahărul, coaja de lămâie și un praf de sare. Amestecă bine, apoi adaugă făina cernută cu bicarbonatul de sodiu și grișul." },
            { title: "Odihna aluatului", text: "Omogenizează aluatul cu mâna. Trebuie să fie ușor lipicios, dar modelabil. Lasă aluatul să se odihnească 15 minute pentru ca grișul să absoarbă umiditatea." },
            { title: "Modelarea", text: "Împarte aluatul în 4 părți egale. Din fiecare parte formează o sferă mare, pe care o turtești ușor și îi faci o gaură în mijloc cu degetul. Formează și 4 sfere mici (bila care va veni deasupra)." },
            { title: "Prăjirea", text: "Încinge uleiul bine într-o cratiță adâncă. Prăjește papanașii mari și micile sfere în baie de ulei la foc mediu timp de 3-4 minute pe fiecare parte, până devin aurii. Scoate-i pe șervețele de hârtie." },
            { title: "Asamblarea", text: "Așază papanașul mare pe farfurie, toarnă smântână în interior și peste el, pune dulceață acrișoară, iar deasupra așază bila mică prăjită și toarnă din nou smântână și dulceață. Servește-i calzi!" }
        ]
    },
    {
        id: "clatite-ciocolata",
        title: "Clătite cu ciocolată și banane",
        desc: "Clătite fine, elastice și subțiri, umplute cu cremă caldă de ciocolată și felii de banane proaspete. Un desert rapid care place tuturor.",
        category: "Desert",
        difficulty: "Ușor",
        duration: 25,
        servings: 4,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 250, unit: "g", name: "făină albă de grâu" },
            { value: 3, unit: "buc", name: "ouă" },
            { value: 300, unit: "ml", name: "lapte" },
            { value: 200, unit: "ml", name: "apă minerală carbogazoasă" },
            { value: 2, unit: "linguri", name: "unt topit sau ulei (în aluat)" },
            { value: 1, unit: "praf", name: "sare" },
            { value: 200, unit: "g", name: "cremă de ciocolată (tip Finetti/Nutella)" },
            { value: 2, unit: "buc", name: "banane feliate" }
        ],
        utensils: [
            "Tigaie specială de clătite",
            "Tel mare",
            "Polonic",
            "Spatulă subțire"
        ],
        steps: [
            { title: "Aluatul", text: "Într-un bol mare, bate ouăle cu praful de sare. Adaugă făina treptat, alternând cu laptele, amestecând energic cu telul pentru a nu face cocoloașe." },
            { title: "Subțierea aluatului", text: "Adaugă apa minerală (aceasta va face clătitele pufoase și aerate) și cele 2 linguri de unt topit. Compoziția finală trebuie să fie fluidă ca o smântână subțire. Las-o să stea 10 minute." },
            { title: "Coacerea clătitelor", text: "Încinge tigaia unsă cu un strop de ulei. Toarnă un polonic mic de compoziție și rotește rapid tigaia pentru a o întinde pe toată suprafața într-un strat foarte subțire." },
            { title: "Întoarcerea", text: "Coace clătita 1 minut pe prima parte până când marginile încep să se desprindă și devin ușor maronii, apoi întoarce-o cu o spatulă și mai coace-o 30 de secunde. Pune-o pe o farfurie acoperită." },
            { title: "Servirea", text: "Unge fiecare clătită caldă cu cremă de ciocolată, adaugă felii de banane și pliază-le sau rulează-le. Opțional poți presăra zahăr pudră sau sos de ciocolată." }
        ]
    },
    {
        id: "mousse-ciocolata",
        title: "Mousse de ciocolată",
        desc: "O spumă aerată de ciocolată fină, cu o textură incredibil de catifelată și un gust intens care se topește în gură.",
        category: "Desert",
        difficulty: "Mediu",
        duration: 25,
        servings: 4,
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 200, unit: "g", name: "ciocolată neagră cu 50-70% cacao" },
            { value: 30, unit: "g", name: "unt" },
            { value: 3, unit: "buc", name: "ouă proaspete (separate)" },
            { value: 200, unit: "ml", name: "smântână pentru frișcă rece" },
            { value: 30, unit: "g", name: "zahăr pudră" }
        ],
        utensils: [
            "Mixer",
            "Boluri rezistente la căldură",
            "4 pahare individuale de servire",
            "Spatulă"
        ],
        steps: [
            { title: "Topirea", text: "Topște ciocolata ruptă bucățele și untul pe baie de aburi (bain-marie) până se lichefiază. Pune-le deoparte să se răcească ușor." },
            { title: "Albușurile și Frișca", text: "Bate albușurile spumă tare. În alt bol, bate frișca cu zahărul pudră până devine fermă." },
            { title: "Încorporarea gălbenușurilor", text: "Adaugă gălbenușurile pe rând în ciocolata topită (călduță) și amestecă bine cu o spatulă." },
            { title: "Mixarea ingredientelor", text: "Adaugă frișca bătută în amestecul de ciocolată, amestecând ușor. Apoi, încorporează spuma de albuș în trei tranșe, folosind mișcări circulare ușoare pentru a păstra aerul în compoziție." },
            { title: "Răcirea", text: "Toarnă mousse-ul în cele 4 pahare și pune-le la frigider pentru cel puțin 3-4 ore înainte de a le servi." }
        ]
    },
    {
        id: "placinta-mere",
        title: "Plăcintă cu mere și scorțișoară",
        desc: "O plăcintă caldă și aromată, cu foi fragede făcute în casă și o umplutură bogată de mere caramelizate cu scorțișoară.",
        category: "Desert",
        difficulty: "Mediu",
        duration: 60,
        servings: 8,
        image: "https://images.unsplash.com/photo-1507226983735-a838615193b0?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 500, unit: "g", name: "făină albă" },
            { value: 200, unit: "g", name: "unt rece (tăiat cubulețe)" },
            { value: 150, unit: "g", name: "iaurt gras sau smântână" },
            { value: 1, unit: "linguriță", name: "praf de copt" },
            { value: 1.5, unit: "kg", name: "mere acrișoare" },
            { value: 150, unit: "g", name: "zahăr tos (pentru umplutură)" },
            { value: 2, unit: "lingurițe", name: "scorțișoară măcinată" },
            { value: 2, unit: "linguri", name: "griș de grâu (pentru blat)" }
        ],
        utensils: [
            "Tavă de copt dreptunghiulară",
            "Răzătoare mare",
            "Tigaie mare pentru mere",
            "Făcăleț"
        ],
        steps: [
            { title: "Aluatul fraged", text: "Frământă rapid făina cu praful de copt și untul rece până obții o textură nisipoasă. Adaugă iaurtul și formează o bilă de aluat. Împarte-o în două și pune-le la frigider 30 de minute." },
            { title: "Pregătirea merelor", text: "Rade merele pe răzătoarea mare. Pune-le într-o tigaie mare cu zahărul și călește-le la foc mediu 10-15 minute până scade sucul. Oprește focul și adaugă scorțișoara. Lasă-le să se răcească." },
            { title: "Întinderea foilor", text: "Preîncălzește cuptorul la 180°C. Întinde prima bilă de aluat cu făcălețul pe dimensiunea tăvii și așază foaia în tava unsă cu unt." },
            { title: "Umplutura", text: "Presară cele 2 linguri de griș pe fundul tăvii (va absorbi sucul rămas din mere). Pune uniform merele călite. Întinde a doua foaie de aluat și pune-o deasupra. Înțeap-o cu o furculiță din loc în loc." },
            { title: "Coacerea", text: "Coace plăcinta timp de 35-40 de minute până devine aurie. Las-o să se răcească, pudreaz-o cu zahăr pudră vanilat și taie-o cuburi." }
        ]
    },
    {
        id: "crema-zahar-ars",
        title: "Cremă de zahăr ars",
        desc: "Un desert fin și legendar, cu o textură incredibil de mătăsoasă de budincă de ouă și un sos delicios de zahăr ars aromat.",
        category: "Desert",
        difficulty: "Mediu",
        duration: 75,
        servings: 6,
        image: "https://images.unsplash.com/photo-1608666566023-e91b02683a5f?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 1, unit: "l", name: "lapte dulce proaspăt" },
            { value: 8, unit: "buc", name: "ouă" },
            { value: 150, unit: "g", name: "zahăr (pentru compoziție)" },
            { value: 150, unit: "g", name: "zahăr (pentru caramel)" },
            { value: 1, unit: "linguriță", name: "pastă sau extract de vanilie" }
        ],
        utensils: [
            "Formă rotundă din metal sau cratiță adâncă (20cm)",
            "Tavă mai mare (pentru copt în baie de apă - bain-marie)",
            "Tel"
        ],
        steps: [
            { title: "Caramelul", text: "Pune cele 150g de zahăr direct în cratița în care vei coace desertul. Pune pe foc mic și lasă-l să se topească încet până devine auriu-aramiu. Rotește cratița pentru a îmbrăca și pereții în caramel, apoi las-o să se răcească complet și să crape." },
            { title: "Compoziția de ou", text: "Preîncălzește cuptorul la 160°C. Într-un bol mare, bate ouăle cu telul (fără a face multă spumă). Adaugă zahărul, vanilia și toarnă laptele rece. Amestecă până se dizolvă zahărul." },
            { title: "Turnarea", text: "Toarnă compoziția printr-o sită în cratița cu caramelul răcit (sita reține eventualele bule sau impurități din ou)." },
            { title: "Bain-marie", text: "Așază cratița cu cremă într-o tavă mai mare în care pui apă fierbinte (apa trebuie să ajungă până la jumătatea cratiței)." },
            { title: "Coacerea lentă", text: "Coace timp de 50-60 de minute. Crema trebuie să fie legată, dar să tremure ușor ca o gelatină în mijloc. Las-o să se răcească la temperatura camerei, apoi pune-o la frigider minim 4 ore. Pentru servire, răstoarnă cratița cu o mișcare fermă pe un platou cu margini adânci." }
        ]
    },
    {
        id: "cozonac-traditional",
        title: "Cozonac tradițional cu nucă",
        desc: "Rețeta clasică de cozonac pufos, care se desface în fâșii, umplut din belșug cu o cremă aromată de nucă și cacao.",
        category: "Desert",
        difficulty: "Dificil",
        duration: 120,
        servings: 10,
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 1, unit: "kg", name: "făină de grâu superioară (tip 000)" },
            { value: 50, unit: "g", name: "drojdie proaspătă" },
            { value: 500, unit: "ml", name: "lapte cald" },
            { value: 250, unit: "g", name: "zahăr" },
            { value: 200, unit: "g", name: "unt topit amestecat cu 50ml ulei" },
            { value: 6, unit: "buc", name: "gălbenușuri" },
            { value: 300, unit: "g", name: "nucă măcinată" },
            { value: 3, unit: "linguri", name: "cacao" },
            { value: 4, unit: "albușuri", name: "albușuri de ou (bătute spumă pentru umplutură)" },
            { value: null, unit: "", name: "Coajă de lămâie, vanilie și esență de rom" }
        ],
        utensils: [
            "Bol foarte mare pentru frământat",
            "2 forme clasice de cozonac",
            "Hârtie de copt",
            "Prosop curat"
        ],
        steps: [
            { title: "Maiaua", text: "Dizolvă drojdia în 100ml de lapte cald, o lingură de zahăr și 2 linguri de făină. Las-o să crească 15 minute la loc cald." },
            { title: "Aluatul", text: "Într-un bol mare, pune făina cernută de două ori. Adaugă maiaua, gălbenușurile bătute cu sare și arome, zahărul dizolvat în restul de lapte cald. Începe să frămânți." },
            { title: "Frământarea", text: "Adaugă treptat untul călduț amestecat cu ulei și frământă energic timp de cel puțin 20-30 de minute până aluatul devine elastic și face bule de aer. Acoperă și lasă la dospit 1 oră." },
            { title: "Umplutura", text: "Amestecă albușurile bătute spumă cu nuca măcinată, cacao, zahăr și esență de rom până obții o pastă tartinabilă." },
            { title: "Asamblarea și Coacerea", text: "Împarte aluatul în 4 părți, întinde fiecare foaie, pune umplutura de nucă, rulează și împletește câte două rulouri. Pune cozonacii în forme, lasă-i la crescut încă 30 de minute, unge-i cu ou și coace-i la 175°C timp de 45-50 de minute." }
        ]
    },
    {
        id: "eclere-vanilie",
        title: "Eclere cu cremă de vanilie",
        desc: "Eclere clasice din aluat choux fin, umplute cu o cremă bogată și fină de vanilie cu lapte și glazurate cu ciocolată neagră.",
        category: "Desert",
        difficulty: "Dificil",
        duration: 60,
        servings: 6,
        image: "https://images.unsplash.com/photo-1612203983220-7fcd89c17e06?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 120, unit: "g", name: "făină albă" },
            { value: 100, unit: "ml", name: "apă" },
            { value: 100, unit: "ml", name: "lapte (pentru aluat)" },
            { value: 80, unit: "g", name: "unt" },
            { value: 4, unit: "buc", name: "ouă mari" },
            { value: 500, unit: "ml", name: "lapte (pentru cremă)" },
            { value: 4, unit: "gălbenușuri", name: "gălbenușuri de ou" },
            { value: 100, unit: "g", name: "zahăr (pentru cremă)" },
            { value: 40, unit: "g", name: "amidon de porumb" },
            { value: 100, unit: "g", name: "ciocolată neagră (pentru glazură)" }
        ],
        utensils: [
            "Poche (pungă de ornat) cu dui stelat sau rotund",
            "Cratiță pentru aluat",
            "Tel și cratiță pentru cremă",
            "Tavă de copt"
        ],
        steps: [
            { title: "Aluatul Choux", text: "Fierbe apa, laptele, untul și un praf de sare. Când dă în clocot, adaugă toată făina deodată. Amestecă energic cu o lingură de lemn pe foc timp de 1-2 minute până când aluatul se desprinde de pe pereți. Lasă-l să se răcească." },
            { title: "Încorporarea ouălor", text: "Preîncălzește cuptorul la 200°C. Adaugă ouăle unul câte unul în aluatul răcit, mixând foarte bine după fiecare până obții o compoziție lucioasă care curge lent de pe spatulă." },
            { title: "Coacerea cojilor", text: "Cu ajutorul poșului, formează bastonașe de 10-12 cm pe tava tapetată cu hârtie de copt. Coace 15 minute la 200°C, apoi scade la 170°C și mai coace 15 minute fără să deschizi cuptorul (cojile trebuie să fie uscate și ușoare)." },
            { title: "Crema de vanilie", text: "Bate gălbenușurile cu zahărul și amidonul. Adaugă laptele fierbinte treptat și fierbe sosul la foc mic, amestecând continuu cu telul până devine o budincă groasă. Adaugă vanilia și untul și las-o să se răcească." },
            { title: "Asamblare", text: "Taie cojile răcite în jumătate pe lungime. Umple baza cu cremă de vanilie cu ajutorul poșului. Înmoaie capacele superioare în ciocolata topită și așază-le deasupra. Pune eclerele la frigider." }
        ]
    },

    // ==========================================
    // SUPE (10 Rețete)
    // ==========================================
    {
        id: "supa-dovleac",
        title: "Supă cremă de dovleac",
        desc: "O supă catifelată, aromată și extrem de reconfortantă. Secretul gustului profund constă în coacerea prealabilă a dovleacului la cuptor.",
        category: "Vegetarian",
        difficulty: "Ușor",
        duration: 40,
        servings: 4,
        image: "assets/supa_dovleac.png",
        ingredients: [
            { value: 1, unit: "kg", name: "dovleac plăcintar curățat" },
            { value: 1, unit: "buc", name: "cartof mare" },
            { value: 1, unit: "buc", name: "ceapă galbenă medie" },
            { value: 2, unit: "căței", name: "usturoi" },
            { value: 500, unit: "ml", name: "supă caldă de legume" },
            { value: 150, unit: "ml", name: "smântână lichidă pentru gătit" },
            { value: 3, unit: "linguri", name: "ulei de măsline" },
            { value: 0.25, unit: "linguriță", name: "nucșoară măcinată" },
            { value: null, unit: "", name: "Sare și piper negru" },
            { value: 50, unit: "g", name: "semințe de dovleac" }
        ],
        utensils: [
            "Oală mare pentru supă",
            "Tavă de copt și hârtie de copt",
            "Blender vertical",
            "Cuțit și tocător"
        ],
        steps: [
            { title: "Coacerea", text: "Preîncălzește cuptorul la 200°C. Coace dovleacul și cartoful tăiat cuburi mari cu sare, piper și ulei de măsline timp de 25-30 de minute." },
            { title: "Călire", text: "Călește ceapa și usturoiul tocate mărunt într-o oală mare cu o lingură de ulei de măsline până devin sticloase." },
            { title: "Fierberea legumelor", text: "Adaugă dovleacul și cartoful coapte în oală, toarnă supa caldă de legume și fierbe 5-7 minute." },
            { title: "Pasarea", text: "Ia de pe foc și pasează cu blenderul vertical până obții o textură fină și cremoasă." },
            { title: "Finalizare", text: "Adaugă smântâna lichidă de gătit, nucșoara și potrivește gustul cu sare și piper. Servește cu semințe de dovleac rumenite în tigaie." }
        ]
    },
    {
        id: "ciorba-burta",
        title: "Ciorbă de burtă ca la restaurant",
        desc: "O ciorbă tradițională românească bogată și cremoasă, acrită optim, cu usturoi din belșug, gălbenușuri de ou și fâșii fragede de burtă.",
        category: "Supe",
        difficulty: "Dificil",
        duration: 90,
        servings: 6,
        image: "https://images.unsplash.com/photo-1547592165-e1d17f97a55c?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 1, unit: "kg", name: "burtă de vită prefiartă fâșii" },
            { value: 1, unit: "kg", name: "oase de vită cu măduvă (pentru stoc)" },
            { value: 1, unit: "buc", name: "țelină mică, morcov și păstârnac" },
            { value: 2, unit: "buc", name: "ceapă galbenă" },
            { value: 400, unit: "g", name: "smântână fermentată grasă (minim 25%)" },
            { value: 4, unit: "buc", name: "gălbenușuri" },
            { value: 1, unit: "căpățână", name: "usturoi zdrobit" },
            { value: 50, unit: "ml", name: "oțet (sau după gust)" },
            { value: 1, unit: "borcan", name: "gogoșari în oțet fâșii" }
        ],
        utensils: [
            "Oală foarte mare (5-6 litri)",
            "Sită mare",
            "Bol mare pentru dres ciorba"
        ],
        steps: [
            { title: "Supa de oase", text: "Fierbe oasele de vită în apă cu sare, spumuind constant. Adaugă legumele întregi (ceapa, morcovul, țelina, păstârnacul) și fierbe-le timp de 1.5 ore pentru a obține o supă bogată." },
            { title: "Fierberea burții", text: "Strecoară supa de oase într-o oală curată. Aruncă legumele fierte și oasele. Pune supa înapoi pe foc, adaugă burta tăiată fâșii fine și fierbe 30-40 de minute până când este extrem de moale." },
            { title: "Mujdeiul și gogoșarii", text: "Adaugă fâșiile de gogoșari în oțet. Pregătește mujdeiul de usturoi frecat cu puțină sare și apă caldă și adaugă-l în ciorbă." },
            { title: "Dregerea ciorbei", text: "Într-un bol mare, amestecă smântâna cu gălbenușurile. Ia treptat polonice din supa fierbinte din oală și toarnă-le peste smântână, amestecând continuu (temperare). Când compoziția este caldă, toarn-o în oală." },
            { title: "Asezonarea", text: "Oprește focul imediat (să nu se taie ouăle). Adaugă oțetul după gust și servește cu ardei iute și mujdei suplimentar." }
        ]
    },
    {
        id: "ciorba-radauteana",
        title: "Ciorbă Rădăuțeană",
        desc: "O alternativă fină la ciorba de burtă. Bucăți fragede de piept de pui într-o supă densă și catifelată cu smântână, usturoi și oțet.",
        category: "Supe",
        difficulty: "Mediu",
        duration: 60,
        servings: 6,
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 600, unit: "g", name: "piept de pui cu os sau pulpe" },
            { value: 2, unit: "buc", name: "morcovi" },
            { value: 1, unit: "buc", name: "rădăcină de păstârnac" },
            { value: 1, unit: "buc", name: "ceapă galbenă" },
            { value: 1, unit: "buc", name: "ardei gras roșu" },
            { value: 300, unit: "g", name: "smântână grasă (minim 25%)" },
            { value: 3, unit: "buc", name: "gălbenușuri" },
            { value: 1, unit: "căpățână", name: "usturoi" },
            { value: 3, unit: "linguri", name: "oțet de mere sau zeamă de lămâie" }
        ],
        utensils: [
            "Oală de supă (4 litri)",
            "Tocător și cuțit",
            "Bol mare"
        ],
        steps: [
            { title: "Fierberea puiului", text: "Pune puiul la fiert în apă rece cu puțină sare. Îndepărtează spuma care se formează la suprafață." },
            { title: "Adăugarea legumelor", text: "Când nu mai se formează spumă, adaugă legumele întregi curățate (morcovii, ceapa, păstârnacul, ardeiul). Fierbe totul până când carnea și legumele sunt bine fierte." },
            { title: "Procesarea cărnii", text: "Scoate carnea și legumele din oală. Desosează carnea și rupe pieptul de pui în fâșii subțiri cu mâna sau taie-l cubulețe. Rade un morcov fiert fin (pentru culoare), iar restul legumelor pasează-le fin sau aruncă-le." },
            { title: "Asamblarea supei", text: "Pune carnea fâșii și morcovul ras înapoi în oala cu stocul strecurat. Adaugă usturoiul pisat mărunt." },
            { title: "Dregerea", text: "Mixează gălbenușurile cu smântâna într-un bol. Temperează sosul adăugând stoc fierbinte puțin câte puțin, apoi toarnă-l în oală. Pune oțetul, potrivește de sare și oprește focul." }
        ]
    },
    {
        id: "supa-taiței",
        title: "Supă de pui cu tăiței de casă",
        desc: "Limpede, aurie și plină de arome naturale. Clasic, cald și hrănitor, preparat cu legume proaspete și tăiței fini de casă preparați cu ou.",
        category: "Supe",
        difficulty: "Mediu",
        duration: 75,
        servings: 4,
        image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 700, unit: "g", name: "carne de pui de țară (pulpe sau spinări)" },
            { value: 2, unit: "buc", name: "cepe galbene" },
            { value: 3, unit: "buc", name: "morcovi medii" },
            { value: 1, unit: "buc", name: "rădăcină mică de țelină" },
            { value: 1, unit: "buc", name: "ou (pentru tăiței)" },
            { value: 100, unit: "g", name: "făină albă (pentru tăiței)" },
            { value: 0.5, unit: "legătură", name: "pătrunjel proaspăt tocat" }
        ],
        utensils: [
            "Oală adâncă de 4 litri",
            "Făcăleț (pentru întins aluatul de tăiței)",
            "Spumieră"
        ],
        steps: [
            { title: "Fierberea lentă", text: "Fierbe puiul în apă rece la foc foarte mic. Spumuiește constant pentru ca supa să rămână clară. Las-o să fiarbă încet 40 de minute." },
            { title: "Tăițeii de casă", text: "Bate oul cu un praf de sare și încorporează făina treptat până obții un aluat foarte ferm. Întinde-l cu făcălețul într-o foaie extrem de subțire. Las-o să se usuce 15 minute, apoi ruleaz-o și tai-o fâșii extrem de fine." },
            { title: "Legumele", text: "Adaugă morcovii întregi sau tăiați rondele mari, cepele întregi și țelina în oală. Fierbe încă 25-30 de minute până când toate legumele sunt moi." },
            { title: "Gătirea tăițeilor", text: "Strecoară supa (opțional, pentru claritate perfectă), pune bucățile de morcov și pui înapoi, apoi pune tăițeii scuturați de făină. Fierbe-i timp de exact 3-4 minute, deoarece sunt proaspeți." },
            { title: "Finalizare", text: "Oprește focul, pune capacul și las-o să se odihnească 5 minute. Presară pătrunjelul proaspăt tocat chiar înainte de servire." }
        ]
    },
    {
        id: "ciorba-vacuta",
        title: "Ciorbă de văcuță",
        desc: "O ciorbă românească tradițională, acrită cu borș, plină de legume colorate și bucăți de carne de vită fragede și gustoase.",
        category: "Supe",
        difficulty: "Mediu",
        duration: 90,
        servings: 6,
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 500, unit: "g", name: "carne de vită (pulpă sau rasol)" },
            { value: 1, unit: "buc", name: "ceapă galbenă" },
            { value: 2, unit: "buc", name: "morcovi" },
            { value: 2, unit: "buc", name: "cartofi mari (tăiați cuburi)" },
            { value: 100, unit: "g", name: "mazăre verde (conservă sau congelată)" },
            { value: 100, unit: "g", name: "fasole verde tăiată" },
            { value: 2, unit: "linguri", name: "pastă de roșii concentrată" },
            { value: 500, unit: "ml", name: "borș proaspăt (sau zeamă de lămâie)" },
            { value: 0.5, unit: "legătură", name: "leuștean proaspăt tocat" }
        ],
        utensils: [
            "Oală de 4 litri",
            "Tocător și cuțit"
        ],
        steps: [
            { title: "Vită la fiert", text: "Taie carnea de vită în cubulețe mici. Pune-o la fiert în apă rece cu sare și spumuiește des. Las-o să fiarbă până când carnea este aproape moale (aproximativ 50-60 minute)." },
            { title: "Călire legume", text: "Călește ceapa și morcovul tocate mărunt într-o tigaie cu o lingură de ulei timp de 3 minute, apoi adaugă-le în oală." },
            { title: "Adăugare legume verzi", text: "Pune cartofii cuburi, mazărea, fasolea verde și pasta de roșii în ciorbă. Lasă să fiarbă la foc mediu 15-20 de minute până cartofii sunt fierți." },
            { title: "Acrirea", text: "Fierbe borșul separat într-o cratiță mică, apoi toarnă-l fierbinte în oală. Potrivește gustul cu sare." },
            { title: "Leușteanul", text: "Mai lasă ciorba să dea în clocot 2 minute. Oprește focul și adaugă leușteanul proaspăt tocat care îi va da aroma autentică." }
        ]
    },
    {
        id: "supa-ciuperci",
        title: "Supă cremă de ciuperci",
        desc: "O supă deosebit de cremoasă, cu un gust bogat de ciuperci de pădure și usturoi, perfect completată de crutoane crocante.",
        category: "Supe",
        difficulty: "Ușor",
        duration: 30,
        servings: 4,
        image: "https://images.unsplash.com/photo-1547592165-e1d17f97a55c?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 500, unit: "g", name: "ciuperci champignon albe sau brune" },
            { value: 100, unit: "g", name: "ciuperci hribi (congelate sau uscate, pentru aromă)" },
            { value: 1, unit: "buc", name: "ceapă galbenă mare" },
            { value: 1, unit: "buc", name: "cartof mediu (pentru amidon)" },
            { value: 2, unit: "căței", name: "usturoi" },
            { value: 50, unit: "g", name: "unt" },
            { value: 500, unit: "ml", name: "supă caldă de legume" },
            { value: 150, unit: "ml", name: "smântână lichidă de gătit" },
            { value: null, unit: "", name: "Sare, piper și cimbru uscat" }
        ],
        utensils: [
            "Oală medie",
            "Blender vertical",
            "Tocător și cuțit"
        ],
        steps: [
            { title: "Călire", text: "Topște untul într-o oală. Adaugă ceapa și usturoiul tocate mărunt și călește-le 3 minute până devin translucide." },
            { title: "Ciupercile și cartoful", text: "Adaugă ciupercile curățate și tăiate felii mari, cuburile de cartof și cimbrul. Gătește-le 8-10 minute până când scade sucul lăsat de ciuperci." },
            { title: "Fierberea", text: "Toarnă supa de legume caldă și lasă totul să fiarbă la foc mediu timp de 15 minute, până cartoful este foarte moale." },
            { title: "Paseul", text: "Ia oala de pe foc și pasează compoziția cu blenderul vertical până când obții o textură fină și catifelată." },
            { title: "Finalizare", text: "Pune din nou pe foc mic, toarnă smântâna lichidă de gătit, potrivește cu sare și mult piper negru. Servește fierbinte." }
        ]
    },
    {
        id: "ciorba-perisoare",
        title: "Ciorbă de perișoare tradițională",
        desc: "O ciorbă acrișoară cu borș și legume, îmbogățită cu perișoare pufoase din carne de porc și vită amestecate cu orez.",
        category: "Supe",
        difficulty: "Mediu",
        duration: 60,
        servings: 6,
        image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 400, unit: "g", name: "carne tocată amestec (porc + vită)" },
            { value: 50, unit: "g", name: "orez spălat" },
            { value: 1, unit: "buc", name: "ou (pentru perișoare)" },
            { value: 2, unit: "buc", name: "cepe galbene" },
            { value: 2, unit: "buc", name: "morcovi" },
            { value: 1, unit: "buc", name: "ardei gras" },
            { value: 150, unit: "g", name: "roșii decojite în suc propriu" },
            { value: 500, unit: "ml", name: "borș clasic" },
            { value: 0.5, unit: "legătură", name: "leuștean proaspăt" }
        ],
        utensils: [
            "Oală de 4 litri",
            "Bol pentru compoziția de carne",
            "Linguriță"
        ],
        steps: [
            { title: "Baza de legume", text: "Toacă ceapa, morcovii și ardeiul gras mărunt. Pune-le la fiert în apă cu puțină sare într-o oală mare timp de 15 minute." },
            { title: "Compoziția perișoarelor", text: "Într-un bol, amestecă carnea tocată cu orezul spălat bine, o ceapă tocată foarte fin, oul întreg, sare, piper și o lingură de făină. Frământă bine compoziția." },
            { title: "Modelarea perișoarelor", text: "Umezește-ți mâinile cu apă rece. Formează perișoare rotunde, de dimensiunea unei nuci mici." },
            { title: "Gătirea perișoarelor", text: "Redu focul oalei la minim (apa trebuie doar să fremete, să nu clocotească tare, ca să nu se spargă perișoarele). Pune perișoarele una câte una. Lasă-le să fiarbă 25 de minute (se vor ridica la suprafață când sunt aproape gata)." },
            { title: "Acrirea și aromele", text: "Adaugă roșiile tocate și borșul fiert în prealabil. Lasă să mai clocotească 5 minute, potrivește gustul de sare și oprește focul. Presară leușteanul proaspăt." }
        ]
    },
    {
        id: "supa-rosii",
        title: "Supă cremă de roșii cu busuioc",
        desc: "O supă de vară mediteraneană, simplă și vibrantă, preparată din roșii coapte bine aromatizate cu usturoi și busuioc proaspăt.",
        category: "Vegetarian",
        difficulty: "Ușor",
        duration: 25,
        servings: 2,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 800, unit: "g", name: "roșii decojite în suc propriu (2 conserve)" },
            { value: 1, unit: "buc", name: "ceapă roșie medie" },
            { value: 3, unit: "căței", name: "usturoi feliat" },
            { value: 2, unit: "linguri", name: "ulei de măsline extra virgin" },
            { value: 200, unit: "ml", name: "supă de legume sau apă caldă" },
            { value: 1, unit: "mână", name: "frunze de busuioc proaspăt" },
            { value: 1, unit: "linguriță", name: "zahăr (pentru a tăia aciditatea)" },
            { value: null, unit: "", name: "Sare și piper negru proaspăt măcinat" }
        ],
        utensils: [
            "Oală medie",
            "Blender vertical",
            "Tocător"
        ],
        steps: [
            { title: "Călire", text: "Încinge uleiul de măsline în oală. Călește ceapa roșie și usturoiul tocate timp de 3-4 minute până se înmoaie și devin aromate." },
            { title: "Fierbere", text: "Adaugă roșiile din conservă cu tot cu suc, zahărul, sarea, piperul și supa de legume. Lasă să dea în clocot, apoi redu focul și fierbe 15 minute." },
            { title: "Busuiocul", text: "Ia oala de pe foc. Adaugă frunzele de busuioc proaspăt spălate." },
            { title: "Paseul", text: "Pasează supa cu blenderul vertical până devine catifelată și spumoasă." },
            { title: "Servirea", text: "Servește caldă cu un strop de ulei de măsline deasupra și crutoane cu usturoi." }
        ]
    },
    {
        id: "ciorba-legume",
        title: "Ciorbă de legume rustică",
        desc: "O ciorbă de post extrem de bogată în vitamine, plină de legume proaspete de grădină și aromatizată cu leuștean și pătrunjel.",
        category: "Vegetarian",
        difficulty: "Ușor",
        duration: 40,
        servings: 4,
        image: "https://images.unsplash.com/photo-1620418029653-9d412e616f73?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 1, unit: "buc", name: "ceapă galbenă" },
            { value: 2, unit: "buc", name: "morcovi tăiați cubulețe" },
            { value: 1, unit: "buc", name: "dovlecel mediu" },
            { value: 2, unit: "buc", name: "cartofi medii" },
            { value: 100, unit: "g", name: "mazăre verde" },
            { value: 100, unit: "g", name: "fasole verde" },
            { value: 200, unit: "g", name: "roșii decojite" },
            { value: 500, unit: "ml", name: "borș pentru acrit" },
            { value: null, unit: "", name: "Pătrunjel și leuștean verde tocate" }
        ],
        utensils: [
            "Oală mare de 4 litri",
            "Tocător și cuțit"
        ],
        steps: [
            { title: "Călire legume de bază", text: "Pune ceapa și morcovii tocate la călit cu o lingură de ulei direct în oala de ciorbă timp de 3 minute." },
            { title: "Fierbere", text: "Adaugă cartofii cuburi, dovlecelul tăiat bucăți, mazărea, fasolea verde și acoperă cu 2 litri de apă. Fierbe 20 de minute." },
            { title: "Roșiile", text: "Pune roșiile tocate și potrivește gustul cu sare. Mai lasă la fiert 5 minute." },
            { title: "Acrirea", text: "Toarnă borșul fiert în prealabil și lasă ciorba să mai clocotească 3 minute." },
            { title: "Arome", text: "Oprește focul și adaugă verdeața proaspătă tocată. Lasă oala acoperită 10 minute înainte de servire." }
        ]
    },
    {
        id: "supa-broccoli-cheddar",
        title: "Supă cremă de broccoli cu Cheddar",
        desc: "O supă bogată și cremoasă, cu infuzie fină de broccoli proaspăt și brânză Cheddar maturată topită, caldă și savuroasă.",
        category: "Vegetarian",
        difficulty: "Ușor",
        duration: 30,
        servings: 4,
        image: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?auto=format&fit=crop&w=800&q=80",
        ingredients: [
            { value: 500, unit: "g", name: "buchețele de broccoli proaspăt" },
            { value: 1, unit: "buc", name: "ceapă galbenă tocată" },
            { value: 1, unit: "buc", name: "morcov mediu ras" },
            { value: 2, unit: "căței", name: "usturoi zdrobit" },
            { value: 50, unit: "g", name: "unt" },
            { value: 2, unit: "linguri", name: "făină albă" },
            { value: 500, unit: "ml", name: "supă clară de legume" },
            { value: 200, unit: "ml", name: "lapte dulce" },
            { value: 200, unit: "g", name: "brânză Cheddar maturată (rasă)" },
            { value: null, unit: "", name: "Sare, piper și nucșoară măcinată" }
        ],
        utensils: [
            "Oală adâncă",
            "Tel",
            "Blender (opțional, pentru o textură extra-fină)"
        ],
        steps: [
            { title: "Călire", text: "Topește untul în oală la foc mediu. Călește ceapa, usturoiul și morcovul ras timp de 4-5 minute până sunt moi." },
            { title: "Baza de sos", text: "Adaugă făina și amestecă constant cu telul timp de 1-2 minute pentru a prăji făina. Toarnă treptat supa de legume și laptele cald, amestecând continuu pentru a evita cocoloașele." },
            { title: "Broccoli la fiert", text: "Adaugă buchețelele de broccoli în oală. Pune un praf de nucșoară, sare și piper. Redu focul la mediu-mic și fierbe 15 minute, până când broccoli este foarte moale." },
            { title: "Brânza Cheddar", text: "Oprește focul (extrem de important pentru ca brânza să nu se separe). Adaugă Cheddarul ras treptat, amestecând constant până se topește complet din căldura reziduală." },
            { title: "Textura", text: "Pentru o textură ultra-fină, poți pasa parțial sau total supa cu blenderul vertical. Servește caldă." }
        ]
    },

    // ==========================================
    // ALTE PREPARATE
    // ==========================================
    {
        id: "burger-gourmet",
        title: "Burger de vită gourmet",
        desc: "Un burger suculent, exact ca în restaurantele premium. Secretul constă în calitatea cărnii și în tehnica corectă de prăjire pe tigaie fierbinte.",
        category: "Fel Principal",
        difficulty: "Mediu",
        duration: 30,
        servings: 2,
        image: "assets/burger.png",
        ingredients: [
            { value: 400, unit: "g", name: "carne tocată de vită (ideal Black Angus)" },
            { value: 2, unit: "buc", name: "chifle tip Brioche pufoase" },
            { value: 2, unit: "felii", name: "brânză Cheddar" },
            { value: 4, unit: "felii", name: "bacon afumat" },
            { value: 1, unit: "buc", name: "ceapă roșie" },
            { value: 1, unit: "buc", name: "roșie mare" },
            { value: 4, unit: "frunze", name: "salată verde" },
            { value: 2, unit: "linguri", name: "sos burger" },
            { value: 10, unit: "g", name: "unt" },
            { value: null, unit: "", name: "Sare grunjoasă și piper" }
        ],
        utensils: [
            "Tigaie din fontă",
            "Spatulă metalică lată",
            "Tocător și cuțit"
        ],
        steps: [
            { title: "Pregătire chiftele", text: "Împarte carnea în două și formează chiftelele, mai late decât chiflele cu 1.5 cm. Pune-le la rece 15 minute." },
            { title: "Prăjire chifle și bacon", text: "Rumenește feliile de bacon în tigaie, apoi prăjește chiflele tăiate în două, unse cu unt." },
            { title: "Prăjirea cărnii", text: "Încinge tigaia la maxim. Presară sare și piper pe carne și pune-o la prăjit 3-4 minute pe prima parte." },
            { title: "Topire brânză", text: "Întoarce carnea, pune Cheddarul deasupra și acoperă tigaia 1-2 minute pentru a se topi perfect. Lasă carnea să stea 3 minute pe o farfurie caldă." },
            { title: "Asamblare", text: "Unge chifla cu sos, pune salata, roșia, chifteaua cu Cheddar, baconul crocant, ceapa roșie feliată și acoperă cu chifla superioară." }
        ]
    },
    {
        id: "salata-quinoa",
        title: "Salată vegană cu quinoa și avocado",
        desc: "O salată extrem de sănătoasă, bogată în proteine vegetale și grăsimi sănătoase. O explozie de prospețime ideală ca prânz rapid.",
        category: "Sănătos",
        difficulty: "Ușor",
        duration: 20,
        servings: 2,
        image: "assets/salata_quinoa.png",
        ingredients: [
            { value: 100, unit: "g", name: "quinoa" },
            { value: 1, unit: "buc", name: "avocado copt" },
            { value: 150, unit: "g", name: "roșii cherry" },
            { value: 1, unit: "buc", name: "castravete" },
            { value: 50, unit: "g", name: "măsline Kalamata feliate" },
            { value: 2, unit: "linguri", name: "ulei de măsline" },
            { value: 0.5, unit: "buc", name: "suc de lămâie" },
            { value: 0.5, unit: "legătură", name: "pătrunjel verde" },
            { value: null, unit: "", name: "Sare și piper" }
        ],
        utensils: [
            "Cratiță mică",
            "Bol mare de salată",
            "Tocător și cuțit"
        ],
        steps: [
            { title: "Fierberea quinoa", text: "Spală bine quinoa. Pune-o la fiert cu 200ml de apă și puțină sare timp de 12-15 minute, apoi las-o să se răcească." },
            { title: "Tăierea legumelor", text: "Taie roșiile cherry în jumătăți, castravetele în cuburi și avocado în cubulețe (stropește avocado cu lămâie)." },
            { title: "Amestecul", text: "Pune quinoa răcită în bol, adaugă legumele, măslinele și pătrunjelul tocat." },
            { title: "Dressingul", text: "Toarnă uleiul de măsline, restul de suc de lămâie, sarea și piperul după gust. Amestecă fin." },
            { title: "Decor", text: "Adaugă cuburile de avocado deasupra chiar înainte de a servi salata." }
        ]
    }
];
