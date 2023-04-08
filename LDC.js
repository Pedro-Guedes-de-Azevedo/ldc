function ValidaForm(){
    let email = document.getElementById("email").innerHTML;
    let senha = document.getElementById("senha").innerHTML;
    if((email="admin@admin.com.br") && (senha ="123")){
        alert("Usuário e senha inválidos");
    }
    else{
        alert("Usuário autenticado");
    }
}

function trocaimagem() {
    document.getElementById("estatistica").src = "estatistica2.webp";
}

function Agradecimento(){
    alert("Muito obrigado pelo retorno!")
}