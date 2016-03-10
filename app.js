(function(){
  angular.module( 'mapApp',[] )
          .controller( 'mapController', mapController )

  function mapController(){
      var mc = this
      mc.markers = []
      mc.map = new google.maps.Map(document.getElementById('map'),
      {
          center: {lat:36.889413, lng:-76.055226},
          zoom: 13
      })
      google.maps.event.addListener( mc.map, 'click', function(event){
          var marker = new google.maps.Marker({
            position : event.latLng,
            map      : mc.map,
            title    : "first marker!",
            icon     :{
              path  : google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              scale : 10,
              strokeColor : "CadetBlue",
              strokeWeight: 4
            }
          })
          mc.markers.push(marker)
      })
    }
}())
