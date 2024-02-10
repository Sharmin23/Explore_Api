
//dataload in Dynamic way  
function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUsers2(data))
}

function displayUsers2(data){
    
    var ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        var li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

    }
}