let adicionarNome = [];

function adicionar() {
//recuperar nome do amigo e adicionar em um array como último elemento
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (nomeAmigo != '') {

            if(adicionarNome.includes(nomeAmigo)) { //verificar se já existe no array
                alert('Nome já adicionado');
                return;
            }

            adicionarNome.push(nomeAmigo);

        let exibirNomes = document.getElementById('lista-amigos');
            exibirNomes.textContent = adicionarNome;
            limparEntradaNome();
    } else {
        alert('Informe o nome do amigo')
    } 
}

function sortear() {
    if (adicionarNome.length < 4) {
        alert('Adicione pelo menos 4 nomes');
        return;
    }
    
    embaralharArray(adicionarNome);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < adicionarNome.length; i++) {

        if (i == adicionarNome.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + (adicionarNome[i] + ' --> ' + adicionarNome[0] + '<br>');
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + (adicionarNome[i] + ' --> ' + adicionarNome[i + 1] + '<br>');
        }
    }
}

function embaralharArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
        // Retornando array com aleatoriedade
        console.log('Array embaralhado: ' + arr);
        return arr;
    }
}

function reiniciar() {
    adicionarNome = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    limparEntradaNome();
}

function limparEntradaNome() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('nome-amigo').focus();
}