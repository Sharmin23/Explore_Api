// function loadPosts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data =>console.log(data))
// }
/*
1. get the container element where you want to add the new elements
2.Create child element
3.set innerText or innerHtml
4.appendChild
*/

// function disPlayPosts(posts){
//     const postContainer = document.getElementById('posts-container');
//     for(const post of posts){
//         const postDiv = document.createElement('div');
//         postDiv.innerHTML =`
//         <h4> User </h4>
//         <h5>post:title</h5>
//         <p>Post Description </p>
//         `;
//         postContainer.appendChild(postDiv);
//     }
// }

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => disPlayPosts(data));
}

function disPlayPosts(posts) {
    const postContainer = document.getElementById('post-container'); // corrected typo in id
    for(const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPosts();