const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#secondName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

const validateText = (input) => {
    if(input.value.trim() === ''){
        setError(input, 'Name can\'t be  empty')
        return false
    }
    else if(input.value.trim().length < 2){
        setError(input, 'Name must be atleast 2 characters long')
        return false
    }
    else {
        setSuccess(input)
        return true
    }

}

const validateEmail = email => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(email.value.trim() == ''){
        setError(email, 'Email address can\'t be empty')
        return false
    }
    else if(!regEx.test(email.value)){
        setError(email,'Email address is invalid')
        return false
    }
    else{
        setSuccess(email)
        return true
    }
}

const validatePassword = input => {
    if(input.value.trim() == ''){
        setError(input,'Password can\'t be empty')
        return false
    }
    else if(input.value.trim().length < 5){
        setError(input,'Password must be atleast 5 characters long')
        return false
    }
    else if(!/\d/.test(input.value)){
        setError(input,'Password should contain atleast 1 number')
        return false
    }
    else{
        setSuccess(input)
        return true
    }
}

const samePassword = (password, repeatPassword) =>{
    if(repeatPassword.value.trim() === ''){
        setError(repeatPassword,'Password can\'t be empty')
        return false
    }
    else if(password.value.trim() !== repeatPassword.value.trim()){
        setError(repeatPassword,'Passwords must match')
        return false
    }
    else {
        setSuccess(repeatPassword)
        return true
    }
}

const setError = (input, textMessage) =>{
    const parent = input.parentElement;
    parent.classList.add('is-invalid');
    parent.classList.remove('is-valid');
    parent.querySelector('.invalid-input').innerText = textMessage
}

const setSuccess = input => {
    const parent = input.parentElement;
    parent.classList.remove('is-invalid');
    parent.classList.add('is-valid');

}

const validate = input =>{
    switch(input.type){
        case 'text': return validateText(input)
        case 'email': return validateEmail(email)
        case 'password': return input.id != 'password2' ? validatePassword(input) : samePassword(password,password2) 
        default : break;
    }
}

form.addEventListener('submit', e => {
e.preventDefault();

const errors = []
for (let i=0; i< form.length; i++){
    errors[i] = validate(form[i])
}
if(errors.includes(false))
return;


const user = {
    id: Date.now.toString(),
    firstName: firstName.value,
    secondNameName: secondName.value,
    email: email.value,
    password: password.value
}
console.log(user)
})
