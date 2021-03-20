const promise = new Promise((res, rej) =>{
    'условие' ? res('найден') : rej('не найден')
});
// fetch(`${url}${userName}`)
//     .then(response => {
//         console.log('response', response);
//         if (!response.ok) {
//             throw new Error('Информация о пользователе не доступна');
//         }
//         return response.json();
//     })
//     .then(json => {
//         console.log(json);
//         const { name, bio, avatar_url , html_url} = json;
//         createUser(name, bio, avatar_url, html_url);
//
//     })
     const fetchFunc = async () => {
        const response = await fetch(`https://api.github.com/users/Natalina27`);
        if(response.status === 200){
            const json = await response.json();
            console.log('json', json);
        }
        // return json.name;
     }
     fetchFunc();
