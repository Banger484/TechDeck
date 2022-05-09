
const posts = document.querySelectorAll('.post-card')

const goToPost = async (e) => {
    
    const singlePost = await fetch(`/api/post/${post_id}`, {
        method: 'GET',
        body: JSON.stringify({ post_id: e.target.dataset.post }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
        res.json()
    })
}

const goToRegister = async () => {
    console.log('something');
    document.location.replace('/api/user/register')
}


for (let i = 0; i < posts.length; i++) {
    posts[i].addEventListener('click', goToPost)
}

