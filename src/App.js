import { useEffect, useRef, useState } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import FooterMobile from './components/FooterMobile'
import HeaderMobile from './components/HeaderMobile'
import Video from './components/Video'
import useSwipe from './utils/useSwipe'

const videos = [
    {
        id: 1,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648810907/video_ohhot/hot-girl_x55c8l.mp4'
    },
    {
        id: 2,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811723/video_ohhot/hot-girl6_tuexap.mp4'
    },
    {
        id: 3,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811729/video_ohhot/hot-girl7_qtchxg.mp4'
    },
    {
        id: 4,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811730/video_ohhot/hot-girl8_r3dclg.mp4'
    },
    {
        id: 5,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811730/video_ohhot/hot-girl9_dcloc4.mp4'
    },
    {
        id: 6,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811731/video_ohhot/hot-girl11_w7yqtv.mp4'
    },
    {
        id: 7,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811735/video_ohhot/hot-girl10_up5ifg.mp4'
    },
    {
        id: 8,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811741/video_ohhot/hot-girl4_p9o1pp.mp4'
    },
    {
        id: 9,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811753/video_ohhot/hot-girl2_horrx2.mp4'
    },
    {
        id: 10,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811756/video_ohhot/hot-girl3_w6smgc.mp4'
    },
    {
        id: 11,
        url: 'https://res.cloudinary.com/ohhot/video/upload/v1648811760/video_ohhot/hot-girl5_mdtzf3.mp4'
    }
]

function App() {
    const [isPlay, setIsPlay] = useState(false)
    const [videoLink, setVideoLink] = useState(videos[0].url)
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
      window.addEventListener('keyup', handleKeyup)

      return () => window.removeEventListener('keyup', handleKeyup)
    }, [isPlay])

    useSwipe(() => {
      const videoList = []
      videos.map(video => videoList.push(video.url))
      let index = videoList.indexOf(videoLink)
      if (index === videoList.length - 1) {
          index = 0
          isPause.current = true
          setVideoLink(videoList[index])
      }
      else {
        isPause.current = true
        setVideoLink(videoList[index + 1])
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
