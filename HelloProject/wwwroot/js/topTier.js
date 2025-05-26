document.addEventListener("DOMContentLoaded", function () {
    // Cargar ídolos en la lista
    loadIdols();

    // Array para almacenar el top de ídolos seleccionados
    let selectedTop = [];

    // Función para cargar ídolos en la lista de selección
    function loadIdols() {
        const idolList = document.getElementById("idolList");
        dataSet[dataSetVersion].characterData.forEach(idol => {
            let idolItem = document.createElement("div");
            idolItem.classList.add("idol-item");
            idolItem.innerHTML = `
                <img src="~/assets/icons/${idol.img}" alt="${idol.name}" class="idol-image">
                <p>${idol.name}</p>
            `;
            idolItem.onclick = () => selectIdol(idol);
            idolList.appendChild(idolItem);
        });
    }

    // Función para seleccionar ídolos y asignarlos a los slots
    function selectIdol(idol) {
        // Buscar el primer slot vacío
        for (let i = 0; i < 15; i++) {
            if (!selectedTop[i]) {
                selectedTop[i] = idol;
                updateTopSlots();
                return;
            }
        }
        alert("Top is full! Please remove an idol to select another.");
    }

    // Función para actualizar la vista de los slots
    function updateTopSlots() {
        const topSlots = document.getElementById("topSlots");
        topSlots.innerHTML = ""; // Limpiar slots
        selectedTop.forEach((idol, index) => {
            let slot = document.createElement("div");
            slot.classList.add("top-slot");
            slot.innerHTML = `
                <div class="slot-position">#${index + 1}</div>
                <img src="~/assets/icons/${idol.img}" class="idol-image">
                <p>${idol.name}</p>
                <button class="remove-idol" onclick="removeIdol(${index})">Remove</button>
            `;
            topSlots.appendChild(slot);
        });
    }

    // Función para remover un ídolo de un slot
    function removeIdol(index) {
        selectedTop[index] = null;
        updateTopSlots();
    }

    // Función para generar la imagen del top
    document.getElementById("generateImage").onclick = function () {
        const topContainer = document.getElementById("topSlots");
        html2canvas(topContainer).then(function (canvas) {
            const generatedImage = document.getElementById("generatedImage");
            generatedImage.innerHTML = "";
            generatedImage.appendChild(canvas);
        });
    };
});
