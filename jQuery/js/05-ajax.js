$(document).ready(function(){

  var datos = $('#div_datos');
  var formulario = $('#form_registro');
 
  // Load
  // datos.load("https://reqres.in/"); 

  // Get y Post
  $.get("https://reqres.in/api/users", {page: 2}, function(response){
    response.data.forEach((element, index)=>{
      datos.append("<p>" + index + " " + element.first_name + " " + element.last_name + "</p>");
    })
  });

  $.get("https://reqres.in/api/unknown",{page: 2}, function(response){
    // console.log(response);
    response.data.forEach((element, index)=>{
      datos.append("<p>" + index + " " + element.name + "</p>");
    });
  });

  formulario.submit(function(e){
    e.preventDefault();

    var usuario = {
      // name : "Daniel Martinez",
      // web : "djjson.online",
      // email : "djjso0n@gmail.com"
      // name: $('#txt_nombre').val(),
      // web: $('#txt_web').val(),
      // email: $('#txt_email').val()
      name: $('input[name="txt_nombre"]').val(),
      web: $('input[name="txt_web"]').val(),
      email: $('input[name="txt_email"]').val()
    };
    // console.log(usuario);
  
    // $.post("https://reqres.in/api/users", usuario, function(response){
    /*$.post($(this).attr("action"), usuario, function(response){
      console.log(response);
    }).done(function(){
      alert("Usuario registrado correctamente");
    });*/

    $.ajax({
      type: 'POST',
      // dataType: 'json',
      // contentType: 'applicaciont/json'
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function(){
        console.log("Enviando Usuario...");
      },
      success: function(response){
        console.log(response);
      },
      error: function (){
        console.log("A ocurrido un error");
      },
      timeout: 2000,
    });

    return false;
  });

});