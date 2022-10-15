function validaCampos(){
    var nome = document.getElementById('nome').value
    var ultNome = document.getElementById('ultNome').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    
    console.log(nome)
    if(nome == null || nome == ''){
        //nome.style.borderColor = 'red'
    }
}