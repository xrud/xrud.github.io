function setLanguage($language) {
    var globalPageLanguage = $language;
    console.log(globalPageLanguage);
}

function getLanguage() {
    let language = navigator.language || navigator.userLanguage;
    let codeLanguage = language[0]+language[1];

    switch (codeLanguage) {
        case 'pt':
            setLanguage('pt');
            break;
        case 'es':
            setLanguage('es');
            break;
        default:
            setLanguage('en');

    }

    console.log("Lingua: "+codeLanguage);
}


function ResGetURL($value) { // Responde retorno de URL
    console.log($value);
}

function includePageHTML($element, $path, $page) { // Inclui página usando jQuery
    $(document).ready(function() {
        $($element).load($path + $page + '.html');
    });
}

function getURL() {
    //Array de getURLetros 'chave=valor'
    var getURLs = window.location.search.substring(1).split('&');
    //Criar objeto que vai conter os getURLetros
    var getURLArray = {};
    //Passar por todos os getURLetros
    for (var i = 0; i < getURLs.length; i++) {
        //Dividir os getURLetros chave e valor
        var getURL = getURLs[i].split('=');
        //Adicionar ao objeto criado antes
        getURLArray[getURL[0]] = getURL[1];
    }

    let action = getURL[1];
    ResGetURL(action);
}