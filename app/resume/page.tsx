import TailWindCSS from '../../components/icons/tailwindcss.svg'
import ReactIcon from '../../components/icons/react.svg'
import MySQL from '../../components/icons/mysql.svg'
import TypeScript from '../../components/icons/typescript.svg'
import TensorFlow from '../../components/icons/tensorflow.svg'
import { genPageMetadata } from '../seo'
import { Grid, Paper, Typography } from '@mui/material'
import Projects from '@/components/Projects'

export const metadata = genPageMetadata({ title: 'Resume' })
export default function Page() {
  return (
    <>
      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <h2 className="text-center font-extrabold">S.Alireza Mousavizade's CV</h2>
        <hr />

        <h2>Education</h2>

        <Paper className="bg-transparent" elevation={0}>
          <Grid container paddingX={3} bgcolor={'#212121'} borderRadius={'10px'}>
            <Grid item xs={3}>
              <img
                style={{ height: '150px' }}
                src={
                  'https://en.sharif.edu/documents/51481/1963774/Sharif-University-of-Technology.jpg/d16d578c-4a49-1489-1fb9-e2d6f7db7d6e?t=1667282361389'
                }
                alt="Institution"
              />
            </Grid>
            <Grid item xs={8} marginLeft={2}>
              <Typography variant="h3" color={'textPrimary'}>
                {'Sharif University of Technology'}
              </Typography>
              <Typography variant="body1" color="textPrimary">
                {'BSc of CS & Econ - 2018 to 2023'}
              </Typography>
              <Typography variant="body2" color={'gray'}>
                {'Grade: 18.89 in major - TA for several courses'}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

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
