const url = 'https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog';


fetch(url)
    .then(response => response.text())
    .then(data => {
            const doc = new DOMParser().parseFromString(data, 'text/html');
            console.log('doc',doc);
            const ourData = Array.from(doc.querySelectorAll('.product-item[data-id]'));
            console.log('ourData', ourData);
            const array = ourData.map((el) => el.getAttribute('data-id'));
            console.log('array', array);
    }
        )
    .catch(error => console.log(error));
