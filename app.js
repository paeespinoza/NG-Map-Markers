(function(){
  angular.module( 'mapApp',[] )
          .controller( 'mapController', ['$timeout', mapController] )

  function mapController($timeout){
      var mc = this
      mc.markers = []
      var map

      function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat:36.889413, lng:-76.055226},
          zoom: 13
        });
      }

      mc.mapMarker = function(){
        // var newMarker = new Marker(event.pageX, event.pageY)
        // mc.markers.push( newMarker )
          console.log('debugging google api')

        // ***** Working on Responsiveness - not crucial ***************
        // $timeout( focusPrompt, 000)
        //
        // function focusPrompt (){
        //   document.querySelector('.note-prompt').focus()
        // }
        // *************************************************************
      }

      mc.mapMarkerRemove = function(marker){
        mc.markers.splice(mc.markers.indexOf(marker),1)
      }

      function Marker( x, y ){
        this.top = y / (document.querySelector('.map-wrapper').clientHeight) *100
        this.left = x / (document.querySelector('.map-wrapper').clientWidth) *100
        this.note = ''
        this.css = function(){
          return "{'top': '" + this.top + "%','left': '" + this.left + "%'}"
        }

        this.noteVisible = false
        this.promptVisible = true

        this.showNote = function(){
          this.noteVisible = true
        }
        this.hideNote = function(){
          this.noteVisible = false
        }
        this.confirmNote = function(){
          this.promptVisible = false
        }
      }
  }


}())
