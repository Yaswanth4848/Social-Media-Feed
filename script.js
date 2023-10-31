function addPost() {
    const postText = document.getElementById('postText').value;
    if (postText !== '') {
        const postsContainer = document.getElementById('posts');
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `
            <div class="post-content">${postText}</div>
            <button class="delete" onclick="deletePost(this)">Delete</button>
        `;
        postsContainer.appendChild(post);
        document.getElementById('postText').value = '';
    }
}

function deletePost(element) {
    const post = element.parentElement;
    post.remove();
}
