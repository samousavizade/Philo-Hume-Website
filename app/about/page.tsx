import Link from 'next/link'
import GitHubCard from '../../components/GitHubCard'
import NextJS from '../../components/icons/nextjs.svg'
import TailWindCSS from '../../components/icons/tailwindcss.svg'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function About() {
  return (
    <>
      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <h2>My Shelf</h2>
        <b>Books & Movies</b>
        <p>
          I watch and read all kinds of stuff.
          <br />
          You can see what I'm watching or reading recently at{` `}
          <Link href="/library">Library Page.</Link>
        </p>
        <b>Music</b>
        <p>
          I listen to music all the time.
          <br />
          You can see what I'm listening recently at my{' '}
          <Link href="https://t.me/Quite_S1lence">Telegram</Link> channel
        </p>

        <h2>About The Blog</h2>
        <div>
          <GitHubCard repo="samousavizade/soto-blog-nextjs" />
          <div>
            It's hosted on <a href="https://vercel.com">Vercel</a> and built with{' '}
            <a href="https://nextjs.org">
              <i className="inline-block">
                <NextJS className="h-6 w-6" />
              </i>
            </a>{' '}
            and{' '}
            <a href="https://tailwindcss.com">
              <i className="inline-block">
                <TailWindCSS className="h-6 w-6" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
