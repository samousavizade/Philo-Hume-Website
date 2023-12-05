import TailWindCSS from '../../components/icons/tailwindcss.svg'
import ReactIcon from '../../components/icons/react.svg'
import MySQL from '../../components/icons/mysql.svg'
import TypeScript from '../../components/icons/typescript.svg'
import TensorFlow from '../../components/icons/tensorflow.svg'
import { genPageMetadata } from '../seo'
import {Chip, Grid, Paper, Typography} from '@mui/material'
import Projects from '@/components/Projects'
import Link from "next/link";
import React from "react";

export const metadata = genPageMetadata({ title: 'Resume' })
export default function Page() {
  return (
    <>
      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <h2 className="text-center font-extrabold">S.Alireza Mousavizade's CV</h2>
        <hr />
        <h2>Education</h2>

        <div className="">
          <p className="mb-4">
            <span className="font-semibold">Sharif University of Technology</span><br />
            BSc of CS & Econ - 2018 to 2023<br />
            Grade: <b>18.89</b> in major 
          </p>
          See
          <Link href="https://www.linkedin.com/in/s-a-mousavizade/">
            <Chip
                style={{ margin: '5px', borderRadius: '5px' }}
                label="LinkedIn"
                color={'primary'}
            />
          </Link>
          for more information.
        </div>

        <hr />

        <h2>Skills</h2>
        <div>
          Statistics - Statistical Inference - Hyphotesis Testing Sthochastic Process - Martingle -
          Poisson Process - Markov Chain Computer Vision - Recognition - Detection NLP - LSTM - ELMO
          - Transformers - Bert Financial ML - Portfolio Optmiziation - Information Theory Economics
          - Macroeconomics - Financial Econometrics
          <p>
            <b>Programming Languages:</b> C++, Java, Python, Julia 😍, JavaScript, MIPS 🤢, MATLAB.
          </p>
          <p>
            <b>Frameworks & Tools:</b>
            <span className="ml-2 space-x-2">
              <i className="inline-block">
                <ReactIcon className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <MySQL className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <TypeScript className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <TailWindCSS className="h-6 w-6" />
              </i>
              <i className="inline-block">
                <TensorFlow className="h-6 w-6" />
              </i>
            </span>
            , Pandas, Plotly, FastAPI, ReactJS, PyTorch, OpenCV, HuggingFace, Ray and Weights &
            Biases.
          </p>
          <p>
            <b>Languages:</b> Persian and Turkish (Native), English
          </p>
        </div>

        <hr />

        <h2>Projects</h2>
        <Projects />
      </div>
    </>
  )
}
