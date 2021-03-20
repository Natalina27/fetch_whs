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

const getName = (async () => {
    try{
        const response = await fetch(`${url}${userName}`);
        const data = await response.json();
        return data.name;
    }catch(error){
        console.log(error);
    }
})();

const getBio = (async () => {
    try{
        const response = await fetch(`${url}${userName}`);
        const data = await response.json();
        return data.bio;
    }catch(error){
        console.log(error);
    }
})();
const getImg = (async () => {
    try{
        const response = await fetch(`${url}${userName}`);
        const data = await response.json();
        console.log('data', data);
        return data.avatar_url;
    }catch(error){
        console.log(error);
    }
})();
const getUrl = (async () => {
    try{
        const response = await fetch(`${url}${userName}`);
        const data = await response.json();
        console.log('data', data);
        return data.html_url;
    }catch(error){
        console.log(error);
    }
})();const getCtreatedDate = (async () => {
    try{
        const response = await fetch(`${url}${userName}`);
        const data = await response.json();
        return data.created_at;
    }catch(error){
        console.log(error);
    }
})();
const fetch1 = getName;
const fetch2 = getBio;
const fetch3 = getImg;
const fetch4 = getUrl;
const fetch5 = getCtreatedDate;

Promise.all([fetch1, fetch2, fetch3, fetch4, fetch5])
    .then((result) => {
        preloader.classList.add('stop');
        console.log(result);
        createUser(...result);
    })


