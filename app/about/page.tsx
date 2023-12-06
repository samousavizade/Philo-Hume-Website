import Link from 'next/link'
import GitHubCard from '../../components/GitHubCard'
import NextJS from '../../components/icons/nextjs.svg'
import TailWindCSS from '../../components/icons/tailwindcss.svg'
import { genPageMetadata } from '../seo'
import { Chip } from '@mui/material'
import Image from 'next/image'
import GTMetrics from '../../public/static/images/2x2_grid_image.png'

export const metadata = genPageMetadata({ title: 'About' })

export default function About() {
  return (
    <>
      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <h2>My Shelf</h2>
        <b>Books & Movies</b>
        <p>
          You can see what I'm watching or reading recently at{` `}
          <Link href="/library">
            <Chip style={{ margin: '5px' }} label="Library" color={'success'} />
          </Link>
          page.
        </p>
        <b>Music</b>
        <p>
          I listen to music all the time.
          <br />
          You can see what I'm listening recently at
          <Link href="https://t.me/Quite_S1lence">
            <Chip style={{ margin: '5px' }} label="Silence" color={'primary'} />
          </Link>
          and
          <Link href="@NotOnlySilence">
            <Chip style={{ margin: '5px' }} label="(Not Only) Silence" color={'primary'} />
          </Link>
          telegram channel.
        </p>
        <b>Mindset and Ideas</b>
        <p>
          You can read what quotes and philosophies i follow at{` `}
          <Link href="@my_fav_quote">
            <Chip style={{ margin: '5px' }} label="Quotes" color={'secondary'} />
          </Link>
          telegram channel.
        </p>
        <h2>Fundamentals</h2>
        <div className="bg-soto-tailwind-bg p-6 max-w-2xl mx-auto">
          <div className="mb-3">
            <p className="italic font-medium">David Hume:</p>
            <p className="ml-4">
              <span>
                "All knowledge degenerates into the <b>probability</b>."
              </span>
            </p>
            <p className="ml-4">
              <span>
                "A wise man proportions his belief to the <b>evidence</b>."
              </span>
            </p>
          </div>
          <div>
            <p className="italic font-medium">Albert Einstein (Antithesis):</p>
            <p className="ml-4">
              <span>
                "The essence of existence lies in the unexplained <b>randomness</b>, an enigma
                wrapped in probability. It is the fundamental thread weaving the fabric of our
                world, destined to remain a mystery until the very end."{' '}
                <b>
                  God does <s>not</s> play dice with the universe.
                </b>
              </span>
            </p>
          </div>
        </div>
        <h2>GTMetrics Report</h2>
        <div className="justify-center items-center w-full h-full shadow-2xl rounded-3xl">
          <Image
            src={GTMetrics} // Replace with your image path
            alt="Descriptive Alt Text"
            objectFit="cover" // Adjusts the size of the image to cover the div, can be adjusted to "contain" if needed
            className="rounded-md" // Optional: for rounded corners
          />
        </div>
      </div>
    </>
  )
}
