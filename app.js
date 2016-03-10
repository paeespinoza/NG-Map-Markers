(function(){
  angular.module( 'mapApp',[] )
          .controller( 'mapController', ['$timeout', mapController] )

  function mapController($timeout){
      this.markers = []
      // this.showNoteInput = false


      this.mapMarker = function(){
        var newMarker = new Marker(event.pageX, event.pageY)
        this.markers.push( newMarker )
        // $timeout( focusPrompt, 000)
        //
        // function focusPrompt (){
        //   document.querySelector('.note-prompt').focus()
        // }
      }

      this.mapMarkerRemove = function(marker){
        this.markers.splice(this.markers.indexOf(marker),1)
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
