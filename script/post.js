var script = document.createElement('script');

script.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.min.js');
document.head.appendChild(script);

script.addEventListener('load', function () {
    //個別記事のサイト外URLにtarget="_blank"
    $(document).ready(function () {
      $("a[href^='http']:not([href*='" + location.hostname + "'])").attr(
        'target',
        '_blank'
      );
    });
  });
