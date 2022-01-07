var newPostForm = async(e) => {
    e.preventDefault();

    console.log('new post function loaded')

    const title = document.querySelector('#post-title').value.trim()
    const content = document.querySelector('#post-body').value.trim()

    console.log(title, content)

    const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create post');
    }
};


document.querySelector('#new-post-form').addEventListener('submit', newPostForm);

console.log('NEW POST JS FILE LOADED!!')
console.log(document.querySelector('#new-post-form'))