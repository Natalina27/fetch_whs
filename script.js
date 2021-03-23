fetch('https://api.github.com/users/6thSence')
    .then(res=>res.json())
    .then(json=>{
            console.log(json);
            const photo = json.avatar_url;
            console.log(photo);
            let img = document.createElement('img');
            img.src = photo;
            document.body.append(img);
    })