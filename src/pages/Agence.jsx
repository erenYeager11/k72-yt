import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/SebR_640X960-640x960.jpg'
  ]

  // ✅ Preload images once
  React.useEffect(() => {
    imageArray.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }, [])

  useGSAP(() => {
    let currentIndex = -1

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'top -80%',
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          let imageIndex = Math.floor(self.progress * (imageArray.length - 1))

          // ✅ Only update if index changes
          if (imageIndex !== currentIndex) {
            currentIndex = imageIndex
            imageRef.current.src = imageArray[imageIndex]
          }
        }
      }
    })
  })

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] overflow-hidden rounded-4xl w-[15vw] top-60 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src={imageArray[0]} // start with first image
            alt=""
          />
        </div>
        <div className="relative font-[font1]">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence
