'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest

window.addEventListener('load', function(){

    var usuarios_2 = [];

  var box_usuarios = document.querySelector('#box_usuarios');
  var box_persona = document.querySelector('#box_persona');
  var box_janet = document.querySelector('#div_janet');

      getUusarios()
        .then(data => data.json())
        .then(users =>{
          listarUsuarios(users);

          
          return getInfo();
                   
        })
        .then(data => {
          console.log("Persona" + data);
          box_persona.innerHTML = data;
          return getJanet()          
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

  function getUusarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
  }

  function getJanet(){
    return fetch('https://reqres.in/api/users/2');
  }

  // Crear una promesa

  function getInfo(){
    var persona = {
      nombre: "Jose Daniel",
      apellidos: "Martinez Sariñana",
      sitio: "djjson.online"
    };

    return new Promise((resolve, reject)=>{
      var persona_string = "";
      
      setTimeout(function(){
        persona_string = JSON.stringify(persona);
        if(typeof persona_string != 'string' || persona_string == '') return reject("Error");
  
        return resolve(persona_string);
        
      },4000);
    }); 
    
  }
        
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

  


});