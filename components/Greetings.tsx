import React from 'react'
import Typed from 'typed.js'
import Emoji from '@/components/twemoji'
import Link from 'next/link'
import { Chip } from '@mui/material'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'I was born in 2000.',
        'I was raised in Shiraz. 💖',
        'I like 🏓,🎱and🎳.',
        'I like DOTA 2.',
        'I like Fake Small 😉.',
        '...',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hi Friends,
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg mt-4">
        <p>
          Welcome! I’m <b>S. Alireza Mousavizade</b>. <Emoji kind="partyingFace" />
        </p>

        <p>
          Greetings, I am Alireza, currently pursuing a dual major in Computer Science and Economics
          at Sharif University of Technology, having commenced my academic journey in 2018. My
          academic interests are particularly anchored in Natural Language Processing, Computer
          Vision, Financial Machine Learning, and Macroeconomics. A detailed description of my
          notable courses and their corresponding projects can be found on my webpage. I hope this
          captures the essence of your background and interests while presenting it in a polished
          manner. I currently live in
          <i>
            {' '}
            <b>Iran,</b>{' '}
          </i>
          and I'm planning to study abroad in US and am currently waiting for certificates.
        </p>

        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />

          <p>
            This website is used to introduce myself, publish some regular blogs, document my travel
            diaries, as well as record books, movies, and music I've experienced. Feel free to Get
            to know me better in my personal
            <Link href="https://salirezamousavizade.vercel.app/about">
              <Chip
                style={{ margin: '5px', borderRadius: '5px' }}
                label="Website"
                color={'info'}
                variant={'outlined'}
              />
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Greetings
