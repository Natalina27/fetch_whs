const url = 'http://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/';
const init = {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin':'*'
    }};

fetch(url, init)
    .then(response => response.json())
    .then(data => console.log('data', data))
    .catch(error => console.log(error));

// fetch(URL, {
//     mode: 'cors',
//     headers: {
//         'Access-Control-Allow-Origin':'*'
//     }
// })
/// fetch(url)
//     .then(response => response.text())
//     .then(data => console.log('data', data))
//             // const doc = new DOMParser().parseFromString(data, 'text/html');
//             // console.log('doc',doc);
//             // const ourData = Array.from(doc.querySelectorAll('.product-item[data-id]'));
//             // console.log('ourData', ourData);
//             // const array = ourData.map((el) => el.getAttribute('data-id'));
//             // console.log('array', array);
//     .catch(error => console.log(error));
//     .then(response => response.json())