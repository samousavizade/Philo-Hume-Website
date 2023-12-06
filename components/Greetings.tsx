import React from 'react'
import Link from 'next/link'
import { Chip } from '@mui/material'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-gray-700 to-blue-300 bg-clip-text text-4xl font-extrabold text-transparent">
        Welcome to <b>Philo Hume</b> website,
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg mt-4">
        <p>
          David Hume was a Scottish philosopher, economist, and historian, considered one of the
          most important figures in the history of Western philosophy and the Scottish
          Enlightenment. Born on May 7, 1711, in Edinburgh, Hume's work includes "A Treatise of
          Human Nature" (1739-40), "Enquiries Concerning Human Understanding" (1748), and "Enquiries
          Concerning the Principles of Morals" (1751), among others. He is often grouped with John
          Locke, George Berkeley, and a handful of others as a British Empiricist.
        </p>
        <p>
          One of Hume's central philosophical ideas is his <b>empiricist</b> approach to knowledge:
          he argued that all human knowledge arises from experience, challenging the rationalist
          notion that knowledge can be acquired through reason alone. In his "Treatise," Hume starts
          by theorizing about the mind’s perception of the external world, suggesting that our
          concepts of 'self' and causality are the products of habit rather than inherently
          verifiable truths.
        </p>
        Regarding existence, Hume was famously <b>skeptical</b>, particularly about the existence of
        the self, which he could not pinpoint through his empirical approach. He suggested that what
        we call the self is merely a bundle of perceptions, linked by the relations of causation and
        resemblance.
        <p>
          In terms of <b>probability</b>, Hume critiqued the notion of causality, arguing that our
          belief in causation is founded on the human habit of associating two events together, not
          on any observable and necessary connection between them. This led him to discuss the
          problem of induction, questioning our ability to justify inductive reasoning—if we only
          see the sun rise every morning, can we ever be certain it will rise tomorrow?
        </p>
        Hume's ideas on <b>religion</b> were equally groundbreaking and controversial. He was
        skeptical of religious dogma and critical of miracles, positing that it is more probable
        that testimony of a miracle is false than that the miracle actually occurred. This
        skepticism extended to the design argument for God's existence; Hume argued that the order
        and complexity observed in the world do not necessarily indicate a divine designer, as
        natural processes could explain such order.
        <p>
          In <b>economics</b>, Hume contributed to the understanding of trade, commerce, and public
          finance, emphasizing the importance of passion and emotion in economic behavior, which was
          a departure from the then-common belief in rational economic decision-making.
        </p>
        <p>
          Hume's influence extends into the <b>modern day</b>, impacting various fields including
          philosophy of science, epistemology, metaphysics, ethics, and economics. His rigorous
          skepticism and empirical approach continue to resonate, encouraging critical examination
          and scientific inquiry.
        </p>
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />
          <p>
            David Hume selected quotes also written in
            <Link href="https://t.me/my_fav_quote">
              <Chip
                style={{ margin: '5px', borderRadius: '5px' }}
                label="Website"
                className={'bg-gray-500 text-white dark:text-dark '}
                variant={'filled'}
              />
            </Link>{' '}
            Telegram channel and
            <Link href="https://twitter.com/niche_market">
              <Chip
                style={{ margin: '5px', borderRadius: '5px' }}
                className={'bg-gray-500 text-white dark:text-dark '}
                label="Twitter"
                variant={'filled'}
              />
            </Link>
            Twitter.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Greetings
