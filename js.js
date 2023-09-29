async function atividadeApi() {
    let postagem = document.querySelector('#atividadeApi');
    let response = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10'); // Altere o limite para a quantidade desejada de imagens, limit=10
    let json = await response.json();

    if (json.length > 0) {
        postagem.innerHTML = '';
        for (let i in json) {
            let postagemHTML = '<div> <br/><br/><br/> <h2> Este é o ID da imagem &#129031; <p>'+ json[i].id+'</p></h2><img src='+json[i].url+'></div>';
            postagem.innerHTML = postagem.innerHTML+postagemHTML;
        }
    } else {
        console.log('Nenhum dado encontrado na resposta da API.');
    }
}

atividadeApi();
