import { useImperativeHandle, forwardRef, useRef } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { BsPauseFill } from 'react-icons/bs'

function Video(props, ref) {
    let {src, autoPlay} = props
    const videoRef = useRef()
    useImperativeHandle(ref, () => (
        {
            play() {
                videoRef.current.play()
            },
            pause() {
                videoRef.current.pause()
            }
        }
    ))

    return (
        <video 
            className="w-full h-full"
            ref={videoRef}
            src={src}
            loop
            autoPlay
        />
    )
}

export default forwardRef(Video)