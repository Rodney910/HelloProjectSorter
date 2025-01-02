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
    { name: "Morning Musume '24", img: "MNMSM2400.jpg", opts: { group: ["current"] } },
    { name: "ANGERME", img: "ANGM00.jpg", opts: { group: ["current"] } },
    { name: "Juice=Juice", img: "JCJC00.jpg", opts: { group: ["current"] } },
    { name: "Tsubaki Factory", img: "TBKFTR00.jpg", opts: { group: ["current"] } },
    { name: "BEYOOOOONDS", img: "BYNDS00.jpg", opts: { group: ["current"] } },
    { name: "OCHA NORMA", img: "OCNM00.jpg", opts: { group: ["current"] } },
    { name: "Rosy Chronicle", img: "RSCNC00.jpg", opts: { group: ["current"] } },
    //{ name: "Hello Pro Kenshuusei", img: "KSS00.jpg", opts: { group: ["current"] } },
    { name: "°C-ute", img: "CUTE00.jpg", opts: { group: ["former"] } },
    { name: "Berryz Koubou", img: "BRKB00.jpg", opts: { group: ["former"] } },
    { name: "Kobushi Factory", img: "KBSFTR00.jpg", opts: { group: ["former"] } },
    { name: "Country Girls", img: "CTGRLS00.jpg", opts: { group: ["former"] } },
];

