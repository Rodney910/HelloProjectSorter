document.addEventListener('DOMContentLoaded', function () {
    const groupOptions = document.querySelector('.carousel-content');
    const characterList = document.getElementById('characterList');
    const carouselLeft = document.getElementById('carouselLeft');
    const carouselRight = document.getElementById('carouselRight');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    let selectedGroup = null;
    let currentIndex = 0;
    let isDragging = false;
    let startX, scrollLeft;

    function extractNumberFromImage(img) {
        const match = img.match(/(\d{2})\.jpg$/);
        return match ? parseInt(match[1], 10) : 0;
    }

    function populateGroupOptions() {
        const options = dataSet[Object.keys(dataSet)[0]].options;

        groupOptions.innerHTML = ''; // Limpiar contenido existente
        options.forEach(option => {
            if (option.sub) {
                option.sub.forEach(subopt => {
                    const html = `
                        <div class="option-item">
                            <label title="${subopt.tooltip ? subopt.tooltip : subopt.name}">
                                <input id="cb-${subopt.key}" type="radio" name="group" ${subopt.checked ? 'checked' : ''} ${option.checked === false ? 'disabled' : ''} class="option-checkbox">
                                <div class="image-wrapper">
                                    <img src="${imageRoot + subopt.img}" alt="${subopt.name}" class="option-image">
                                    <div class="option-text">${subopt.name}</div>
                                </div>
                            </label>
                        </div>
                    `;
                    groupOptions.insertAdjacentHTML('beforeend', html);
                    const radio = document.getElementById(`cb-${subopt.key}`);
                    radio.addEventListener('change', handleRadioChange);
                });
            }
        });

        updateCarousel();
    }

    function handleRadioChange() {
        selectedGroup = this.id.replace('cb-', '');
        displayCharacters();
    }

    function displayCharacters() {
        const characterData = dataSet[Object.keys(dataSet)[0]].characterData;
        let filteredCharacters = [];

        if (selectedGroup) {
            filteredCharacters = characterData.filter(character =>
                character.opts.group.includes(selectedGroup)
            );
            filteredCharacters.sort((a, b) => extractNumberFromImage(a.img) - extractNumberFromImage(b.img));
        }

        characterList.innerHTML = '';
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'results';
        characterList.appendChild(resultsContainer);

        filteredCharacters.forEach(character => {
            const charDiv = document.createElement('div');
            charDiv.className = 'result-grid-item';
            charDiv.style.borderColor = character.color; // Asignar color de borde

            charDiv.innerHTML = `
                <img src="${imageRoot + character.img}" alt="${character.name}">
                <div class="result-info">${character.name}</div>
            `;
            resultsContainer.appendChild(charDiv);
        });
    }

    function scrollCarousel(direction) {
        const totalItems = document.querySelectorAll('.option-item').length;
        const visibleItems = 3;
        const itemWidth = document.querySelector('.option-item').offsetWidth;
        const maxIndex = totalItems - visibleItems;

        if (direction === 'left' && currentIndex > 0) {
            currentIndex--;
        } else if (direction === 'right' && currentIndex < maxIndex) {
            currentIndex++;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const items = document.querySelectorAll('.option-item');
        const visibleItems = 3;
        const middleIndex = Math.floor(visibleItems / 2);

        items.forEach((item, index) => {
            item.classList.toggle('highlighted', index === currentIndex);
        });

        const itemWidth = items[0].offsetWidth;
        const scrollAmount = (currentIndex - middleIndex) * itemWidth;
        groupOptions.style.transform = `translateX(${-scrollAmount}px)`;
    }

    function handleDrag(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselWrapper.offsetLeft;
        const walk = (x - startX) * 3; // Desplazamiento más rápido
        groupOptions.scrollLeft = scrollLeft - walk;
    }

    function startDrag(e) {
        isDragging = true;
        startX = e.pageX - carouselWrapper.offsetLeft;
        scrollLeft = groupOptions.scrollLeft;
    }

    function stopDrag() {
        isDragging = false;
    }

    carouselLeft.addEventListener('click', () => scrollCarousel('left'));
    carouselRight.addEventListener('click', () => scrollCarousel('right'));

    carouselWrapper.addEventListener('mousedown', startDrag);
    carouselWrapper.addEventListener('mousemove', handleDrag);
    carouselWrapper.addEventListener('mouseup', stopDrag);
    carouselWrapper.addEventListener('mouseleave', stopDrag);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            scrollCarousel('left');
        } else if (e.key === 'ArrowRight') {
            scrollCarousel('right');
        }
    });

    // Inicializar opciones y no personajes mostrados por defecto
    populateGroupOptions();
    displayCharacters();
});
