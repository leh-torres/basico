function validaCampos(){
    var nome = document.getElementById('nome')
    var ultNome = document.getElementById('ultNome')
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')
    var warnings = document.querySelectorAll('.warnings')

    console.log(warnings)

    if(nome.value.length == ''){
        nome.style.borderColor = 'hsl(0, 100%, 74%)'
        warnings[0].style.display = 'block'
    } else {
        nome.style.borderColor = 'hsl(154, 59%, 51%)'
        warnings[0].style.display = 'none'
    }
    if(ultNome.value.length == ''){
        ultNome.style.borderColor = 'hsl(0, 100%, 74%)'
        warnings[1].style.display = 'block'
    } else {
        ultNome.style.borderColor = 'hsl(154, 59%, 51%)'
        warnings[1].style.display = 'none'
    }
    if(email.value.length == ''){
        email.style.borderColor = 'hsl(0, 100%, 74%)'
        warnings[2].style.display = 'block'
    } else {
        email.style.borderColor = 'hsl(154, 59%, 51%)'
        warnings[2].style.display = 'none'
    }
    if(senha.value.length == ''){
        senha.style.borderColor = 'hsl(0, 100%, 74%)'
        warnings[3].style.display = 'block'
    }  else {
        senha.style.borderColor = 'hsl(154, 59%, 51%)'
        warnings[3].style.display = 'none'
    }

    nome.value = ''
    ultNome.value = ''
    email.value = ''
    senha.value = ''
}