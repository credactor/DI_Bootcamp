async function fetchUser(id) {
    const url = "https://www.swapi.tech/api/people/" + id;
    try {
        const res = await fetch(url);
        const resJson = await res.json();
        const {name, height, gender, birth_year, homeworld} = resJson.result.properties;
        const planet = await fetchPlanet (homeworld);
        
        displayData (name, height, gender, birth_year, planet);
    } catch (error) {
        errorLoading();
    }
}

async function fetchPlanet (homeworldlink) {
    try {
        const res = await fetch(homeworldlink);
        const resJson = await res.json();
        const planet = resJson.result.properties.name;
        return planet;        
    } catch (error) {
        errorLoading();
    }
}

function displayData (name, height, gender, birth_year, homeworld) {
    fullname.innerHTML = name;
    p_height.innerText = `Height: ${height}`;
    p_gender.innerText = `Gender: ${gender}`;
    p_birth_year.innerText = `Birth Year: ${birth_year}`;
    p_homeworld.innerText = `Home World: ${homeworld}`;
}

function getInfo () {
    loading();
    let id = Math.floor((Math.random() * 83) + 1);
    fetchUser(id);
}

function loading () {
    fullname.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    clearFields();
}

function clearFields() {
    p_height.innerText = ''
    p_gender.innerText = ''
    p_birth_year.innerText = ''
    p_homeworld.innerText = ''
}

function errorLoading () {
    fullname.innerHTML = `Oh No! That person isn't available.`;
    clearFields();
}

let find = document.getElementById('find');
let fullname = document.getElementById('fullname');
let p_height = document.getElementById('p-height');
let p_gender = document.getElementById('p-gender');
let p_birth_year = document.getElementById('p-birthyear');
let p_homeworld = document.getElementById('p-homeworld');

find.addEventListener('click', getInfo);
