window.onload = () => {
    showAnswer()
}

function showAnswer(){
    question = document.querySelectorAll('.question')

    question.forEach(element => {
        element.addEventListener('click', () => {
            question.forEach(btn => {
                if(btn == element) btn.classList.toggle('active')
                else btn.classList.remove('active')
            })
        })
    });
}