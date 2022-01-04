const loginForm = async(e) => {
    e.preventDefault();

    console.log('login function loaded')

    const usernameEl = document.querySelector('#username-input-login').value.trim()
    const passwordEl = document.querySelector('#password-input-login').value.trim()

    if (usernameEl && passwordEl) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                usernameEl,
                passwordEl
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to login');
        }
    };
}

document
    .querySelector('.login-form')
    .addEventListener('submit', loginForm);

console.log('LOGIN JS FILE LOADED!!')

// $('#login').on('click', function() {
//     console.log('Hello!')

//     var login = {
//         username = document.querySelector('#username-input-login'),
//         password = document.querySelector('#password-input-login')
//     }

//     fetch('/users/login', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(login)
//     }).then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log('Data from Backed we got back after we did fetch!', data)
//     })

//     console.log('login', login)

// })