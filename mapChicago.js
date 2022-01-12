// This array contains the coordinates for all bus stops between the WNDR museum and the Chicago Institute of Art
const busStops = [
    [-87.6559738, 41.8800525],
    [-87.6540812, 41.8800525],
    [-87.6520812, 41.8800525],
    [-87.6500812, 41.8800525],
    [-87.6480812, 41.8800525],
    [-87.6460812, 41.8800525],
    [-87.6440812, 41.8800525],
    [-87.6420812, 41.8800525],
    [-87.6400812, 41.8800525],
    [-87.6380812, 41.8800525],
    [-87.6360812, 41.8800525],
    [-87.6340812, 41.8800525],
    [-87.6320812, 41.8800525],
    [-87.6300812, 41.8800525],
    [-87.6280812, 41.8800525],
    [-87.6240812, 41.8800525],
    [-87.6240812, 41.8798009],
    [-87.6240812, 41.8797009],

  ];
   
  // TODO: add your own access token
  mapboxgl.accessToken='pk.eyJ1Ijoia3RiOG4iLCJhIjoiY2t5YnM1cjloMGludzJvbXJxOHN1amxzMSJ9.OFq5w9Ng0_eGgjhPUAbsRw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', //dark style
    center: [-87.636177, 41.881832],
    zoom: 13,
  });

  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker = new mapboxgl.Marker()
    .setLngLat([-87.6559738, 41.8806022]) //wndr museum
    .addTo(map);

  var marker = new mapboxgl.Marker()
  .setLngLat([-87.6230828, 41.8796009]) //chicago institute of art
  .addTo(map);
  // counter here represents the index of the current place in route
  var counter = 0;
  function move() {
    setTimeout(() => {
      if(counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter ++;
      move();
    }, 800);
  
    }
