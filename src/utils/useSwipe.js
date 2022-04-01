function useSwipe(callback, action) {
    document.addEventListener('touchstart', handleTouchStart, false)        
    document.addEventListener('touchmove', handleTouchMove, false)

    var xDown = null                                                        
    var yDown = null

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches // jQuery
    }                                                     
                                                                            
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0]                                      
        xDown = firstTouch.clientX                                      
        yDown = firstTouch.clientY                                      
    }                                                
                                                                            
    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return
        }

        var xUp = evt.touches[0].clientX                                    
        var yUp = evt.touches[0].clientY

        var xDiff = xDown - xUp
        var yDiff = yDown - yUp
                                                                            
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if (xDiff > 0) {
                /* right swipe */ 
            } else {
                /* left swipe */
            }                       
        } else {
            console.log(yDiff)
            if (yDiff >= 20  && action === 'down') {
                /* down swipe */
                callback()
                document.removeEventListener('touchstart', handleTouchStart, false)        
                document.removeEventListener('touchmove', handleTouchMove, false)
            } else if (yDiff <= -20) { 
                /* up swipe */
                callback()
                document.removeEventListener('touchstart', handleTouchStart, false)        
                document.removeEventListener('touchmove', handleTouchMove, false)
            }                                                               
        }
        /* reset values */
        xDown = null
        yDown = null     
    }
}

export default useSwipe