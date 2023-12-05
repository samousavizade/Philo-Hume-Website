import Link from 'next/link'
import GitHubCard from '../../components/GitHubCard'
import NextJS from '../../components/icons/nextjs.svg'
import TailWindCSS from '../../components/icons/tailwindcss.svg'
import { genPageMetadata } from '../seo'
import { Chip } from '@mui/material'

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
            <Chip style={{ margin: '5px' }} label="Library" color={'secondary'} />
          </Link>
          telegram channel.
        </p>

      </div>
    </>
  )
}
