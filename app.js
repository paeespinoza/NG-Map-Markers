(function(){
  angular.module( 'mapApp',[] )
          .controller( 'mapController', mapController )

  function mapController(){
      this.markers = []
      this.showNoteInput = false


      this.mapMarker = function(){
        this.showNoteInput = true
        // angular.element(document.querySelector('.note-prompt input')).focus()
        this.markers.push( new marker(event.pageX, event.pageY) )
      }
      // this.confirmNote = function(){
      //   var note = ''
      //   if( event.keyCode === 13 ){
      //     note = event.target.value
      //     this.showNoteInput = false
      //     event.target.value = ''
      //   }
      // }
      this.mapMarkerRemove = function(marker){
        this.markers.splice(this.markers.indexOf(marker),1)
      }

      function marker( x, y ){
        this.top = y / (document.querySelector('.map-wrapper').clientHeight) *100
        this.left = x / (document.querySelector('.map-wrapper').clientWidth) *100
        // this.note = note
        this.css = function(){
          return "{'top': '" + this.top + "%','left': '" + this.left + "%'}"
        }
        this.noteVisible = false
        this.showNote = function(){
          this.noteVisible = true
        }
        this.hideNote = function(){
          this.noteVisible = false
        }
      }
  }


}())
