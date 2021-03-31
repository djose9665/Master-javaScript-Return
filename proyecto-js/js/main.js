$(document).ready(function(){
  // Variables
  var slider = $('.bxslider');

  // Slider
    slider.bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      responsive: true,
      // pager: false
    });

  //Posts
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


  /*<article class="post">
    <h2>Titulo del articulo</h2>
    <span class="date">Fecha de publicacion</span>
    <p >
      Praesent at auctor mauris. Curabitur laoreet fermentum ex egestas cursus. Integer cursus, 
      mauris non pretium ultricies, turpis nulla luctus turpis, ac iaculis nisi lacus vitae magna. 
      Vivamus urna diam, faucibus eu dapibus a, cursus vel ex. Nunc tempus ante condimentum dolor rutrum volutpat. 
      Suspendisse ex odio, volutpat id elementum at, ultrices id magna. Nam sed tellus justo. Etiam condimentum nulla eu varius tempus. 
      Proin laoreet odio lorem, sed tempus neque fringilla et. Praesent sed pellentesque velit. Cras placerat porttitor turpis. 
      Mauris nisl risus, congue blandit quam quis, elementum pellentesque leo. Nam sed tincidunt lacus. Etiam vitae lacus eget justo 
      pretium elementum suscipit rutrum lacus. Maecenas quam leo, iaculis quis lectus et, sodales tristique est. 
      Fusce sollicitudin dui vitae elit tincidunt, eget gravida ex eleifend.
    </p>
    <a href="#" class="button_more">Leer mas</a>
  </article>*/

  // console.log(posts);

});