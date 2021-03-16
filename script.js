const url = 'https://api.github.com/users/';

//Take value from query parameter
const urlParams = new URLSearchParams(window.location.search);
const nameFromUrl = urlParams.get('username');
const userName = nameFromUrl ? nameFromUrl : 'Natalina2';

const createUser = (name, bio, img, url) => {
    const wrapperDiv = document.getElementById('wrapper');
    const title = document.createElement('h1');
    title.innerText = name;
    title.addEventListener('click', () => window.location = url);
    title.classList.add('name');
    wrapperDiv.append(title);

    const paragraph = document.createElement('p');
    paragraph.innerText = bio;
    wrapperDiv.append(paragraph);

    const div = document.createElement('div');
    const userPic = new Image();
    userPic.src = img;
    wrapperDiv.append(div);
    div.append(userPic);
};
const errorMessage = error =>{
    const wrapperDiv = document.getElementById('wrapper');
    const title = document.createElement('h1');
    title.innerText = ` ${error.message}`;
    title.classList.add('error');
    wrapperDiv.append(title);
}

setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('stop');
}, 2000);

fetch(`${url}${userName}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Информация о пользователе не доступна');
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
        const { name, bio, avatar_url , html_url} = json;
        createUser(name, bio, avatar_url, html_url);

    })
    .catch(error => errorMessage(error));
