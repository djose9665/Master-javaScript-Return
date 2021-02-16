'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest

window.addEventListener('load', function(){

  var usuarios_1 = [];
  var usuarios_2 = [];

  var box_usuarios = document.querySelector('#box_usuarios');

  fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(users =>{
          usuarios_1 = users;
          console.log(usuarios_1);

          usuarios_1.map((user, i)=>{
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + " - " + user.username + " " + user.username;

            box_usuarios.appendChild(nombre);

            document.querySelector('.loading').style.display = 'none';
          });

        });
        

  fetch('https://reqres.in/api/users')
        .then(data => data.json())
        .then(users =>{
          usuarios_2 = users.data;
          console.log(usuarios_2);
        });  
  
});