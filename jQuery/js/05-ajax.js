$(document).ready(function(){

  var datos = $('#div_datos');
 
  // Load
  // datos.load("https://reqres.in/"); 

  // Get y Post
  $.get("https://reqres.in/api/users?", {page: 2}, function(response){
    response.data.forEach((element, index)=>{
      datos.append("<p>" + index + " " + element.first_name + " " + element.last_name + "</p>");
    })
  });

  $.get("https://reqres.in/api/unknown",{page: 2}, function(response){
    console.log(response);
    response.data.forEach((element, index)=>{
      datos.append("<p>" + index + " " + element.name + "</p>");
    });
  });

});