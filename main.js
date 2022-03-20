const api = async () => {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random')
console.log (res);

if (res.status === 200){
    const datos = await res.json();
    console.log(datos);
    let html = '';
    html += `<img src = "${datos.icon_url}">`
    
    html += `<h2>FRASE<h2/>`
    html += `<h2>${datos.value}<h2/><br>`
    html += `<h2>ID<h2/><br>`
    html += `<h3>${datos.id}<h3/>`
   document.getElementById('container').innerHTML = html;
//    document.getElementById('container').innerHTML = datos.id;
}
    }
    catch (err) {
        console.log(err);
    }
}

api();