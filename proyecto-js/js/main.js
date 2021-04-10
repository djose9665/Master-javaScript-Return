$(document).ready(function(){
  // Variables
  // Slider
  var slider = $('.bxslider');
  // Temas
  var theme = $('#theme');
  var tema_verde = $('#to-green');
  var tema_rojo = $('#to-red');
  var tema_azul = $('#to-blue');
  // Scroll
  var subir = $('.subir');
  // Login
  var login = $('#login');
  


  // Slider
  if(window.location.href.indexOf('index') > -1){
    slider.bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive: true,
      // pager: false
    });
  }

  //Posts
  if(window.location.href.indexOf('index') > -1){
    var posts = [
      {
        title: "Prueba de titulo 1",
        date: 'Publicado el día: ' + moment().format(' dddd ') + '' + moment().format(' Do ') + ' de ' + moment().format(' MMMM ') + ' del ' + moment().format(' YYYY'),
        content: 'Praesent at auctor mauris. Curabitur laoreet fermentum ex egestas cursus. Integer cursus, mauris non pretium ultricies, turpis nulla luctus turpis, ac iaculis nisi lacus vitae magna. Vivamus urna diam, faucibus eu dapibus a, cursus vel ex. Nunc tempus ante condimentum dolor rutrum volutpat. Suspendisse ex odio, volutpat id elementum at, ultrices id magna' 
      },
      {
        title: "Prueba de titulo 2",
        date: 'Publicado el día: ' + moment().format(' dddd ') + '' + moment().format(' Do ') + ' de ' + moment().format(' MMMM ') + ' del ' + moment().format(' YYYY'),
        content: 'Praesent at auctor mauris. Curabitur laoreet fermentum ex egestas cursus. Integer cursus, mauris non pretium ultricies, turpis nulla luctus turpis, ac iaculis nisi lacus vitae magna. Vivamus urna diam, faucibus eu dapibus a, cursus vel ex. Nunc tempus ante condimentum dolor rutrum volutpat. Suspendisse ex odio, volutpat id elementum at, ultrices id magna' 
      },
      {
        title: "Prueba de titulo 3",
        date: 'Publicado el día: ' + moment().format(' dddd ') + '' + moment().format(' Do ') + ' de ' + moment().format(' MMMM ') + ' del ' + moment().format(' YYYY'),
        content: 'Praesent at auctor mauris. Curabitur laoreet fermentum ex egestas cursus. Integer cursus, mauris non pretium ultricies, turpis nulla luctus turpis, ac iaculis nisi lacus vitae magna. Vivamus urna diam, faucibus eu dapibus a, cursus vel ex. Nunc tempus ante condimentum dolor rutrum volutpat. Suspendisse ex odio, volutpat id elementum at, ultrices id magna' 
      },
      {
        title: "Prueba de titulo 4",
        date: 'Publicado el día: ' + moment().format(' dddd ') + '' + moment().format(' Do ') + ' de ' + moment().format(' MMMM ') + ' del ' + moment().format(' YYYY'),
        content: 'Praesent at auctor mauris. Curabitur laoreet fermentum ex egestas cursus. Integer cursus, mauris non pretium ultricies, turpis nulla luctus turpis, ac iaculis nisi lacus vitae magna. Vivamus urna diam, faucibus eu dapibus a, cursus vel ex. Nunc tempus ante condimentum dolor rutrum volutpat. Suspendisse ex odio, volutpat id elementum at, ultrices id magna' 
      },
    ];

    posts.forEach((item, index) => {
      var post = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p >
          ${item.content}
        </p>
        <a href="#" class="button_more">Leer mas</a>
      </article>
      `;
      // console.log(post);
      $('#post').append(post);
    });
  }


  //Selector de tema
  tema_verde.click(function(){
    theme.attr("href", "css/green.css");
  });

  tema_rojo.click(function(){
    theme.attr("href", "css/red.css");
  });
  tema_azul.click(function(){
    theme.attr("href", "css/blue.css");
  });

  // Scroll arriba
  subir.click(function(e){
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  // Login falso
  $('#login form').submit(function(){
    var form_name = $('#form_name').val(); 

    localStorage.setItem("form_name", form_name);
    
  });

  var get_form_name = localStorage.getItem("form_name");

  if(get_form_name != null && form_name != 'undefined'){
    var about_parrafo = $('#about p');
    about_parrafo.html("<br> <strong> Bienvenido, " + get_form_name + "</strong> ");
    about_parrafo.append('<a href="#" id="logout">Cerrar sesion</a>');
    
    login.hide();   
    $('#logout').click(function(){
      localStorage.clear();
      location.reload();
    });
  }

  // Acordeon
  if(window.location.href.indexOf('about') > -1){
    var acordeon = $('#acordeon');
    acordeon.accordion();
  }


  // Reloj
  if(window.location.href.indexOf('reloj') > -1){
    setInterval(function(){
      var reloj = moment().format("hh:mm:ss");
      var div_reloj = $('#reloj');
      div_reloj.html(reloj);
    }, 1000);
  }

  if(window.location.href.indexOf('contact') > -1){
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy"
    });

    $.validate({
      lang: "es",
      errorMessagePosition: 'top',
      scrollTopOnError: true
    })
  }

  


});