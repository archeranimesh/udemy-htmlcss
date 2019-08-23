var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([77.59, 12.97]),
      zoom: 8
    })
  });
//   https://openlayers.org/en/latest/doc/quickstart.html

// Smooth Scrolling animation.
$('#navbar a, .btn').on('click', function(event){
  if(this.hash != ''){
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 800);
  }
});

// Sticky Menu background
window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.9;
  }else{
    document.querySelector('#navbar').style.opacity = 1;
  }
});