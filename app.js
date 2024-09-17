

function greetings(){
    let name1 = prompt("Enter Your Name?");
    let age = prompt("Enter Your Age?");
    let displayElement = document.getElementById('display');

    if(age > 18 ){
        displayElement.innerHTML = `Welcome ${name1}, you are eligible to participate.`;
        displayElement.classList.add('success');
        displayElement.classList.remove('error');
    } else {
        displayElement.innerHTML = `Sorry ${name1}, enter again.`;
        displayElement.classList.add('error');
        displayElement.classList.remove('success');
    }

   
    displayElement.classList.add('show-message', 'animate-message');

    setTimeout(() => {
        displayElement.style.opacity = '0'; 
    }, 20000);  
}

