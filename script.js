const url = 'https://api.github.com/users/';
const userName = 'Natalina27';

const createUser = (name, bio, img) => {
    const wrapperDiv = document.getElementById('wrapper');
    const title = document.createElement('h1');
    title.innerText = name;
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
    title.innerText = `${error.name}: ${error.message}`;
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
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        const { name, bio, avatar_url } = json;
        createUser(name, bio, avatar_url);
    })
    .catch(error => errorMessage(error));
