(function(){
  angular.module( 'mapApp',[] )
          .controller( 'mapController', ['$timeout', mapController] )

  function mapController($timeout){
      var mc = this
      mc.markers = []

      mc.mapMarker = function(){
        var newMarker = new Marker(
          100* event.pageX/(document.querySelector('.map-wrapper').clientWidth),
          100* event.pageY/(document.querySelector('.map-wrapper').clientHeight)
        )
        mc.markers.push( newMarker )
        // *********************************************************************
        // Working on Responsiveness - want input field to focus() on display
        // has to wait until the DOM element exists.  Need to decide appropriate
        // way to grab the input field. NON-ESSENTIAL
        // *********************************************************************
        // $timeout( focusPrompt, 000)
        //
        // function focusPrompt (){
        //   document.querySelector('.note-prompt').focus()
        // }
        // *********************************************************************
      }

      mc.mapMarkerRemove = function(marker){
        mc.markers.splice(mc.markers.indexOf(marker),1)
      }

      // *********************************************************************
      // Marker Constructor - primary object pushed onto the state array:
      // mc.markers[] -- exposes all of the methods needed for individual
      // marker manipulation
      // *********************************************************************
      function Marker( x, y ){
        this.top = y
        this.left = x
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
