(function(){
  angular.module( 'mapApp',[] )
          .controller( 'mapController', mapController )

  function mapController(){
      this.markers = []
      this.showNoteInput = false


      this.mapMarker = function(){
        this.showNoteInput = true
        var newMarker = new marker(event.pageX, event.pageY)
        this.markers.push( newMarker )
        newMarker.showPrompt()
      }

      this.mapMarkerRemove = function(marker){
        this.markers.splice(this.markers.indexOf(marker),1)
      }

      function marker( x, y ){
        this.top = y / (document.querySelector('.map-wrapper').clientHeight) *100
        this.left = x / (document.querySelector('.map-wrapper').clientWidth) *100
        this.note = ''
        this.css = function(){
          return "{'top': '" + this.top + "%','left': '" + this.left + "%'}"
        }
        this.noteVisible = false
        this.promptVisible = false
        
        this.showPrompt = function(){
          this.promptVisible = true
        }
        this.showNote = function(){
          this.noteVisible = true
        }
        this.hideNote = function(){
          this.noteVisible = false
        }
      }
  }


}())
