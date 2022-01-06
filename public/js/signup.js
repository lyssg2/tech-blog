console.log('Signup js file loaded')

var signupForm = async(e) => {

    e.preventDefault()

    const username = document.querySelector('#username-signup').value.trim()
    const name = document.querySelector('#name-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()

    console.log(username, password, email)

    const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({
            name,
            username,
            password,
            email
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to sign up');
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupForm);