console.log('logout js file loaded')

const logout = async(e) => {
    e.preventDefault()

    const response = await fetch('/api/user/logout', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    console.log('logout route smacked')

    if (response.ok) {
        document.location.replace('/');
        alert('You are logged out!')
    } else {
        alert('Failed to log out, try again');
    }
};

document.querySelector('#logout-link').addEventListener('click', logout);