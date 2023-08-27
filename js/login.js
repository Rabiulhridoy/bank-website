//step:1 submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit button clicked');
    //step:2 email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    //step:3 get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //step:4 verify email and password
    if(email === 'hridoy@gmail.com' && password === '1234'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }

})