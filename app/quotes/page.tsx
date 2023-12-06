import TailWindCSS from '../../components/icons/tailwindcss.svg'
import ReactIcon from '../../components/icons/react.svg'
import MySQL from '../../components/icons/mysql.svg'
import TypeScript from '../../components/icons/typescript.svg'
import TensorFlow from '../../components/icons/tensorflow.svg'
import { genPageMetadata } from '../seo'
import { Chip, Grid, Paper, Typography } from '@mui/material'
import Projects from '@/components/Projects'
import Link from 'next/link'
import React from 'react'
import { QuotesContainerComponent } from './QuotesContainer'

export const metadata = genPageMetadata({ title: 'Resume' })
export default function Page() {
  return <QuotesContainerComponent />
}
