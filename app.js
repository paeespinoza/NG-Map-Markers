(function(){
  angular.module( 'mapApp',[] )
          .controller( 'mapController',mapController )

  function mapController(){
      this.markers = []
      this.mapMarker = function(){
        this.markers.push( new marker(event.pageX, event.pageY) )
      }
      this.mapMarkerRemove = function(marker){
        this.markers.splice(this.markers.indexOf(marker),1)
      }
  }
  function marker( x, y ){
    this.css = "{'top':'" + y + "px', " + "'left':'" + x + "px'}"
  }

}())
