const btn = document.querySelector('button');
const popParent = document.querySelector('.pop-parent');
const X = document.querySelector('.X');
const section1 = document.querySelector('.section-1');
const parentEmail = document.querySelector('.parent-email');
const myProject = document.querySelector('.my-project');
const section2 = document.querySelector('.section-2');
const sendEmail = document.querySelector('#send-email');
const inputEmail = document.querySelector('#input-email');
const inputName = document.querySelector('#input-name');

btn.addEventListener('click', showUp);

function showUp() {
    popParent.style.display = 'block';
    section1.style.filter = 'blur(10px)';
}

X.addEventListener('click', removeShowUpX);

function removeShowUpX() {
    popParent.style.display = 'none';
    section1.style.filter = 'blur(0px)';
} 

popParent.addEventListener('click', removeShowUpPopParent);

function removeShowUpPopParent(e) {
    if(e.target.className == 'pop-parent'){
        popParent.style.display = 'none';
    section1.style.filter = 'blur(0px)';
    }
}



myProject.addEventListener('click', showEmail);

function showEmail() {
    parentEmail.style.display = 'block'; 
        popParent.style.display = 'none';
        section1.style.filter = 'blur(10px)';
}

sendEmail.addEventListener('click', thankYou);

function thankYou(){
    if (inputName.value === ""  && inputEmail.value === "") {
        alert('Please Input Fields');
    } else if (inputName.value === "") {
        alert('Please Input a name');
    } else  if (inputEmail.value === "") {
        alert('Please Input a valid Email');
    }
    else {     
    alert( 'Hi ' + inputName.value.toUpperCase() + '!'  + ' We have received your E-mail THANK YOU For Coming!');

    } 
}
