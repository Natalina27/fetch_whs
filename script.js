const url = 'https://api.github.com/users/';

//Take value from query parameter
const urlParams = new URLSearchParams(window.location.search);
const nameFromUrl = urlParams.get('username');
const userName = nameFromUrl ? nameFromUrl : 'Natalina27';
const preloader = document.getElementById('preloader');

const date = new Date();
const currentDate = `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`;

//helpers
const createUser = (name, bio, img, url, date) => {
    const modifDate = date.split('-');

    const wrapperDiv = document.getElementById('wrapper');
    const title = document.createElement('h1');
    title.innerText = name;
    title.addEventListener('click', () => window.location = url);
    title.classList.add('name');
    wrapperDiv.append(title);

    const joined = document.createElement('h3');
    joined.innerText = `Joined 01/${modifDate[1]}/${modifDate[0]} `;
    joined.classList.add('date');
    wrapperDiv.append(joined);

    const bioData = document.createElement('p');
    bioData.innerText = bio;
    wrapperDiv.append(bioData);

    const current = document.createElement('h3');
    current.innerText = `Today :   ${currentDate} `;
    current.classList.add('current');
    bioData.append(current);

    const div = document.createElement('div');
    const userPic = new Image();
    userPic.src = img;
    wrapperDiv.append(div);
    div.append(userPic);


};
const errorMessage = error =>{
    const wrapperDiv = document.getElementById('wrapper');
    const title = document.createElement('h1');
    title.innerText = `${error.name}: ${error.message}`;
    title.classList.add('error');
    wrapperDiv.append(title);
}

//promises
const getName = new Promise((res, rej) =>{
    setTimeout(() => userName ? res(userName) : rej('Имя не найдено'), 1000)
});
const getUrl = new Promise((res, rej) =>{
    setTimeout(() => date ? res(date) : rej('Ссылка не найдена'), 1000)
});
const getDate = new Promise((res, rej) =>{
    setTimeout(() => url ? res(url) : rej('Дата не найдена'), 1000)
});

Promise.all([getUrl, getName, getDate])
    .then(([url, userName]) => fetch(`${url}${userName}`)
        .then(response => {
            if (!response.ok) {
                preloader.classList.add('stop');
                throw new Error('Network response was not ok');
            }else{
                preloader.classList.add('stop');
                return response.json();
            }
        })
        .then(json => {
            console.log(json);
            const { name, bio, avatar_url , html_url, created_at} = json;
            createUser(name, bio, avatar_url, html_url, created_at);

        })
        .catch(error => errorMessage(error)));



