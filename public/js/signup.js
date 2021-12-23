const signupForm = async function(event) {

    event.preventDefault()

    const username = document.querySelector('#username-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()

    const response = await fetch('api/user', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
            email
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert('Failed to sign up');
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupForm);