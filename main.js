document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.first');
  
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('blink');
        }, index * 300);
    });
  
    const button = document.getElementById('toggle-background');
    button.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'black') {
            document.body.style.backgroundColor = 'white';
            button.textContent = 'Change to 🌛';
        } else {
            document.body.style.backgroundColor = 'black';
            button.textContent = 'Change to ☀️';
        }
    });
  });  