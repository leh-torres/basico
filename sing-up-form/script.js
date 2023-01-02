const cadastros = {
    "usuarios":[
        {
            "id": 1,
            "email": "leticia@gmail.com",
            "senha": "123456"
        },
        {
            "id": 2,
            "email": "fluffy@gmail.com",
            "senha": "aiai"
        }        
    ]
};

function verificaLogin(){
    let emailUsuario = document.getElementById('email');
    let senhaUsuario = document.getElementById('senha');
    let usuarioValido = false;

    cadastros.usuarios.forEach((user) =>{        
        if(user.email == emailUsuario.value && user.senha == senhaUsuario.value){
            usuarioValido = true;
            console.log("passsei", usuarioValido);
        } 
    })

    if(usuarioValido) alert("Usuário Válido!");
    else alert("Usuário inválido! Email ou senha incorretos.");
}
