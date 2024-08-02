dataSetVersion = "2019-11-26"; // Cambia esto al crear una nueva versión del conjunto de datos en formato YYYY-MM-DD.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Group",
        checked: true,  // La opción principal no está marcada por defecto
        key: "group",
        img: "",
        sub: [
            { name: "Morning Musume", key: "momusu", img: "MNMSMLOGO.jpg", checked: false },
            { name: "ANGERME", key: "angerme", img: "ANGMLOGO.jpg", checked: false },
            { name: "Juice=Juice", key: "juice", img: "JCJCLOGO.jpg", checked: false },
            { name: "Tsubaki Factory", key: "tsubaki", img: "TBKFTRLOGO.jpg", checked: false },
            { name: "BEYOOOOONDS", key: "beyond", img: "BYNDSLOGO.jpg", checked: false },
            { name: "OCHA NORMA", key: "ocha", img: "OCNMLOGO.jpg", checked: false },
            { name: "°C-ute", key: "cute", img: "CUTELOGO.jpg", checked: false },
            { name: "Berryz Koubou", key: "berryz", img: "BRKBLOGO.jpg", checked: false },
            { name: "Kobushi Factory", key: "kobushi", img: "KBSFTRLOGO.jpg", checked: false },
            { name: "Country Girls", key: "country", img: "CTGRLSLOGO.jpg", checked: false }
        ]
    },
    {
        name: "Include:",
        checked: true,  // La opción principal no está marcada por defecto
        key: "include",
        img: "",
        sub: [
            { name: "A Sides", key: "aside", img: "", checked: true },
            { name: "Indie songs", key: "indiesong", img: "", checked: false },
            { name: "Digital songs", key: "digitalsong", img: "", checked: false },
            { name: "Album songs", key: "album", img: "", checked: false },
            { name: "2024 songs", key: "2024", img: "", checked: false }
        ]
    }
];


dataSet[dataSetVersion].characterData = [

    /* MORNING MUSUME */

    //Indie Songs
    { name: "Ai no Tane", img: "MNMSMISA00.jpg", opts: { group: ["momusu"], include: ["indiesong"] } },

    //A Side
    { name: "Morning Coffee", img: "MNMSMISA01.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Summer Night Town", img: "MNMSMISA02.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Daite HOLD ON ME!", img: "MNMSMISA03.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Memory Seishun no Hikari", img: "MNMSMISA04.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Manatsu no Kousen", img: "MNMSMISA05.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Furusato", img: "MNMSMISA06.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "LOVE Machine", img: "MNMSMISA07.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Koi no Dance Site", img: "MNMSMISA08.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Happy Summer Wedding", img: "MNMSMISA09.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "I WISH", img: "MNMSMISA10.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Ren'ai Revolution 21", img: "MNMSMISA11.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "The☆Peace!", img: "MNMSMISA12.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Mr.Moonlight ~Ai no Big Band~", img: "MNMSMISA13.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Souda! We're ALIVE", img: "MNMSMISA14.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Do it! Now", img: "MNMSMISA15.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Koko ni Iruzee!", img: "MNMSMISA16.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Morning Musume no Hyokkori Hyoutanjima", img: "MNMSMISA17.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "AS FOR ONE DAY", img: "MNMSMISA18.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Shabondama", img: "MNMSMISA19.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Go Girl ~Koi no Victory~", img: "MNMSMISA20.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Ai Araba IT'S ALL RIGHT", img: "MNMSMISA21.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Roman ~MY DEAR BOY~", img: "MNMSMISA22.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Joshi Kashimashi Monogatari", img: "MNMSMISA23.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Namida ga Tomaranai Houkago", img: "MNMSMISA24.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "THE Manpower!!", img: "MNMSMISA25.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Osaka Koi no Uta", img: "MNMSMISA26.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Iroppoi Jirettai", img: "MNMSMISA27.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Chokkan ~Nogashita Sakana wa Ookiizo!~", img: "MNMSMISA28.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "SEXY BOY ~Soyokaze ni Yorisotte~", img: "MNMSMISA29.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Ambitious! Yashinteki de Ii jan", img: "MNMSMISA30.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Aruiteru", img: "MNMSMISA31.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Egao YES Nude", img: "MNMSMISA32.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Kanashimi Twilight", img: "MNMSMISA33.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Onna ni Sachi Are", img: "MNMSMISA34.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Mikan", img: "MNMSMISA35.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Resonant Blue", img: "MNMSMISA36.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Pepper Keibu", img: "MNMSMISA37.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Naichau Kamo", img: "MNMSMISA38.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Shouganai Yume Oibito", img: "MNMSMISA39.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Nanchatte Ren'ai", img: "MNMSMISA40.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Kimagure Princess", img: "MNMSMISA41.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Onna ga Medatte Naze Ikenai", img: "MNMSMISA42.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Seishun Collection", img: "MNMSMISA43.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Onna to Otoko no Lullaby Game", img: "MNMSMISA44.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Maji Desu ka Ska!", img: "MNMSMISA45.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Only you", img: "MNMSMISA46.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Kono Chikyuu no Heiwa wo Honki de Negatterun da yo!", img: "MNMSMISA47.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Pyocopyoco Ultra", img: "MNMSMISA48.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Ren'ai Hunter", img: "MNMSMISA49.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "One・Two・Three", img: "MNMSMISA50.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "The Matenrou Show", img: "MNMSMISA51.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Wakuteka Take a chance", img: "MNMSMISA52.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Help me!!", img: "MNMSMISA53.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Brainstorming", img: "MNMSMISA54.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Kimi Sae Ireba Nani mo Iranai", img: "MNMSMISA55.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Wagamama Ki no Mama Ai no Joke", img: "MNMSMISA56.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Ai no Gundan", img: "MNMSMISA57.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Egao no Kimi wa Taiyou sa", img: "MNMSMISA58.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Kimi no Kawari wa Iyashinai", img: "MNMSMISA59.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "What is LOVE?", img: "MNMSMISA60.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Toki wo Koe Sora wo Koe", img: "MNMSMISA61.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Password is 0", img: "MNMSMISA62.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "TIKI BUN", img: "MNMSMISA63.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Shabadaba Doo~", img: "MNMSMISA64.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Mikaeri Bijin", img: "MNMSMISA65.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Seishun Kozou ga Naiteiru", img: "MNMSMISA66.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Yuugure wa Ameagari", img: "MNMSMISA67.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Ima Koko Kara", img: "MNMSMISA68.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Oh my wish!", img: "MNMSMISA69.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Sukatto My Heart", img: "MNMSMISA70.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Imasugu Tobikomu Yuuki", img: "MNMSMISA71.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Tsumetai Kaze to Kataomoi", img: "MNMSMISA72.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ENDLESS SKY", img: "MNMSMISA73.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "One and Only", img: "MNMSMISA74.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Utakata Saturday Night!", img: "MNMSMISA75.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "The Vision", img: "MNMSMISA76.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Tokyo to Iu Katasumi", img: "MNMSMISA77.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Sexy Cat no Enzetsu", img: "MNMSMISA78.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Mukidashi de Mukiatte", img: "MNMSMISA79.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Sou ja nai", img: "MNMSMISA80.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "BRAND NEW MORNING", img: "MNMSMISA81.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Jealousy Jealousy", img: "MNMSMISA82.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Jama Shinai de Here We Go!", img: "MNMSMISA83.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Dokyuu no Go Sign", img: "MNMSMISA84.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Wakain da shi!", img: "MNMSMISA85.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Are you Happy?", img: "MNMSMISA86.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "A gonna", img: "MNMSMISA87.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Furari Ginza", img: "MNMSMISA88.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Jiyuu na Kuni Dakara", img: "MNMSMISA89.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Jinsei Blues", img: "MNMSMISA90.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Seishun Night", img: "MNMSMISA91.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "KOKORO&KARADA", img: "MNMSMISA92.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "LOVEpedia", img: "MNMSMISA93.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Ningen Kankei No way way", img: "MNMSMISA94.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Junjou Evidence", img: "MNMSMISA95.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Gyuusaretai Dake na no ni", img: "MNMSMISA96.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Teenage Solution", img: "MNMSMISA97.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Yoshi Yoshi Shite Hoshii no", img: "MNMSMISA98.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Beat no Wakusei", img: "MNMSMISA99.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Chu Chu Chu Bokura no Mirai", img: "MNMSMISA100.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Dai・Jinsei Never Been Better!", img: "MNMSMISA101.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Swing Swing Paradise", img: "MNMSMISA102.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Happy birthday to Me!", img: "MNMSMISA103.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Suggoi FEVER!", img: "MNMSMISA104.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Wake-up Call ~Mezameru Toki~", img: "MNMSMISA105.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Neverending Shine", img: "MNMSMISA106.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Nandaka Sentimental na Toki no Uta", img: "MNMSMISA107.jpg", opts: { group: ["momusu"], include: ["aside", "2024"] } },
    { name: "SaiKIYOU.", img: "MNMSMISA108.jpg", opts: { group: ["momusu"], include: ["aside", "2024"] } },

    //Digital Songs
    { name: "Gosenfu no Tasuki", img: "MNMSMDS01.jpg", opts: { group: ["momusu"], include: ["digitalsong"] } },
    { name: "Hana ga Saku Taiyou Abite", img: "MNMSMDS02.jpg", opts: { group: ["momusu"], include: ["digitalsong"] } },

    //Albums

    // First Time
    { name: "Good Morning", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Dounika Shite Doyoubi", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Yume no Naka", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Wagamama", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Mirai no Tobira", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Usotsuki Anta", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Samishii Hi", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // Second Morning
    { name: "NIGHT OF TOKYO CITY", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Suki de ×5", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Papa ni Niteiru Kare", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Senkou Hanabi", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Otome no Shinrigaku", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Da Di Du De Do Da Di!", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 3rd -LOVE Paradise-
    { name: "~Ohayou~", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Aisha Loan de", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Kuchizuke no Sono Ato", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Lunchtime ~Rebanira Itame~", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "DANCE Suru no da!", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Omoide", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Harajuku 6:00 Shuugou", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "WHY", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "...Suki da yo!", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "~Oyasumi~", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 4th "Ikimasshoi!"
    { name: "Ii Koto Aru Kinen no Shunkan", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Hajimete no Rock Concert", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Otoko Tomodachi", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Ikimasshoi!", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Densha no Futari", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Honki de Atsui Theme Song", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Suki na Senpai", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Nanni mo Iwazu ni I LOVE YOU", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // No.5
    { name: "TOP!", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Tomodachi ga Ki ni Itteru Otoko Kara no Dengon", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Suggoi Nakama", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Tsuyoki de Yukou ze!", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Megami ~Mousse na Yasashisa~ (Original Long Ver.)", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "YES! POCKY GIRLS (Original Long Ver.)", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Sugoku Suki na no ni...ne", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Sotsugyou Ryokou ~Morning Musume Tabidatsu Hito ni Okuru Uta~", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // Ai no Dai 6kan
    { name: "Sukiyaki", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Haru no Uta", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Chokkan ~Toki to Shite Koi wa~", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Dokusenyoku", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Lemon Iro to Milk Tea", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Koe", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "HELP!!", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "SHIP! TO THE FUTURE", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // Rainbow 7
    { name: "HOW DO YOU LIKE JAPAN? ~Nihon wa Donna Kanji Dekka?~", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Aozora ga Itsumademo Tsudzuku You na Mirai de Are!", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "INDIGO BLUE LOVE", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Rainbow Pink", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Mushoku Toumei na Mama de", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Purple Wind", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Sayonara SEE YOU AGAIN Adios BYE BYE Chaccha!", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // SEXY 8 BEAT
    { name: "Genki+", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Mirai no Taiyou", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Haru Beautiful Everyday", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Sono Deai no Tame ni", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Shanimuni Paradise", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Takara no Hako", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "BE Positive!", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // Platinum 9 DISC
    { name: "SONGS", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Ame no Furanai Hoshi de wa Aisenai Darou?", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Take off is now!", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Watashi no Miryoku ni Kizukanai Donkan na Hito", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Guruguru JUMP", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Jounetsu no Kiss wo Hitotsu", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "It's You", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Kataomoi no Owari ni", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // ⑩ MY ME
    { name: "Moonlight night ~Tsukiyo no Ban da yo~", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Genki Pikappika!", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Namidacchi", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Ookii Hitomi", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Ano Hi ni Modoritai", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Osaka Umainen", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Loving you forever", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // Fantasy! Juuichi
    { name: "Bravo!", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Fantasy ga Hajimaru", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Onna Gokoro to Nanto Yara", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Ai no Honoo", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "I’m Lucky girl", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Sungoi My Birthday", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "1 Kara 10 Made Aishite Hoshii", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Itoshiku Kurushii Kono Yoru ni", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Denwa de ne", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 12, Smart
    { name: "Give me Love", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Silver no Udedokei", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Suki da na Kimi ga", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Kaiketsu Positive A", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Kono Ai wo Kasanete", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "My Way ~Joshikou Hanamichi~", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Otome no Timing", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "OK YEAH!", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // ⑬ Colorful Character
    { name: "What's Up? Ai wa Dou na no yo~", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Be Alive", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Lalala no Pipipi", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Dokka~n Capriccio", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Zero Kara Hajimaru Seishun", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Chikyuu ga Naiteiru", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Namida Hitoshizuku", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Waratte! YOU", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 14shou ~The message~
    { name: "Asu wo Tsukuru no wa Kimi", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Kirari to Hikaru Hoshi", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Koibito ni wa Zettai ni Shiraretakunai Shinjitsu", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Watashi wa Watashi Nanda", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Waraenai Hanashi", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Otona ni Nareba Otona ni Nareru", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // Thank you, too
    { name: "Romance ni Mezameru Mousou Joshi no Uta", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "CHO DAI", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Watashi no Nanni mo Wakacchanai", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Style of my love", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Narcissus Kamatte-chan Kyousoukyoku Dai 5ban", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Seishun Say A-HA", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Mou Gaman Dekinai wa ~Love ice cream~", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Koi wa Toki ni", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 16th ~That's J-POP~
    { name: "Aishite Nan ga Warui!?", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Shinjiru Shika!", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "TIME IS MONEY!", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Nakimushi My Dream", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Futari wa Abekobe", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Kono Mama!", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Hey! Unfair Baby", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Ren'ai Destiny ~Honne wo Ronjitai~", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },

    /* ANGERME */

    //Indie songs
    { name: "aMa no Jaku", img: "ANGMIS01.jpg", opts: { group: ["angerme"], include: ["indiesong"] } },
    { name: "Asu wa Date na no ni, Imasugu Koe ga Kikitai", img: "ANGMIS02.jpg", opts: { group: ["angerme"], include: ["indiesong"] } },
    { name: "Suki-chan", img: "ANGMIS03.jpg", opts: { group: ["angerme"], include: ["indiesong"] } },
    { name: "Otona ni Narutte Muzukashii!!!", img: "ANGMIS04.jpg", opts: { group: ["angerme"], include: ["indiesong"] } },

    //A Sides
    { name: "Yumemiru Fifteen", img: "ANGMMS01.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "○○ Ganbaranakutemo Eenende!!", img: "ANGMMS02.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Onaji Jikyuu de Hataraku Tomodachi no Bijin Mama", img: "ANGMMS03.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Short Cut", img: "ANGMMS04.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Koi ni Booing Buu!", img: "ANGMMS05.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Uchouten LOVE", img: "ANGMMS06.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Tachiagirl", img: "ANGMMS07.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Please Miniskirt Postwoman!", img: "ANGMMS08.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Choto Mate Kudasai!", img: "ANGMMS09.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Dot Bikini", img: "ANGMMS10.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Suki yo, Junjou Hankouki.", img: "ANGMMS11.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Samui ne.", img: "ANGMMS12.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Tabidachi no Haru ga Kita", img: "ANGMMS13.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Atarashii Watashi ni Nare!", img: "ANGMMS14.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Yattaruchan", img: "ANGMMS15.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Ee ka!?", img: "ANGMMS16.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: '"Ii Yatsu"', img: "ANGMMS17.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Mystery Night!", img: "ANGMMS18.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Eighteen Emotion", img: "ANGMMS19.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Aa Susukino", img: "ANGMMS20.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Chikyuu wa Kyou mo Ai wo Hagukumu", img: "ANGMMS21.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Taiki Bansei", img: "ANGMMS22.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Otome no Gyakushuu", img: "ANGMMS23.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Nana Korobi Ya Oki", img: "ANGMMS24.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Gashin Shoutan", img: "ANGMMS25.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Mahou Tsukai Sally", img: "ANGMMS26.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Desugita Kui wa Utarenai", img: "ANGMMS27.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Dondengaeshi", img: "ANGMMS28.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Watashi", img: "ANGMMS29.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Tsugitsugi Zokuzoku", img: "ANGMMS30.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Itoshima Distance", img: "ANGMMS31.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Koi Nara Tokku ni Hajimatteru", img: "ANGMMS32.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Umaku Ienai", img: "ANGMMS33.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Ai no Tame Kyou Made Shinka Shite Kita Ningen Ai no Tame Subete Taika Shite Kita Ningen", img: "ANGMMS34.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Wasurete Ageru", img: "ANGMMS35.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Ai Sae Areba Nanni mo Iranai", img: "ANGMMS36.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Namida Iro no Ketsui", img: "ANGMMS37.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Majokko Megu-chan", img: "ANGMMS38.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Nakenai ze・・・Kyoukan Sagi", img: "ANGMMS39.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Uraha=Lover", img: "ANGMMS40.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Kimi Dake ja nai sa...friends (2018 Acoustic Ver.)", img: "ANGMMS41.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Tade Kuu Mushi mo Like it!", img: "ANGMMS42.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "46okunen LOVE", img: "ANGMMS43.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Koi wa Accha Accha", img: "ANGMMS44.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Yumemita Fifteen", img: "ANGMMS45.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Watashi wo Tsukuru no wa Watashi", img: "ANGMMS46.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Zenzen Okiagarenai SUNDAY", img: "ANGMMS47.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Kagiriaru Moment", img: "ANGMMS48.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Mirror Mirror", img: "ANGMMS49.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Hakkiri Shiyou ze", img: "ANGMMS50.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Oyogenai Mermaid", img: "ANGMMS51.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Aisare Route A or B?", img: "ANGMMS52.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Ai・Mashou", img: "ANGMMS53.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Hade ni Yacchai na!", img: "ANGMMS54.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Aisubeki Beki Human Life", img: "ANGMMS55.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Kuyashii wa", img: "ANGMMS56.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Piece of Peace Shiawase no Puzzle", img: "ANGMMS57.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Ai no Kedamono", img: "ANGMMS58.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Dousousei", img: "ANGMMS59.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "RED LINE", img: "ANGMMS60.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Life is Beautiful!", img: "ANGMMS61.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Bibitaru Ichigeki", img: "ANGMMS62.jpg", opts: { group: ["angerme"], include: ["aside", "2024"] } },
    { name: "Uwasa no Narushii", img: "ANGMMS63.jpg", opts: { group: ["angerme"], include: ["aside", "2024"] } },
    { name: "THANK YOU, HELLO GOOD BYE", img: "ANGMMS64.jpg", opts: { group: ["angerme"], include: ["aside", "2024"] } },

    //Digital songs
    { name: "Manner Mode", img: "ANGMDS01.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },
    { name: "Kisokutadashiku Utsukushiku", img: "ANGMDS01.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },
    { name: "Kimi Dake ja nai sa...friends", img: "ANGMDS01.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },
    { name: "SHAKA SHAKA TO LOVE", img: "ANGMDS02.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },
    { name: "SHAKA SHAKA #2 LOVE Colorful Life Hen", img: "ANGMDS03.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },

    //Album

    // Warugaki ①
    { name: "Odorou yo", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Onna Bakari no Nichiyoubi", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Shooting Star", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Gakkyuu Iinchou", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Shikkari Shite yo! Mou", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },

    // Smile Sensation
    { name: "Shin・Nippon no Susume!", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Otona no Tochuu", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Tenshin Ranman", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Watashi no Kokoro", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Yuugure Koi no Jikan", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Nee Senpai", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Sayonara Sayonara Sayonara", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },

    // Rinnetenshou ~ANGERME Past, Present & Future~
    { name: "I Musou Strong!", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Akai Earphone", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Flag wo Bukkowase!", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Kaeritakunai na.", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Itoshi Itoshi to Say My Heart", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Mou Ippo", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Jinsei, Sunawachi Panta Rhei", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Kagami no Kuni no Hinekure Queen", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Kon'ya mo Suteki ni Ochitsukenai", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Natsu Shougun", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album", "digitalsong"] } },
    { name: "Watashi no Yumemita Fifteen", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },

    // BIG LOVE
    { name: "Survive~ Ikiteku Tame ni Yume wo Min da", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Bukkowashitai", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "23ji no Persona", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Nekkara Playboy", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Top!", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Sister Sister", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Maa, Ikka!", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Forever Friend", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },

    /* JUICE=JUICE */

    //Indie songs
    { name: "Watashi ga Iu Mae ni Dakishimenakya ne", img: "JCJCIS01.jpg", opts: { group: ["juice"], include: ["indiesong"] } },
    { name: "Samidare Bijo ga Samidareru", img: "JCJCIS02.jpg", opts: { group: ["juice"], include: ["indiesong"] } },

    //A Sides
    { name: "Romance no Tochuu", img: "JCJCMS01.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Watashi ga Iu Mae ni Dakishimenakya ne (MEMORIAL EDIT)", img: "JCJCMS02.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Samidare Bijo ga Samidareru (MEMORIAL EDIT)", img: "JCJCMS03.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Ijiwaru Shinai de Dakishimete yo", img: "JCJCMS04.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Hajimete wo Keiken-chuu", img: "JCJCMS05.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Hadaka no Hadaka no Hadaka no KISS", img: "JCJCMS06.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Are Kore Shitai!", img: "JCJCMS07.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Black Butterfly", img: "JCJCMS08.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Kaze ni Fukarete", img: "JCJCMS09.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Senobi", img: "JCJCMS10.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Date ja nai yo Uchi no Jinsei wa", img: "JCJCMS11.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Wonderful World", img: "JCJCMS12.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Ça va ? Ça va ?", img: "JCJCMS13.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Next is you!", img: "JCJCMS14.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Karada Dake ga Otona ni Nattan ja nai", img: "JCJCMS15.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Dream Road Kokoro ga Odoridashiteru", img: "JCJCMS16.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "KEEP ON Joshou Shikou!!", img: "JCJCMS17.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Ashita Yarou wa Bakayarou", img: "JCJCMS18.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Jidanda Dance", img: "JCJCMS19.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Feel! Kanjiru yo", img: "JCJCMS20.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "SEXY SEXY", img: "JCJCMS21.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Naite Ii yo", img: "JCJCMS22.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Vivid Midnight", img: "JCJCMS23.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Bitansan", img: "JCJCMS24.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Potsuri to", img: "JCJCMS25.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Good bye & Good luck!", img: "JCJCMS26.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "\"Hitori de Ikiraresou\" tte Sore tte Nee, Homete Iru no?", img: "JCJCMS27.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "25sai Eien Setsu", img: "JCJCMS28.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Pop Music", img: "JCJCMS29.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Suki tte Itte yo", img: "JCJCMS30.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "DOWN TOWN", img: "JCJCMS31.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Ganbarenai yo", img: "JCJCMS32.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Plastic Love", img: "JCJCMS33.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Familia", img: "JCJCMS34.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Future Smile", img: "JCJCMS35.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Zenbu Kakete GO!!", img: "JCJCMS36.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Eeny Meeny Miny Moe Koi no Rival Sengen", img: "JCJCMS37.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Pride Bright", img: "JCJCMS38.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "FUNKY FLUSHIN'", img: "JCJCMS39.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Tokyo Blur", img: "JCJCMS40.jpg", opts: { group: ["juice"], include: ["aside", "2024"] } },
    { name: "Naimono Love", img: "JCJCMS41.jpg", opts: { group: ["juice"], include: ["aside", "2024"] } },
    { name: "Oaiko", img: "JCJCMS42.jpg", opts: { group: ["juice"], include: ["aside", "2024"] } },

    //Digital songs
    { name: "Fiesta! Fiesta!", img: "JCJCDS01.jpg", opts: { group: ["juice"], include: ["digitalsong", "album"] } },

    //Albums

    // First Squeeze!
    { name: "CHOICE & CHANCE", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Ai・Ai・Gasa", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Umaretate no Baby Love", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Erabareshi Watashitachi", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "GIRLS BE AMBITIOUS", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Ai no Diving", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Tick-Tock Watashi no Shun", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Mirai e, Saa Hashiridase!", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Tsudzuiteiku STORY", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },

    // Juice=Juice#2 -¡Una más!-
    { name: "Never Never Surrender", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Jouro (Album Version)", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album", "digitalsong"] } },
    { name: "TOKYO Glider", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Synchro.", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Abarete kka?! Have a Good Time", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Sunao ni Amaete", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Goal ~Ashita wa Acchi da yo~ (Album Version)", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album", "digitalsong"] } },
    { name: "Gin'iro no Telepathy", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Kono Sekai wa Suteta mon ja nai", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Kindan Shoujo", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Otona no Jijou - NEXT YOU", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Wonderful World (2018 English Ver.)", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },

    // terzo
    { name: "GIRLS BE AMBITIOUS! 2022", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "POPPIN' LOVE", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "STAGE ~Agatte Mina~", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Mon Amour (My Love)", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Noctiluca", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "G.O.A.T.", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Ame no Naka no Kuchibue", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Platonic Planet (Ultimate Juice Ver.)", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },

    /* TSUBAKI FACTORY */

    //Indie songs
    { name: "Seishun Manmannaka!", img: "TBKFTRIS01.jpg", opts: { group: ["tsubaki"], include: ["indiesong"] } },
    { name: "Kedakaku Sakihokore!", img: "TBKFTRIS02.jpg", opts: { group: ["tsubaki"], include: ["indiesong"] } },
    { name: "Hitorijime", img: "TBKFTRIS03.jpg", opts: { group: ["tsubaki"], include: ["indiesong"] } },
    { name: "Watashi ga Obasan ni Natte mo", img: "TBKFTRIS03.jpg", opts: { group: ["tsubaki"], include: ["indiesong"] } },

    //A Sides
    { name: "Hatsukoi Sunrise", img: "TBKFTRMS01.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Just Try!", img: "TBKFTRMS02.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Uruwashi no Camellia", img: "TBKFTRMS03.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Shuukatsu Sensation", img: "TBKFTRMS04.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Waratte", img: "TBKFTRMS05.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Hana Moyou", img: "TBKFTRMS06.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Teion Yakedo", img: "TBKFTRMS07.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Shunrenka", img: "TBKFTRMS08.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "I Need You ~Yozora no Kanransha~", img: "TBKFTRMS09.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Date no Hi wa Nido Kurai Shower Shite Dekaketai", img: "TBKFTRMS10.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Junjou cm", img: "TBKFTRMS11.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Kon'ya Dake Ukaretakatta", img: "TBKFTRMS12.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Sankaime no Date Shinwa", img: "TBKFTRMS13.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Fuwari, Koi Dokei", img: "TBKFTRMS14.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Ishiki Takai Otome no Dilemma", img: "TBKFTRMS15.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Dakishimerarete Mitai", img: "TBKFTRMS16.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Dansha-ISM", img: "TBKFTRMS17.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Ima Nanji?", img: "TBKFTRMS18.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Namida no Heroine Kouban Geki", img: "TBKFTRMS19.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Garakuta DIAMOND", img: "TBKFTRMS20.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Yakusoku・Renraku・Kinenbi", img: "TBKFTRMS21.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Adrenaline Dame", img: "TBKFTRMS22.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Yowasa ja nai yo, Koi wa", img: "TBKFTRMS23.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Idol Tenshoku Ondo", img: "TBKFTRMS24.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Machigai ja nai Naitari Shinai", img: "TBKFTRMS25.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Skip・Skip・Skip", img: "TBKFTRMS26.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Kimi to Boku no Kizuna feat. KIKI", img: "TBKFTRMS27.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Yuuki It's my Life!", img: "TBKFTRMS28.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Mousou Dake Nara Freedom", img: "TBKFTRMS29.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Demo... Ii yo", img: "TBKFTRMS30.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    //{ name: "Baby Spider", img: "TBKFTRMS31.jpg", opts: { group: ["tsubaki"], include: ["aside", "2024"] } },
    //{ name: "Seishun Exabyte", img: "TBKFTRMS32.jpg", opts: { group: ["tsubaki"], include: ["aside", "2024"] } },
    //{ name: "Kodou OK?", img: "TBKFTRMS33.jpg", opts: { group: ["tsubaki"], include: ["aside", "2024"] } },

    //Albums

    // First Bloom
    { name: "Hyoumenchouryoku ~Surface Tension~", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Kanousei no Concerto", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Kaerou Let's Go!", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Yuki no Planetarium", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Happy Cracker", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Furisake Mireba...", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },

    // 2nd STEP
    { name: "Masayume", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Ai wa Ima, Ai wo Motometeru", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Saijoukyuu Story", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Hikari no Curtain", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Dakara Nannanda!", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Tarinai Mono Umete Yuku Tabi", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "Nineteen no Shinkirou", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album", "digitalsong"] } },

    // 3rd -Moment-
    { name: "Power Flower ~Ima Koso Ichigan to Nare~", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "Stay free & Stay tuned", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "Shichibuzaki no Tsuzuki", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "EZPZ!!", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "Summer Challenger", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "Amayadori no Epilogue", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "Atashi Rhythm", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "Kimi to Boku no Kizuna", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "You're My Friend feat. KIKI", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "Kacchoii Uta", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "BE", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },

    /* BEYOOOOONDS */

    //A Sides
    { name: "Megane no Otoko no Ko", img: "BYNDSMS01.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Nippon no D・N・A!", img: "BYNDSMS02.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Go Waist", img: "BYNDSMS03.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Gekikara LOVE", img: "BYNDSMS04.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Now Now Ningen", img: "BYNDSMS05.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Konna Hazu ja Nakatta!", img: "BYNDSMS06.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Eiyuu ~Waratte! Chopin Senpai~", img: "BYNDSMS07.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Hamkatsu Mokushiroku", img: "BYNDSMS08.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Motome yo... Unmei no Tabibito San", img: "BYNDSMS09.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Yume Sae Egakenai Yozora ni wa", img: "BYNDSMS10.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Hai to Diamond", img: "BYNDSMS11.jpg", opts: { group: ["beyond"], include: ["aside", "2024"] } },
    { name: "Go City Go", img: "BYNDSMS12.jpg", opts: { group: ["beyond"], include: ["aside", "2024"] } },
    { name: "Hooke no Housoku", img: "BYNDSMS13.jpg", opts: { group: ["beyond"], include: ["aside", "2024"] } },

    //Digital songs
    { name: "Furefure Everyday", img: "BYNDSDS01.jpg", opts: { group: ["beyond"], include: ["digitalsong", "album"] } },

    //Albums

    // BEYOOOOOND1St
    { name: "OOOOOVERTURE", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Atsui!", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Takanawa Gateway Eki ga Dekiru Koro ni wa", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "We Need a Name!", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Sokora no Yatsu to wa Onaji ni Saretakunai", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Kinoko Takenoko Daisenki", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Sayokyoku 'Megane no Otoko no Ko'", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Koi no O-Swing", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Gannen Bungee Jump", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Ren'ai Bugyou", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Nobishiro ~Beyond the World~", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },

    // BEYOOOOO2NDS
    { name: "Koshi Tanta Turn", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Namida no Castanet", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Hey! BEYONDA", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Never Never know ~Kome-ha to Pan-ha no Love Wars~", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Vitamin ME", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album", "digitalsong"] } },
    { name: "GOGO Daijin", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Only Lonely", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Machiawase wa JR Umeda Eki de", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Junkan", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Get Back! Vinyl Kasa no Daibouken", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },

    /* OCHA NORMA */

    //A Sides
    { name: "Koi no Crouching Start", img: "OCNMMS01.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "Omatsuri Debut da ze!", img: "OCNMMS02.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "Unmei CHACHACHACHA~N", img: "OCNMMS03.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "Uchira no Jimoto wa Chikyuu jan!", img: "OCNMMS04.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "Chotto Joucho Fuantei?... Natsu", img: "OCNMMS05.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "Ocha no Ma Mahoroba Ikoi no Ba ~Showa mo Reiwa mo Wacchawacha~", img: "OCNMMS06.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "Shekenaare", img: "OCNMMS07.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "Yoridori ME DREAM", img: "OCNMMS08.jpg", opts: { group: ["ocha"], include: ["aside"] } },

    //Digital songs
    { name: "Ramen Daisuki Koizumi-san no Uta", img: "OCNMDS01.jpg", opts: { group: ["ocha"], include: ["digitalsong"] } },

    //Albums

    //CHAnnel #1
    { name: "Uchuu Kibo de Daisuki Sengen!", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Lovey-Dovey", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Hello! Umareta Imi ga Kitto Aru (OCHA NORMA Ver.)", img: "OCNMA01.jpg", opts: { group: ["ocha", "2024"], include: ["album", "2024"] } },
    { name: "Mistake (OCHA NORMA ver.)", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "cha cha SING (2024 OCHA NORMA ver.)", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Good Luck no Munasawagi", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Nanda Kanda Everyday!", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Easy Easy", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "1/2", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Peek a Boo", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Ima ja Nakya, Kimi ja Nakya", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },

    /* °C-ute */

    //Indie songs
    { name: "Massara Blue Jeans", img: "CUTEIS01.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "Soku Dakishimete", img: "CUTEIS02.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "Ooki na Ai de Motenashite", img: "CUTEIS03.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "Wakkyanai (Z)", img: "CUTEIS04.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "Koero! Rakuten Eagles", img: "CUTEIS05.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "Akuma de Cute na Seishun Graffiti", img: "CUTEIS06.jpg", opts: { group: ["cute"], include: ["indiesong"] } },

    //A Sides
    { name: "Sakura Chirari", img: "CUTEMS01.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Meguru Koi no Kisetsu", img: "CUTEMS02.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Tokaikko Junjou", img: "CUTEMS03.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "LALALA Shiawase no Uta", img: "CUTEMS04.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Namida no Iro", img: "CUTEMS05.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Edo no Temari Uta II", img: "CUTEMS06.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "FOREVER LOVE", img: "CUTEMS07.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Bye Bye Bye!", img: "CUTEMS08.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Shochuu Omimai Moushiagemasu", img: "CUTEMS09.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "EVERYDAY Zekkouchou!!", img: "CUTEMS10.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "SHOCK!", img: "CUTEMS11.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Campus Life ~Umarete Kite Yokatta~", img: "CUTEMS12.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Dance de Bakoon!", img: "CUTEMS13.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Aitai Lonely Christmas", img: "CUTEMS14.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Kiss me Aishiteru", img: "CUTEMS15.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Momoiro Sparkling", img: "CUTEMS16.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Sekaiichi HAPPY na Onna no Ko", img: "CUTEMS17.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Kimi wa Jitensha Watashi wa Densha de Kitaku", img: "CUTEMS18.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Aitai Aitai Aitai na", img: "CUTEMS19.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Kono Machi", img: "CUTEMS20.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Crazy Kanzen na Otona", img: "CUTEMS21.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Kanashiki Amefuri", img: "CUTEMS22.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Adam to Eve no Dilemma", img: "CUTEMS23.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Tokai no Hitorigurashi", img: "CUTEMS24.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Aitte Motto Zanshin", img: "CUTEMS25.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Kokoro no Sakebi wo Uta ni Shitemita", img: "CUTEMS26.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Love take it all", img: "CUTEMS27.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "The Power", img: "CUTEMS28.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Kanashiki Heaven (Single Version)", img: "CUTEMS29.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "I miss you", img: "CUTEMS30.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "THE FUTURE", img: "CUTEMS31.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "The Middle Management ~Josei Chuukan Kanrishoku~", img: "CUTEMS32.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Gamusha LIFE", img: "CUTEMS33.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Tsugi no Kado wo Magare", img: "CUTEMS34.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Arigatou ~Mugen no Yell~", img: "CUTEMS35.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Arashi wo Okosunda Exciting Fight!", img: "CUTEMS36.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Naze Hito wa Arasoun Darou?", img: "CUTEMS37.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Summer Wind", img: "CUTEMS38.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Jinsei wa STEP!", img: "CUTEMS39.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Mugen Climax", img: "CUTEMS40.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Ai wa Maru de Seidenki", img: "CUTEMS41.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Singing ~Ano Koro no You ni~", img: "CUTEMS42.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "To Tomorrow", img: "CUTEMS43.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Final Squall", img: "CUTEMS44.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "The Curtain Rises", img: "CUTEMS45.jpg", opts: { group: ["cute"], include: ["aside"] } },

    //Albums

    // Cutie Queen VOL.1
    { name: "Time Capsule", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "EVERYDAY YEAH! Kataomoi", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "As ONE", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "YES! Shiawase", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "ENDLESS LOVE ~I Love You More~", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ② mini Ikiru to Iu Chikara
    { name: "That's the POWER", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Bokura no Kagayaki", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Disco Queen", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Tsuugaku Vector☂", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Natsu DOKI Lipstick", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },

    // 3rd LOVE Escalation!
    { name: "Image Color", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Otome COCORO", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Homerare Nobiko no Theme Kyoku", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Sweeeets→→→Live", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Hare no Platinum Doori", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Do Don ga Don Ondo", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ④ Akogare My STAR
    { name: "Akogare My STAR★", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "One's LIFE", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Yes! all my family", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Aishiteru Aishiteru", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Seishun Song", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Big dreams", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "SHINES", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Yakusoku wa Toku ni Shinai wa", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },

    // Shocking 5
    { name: "The Party!", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Aa Koi", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Lonely girl's night", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Kimi no Senpou", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Shigatsu Sengen", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Yume ga Aru Kara", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },

    // Chou WONDERFUL! ⑥
    { name: "Chou WONDERFUL!", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Midnight Temptation", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Iza, Susume! Steady go!", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Rururururu", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Wakaretakunai…", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Circle", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "3ban Home 3ryoume", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },

    // Dainana Shou "Utsukushikutte Gomen ne"
    { name: "Hitorijime Shitakatta Dake na no ni", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Yuke! Genki-kun", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Zuntaka March ~Hitorashiku Ikiyou~", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Tokai no Neon ga Odoroku Kurai no Utsukushisa ga Hoshii", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Kagayake! Houkago", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Shiawase no Tochuu", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Amazuppai Haru ni Sakura Saku", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Seishun Gekijou (℃-ute Ver.)", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ⑧ Queen of J-POP
    { name: "Bagel ni Ham & Cheese", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Namida mo Denai Kanashiku mo Nai Nan ni mo Shitakunai", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Tadori Tsuita Onna Senshi", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Nichiyoubi wa Daisuki yo", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Abiru Hodo no Ai wo Kudasai", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Watashi ga Honki wo Dasu Yoru", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ℃maj9
    { name: "℃maj9", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Iron Heart", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Otoko to Onna to Forever", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Jounetsu Ecstasy", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Digitalic→0 (LOVE)", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Urayanjau", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Yokaze no Message", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "℃maj9 (reprise)", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },

    /* Berryz Koubou */

    //A Sides
    { name: "Anata Nashide wa Ikite Yukenai", img: "BRKBMS01.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Fighting Pose wa Date ja nai!", img: "BRKBMS02.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Piriri to Yukou!", img: "BRKBMS03.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Happiness ~Koufuku Kangei!~", img: "BRKBMS04.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Koi no Jubaku", img: "BRKBMS05.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Special Generation", img: "BRKBMS06.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Nanchuu Koi wo Yatteruu YOU KNOW?", img: "BRKBMS07.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "21ji Made no Cinderella", img: "BRKBMS08.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Gag 100kaibun Aishite Kudasai", img: "BRKBMS09.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Jiriri Kiteru", img: "BRKBMS10.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Waracchaou yo BOYFRIEND", img: "BRKBMS11.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Munasawagi Scarlet", img: "BRKBMS12.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "VERY BEAUTY", img: "BRKBMS13.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Kokuhaku no Funsui Hiroba", img: "BRKBMS14.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Tsukiatteru no ni Kataomoi", img: "BRKBMS15.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Dschinghis Khan", img: "BRKBMS16.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Yuke Yuke Monkey Dance", img: "BRKBMS17.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "MADAYADE", img: "BRKBMS18.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Dakishimete Dakishimete", img: "BRKBMS19.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Seishun Bus Guide", img: "BRKBMS20.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Rival", img: "BRKBMS21.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Watashi no Mirai no Danna-sama", img: "BRKBMS22.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Ryuusei Boy", img: "BRKBMS23.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Otakebi Boy WAO!", img: "BRKBMS24.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Tomodachi wa Tomodachi Nanda!", img: "BRKBMS25.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Maji Bomber!!", img: "BRKBMS26.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Shining Power", img: "BRKBMS27.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Heroine ni Narou ka!", img: "BRKBMS28.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Ai no Dangan", img: "BRKBMS29.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Aa, Yo ga Akeru", img: "BRKBMS30.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Be Genki <Naseba Naru!>", img: "BRKBMS31.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Cha cha SING", img: "BRKBMS32.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "WANT!", img: "BRKBMS33.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Asian Celebration", img: "BRKBMS34.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Golden Chinatown", img: "BRKBMS35.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Sayonara Usotsuki no Watashi", img: "BRKBMS36.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Motto Zutto Issho ni Itakatta", img: "BRKBMS37.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ROCK Erotic", img: "BRKBMS38.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Otona na no yo!", img: "BRKBMS39.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "1oku 3zenman Sou Diet Oukoku", img: "BRKBMS40.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Ai wa Itsumo Kimi no Naka ni", img: "BRKBMS41.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Futsuu, Idol 10nen Yatterannai Desho!?", img: "BRKBMS42.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Romance wo Katatte", img: "BRKBMS43.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Towa no Uta", img: "BRKBMS44.jpg", opts: { group: ["berryz"], include: ["aside"] } },

    //Albums

    // 1st Chou Berryz
    { name: "Nicchoku ~Geinoujin no Kaiwa~", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Koi wa Hipparidako", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Semi", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Anshinkan", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Kozukai UP Daisakusen", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "TODAY IS MY BIRTHDAY", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Bye Bye Mata ne", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Anata Nashide wa Ikite Yukenai (FUNKY remix)", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Hello! no Theme (Berryz Koubou Version)", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // Dai ② Seichouki
    { name: "Special OP", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Joshi Basket Bu ~Asaren Atta Hi no Kamigata~", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Ohiru no Kyuukeijikan", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Sabori", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Aisuru Hito no Namae wo Nikki ni", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Berryz Koubou Koushinkyoku", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Special ED", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // ③ Natsu Natsu Mini Berryz
    { name: "Maji Natsu Sugiru", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Natsu Remember you", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Yeah! Meccha Holiday", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Chu! Natsu Party", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Halation Summer", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // 4th Ai no Nanchara Shisuu
    { name: "Ai no Suki Suki Shisuu Joushouchuu", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Omoitattara Kichi desse!", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Watashi ga Suru Koto Nai Hodo Zenbu Shite Kureru Kare", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Sayonara Hageshiki Koi", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Sprinter!", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Sakura wa Raku Sa", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Sakura→Nyuugakushiki", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // 5(FIVE)
    { name: "HAPPY! Stand Up", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Kono Yubi Tomare!", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Baka ni Shinai de", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Ah Merry-go-round", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "CLAP!", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "REAL LOVE", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Yume wo Hitotsubu ~Berryz Kamen Ending Theme~", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "BE", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Special Generation (Eccentric Remix)", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // 6th Otakebi Album
    { name: "Ai ni wa Ai Desho", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Kimi no Tomodachi", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Grand demo Rouka demo Medatsu Kimi", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Kibou no Yoru", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Yakimochi wo Kudasai!", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // ⑦ Berryz Times
    { name: "Icchoume Rock!", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "BOMB BOMB JUMP", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Masshiroi Ano Kumo", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Joshikai The Night", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Girls Times", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Onna no Pride", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Magical Future!", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // Ai no Album ⑧
    { name: "Mythology ~Ai no Album~", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Yo no Naka Barairo", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Shy boy", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Because happiness", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Ren'ai Moyou", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Atarashii Hibi", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Seishun Gekijou (Berryz Koubou Ver.)", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // Berryz Mansion 9kai
    { name: "Succhaka Mecchaka~", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Otoko Mae", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Nanda Kanda de Ii Kanji!", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Koi Itoshiki Kisetsu", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Massugu na Watashi", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },

    /* Kobushi Factory */

    //Indie songs

    { name: "Nen ni wa Nen", img: "KBSFTRIS01.jpg", opts: { group: ["kobushi"], include: ["indiesong"] } },
    { name: "Survivor", img: "KBSFTRIS02.jpg", opts: { group: ["kobushi"], include: ["indiesong"] } },

    //A Sides

    { name: "Dosukoi! Kenkyo ni Daitan", img: "KBSFTRMS01.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Ramen Daisuki Koizumi-san no Uta", img: "KBSFTRMS02.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Nen ni wa Nen (Nen'iri Ver.)", img: "KBSFTRMS03.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Sakura Night Fever", img: "KBSFTRMS04.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Chotto Guchoku ni! Chototsu Moushin", img: "KBSFTRMS05.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Osu! Kobushi Tamashii", img: "KBSFTRMS06.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Samba! Kobushi Janeiro", img: "KBSFTRMS07.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Bacchikoi Seishun!", img: "KBSFTRMS08.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Ora wa Ninkimono", img: "KBSFTRMS09.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Shalala! Yareru Hazu sa", img: "KBSFTRMS10.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Ee ja nai ka Ninja nai ka", img: "KBSFTRMS11.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Kore Kara da!", img: "KBSFTRMS12.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Ashita Tenki ni Naare", img: "KBSFTRMS13.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Kitto Watashi wa", img: "KBSFTRMS14.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Naseba Naru", img: "KBSFTRMS15.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Oh No Ounou", img: "KBSFTRMS16.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Haru Urara", img: "KBSFTRMS17.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Seishun no Hana", img: "KBSFTRMS18.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Start Line", img: "KBSFTRMS19.jpg", group: ["kobushi"], include: ["aside"] },

    //Albums

    // Kobushi Sono Ichi
    { name: "Isogaba Maware", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Mijuku Hanjuku Torotoro", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Kenmei Blues", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Zanshin", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "TEKI", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "GO TO THE TOP!!", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Kobushi no Hana", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },

    // Kobushi Dai Ni Maku
    { name: "Come with me", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Suki Kamo Shirenai", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Keseyashinai Kimochi", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Hirakinaocchae!", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Yes! We are family ~Kobushi ver.~", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Unlucky no Jijou", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Kame ni Nare!", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Dokan to BREAK!", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Ashita no Watashi wa Kyou Yori Kirei", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Yes! We are family ~FC Machida Zelvia ver.~", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },

    /* Country Girls */

    //A Sides

    { name: "Itooshikutte Gomen ne", img: "CTGRLSMS01.jpg", group: ["country"], include: ["aside"] },
    { name: "Koi Dorobou", img: "CTGRLSMS02.jpg", group: ["country"], include: ["aside"] },
    { name: "Wakatteiru no ni Gomen ne", img: "CTGRLSMS03.jpg", group: ["country"], include: ["aside"] },
    { name: "Tamerai Summer Time", img: "CTGRLSMS04.jpg", group: ["country"], include: ["aside"] },
    { name: "Boogie Woogie LOVE", img: "CTGRLSMS05.jpg", group: ["country"], include: ["aside"] },
    { name: "Koi wa Magnet", img: "CTGRLSMS06.jpg", group: ["country"], include: ["aside"] },
    { name: "Ranrarun ~Anata ni Muchuu~", img: "CTGRLSMS07.jpg", group: ["country"], include: ["aside"] },
    { name: "Dou Datte Ii no", img: "CTGRLSMS08.jpg", group: ["country"], include: ["aside"] },
    { name: "Namida no Request", img: "CTGRLSMS09.jpg", group: ["country"], include: ["aside"] },
    { name: "Good Boy Bad Girl", img: "CTGRLSMS10.jpg", group: ["country"], include: ["aside"] },
    { name: "Peanut Butter Jelly Love", img: "CTGRLSMS11.jpg", group: ["country"], include: ["aside"] },

    //Digital songs

    { name: "Kaite wa Keshite no \"I Love You\"", img: "CTGRLSDS01.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "Konamaiki Girl", img: "CTGRLSDS02.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "Matenai After Five", img: "CTGRLSDS03.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "Kasa wo Sasu Senpai", img: "CTGRLSDS04.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "One Summer Night ~Manatsu no Kesshin~", img: "CTGRLSDS05.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "Natsuiro no Palette", img: "CTGRLSDS06.jpg", group: ["country"], include: ["digitalsong"] },

    //Albums

    // Country Girls Daizenshuu ①
    { name: "Yowaki Joshi Taibu Todoke", img: "CTGRLSA01.jpg", opts: { group: ["country"], include: ["album"] } },
    { name: "Zutto Zutto", img: "CTGRLSA01.jpg", opts: { group: ["country"], include: ["album"] } },
    { name: "Hajimete no Happy Birthday! (2015 Country Girls Ver.)", img: "CTGRLSA01.jpg", opts: { group: ["country"], include: ["album"] } },
    { name: "Uwaki na Honey Pie (2015 Country Girls Ver.)", img: "CTGRLSA01.jpg", opts: { group: ["country"], include: ["album"] } }

];

