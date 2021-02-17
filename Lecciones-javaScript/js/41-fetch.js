'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest

window.addEventListener('load', function(){

    var usuarios_2 = [];

  var box_usuarios = document.querySelector('#box_usuarios');
  var box_janet = document.querySelector('#div_janet');

      getUusarios()
        .then(data => data.json())
        .then(users =>{
          
          listarUsuarios(users);

          return getJanet();
        })
        .then(data => data.json())
        .then(janet =>{
          mostrarJanet(janet.data);
        });
        

  fetch('https://reqres.in/api/users')
        .then(data => data.json())
        .then(users =>{
          usuarios_2 = users.data;
          console.log(usuarios_2);
        });
        
  function listarUsuarios(usuarios_1){
    usuarios_1.map((user, i)=>{
      let nombre = document.createElement('h3');
      nombre.innerHTML = i + " - " + user.username + " " + user.username;

      box_usuarios.appendChild(nombre);

      document.querySelector('.loading').style.display = 'none';
    });
  }

  function mostrarJanet(janet){
      let persona = document.createElement('h2');
      let avatar = document.createElement('img');

      persona.innerHTML =  janet.first_name + " " + janet.last_name;
      avatar.src = janet.avatar;
      avatar.width = '100';

      box_janet.appendChild(persona);
      box_janet.appendChild(avatar);
      document.querySelector('#div_janet .loading').style.display = 'none';
  }

  function getUusarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
  }

  function getJanet(){
    return fetch('https://reqres.in/api/users/2');
  }
  
});