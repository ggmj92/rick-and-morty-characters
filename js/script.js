const url = 'https://rickandmortyapi.com/api/character'
const characterList = document.getElementById('character-list');

const getCharacters = (url) => {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.results.forEach(function (character) {
                const div = document.createElement('div');
                div.classList.add('character');

                const img = document.createElement('img');
                img.src = character.image;
                img.alt = character.name;
                div.appendChild(img);

                const name = document.createElement('h2');
                name.textContent = character.name;
                div.appendChild(name);

                const species = document.createElement('p');
                species.textContent = character.species;
                div.appendChild(species);

                characterList.appendChild(div);
            });

            if (data.info.next) {
                getCharacters(data.info.next);
            }
        });
};

getCharacters('https://rickandmortyapi.com/api/character');
