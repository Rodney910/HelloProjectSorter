dataSetVersion = "2019-10-04"; // Cambia esto al crear una nueva versión del conjunto de datos en formato YYYY-MM-DD.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Group",
        checked: true,  // La opción principal no está marcada por defecto
        key: "group",
        img: "",
        sub: [
            { name: "モーニング娘。", key: "momusu", img: "MNMSMLOGO.jpg", checked: false },
            { name: "アンジュルム", key: "angerme", img: "ANGMLOGO.jpg", checked: false },
            { name: "Juice=Juice", key: "juice", img: "JCJCLOGO.jpg", checked: false },
            { name: "つばきファクトリー", key: "tsubaki", img: "TBKFTRLOGO.jpg", checked: false },
            { name: "BEYOOOOONDS", key: "beyond", img: "BYNDSLOGO.jpg", checked: false },
            { name: "OCHA NORMA", key: "ocha", img: "OCNMLOGO.jpg", checked: false },
            { name: "°C-ute", key: "cute", img: "CUTELOGO.jpg", checked: false },
            { name: "Berryz工房", key: "berryz", img: "BRKBLOGO.jpg", checked: false },
            { name: "こぶしファクトリー", key: "kobushi", img: "KBSFTRLOGO.jpg", checked: false },
            { name: "カントリー・ガールズ", key: "country", img: "CTGRLSLOGO.jpg", checked: false }
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
            { name: "Album songs", key: "album", img: "", checked: false }
        ]
    }
];


dataSet[dataSetVersion].characterData = [

    /* MORNING MUSUME */

    //Indie songs
    { name: "愛の種", img: "MNMSMISA00.jpg", opts: { group: ["momusu"], include: ["indiesong"] } },

    //A Sides
    { name: "モーニングコーヒー", img: "MNMSMISA01.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "サマーナイトタウン", img: "MNMSMISA02.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "抱いてHOLD ON ME!", img: "MNMSMISA03.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "メモリー 青春の光", img: "MNMSMISA04.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "真夏の光線", img: "MNMSMISA05.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ふるさと", img: "MNMSMISA06.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "LOVEマシーン", img: "MNMSMISA07.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "恋のダンスサイト", img: "MNMSMISA08.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ハッピーサマーウェディング", img: "MNMSMISA09.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "I WISH", img: "MNMSMISA10.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "恋愛レボリューション21", img: "MNMSMISA11.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ザ☆ピ〜ス!", img: "MNMSMISA12.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Mr.Moonlight 〜愛のビッグバンド〜", img: "MNMSMISA13.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "そうだ! We're ALIVE", img: "MNMSMISA14.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Do it! Now", img: "MNMSMISA15.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ここにいるぜぇ!", img: "MNMSMISA16.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "モーニング娘。のひょっこりひょうたん島", img: "MNMSMISA17.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "AS FOR ONE DAY", img: "MNMSMISA18.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "シャボン玉", img: "MNMSMISA19.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Go Girl 〜恋のヴィクトリー〜", img: "MNMSMISA20.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "愛あらばIT'S ALL RIGHT", img: "MNMSMISA21.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ロマン 〜MY DEAR BOY〜", img: "MNMSMISA22.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "女子かしまし物語", img: "MNMSMISA23.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "涙が止まらない放課後", img: "MNMSMISA24.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "THE マンパワー!!!", img: "MNMSMISA25.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "大阪 恋の歌", img: "MNMSMISA26.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "色っぽい じれったい", img: "MNMSMISA27.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "チョコレート 〜逃した魚は大きいぞ!〜", img: "MNMSMISA28.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "SEXY BOY 〜そよ風に寄り添って〜", img: "MNMSMISA29.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Ambitious! 野心的でいいじゃん", img: "MNMSMISA30.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "歩いてる", img: "MNMSMISA31.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "笑顔YESヌード", img: "MNMSMISA32.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "悲しみトワイライト", img: "MNMSMISA33.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "女に 幸あれ", img: "MNMSMISA34.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "みかん", img: "MNMSMISA35.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "リゾナント ブルー", img: "MNMSMISA36.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ペッパー警部", img: "MNMSMISA37.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "泣いちゃうかも", img: "MNMSMISA38.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "しょうがない 夢追い人", img: "MNMSMISA39.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ナンちゃって恋愛", img: "MNMSMISA40.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "きまぐれプリンセス", img: "MNMSMISA41.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "女が目立って なぜいけない", img: "MNMSMISA42.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "青春コレクション", img: "MNMSMISA43.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "女と男のララバイゲーム", img: "MNMSMISA44.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "まじですかスカ!", img: "MNMSMISA45.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Only you", img: "MNMSMISA46.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "この地球の平和を本気で願ってるんだよ!", img: "MNMSMISA47.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ピョコピョコ ウルトラ", img: "MNMSMISA48.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "恋愛ハンター", img: "MNMSMISA49.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "One・Two・Three", img: "MNMSMISA50.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "The 摩天楼ショー", img: "MNMSMISA51.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ワクテカ Take a chance", img: "MNMSMISA52.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Help me!!", img: "MNMSMISA53.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ブレインストーミング", img: "MNMSMISA54.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "君さえいれば何もいらない", img: "MNMSMISA55.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "わがまま 気のまま 愛のジョーク", img: "MNMSMISA56.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "愛の軍団", img: "MNMSMISA57.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "笑顔の君は太陽さ", img: "MNMSMISA58.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "君の代わりはいやしない", img: "MNMSMISA59.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "What is LOVE?", img: "MNMSMISA60.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "時空を超え 宇宙を超え", img: "MNMSMISA61.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Password is 0", img: "MNMSMISA62.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "TIKI BUN", img: "MNMSMISA63.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "シャバダバ ドゥ〜", img: "MNMSMISA64.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "見返り美人", img: "MNMSMISA65.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "青春小僧が泣いている", img: "MNMSMISA66.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "夕暮れは雨上がり", img: "MNMSMISA67.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "イマココカラ ", img: "MNMSMISA68.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Oh my wish!", img: "MNMSMISA69.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "スカッとMy Heart ", img: "MNMSMISA70.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "今すぐ飛び込む勇気", img: "MNMSMISA71.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "冷たい風と片思い", img: "MNMSMISA72.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ENDLESS SKY", img: "MNMSMISA73.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "One and Only", img: "MNMSMISA74.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "泡沫サタデーナイト!", img: "MNMSMISA75.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "The Vision", img: "MNMSMISA76.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Tokyoという片隅 ", img: "MNMSMISA77.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "セクシーキャットの演説", img: "MNMSMISA78.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ムキダシで向き合って", img: "MNMSMISA79.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "そうじゃない", img: "MNMSMISA80.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "BRAND NEW MORNING", img: "MNMSMISA81.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ジェラシー ジェラシー", img: "MNMSMISA82.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "邪魔しないでHere We Go!", img: "MNMSMISA83.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "弩級のゴーサイン", img: "MNMSMISA84.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "若いんだし!", img: "MNMSMISA85.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Are you Happy?", img: "MNMSMISA86.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "A gonna", img: "MNMSMISA87.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ふらり銀座", img: "MNMSMISA88.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "自由な国だから", img: "MNMSMISA89.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "人生Blues ", img: "MNMSMISA90.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "青春Night ", img: "MNMSMISA91.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "KOKORO&KARADA", img: "MNMSMISA92.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "LOVEpedia", img: "MNMSMISA93.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "人間関係 No way way", img: "MNMSMISA94.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "純情エビデンス", img: "MNMSMISA95.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ぎゅうされたいだけなのに", img: "MNMSMISA96.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Teenage Solution", img: "MNMSMISA97.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "よしよししてほしいの", img: "MNMSMISA98.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "ビートの惑星", img: "MNMSMISA99.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Chu Chu Chu 僕らの未来", img: "MNMSMISA100.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "大・人生 Never Been Better!", img: "MNMSMISA101.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Swing Swing Paradise", img: "MNMSMISA102.jpg", opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Happy birthday to Me!", img: "MNMSMISA103.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "すごいFEVER!", img: "MNMSMISA104.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Wake-up Call 〜目覚める時〜", img: "MNMSMISA105.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "Neverending Shine", img: "MNMSMISA106.jpg" , opts: { group: ["momusu"], include: ["aside"] } },
    { name: "なんだかセンチメンタルな時の歌", img: "MNMSMISA107.jpg", opts: { group: ["momusu"], include: ["aside", "2024"] } },
    { name: "最KIYOU", img: "MNMSMISA108.jpg", opts: { group: ["momusu"], include: ["aside", "2024"] } },

    //Digital Songs
    { name: "五線譜のたすき", img: "MNMSMDS01.jpg", opts: { group: ["momusu"], include: ["digitalsong"] } },
    { name: "花が咲く 太陽浴びて", img: "MNMSMDS02.jpg", opts: { group: ["momusu"], include: ["digitalsong"] } },

    //Albums

    // ファーストタイム
    { name: "Good Morning", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "どうにかして土曜日", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "夢の中", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "ワガママ", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "未来の扉", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "ウソつきあんた", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "さみしい日", img: "MNMSMA01.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // セカンドモーニング
    { name: "NIGHT OF TOKYO CITY", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "好きで×5（かけるファイブ)", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "パパに似ている彼", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "せんこう花火", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "乙女の心理学", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "ダディドゥデドダディ！", img: "MNMSMA02.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 3rd -LOVEパラダイス-
    { name: "～おはよう～", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "愛車 ローンで", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "くちづけのその後", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "ランチタイム　～レバニラ炒め～", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "DANCEするのだ!", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "おもいで", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "原宿6:00集合", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "WHY", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "「、、、好きだよ！」", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "～おやすみ～", img: "MNMSMA03.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 4th「いきまっしょい!」
    { name: "いいことある記念の瞬間", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "初めてのロックコンサート", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "男友達", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "いきまっしょい!", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "電車の二人", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "本気で熱いテーマソング", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "好きな先輩", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "なんにも言わずにI LOVE YOU", img: "MNMSMA04.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // No.5
    { name: "TOP!", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "友達(♀)が気に入っている男からの伝言", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "「すっごい仲間」", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "強気で行こうぜ!", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "女神 ~Mousseな優しさ~ (Original Long Ver.)", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "YES! POCKY GIRLS (Original Long Ver.)", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "「すごく好きなのに...ね」", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "卒業旅行 ~モーニング娘。旅立つ人に贈る唄~", img: "MNMSMA05.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 愛の第6感
    { name: "すき焼き", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "春の歌", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "直感～時として恋は～", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "独占欲", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "レモン色とミルクティ", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "声", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "HELP!!", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "SHIP! TO THE FUTURE", img: "MNMSMA06.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // レインボー7
    { name: "HOW DO YOU LIKE JAPAN?～日本はどんな感じでっか?～", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "青空がいつまでも続くような未来であれ!", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "INDIGO BLUE LOVE", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "レインボーピンク", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "無色透明なままで", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "パープルウインド", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "さよなら SEE YOU AGAIN アディオス BYE BYE チャッチャ!", img: "MNMSMA07.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // SEXY 8 BEAT
    { name: "元気＋", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "未来の太陽", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "春 ビューティフル エブリディ", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "その出会いのために", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "シャニムニ パラダイス", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "宝の箱", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "BE ポジティブ!", img: "MNMSMA08.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // プラチナ 9 DISC
    { name: "SONGS", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "雨の降らない星では愛せないだろう?", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Take off is now!", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "私の魅力に 気付かない鈍感な人", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "グルグルＪＵＭＰ", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "情熱のキスを一つ", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "It's You", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "片思いの終わりに", img: "MNMSMA09.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // ⑩ MY ME
    { name: "Moonlight night ~月夜の晩だよ~", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "元気ピカッピカッ!", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "涙ッチ", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "大きい瞳", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "あの日に戻りたい", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "大阪 美味いねん", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Loving you forever", img: "MNMSMA10.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // Fantasy! 拾壱
    { name: "ブラボー!", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Fantasyが始まる", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "女心となんとやら", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "愛の炎", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "I’m Lucky girl", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "すんごいマイバースディ", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "1から10まで愛してほしい", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "愛しく苦しいこの夜に", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "電話でね", img: "MNMSMA11.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 12,スマート
    { name: "Give me 愛", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "シルバーの腕時計", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "好きだな君が", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "怪傑ポシチィブA", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "この愛を重ねて", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "My Way ～女子校花道～", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "乙女のタイミング", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "OK YEAH!", img: "MNMSMA12.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // ⑬カラフルキャラクター
    { name: "What's Up? 愛はどうなのよ～", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Be Alive", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "ラララのピピピ", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "ドッカ～ン カプリッチオ", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "ゼロから始まる青春", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "地球が泣いている", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "涙一滴", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "笑って！ＹＯＵ", img: "MNMSMA13.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 14章〜The message〜
    { name: "明日を作るのは君", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "キラリと光る星", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "恋人には絶対に知られたくない真実", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "私は私なんだ", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "笑えない話", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "大人になれば 大人になれる", img: "MNMSMA14.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // ⑮ Thank you, too
    { name: "ロマンスに目覚める妄想女子の歌", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "CHO DAI", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "私のなんにもわかっちゃない", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Style of my love", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "ナルシス カマってちゃん協奏曲第5番", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "青春Say A-HA", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "もう 我慢できないわ〜Love ice cream〜", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "恋は時に", img: "MNMSMA15.jpg", opts: { group: ["momusu"], include: ["album"] } },

    // 16th〜That's J-POP〜
    { name: "愛してナンが悪い！？", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "信じるしか！", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "TIME IS MONEY!", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "泣き虫My Dream", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "二人はアベコベ", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "このまま！", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "Hey! Unfair Baby", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },
    { name: "恋愛Destiny～本音を論じたい～", img: "MNMSMA16.jpg", opts: { group: ["momusu"], include: ["album"] } },

    /* ANGERME */

    //Indie songs
    { name: "あまのじゃく", img: "ANGMIS01.jpg", opts: { group: ["angerme"], include: ["indiesong"] } },
    { name: "あすはデートなのに、今すぐ声が聞きたい", img: "ANGMIS02.jpg", opts: { group: ["angerme"], include: ["indiesong"] } },
    { name: "スキちゃん", img: "ANGMIS03.jpg", opts: { group: ["angerme"], include: ["indiesong"] } },
    { name: "オトナになるって難しい!!!", img: "ANGMIS04.jpg", opts: { group: ["angerme"], include: ["indiesong"] } },

    //A Sides
    { name: "夢見る 15歳", img: "ANGMMS01.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "○○ がんばらなくてもええねんで!!", img: "ANGMMS02.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "同じ時給で働く友達の美人ママ", img: "ANGMMS03.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ショートカット", img: "ANGMMS04.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "恋にBooing ブー!", img: "ANGMMS05.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "有頂天LOVE", img: "ANGMMS06.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "タチアガール", img: "ANGMMS07.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "プリーズ ミニスカ ポストウーマン!", img: "ANGMMS08.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "チョトマテクダサイ!", img: "ANGMMS09.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ドットビキニ", img: "ANGMMS10.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "好きよ、純情反抗期。", img: "ANGMMS11.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "寒いね。", img: "ANGMMS12.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "旅立ちの春が来た", img: "ANGMMS13.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "新しい私になれ!", img: "ANGMMS14.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ヤッタルチャン", img: "ANGMMS15.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ええか!?", img: "ANGMMS16.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "「良い奴」", img: "ANGMMS17.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ミステリーナイト!", img: "ANGMMS18.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "エイティーン エモーション", img: "ANGMMS19.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "嗚呼 すすきの", img: "ANGMMS20.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "地球は今日も愛を育む", img: "ANGMMS21.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "大器晩成", img: "ANGMMS22.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "乙女の逆襲", img: "ANGMMS23.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "七転び八起き", img: "ANGMMS24.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "臥薪嘗胆", img: "ANGMMS25.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "魔法使いサリー", img: "ANGMMS26.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "出すぎた杭は打たれない", img: "ANGMMS27.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ドンデンガエシ", img: "ANGMMS28.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "わたし", img: "ANGMMS29.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "次々続々", img: "ANGMMS30.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "糸島Distance", img: "ANGMMS31.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "恋ならとっくに始まってる", img: "ANGMMS32.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "上手く言えない", img: "ANGMMS33.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "愛のため今日まで進化してきた人間 愛のためすべて退化してきた人間", img: "ANGMMS34.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "忘れてあげる", img: "ANGMMS35.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "愛さえあればなんにもいらない", img: "ANGMMS36.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ナミダイロノケツイ", img: "ANGMMS37.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "魔女っ子メグちゃん", img: "ANGMMS38.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "泣けないぜ…共感詐欺", img: "ANGMMS39.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Uraha=Lover", img: "ANGMMS40.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "君だけじゃないさ...friends (2018 Acoustic Ver.)", img: "ANGMMS41.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "タデ食う虫もLike it!", img: "ANGMMS42.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "46億年Love", img: "ANGMMS43.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "恋はアッチャアッチャ", img: "ANGMMS44.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "夢見た 15年", img: "ANGMMS45.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "私を創るのは私", img: "ANGMMS46.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "全然起き上がれないSunday", img: "ANGMMS47.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "限りあるMoment", img: "ANGMMS48.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ミラー・ミラー", img: "ANGMMS49.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "はっきりしようぜ", img: "ANGMMS50.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "泳げないMermaid", img: "ANGMMS51.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "愛されルート A or B?", img: "ANGMMS52.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "愛・魔性", img: "ANGMMS53.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ハデにやっちゃいな!", img: "ANGMMS54.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "愛すべきべき Human Life", img: "ANGMMS55.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "悔しいわ", img: "ANGMMS56.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Piece of Peace～しあわせのパズル～", img: "ANGMMS57.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "アイノケダモノ", img: "ANGMMS58.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "同窓生", img: "ANGMMS59.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "Red Line", img: "ANGMMS60.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "ライフ イズ ビューティフル!", img: "ANGMMS61.jpg", opts: { group: ["angerme"], include: ["aside"] } },
    { name: "美々たる一撃", img: "ANGMMS62.jpg", opts: { group: ["angerme"], include: ["aside", "2024"] } },
    { name: "うわさのナルシー", img: "ANGMMS63.jpg", opts: { group: ["angerme"], include: ["aside", "2024"] } },
    { name: "THANK YOU, HELLO GOOD BYE", img: "ANGMMS64.jpg", opts: { group: ["angerme"], include: ["aside", "2024"] } },

    //Digital songs
    { name: "マナーモード", img: "ANGMDS01.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },
    { name: "キソクタダシクウツクシク", img: "ANGMDS01.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },
    { name: "君だけじゃないさ...friends", img: "ANGMDS01.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },
    { name: "SHAKA SHAKA TO LOVE", img: "ANGMDS02.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },
    { name: "SHAKA SHAKA #2 LOVE カラフルライフ編", img: "ANGMDS03.jpg", opts: { group: ["angerme"], include: ["digitalsong"] } },

    //Albums

    // 悪ガキッ①
    { name: "踊ろうよ", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "女ばかりの日曜日", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "シューティングスター", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "学級委員長", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "しっかりしてよ! もう", img: "ANGMA01.jpg", opts: { group: ["angerme"], include: ["album"] } },

    // スマイルセンセーション
    { name: "新・日本のすすめ！", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "大人の途中", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "天真爛漫", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "私の心", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "夕暮れ 恋の時間", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "ねぇ 先輩", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "さよなら さよなら さよなら", img: "ANGMA02.jpg", opts: { group: ["angerme"], include: ["album"] } },

    // 輪廻転生〜ANGERME Past, Present & Future〜
    { name: "I 無双 Strong!", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "赤いイヤホン", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "フラグをぶっ壊せ！", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "帰りたくないな。", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "いとしいとしと Say My Heart", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "もう一歩", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "人生、すなわちパンタ・レイ", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "鏡の国のひねくれクイーン", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "今夜もステキに落ち着けない", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "夏将軍", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album", "digitalsong"] } },
    { name: "わたしの夢見た15年", img: "ANGMA03.jpg", opts: { group: ["angerme"], include: ["album"] } },

    // BIG LOVE
    { name: "Survive～生きてく為に夢を見んだ", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "ぶっ壊したい", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "23時のペルソナ", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "根っからプレイボーイ", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Top!", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Sister Sister", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "まぁ、いっか！", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },
    { name: "Forever Friend", img: "ANGMA04.jpg", opts: { group: ["angerme"], include: ["album"] } },

    /* JUICE=JUICE */

    //Indie songs
    { name: "私が言う前に抱きしめなきゃね", img: "JCJCIS01.jpg", opts: { group: ["juice"], include: ["indiesong"] } },
    { name: "さみだれ美女がさみだれる", img: "JCJCIS02.jpg", opts: { group: ["juice"], include: ["indiesong"] } },

    //A Sides
    { name: "ロマンスの途中", img: "JCJCMS01.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "私が言う前に抱きしめなきゃね (Memorial Edit)", img: "JCJCMS02.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "五月雨美女がさ乱れる (Memorial Edit)", img: "JCJCMS03.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "イジワルしないで 抱きしめてよ", img: "JCJCMS04.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "初めてを経験中", img: "JCJCMS05.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "裸の裸の裸のKiss", img: "JCJCMS06.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "アレコレしたい!", img: "JCJCMS07.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "ブラックバタフライ", img: "JCJCMS08.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "風に吹かれて", img: "JCJCMS09.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "背伸び", img: "JCJCMS10.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "伊達じゃないようちの人生は", img: "JCJCMS11.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Wonderful World", img: "JCJCMS12.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "How are you? How are you?", img: "JCJCMS13.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Next is you!", img: "JCJCMS14.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "カラダだけが大人になったんじゃない", img: "JCJCMS15.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Dream Road～心が躍り出してる～", img: "JCJCMS16.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Keep On 上昇志向！！", img: "JCJCMS17.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "明日やろうはバカやろう", img: "JCJCMS18.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "地団駄ダンス", img: "JCJCMS19.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Feel！感じるよ", img: "JCJCMS20.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Sexy Sexy", img: "JCJCMS21.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "泣いていいよ", img: "JCJCMS22.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Vivid Midnight", img: "JCJCMS23.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "微炭酸", img: "JCJCMS24.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "ポツリと", img: "JCJCMS25.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Good bye & Good luck!", img: "JCJCMS26.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "「ひとりで生きられそう」って それってねぇ、褒めているの?", img: "JCJCMS27.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "25歳永遠説", img: "JCJCMS28.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "ポップミュージック", img: "JCJCMS29.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "好きって言ってよ", img: "JCJCMS30.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Down Town", img: "JCJCMS31.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "がんばれないよ", img: "JCJCMS32.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "プラスティック・ラブ", img: "JCJCMS33.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Familia", img: "JCJCMS34.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Future Smile", img: "JCJCMS35.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "全部賭けてGO", img: "JCJCMS36.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "イニミニマニモ～恋のライバル宣言～", img: "JCJCMS37.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "プライド・ブライト", img: "JCJCMS38.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "Funky Flushin'", img: "JCJCMS39.jpg", opts: { group: ["juice"], include: ["aside"] } },
    { name: "トウキョウ・ブラー", img: "JCJCMS40.jpg", opts: { group: ["juice"], include: ["aside", "2024"] } },
    { name: "ナイモノラブ", img: "JCJCMS41.jpg", opts: { group: ["juice"], include: ["aside", "2024"] } },
    { name: "おあいこ", img: "JCJCMS42.jpg", opts: { group: ["juice"], include: ["aside", "2024"] } },

    //Digital songs
    { name: "Fiesta! Fiesta!", img: "JCJCDS01.jpg", opts: { group: ["juice"], include: ["digitalsong"] } },

    //Albums

    // First Squeeze!
    { name: "CHOICE & CHANCE", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "愛・愛・傘", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "生まれたてのBaby Love", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "選ばれし私達", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "GIRLS BE AMBITIOUS", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "愛のダイビング", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "チクタク 私の旬", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "未来へ、さあ走り出せ！", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "続いていくSTORY", img: "JCJCA01.jpg", opts: { group: ["juice"], include: ["album"] } },

    // Juice=Juice#2 -¡Una más!-
    { name: "Never Never Surrender", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "如雨露 (Album Version)", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album", "digitalsong"] } },
    { name: "TOKYOグライダー", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "シンクロ。", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "あばれてっか？！ハブアグッタイ", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "素直に甘えて", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Goal～明日はあっちだよ～ (Album Version)", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album", "digitalsong"] } },
    { name: "銀色のテレパシー", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "この世界は捨てたもんじゃない", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "禁断少女", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "大人の事情 - NEXT YOU", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Wonderful World (2018 English Ver.)", img: "JCJCA02.jpg", opts: { group: ["juice"], include: ["album"] } },

    // terzo
    { name: "GIRLS BE AMBITIOUS! 2022", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "POPPIN' LOVE", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "STAGE～アガってみな～", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "Mon Amour (My Love)", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "ノクチルカ", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "G.O.A.T.", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "雨の中の口笛", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },
    { name: "プラトニック・プラネット", img: "JCJCA03.jpg", opts: { group: ["juice"], include: ["album"] } },

    /* TSUBAKI FACTORY */

    //Indie songs
    { name: "青春まんまんなか!", img: "TBKFTRIS01.jpg", opts: { group: ["tsubaki"], include: ["indiesong"] } },
    { name: "気高く咲き誇れ!", img: "TBKFTRIS02.jpg", opts: { group: ["tsubaki"], include: ["indiesong"] } },
    { name: "独り占め", img: "TBKFTRIS03.jpg", opts: { group: ["tsubaki"], include: ["indiesong"] } },
    { name: "私がオバさんになっても", img: "TBKFTRIS03.jpg", opts: { group: ["tsubaki"], include: ["indiesong"] } },

    //A Sides
    { name: "初恋サンライズ", img: "TBKFTRMS01.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "Just Try!", img: "TBKFTRMS02.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "うるわしのカメリア", img: "TBKFTRMS03.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "就活センセーション", img: "TBKFTRMS04.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "笑って", img: "TBKFTRMS05.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "ハナモヨウ", img: "TBKFTRMS06.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "低温火傷", img: "TBKFTRMS07.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "春恋歌", img: "TBKFTRMS08.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "I Need You ～夜空の観覧車～", img: "TBKFTRMS09.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "デートの日は二度くらいシャワーして出かけたい", img: "TBKFTRMS10.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "純情cm", img: "TBKFTRMS11.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "今夜だけ浮かれたかった", img: "TBKFTRMS12.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "三回目のデート神話", img: "TBKFTRMS13.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "ふわり、恋時計", img: "TBKFTRMS14.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "意識高い乙女のジレンマ", img: "TBKFTRMS15.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "抱きしめられてみたい", img: "TBKFTRMS16.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "断捨ISM", img: "TBKFTRMS17.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "イマナンジ?", img: "TBKFTRMS18.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "涙のヒロイン降板劇", img: "TBKFTRMS19.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "ガラクタDIAMOND", img: "TBKFTRMS20.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "約束・連絡・記念日", img: "TBKFTRMS21.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "アドレナリン・ダメ", img: "TBKFTRMS22.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "弱さじゃないよ、恋は", img: "TBKFTRMS23.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "アイドル天職音頭", img: "TBKFTRMS24.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "間違いじゃない 泣いたりしない", img: "TBKFTRMS25.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "スキップ・スキップ・スキップ", img: "TBKFTRMS26.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "君と僕の絆", img: "TBKFTRMS27.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "勇気 It's my Life！", img: "TBKFTRMS28.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "妄想だけならフリーダム", img: "TBKFTRMS29.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    { name: "でも…いいよ", img: "TBKFTRMS30.jpg", opts: { group: ["tsubaki"], include: ["aside"] } },
    //{ name: "ベイビースパイダー", img: "TBKFTRMS31.jpg", opts: { group: ["tsubaki"], include: ["aside", "2024"] } },
    //{ name: "青春エクサバイト", img: "TBKFTRMS32.jpg", opts: { group: ["tsubaki"], include: ["aside", "2024"] } },
    //{ name: "鼓動OK？", img: "TBKFTRMS33.jpg", opts: { group: ["tsubaki"], include: ["aside", "2024"] } },

    //Albums

    // First Bloom
    { name: "表面張力〜Surface Tension〜", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "可能性のコンチェルト", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "帰ろう レッツゴー！", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "雪のプラネタリウム", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "ハッピークラッカー", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "ふりさけみれば…", img: "TBKFTRA01.jpg", opts: { group: ["tsubaki"], include: ["album"] } },

    // 2nd STEP
    { name: "マサユメ", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "愛は今、愛を求めてる", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "最上級Story", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "光のカーテン", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "だからなんなんだ！", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "足りないもの埋めてゆく旅", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album"] } },
    { name: "ナインティーンの蜃気楼", img: "TBKFTRA02.jpg", opts: { group: ["tsubaki"], include: ["album", "digitalsong"] } },

    // 3rd -Moment-
    { name: "Power Flower ～今こそ一丸となれ～", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "Stay free & Stay tuned", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "七分咲きのつづき", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "EZPZ!!", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "サマー・チャレンジャー", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "アマヤドリのエピローグ", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "アタシリズム", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "君と僕の絆", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "You're My Friend feat. KIKI", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "カッコイイ歌", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },
    { name: "BE", img: "TBKFTRA03.jpg", opts: { group: ["tsubaki"], include: ["album", "2024"] } },

    /* BEYOOOOONDS */

    //A Sides
    { name: "眼鏡の男の子", img: "BYNDSMS01.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "ニッポンノD・N・A！", img: "BYNDSMS02.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Go Waist", img: "BYNDSMS03.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "激辛LOVE", img: "BYNDSMS04.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "Now Now Ningen", img: "BYNDSMS05.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "こんなハズジャナカッター！", img: "BYNDSMS06.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "英雄～笑って!ショパン先輩～", img: "BYNDSMS07.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "ハムカツ黙示録", img: "BYNDSMS08.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "求めよ…運命の旅人算", img: "BYNDSMS09.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "夢さえ描けない夜空には", img: "BYNDSMS10.jpg", opts: { group: ["beyond"], include: ["aside"] } },
    { name: "灰toダイヤモンド", img: "BYNDSMS11.jpg", opts: { group: ["beyond"], include: ["aside", "2024"] } },
    { name: "Go City Go", img: "BYNDSMS12.jpg", opts: { group: ["beyond"], include: ["aside", "2024"] } },
    { name: "フックの法則", img: "BYNDSMS13.jpg", opts: { group: ["beyond"], include: ["aside", "2024"] } },

    //Digital songs
    { name: "フレフレ・エブリデイ", img: "BYNDSDS01.jpg", opts: { group: ["beyond"], include: ["digitalsong", "album"] } },

    //Albums

    // BEYOOOOOND1St
    { name: "OOOOOVERTURE", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "アツイ!", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "高輪ゲートウェイ駅ができる頃には", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "We Need a Name!", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "そこらのやつとは同じにされたくない", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "きのこたけのこ大戦記", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "小夜曲“眼鏡の男の子”", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "恋のおスウィング", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "元年バンジージャンプ", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "恋愛奉行", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "伸びしろ～Beyond the World～", img: "BYNDSA01.jpg", opts: { group: ["beyond"], include: ["album"] } },

    // BEYOOOOO2NDS
    { name: "虎視タンタ・ターン", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "涙のカスタネット", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Hey！ビヨンダ", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Never Never Know～コメ派とパン派のラブウォーズ～", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "ビタミンME", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album", "digitalsong"] } },
    { name: "GOGO大臣", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "オンリーロンリー", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "待ち合わせはJR梅田駅で", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "循環", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },
    { name: "Get Back！ビニール傘の大冒険", img: "BYNDSA02.jpg", opts: { group: ["beyond"], include: ["album"] } },

    /* OCHA NORMA */

    //A Sides
    { name: "恋のクラウチングスタート", img: "OCNMMS01.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "お祭りデビューだぜ！", img: "OCNMMS02.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "運命 CHACHACHACHA～N", img: "OCNMMS03.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "ウチらの地元は地球じゃん！", img: "OCNMMS04.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "ちょっと情緒不安定？…夏", img: "OCNMMS05.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "オチャノマ マホロバ イコイノバ～昭和も令和もワッチャワチャ～", img: "OCNMMS06.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "シェケナーレ", img: "OCNMMS07.jpg", opts: { group: ["ocha"], include: ["aside"] } },
    { name: "ヨリドリME DREAM", img: "OCNMMS08.jpg", opts: { group: ["ocha"], include: ["aside"] } },

    //Digital songs
    { name: "ラーメン大好き小泉さんの唄", img: "OCNMDS01.jpg", opts: { group: ["ocha"], include: ["digitalsong"] } },

    //Albums

    //CHAnnel #1
    { name: "宇宙規模でダイスキ宣言！", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "ラヴィ・ダヴィ", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Hello! 生まれた意味がきっとある (OCHA NORMA Ver.)", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "ミステイク (OCHA NORMA ver.)", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "cha cha SING (2024 OCHA NORMA ver.)", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Good Luckの胸騒ぎ", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "なんだかんだエヴリデー！", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "イージーイージー", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "1/2", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "Peek a Boo", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },
    { name: "今じゃなきゃ、君じゃなきゃ", img: "OCNMA01.jpg", opts: { group: ["ocha"], include: ["album", "2024"] } },

    /* °C-ute */

    //Indie songs
    { name: "まっさらブルージーンズ", img: "CUTEIS01.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "即 抱きしめて", img: "CUTEIS02.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "大きな愛でもてなして", img: "CUTEIS03.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "わっきゃない(Z)", img: "CUTEIS04.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "越えろ! 楽天イーグルス", img: "CUTEIS05.jpg", opts: { group: ["cute"], include: ["indiesong"] } },
    { name: "アクマでキュートな青春グラフィティ", img: "CUTEIS06.jpg", opts: { group: ["cute"], include: ["indiesong"] } },

    //A Sides
    { name: "桜チラリ", img: "CUTEMS01.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "めぐる恋の季節", img: "CUTEMS02.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "都会っ子 純情", img: "CUTEMS03.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "LALALA 幸せの歌", img: "CUTEMS04.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "涙の色", img: "CUTEMS05.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "江戸の手毬唄Ⅱ", img: "CUTEMS06.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "FOREVER LOVE", img: "CUTEMS07.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Bye Bye Bye!", img: "CUTEMS08.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "暑中お見舞い申し上げます", img: "CUTEMS09.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "EVERYDAY 絶好調!!", img: "CUTEMS10.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "SHOCK!", img: "CUTEMS11.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "キャンパスライフ〜生まれて来てよかった〜", img: "CUTEMS12.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Danceでバコーン!", img: "CUTEMS13.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "会いたいロンリークリスマス", img: "CUTEMS14.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Kiss me 愛してる", img: "CUTEMS15.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "桃色スパークリング", img: "CUTEMS16.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "世界一HAPPYな女の子", img: "CUTEMS17.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "君は自転車 私は電車で帰宅", img: "CUTEMS18.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "会いたい 会いたい 会いたいな", img: "CUTEMS19.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "この街", img: "CUTEMS20.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Crazy 完全な大人", img: "CUTEMS21.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "悲しき雨降り", img: "CUTEMS22.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "アダムとイブのジレンマ", img: "CUTEMS23.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "都会の一人暮らし", img: "CUTEMS24.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "愛ってもっと斬新", img: "CUTEMS25.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "心の叫びを歌にしてみた", img: "CUTEMS26.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Love take it all", img: "CUTEMS27.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "The Power", img: "CUTEMS28.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "悲しきヘブン (Single Version)", img: "CUTEMS29.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "I miss you", img: "CUTEMS30.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "THE FUTURE", img: "CUTEMS31.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "The Middle Management〜女性中間管理職〜", img: "CUTEMS32.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "我武者LIFE", img: "CUTEMS33.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "次の角を曲がれ", img: "CUTEMS34.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "ありがとう〜無限のエール〜", img: "CUTEMS35.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "嵐を起こすんだ Exciting Fight!", img: "CUTEMS36.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "何故 人は争うんだろう?", img: "CUTEMS37.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Summer Wind", img: "CUTEMS38.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "人生はSTEP!", img: "CUTEMS39.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "夢幻クライマックス", img: "CUTEMS40.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "愛はまるで静電気", img: "CUTEMS41.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "Singing〜あの頃のように〜", img: "CUTEMS42.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "To Tomorrow", img: "CUTEMS43.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "ファイナルスコール", img: "CUTEMS44.jpg", opts: { group: ["cute"], include: ["aside"] } },
    { name: "The Curtain Rises", img: "CUTEMS45.jpg", opts: { group: ["cute"], include: ["aside"] } },

    //Albums

    // キューティー クイーン VOL.1
    { name: "タイムカプセル", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "EVERYDAY YEAH! 片想い", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "As ONE", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "YES!しあわせ", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "ENDLESS LOVE ~I Love You More~", img: "CUTEA01.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ②mini～生きるという力～
    { name: "That's the POWER", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "僕らの輝き", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "ディスコ クイーン", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "通学ベクトル☂", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "夏DOKIリップスティック", img: "CUTEA02.jpg", opts: { group: ["cute"], include: ["album"] } },

    // 3rd～LOVEエスカレーション!～
    { name: "イメージカラー", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "乙女COCORO", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "ほめられ伸び子のテーマ曲", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "スイーーツ→→→ライブ", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "晴れのプラチナ通り", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "ドドンガドン音頭", img: "CUTEA03.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ④憧れ My STAR
    { name: "★憧れ My STAR★", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "One's LIFE", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Yes! all my family", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "愛してる 愛してる", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "青春ソング", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Big dreams", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "SHINES", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "約束は特にしないわ", img: "CUTEA04.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ショッキング5
    { name: "The Party!", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "嗚呼 恋", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Lonely girl's night", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "君の戦法", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "四月宣言", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "夢があるから", img: "CUTEA05.jpg", opts: { group: ["cute"], include: ["album"] } },

    // 超WONDERFUL!⑥
    { name: "超WONDERFUL!", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "Midnight Temptation", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "いざ、進め! Steady go!", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "ルルルルル", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "別れたくない・・・", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "サークル", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "3番ホーム 3両目", img: "CUTEA06.jpg", opts: { group: ["cute"], include: ["album"] } },

    // 第七章「美しくってごめんね」
    { name: "ひとり占めしたかっただけなのに", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "行け! 元気君", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "ズンタかマーチ～人らしく生きよう～", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "都会のネオンが驚くくらいの美しさがほしい", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "輝け！放課後", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "幸せの途中", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "甘酸っぱい春にサクラサク", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "青春劇場 (℃-ute Ver.)", img: "CUTEA07.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ⑧ Queen of J-POP
    { name: "ベーグルにハム＆チーズ", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "涙も出ない 悲しくもない なんにもしたくない", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "たどり着いた女戦士", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "日曜日は大好きよ", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "浴びる程の愛をください", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "私が本気を出す夜", img: "CUTEA08.jpg", opts: { group: ["cute"], include: ["album"] } },

    // ℃maj9
    { name: "℃maj9", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "アイアンハート", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "男と女とForever", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "情熱エクスタシー", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "デジタリック→0 (LOVE)", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "羨んじゃう", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "夜風のMessage", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },
    { name: "℃maj9 (reprise)", img: "CUTEA09.jpg", opts: { group: ["cute"], include: ["album"] } },

    /* Berryz Koubou */

    //A Sides
    { name: "あなたなしでは生きてゆけない", img: "BRKBMS01.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ファイティングポーズはダテじゃない!", img: "BRKBMS02.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ピリリと行こう!", img: "BRKBMS03.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ハピネス 〜幸福歓迎!〜", img: "BRKBMS04.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "恋の呪縛", img: "BRKBMS05.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "スッペシャル ジェネレ〜ション", img: "BRKBMS06.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "なんちゅう恋をやってるぅ YOU KNOW?", img: "BRKBMS07.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "21時までのシンデレラ", img: "BRKBMS08.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ギャグ100回分愛してください", img: "BRKBMS09.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ジリリ キテル", img: "BRKBMS10.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "笑っちゃおうよ BOYFRIEND", img: "BRKBMS11.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "胸さわぎスカーレット", img: "BRKBMS12.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "VERY BEAUTY", img: "BRKBMS13.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "告白の噴水広場", img: "BRKBMS14.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "付き合ってるのに片思い", img: "BRKBMS15.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ジンギスカン", img: "BRKBMS16.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "行け 行け モンキーダンス", img: "BRKBMS17.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "MADAYADE", img: "BRKBMS18.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "抱きしめて 抱きしめて", img: "BRKBMS19.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "青春バスガイド", img: "BRKBMS20.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ライバル", img: "BRKBMS21.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "私の未来のだんな様", img: "BRKBMS22.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "流星ボーイ", img: "BRKBMS23.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "雄叫びボーイ WAO!", img: "BRKBMS24.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "友達は友達なんだ!", img: "BRKBMS25.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "本気ボンバー!!", img: "BRKBMS26.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "シャイニング パワー", img: "BRKBMS27.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ヒロインになろうか!", img: "BRKBMS28.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "愛の弾丸", img: "BRKBMS29.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ああ、夜が明ける", img: "BRKBMS30.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "Be 元気＜成せば成るっ!＞", img: "BRKBMS31.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "cha cha SING", img: "BRKBMS32.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "WANT!", img: "BRKBMS33.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "アジアン セレブレイション", img: "BRKBMS34.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ゴールデン チャイナタウン", img: "BRKBMS35.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "サヨナラ ウソつきの私", img: "BRKBMS36.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "もっとずっと一緒に居たかった", img: "BRKBMS37.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ROCKエロティック", img: "BRKBMS38.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "大人なのよ!", img: "BRKBMS39.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "1億3千万総ダイエット王国", img: "BRKBMS40.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "愛はいつも君の中に", img: "BRKBMS41.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "普通、アイドル10年やってらんないでしょ!?", img: "BRKBMS42.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "ロマンスを語って", img: "BRKBMS43.jpg", opts: { group: ["berryz"], include: ["aside"] } },
    { name: "永久の歌", img: "BRKBMS44.jpg", opts: { group: ["berryz"], include: ["aside"] } },

    //Albums

    // 1st 超ベリーズ
    { name: "日直〜芸能人の会話〜", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "恋はひっぱりだこ", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "蝉", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "安心感", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "小遣いUP大作戦", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "TODAY IS MY BIRTHDAY", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Bye Bye またね", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "あなたなしでは生きてゆけない (FUNKY remix)", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Hello!のテーマ (Berryz工房 Version)", img: "BRKBA01.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // 第②成長記
    { name: "スッペシャルOP", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "女子バスケット部〜朝練あった日の髪型〜", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "お昼の休憩時間。", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "さぼり", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "愛する人の名前を日記に", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Berryz工房行進曲", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "スッペシャルED", img: "BRKBA02.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // ③夏夏ミニベリーズ
    { name: "マジ夏すぎる", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "夏 Remember you", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Yeah! めっちゃホリディ", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "チュッ! 夏パ〜ティ", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "ハレーション サマー", img: "BRKBA03.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // 4th 愛のなんちゃら指数
    { name: "愛のスキスキ指数 上昇中", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "思い立ったら 吉でっせ!", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "私がすることない程 全部してくれる彼", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "サヨナラ 激しき恋", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "スプリンター!", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "サクラハラクサ", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "桜→入学式", img: "BRKBA04.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // 5(FIVE)
    { name: "HAPPY! Stand Up", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "この指とまれ！", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "バカにしないで", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Ah Merry-go-round", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "CLAP!", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "REAL LOVE", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "夢を一粒～Berryz仮面 Endingテーマ～", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "BE", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "スッペシャル ジェネレ〜ション（エキセントリックスRemix）", img: "BRKBA05.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // 6th 雄叫びアルバム
    { name: "愛には 愛でしょ", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "君の友達", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "グランドでも廊下でも目立つ君", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "希望の夜", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "ヤキモチをください！", img: "BRKBA06.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // ⑦ Berryz タイムス
    { name: "一丁目ロック!", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "BOMB BOMB JUMP", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "真っ白いあの雲", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "女子会 The Night", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "ガールズタイムス", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "女のプライド", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "マジカルフューチャー！", img: "BRKBA07.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // 愛のアルバム⑧
    { name: "Mythology～愛のアルバム～", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "世の中薔薇色", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Shy boy", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "Because happiness", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "恋愛模様", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "新しい日々", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "青春劇場（Berryz工房Ver.）", img: "BRKBA08.jpg", opts: { group: ["berryz"], include: ["album"] } },

    // Berryzマンション9階
    { name: "すっちゃかめっちゃか〜", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "男前", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "なんだかんだで良い感じ！", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "恋いとしき季節", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },
    { name: "まっすぐな私", img: "BRKBA09.jpg", opts: { group: ["berryz"], include: ["album"] } },

    /* Kobushi Factory */

    //Indie songs

    { name: "念には念", img: "KBSFTRIS01.jpg", opts: { group: ["kobushi"], include: ["indiesong"] } },
    { name: "サバイバー", img: "KBSFTRIS02.jpg", opts: { group: ["kobushi"], include: ["indiesong"] } },

    //A Sides

    { name: "ドスコイ!ケンキョにダイタン", img: "KBSFTRMS01.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "ラーメン大好き小泉さんの唄", img: "KBSFTRMS02.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "念には念（念入りVer.）", img: "KBSFTRMS03.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "桜ナイトフィーバー", img: "KBSFTRMS04.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "チョット愚直に!猪突猛進", img: "KBSFTRMS05.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "押忍!こぶし魂", img: "KBSFTRMS06.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "サンバ!こぶしジャネイロ", img: "KBSFTRMS07.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "バッチ来い青春!", img: "KBSFTRMS08.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "オラはにんきもの", img: "KBSFTRMS09.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "シャララ!やれるはずさ", img: "KBSFTRMS10.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "エエジャナイカ ニンジャナイカ", img: "KBSFTRMS11.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "これからだ!", img: "KBSFTRMS12.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "明日テンキになあれ", img: "KBSFTRMS13.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "きっと私は", img: "KBSFTRMS14.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "ナセバナル", img: "KBSFTRMS15.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "Oh No 懊悩", img: "KBSFTRMS16.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "ハルウララ", img: "KBSFTRMS17.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "青春の花", img: "KBSFTRMS18.jpg", group: ["kobushi"], include: ["aside"] },
    { name: "スタートライン", img: "KBSFTRMS19.jpg", group: ["kobushi"], include: ["aside"] },

    //Albums

    // 辛夷其ノ壱
    { name: "急がば回れ", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "未熟半熟トロトロ", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "懸命ブルース", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "残心", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "TEKI", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "GO TO THE TOP!!", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "辛夷の花", img: "KBSFTRA01.jpg", opts: { group: ["kobushi"], include: ["album"] } },

    // 辛夷第二幕
    { name: "Come with me", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "好きかもしれない", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "消せやしないキモチ", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "開き直っちゃえ！", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Yes！We are family～こぶしver.～", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "アンラッキーの事情", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "亀になれ！", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "ドカンとBREAK!", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "明日の私は今日より綺麗", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },
    { name: "Yes！We are family～FC町田ゼルビアver.～", img: "KBSFTRA02.jpg", opts: { group: ["kobushi"], include: ["album"] } },

    /* Country Girls */

    //A Sides

    { name: "愛おしくってごめんね", img: "CTGRLSMS01.jpg", group: ["country"], include: ["aside"] },
    { name: "恋泥棒", img: "CTGRLSMS02.jpg", group: ["country"], include: ["aside"] },
    { name: "わかっているのにごめんね", img: "CTGRLSMS03.jpg", group: ["country"], include: ["aside"] },
    { name: "ためらいサマータイム", img: "CTGRLSMS04.jpg", group: ["country"], include: ["aside"] },
    { name: "ブギウギLOVE", img: "CTGRLSMS05.jpg", group: ["country"], include: ["aside"] },
    { name: "恋はマグネット", img: "CTGRLSMS06.jpg", group: ["country"], include: ["aside"] },
    { name: "ランラルン〜あなたに夢中〜", img: "CTGRLSMS07.jpg", group: ["country"], include: ["aside"] },
    { name: "どーだっていいの", img: "CTGRLSMS08.jpg", group: ["country"], include: ["aside"] },
    { name: "涙のリクエスト", img: "CTGRLSMS09.jpg", group: ["country"], include: ["aside"] },
    { name: "Good Boy Bad Girl", img: "CTGRLSMS10.jpg", group: ["country"], include: ["aside"] },
    { name: "ピーナッツバタージェリーラブ", img: "CTGRLSMS11.jpg", group: ["country"], include: ["aside"] },

    //Digital songs

    { name: "書いては消しての “I Love You”", img: "CTGRLSDS01.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "小生意気ガール", img: "CTGRLSDS02.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "待てないアフターファイブ", img: "CTGRLSDS03.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "傘をさす先輩", img: "CTGRLSDS04.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "One Summer Night〜真夏の決心〜", img: "CTGRLSDS05.jpg", group: ["country"], include: ["digitalsong"] },
    { name: "夏色のパレット", img: "CTGRLSDS06.jpg", group: ["country"], include: ["digitalsong"] },

    //Albums

    // カントリー・ガールズ大全集①
    { name: "弱気女子退部届", img: "CTGRLSA01.jpg", opts: { group: ["country"], include: ["album"] } },
    { name: "ずっとずっと", img: "CTGRLSA01.jpg", opts: { group: ["country"], include: ["album"] } },
    { name: "初めてのハッピーバースディ!(2015 カントリー・ガールズVer.)", img: "CTGRLSA01.jpg", opts: { group: ["country"], include: ["album"] } },
    { name: "浮気なハニーパイ(2015 カントリー・ガールズVer.)", img: "CTGRLSA01.jpg", opts: { group: ["country"], include: ["album"] } }

];

