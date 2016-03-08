(function(){
  angular.module( 'mapApp',[] )
          .controller( 'mapController',mapController )

  function mapController(){
      this.mapMarker = function(){
        var markerX = event.clientX
        var markerY = event.clientY

        var newMarker = document.createElement("DIV")
        var markerText = document.createTextNode('X')
        newMarker.appendChild(markerText)
        angular.element(newMarker).addClass('map-marker')
        angular.element(newMarker).css("top",markerY+"px")
        angular.element(newMarker).css("left",markerX+"px")
        angular.element(newMarker).on('click', removeMarker)
        document.body.appendChild(newMarker)

        function removeMarker(){
          angular.element(event.target).remove()
        }

      }

  }

}())
