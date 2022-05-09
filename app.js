const submitBtn = document.getElementById('submited_form')
const Email = document.getElementById('exampleInputEmail1')
const Pass = document.getElementById('exampleInputPassword1')
const emailHelp = document.getElementById('emailHelp')

submitBtn.addEventListener('click', () => {
    if(Email.value === "huseyin@gmail.com") {
        console.log('true')
    } else {
        emailHelp.innerHTML === 'wrong email or password'
    }
})