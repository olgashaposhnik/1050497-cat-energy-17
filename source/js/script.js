  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  function initialize() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(59.938631, 30.323055)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),
                                  mapOptions);
    var image = "./img/map-pin.png";
    var myLatLng = new google.maps.LatLng(59.938631, 30.323055);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    })
  }
  google.maps.event.addDomListener(window, 'load', initialize);
