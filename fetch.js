// fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => console.log(response))
      // // .then(json => console.log(json))

      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then(response =>console.log(response))
      // .then(json =>console.log(json))


      // var url ='https://jsonplaceholder.typicode.com/todos/1';

      // fetch(url)
      // .then(response => response.json())
      // .then(json =>console.log(json))

      // function loadData(){
      //   fetch(url)
      //   .then(response =>response.json())
      //   .then(json =>console.log(json))
      // }

      //Application programming interface(api)
      

      // function loadData2(){
      //   fetch('https://jsonplaceholder.typicode.com/users')
      //   .then(res => res.json())
      //   .then(data => console.log(data));
      // }

      // function loadUsers(){
      //   fetch('https://jsonplaceholder.typicode.com/users')
      //   .then (res => res.response())
      //   .then(data => displayUsers(data))
      // }

      // function displayUser(data){
      //   console.log(data);
      // }

      // Dynamically Display Loaded Data on your Website

      // function loadData(){
      //       fetch('https://jsonplaceholder.typicode.com/users')
      //       .then(res = res.response())
      //       .then(data =>displayUsers(data))
      // }

      // function loadData(){
      //       fetch('https://jsonplaceholder.typicode.com/users')
            
      //       .then(response => response.json())
      //       .then (json =>console.log(json))
            

      // }

      function dataLoad(){
            fetch('https://jsonplaceholder.typicode.com/users' )
            .then(res => res.json())
            .then(data =>disPlayUser(data))
      }
     function disPlayUser(data){
           console.log(data);
     }

