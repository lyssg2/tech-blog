console.log('logout js file loaded')
const logout = async() => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
        alert('You are logged out!')
    } else {
        alert('Failed to log out, try again');
    }
};

document.querySelector('#logout-link').addEventListener('click', logout);