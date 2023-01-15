function verificaLogin(){
    let emailUsuario = document.getElementById('email');
    let senhaUsuario = document.getElementById('senha');    

    if(emailUsuario.value == 'leticia@gmail.com' && senhaUsuario.value == '1234') alert("Usuário Válido!");
    else alert("Usuário inválido! Email ou senha incorretos.");
}
