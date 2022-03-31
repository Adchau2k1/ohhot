import { useEffect, useRef, useState } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import FooterMobile from './components/FooterMobile'
import HeaderMobile from './components/HeaderMobile'
import Video from './components/Video'
import link from './assets/videos/hot-girl.mp4'
import link2 from './assets/videos/hot-girl2.mp4'
import useSwipe from './utils/useSwipe'

function App() {
    const [isPlay, setIsPlay] = useState(false)
    const videoLinkList = [link, link2]
    const [videoLink, setVideoLink] = useState(videoLinkList[0])
    const videoRef = useRef()
    const isPause = useRef()

    document.onclick = () => {
      isPause.current = !isPause.current

      if (isPause.current)
        videoRef.current.play()
      else
        videoRef.current.pause()

      setIsPlay(!isPlay)
    }

    useEffect(() => {
      const handleKeyup = e => {
        if (e.keyCode === 32) {
          isPause.current = !isPause.current
    
          if (isPause.current)
            videoRef.current.play()
          else
            videoRef.current.pause()
    
          setIsPlay(!isPlay)
        }
      }
      window.addEventListener("keyup", handleKeyup)

      return () => window.removeEventListener("keyup", handleKeyup)
    }, [isPlay])

    useSwipe(() => {
      let index = videoLinkList.indexOf(videoLink)
      if (index === videoLinkList.length - 1) {
          index = 0
          isPause.current = true
          setVideoLink(videoLinkList[index])
      }
      else {
        isPause.current = true
        setVideoLink(videoLinkList[index + 1])
      }
    }, 'down')

    // useSwipe(() => {
    //   let index = videoLinkList.indexOf(videoLink)
    //   if (index === 0) {
    //       isPause.current = true
    //       setVideoLink(videoLinkList[index])
    //   }
    //   else {
    //     isPause.current = true
    //     setVideoLink(videoLinkList[index - 1])
    //   }
    // }, 'up')

    return (
      <div className="h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-900 to-slate-600">
        <HeaderMobile />
        <Video ref={videoRef} src={videoLink} />
        {!isPause.current &&
          <BsPlayFill
            className="text-primary text-7xl absolute inset-0 m-auto" 
          />
        }
        <FooterMobile />
      </div>
      )
  }

export default App
