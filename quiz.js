
function checkAnswer() {
    
    const correctAnswer = "4";
    
    
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;
        
        
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        
        document.getElementById('feedback').textContent = "Please select an answer!";
    }
}


document.getElementById('submit-answer').addEventListener('click', checkAnswer);