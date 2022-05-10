const button = document.getElementById('update-button')
const form = document.querySelector('.update-post-form')
const post = document.getElementById('single-post')
const deleteButton = document.getElementById('delete-button')



const toggleUpdate = () => {
    if(button.classList.contains('hide')) {
        button.className='btn-light btn show'
        form.className='update-post-form'
    } else {
        button.className='btn-dark btn hide'
        form.className='update-post-form d-none'
    }
    return
}

const updatePost = async (event) => {
    event.preventDefault()

    const content = document.querySelector('#update-post-input').value.trim()
    console.log(content);
    if(content) {
        const response = await fetch(`/api/post/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ content }),
            headers: { "Content-Type": "application/json" }
        })
        return document.location.replace('/api/dashboard')
    }
}
const deletePost = async (event) => {
    event.preventDefault()

    const response = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
        body: JSON.stringify(),
        headers: { "Content-Type": "application/json" }
    })
    return document.location.replace('/api/dashboard')
}

button.addEventListener('click', toggleUpdate)

form.addEventListener('submit', updatePost)

deleteButton.addEventListener('click', deletePost)
