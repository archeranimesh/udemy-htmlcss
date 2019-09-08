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