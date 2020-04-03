var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

function clicaBotao() {

    // EX: https://api.github.com/users/diego3g/repos
    var nomeUsuarioAxios_1 = "https://api.github.com/users/";
    var nomeUsuario = inputElement.value;
    var nomeUsuarioAxios_2 = "/repos";
    var userAxios = nomeUsuarioAxios_1 + nomeUsuario + nomeUsuarioAxios_2;

    var carregando = document.createElement('li');
    var carregandoText = document.createTextNode('Carregando');

    carregando.appendChild(carregandoText);
    listElement.appendChild(carregando);

    axios.get(userAxios)
    .then(function(response) {

        listElement.innerHTML = '';

        var array_reposi = response.data.slice();
        var i = 0;

        while(i < array_reposi.length){

            var reposElement = document.createElement('li');
            var reposText = document.createTextNode(array_reposi[i].name);

            reposElement.appendChild(reposText);
            listElement.appendChild(reposElement);
            i++;
        }
      
    })
    
    .catch(function(error) {
        alert('Erro, verifique o nome do usuario.');
        listElement.innerHTML = '';
    });

    inputElement.value = '';

}


buttonElement.onclick = clicaBotao;

