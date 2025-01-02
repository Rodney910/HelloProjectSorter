dataSetVersion = "extraR200824"; // Cambia esto al crear una nueva versión del conjunto de datos en formato YYYY-MM-DD.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Select sorter",
        checked: true,  // La opción principal no está marcada por defecto
        key: "group",
        img: "",
        sub: [
            { name: "Current Acts", key: "current", img: "", checked: false },
            { name: "Former Acts", key: "former", img: "", checked: false }
        ]
    }
];


dataSet[dataSetVersion].characterData = [
    { name: "モーニング娘。'24", img: "MNMSM2400.jpg", opts: { group: ["current"] } },
    { name: "アンジュルム", img: "ANGM00.jpg", opts: { group: ["current"] } },
    { name: "Juice=Juice", img: "JCJC00.jpg", opts: { group: ["current"] } },
    { name: "つばきファクトリー", img: "TBKFTR00.jpg", opts: { group: ["current"] } },
    { name: "BEYOOOOONDS", img: "BYNDS00.jpg", opts: { group: ["current"] } },
    { name: "OCHA NORMA", img: "OCNM00.jpg", opts: { group: ["current"] } },
    { name: "ロージークロニクル", img: "RSCNC00.jpg", opts: { group: ["current"] } },
    //{ name: "ハロプロ研修生", img: "KSS00.jpg", opts: { group: ["current"] } },
    { name: "°C-ute", img: "CUTE00.jpg", opts: { group: ["former"] } },
    { name: "Berryz工房", img: "BRKB00.jpg", opts: { group: ["former"] } },
    { name: "こぶしファクトリー", img: "KBSFTR00.jpg", opts: { group: ["former"] } },
    { name: "カントリー・ガールズ", img: "CTGRLS00.jpg", opts: { group: ["former"] } },
];

