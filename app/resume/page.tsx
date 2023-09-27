import BUAA from '../../components/icons/BUAA.svg'
import SUT from '../../public/SUT.jpg'
import TailWindCSS from '../../components/icons/tailwindcss.svg'
import ReactIcon from '../../components/icons/react.svg'
import MySQL from '../../components/icons/mysql.svg'
import TypeScript from '../../components/icons/typescript.svg'
import TensorFlow from '../../components/icons/tensorflow.svg'
import Projects from '../../components/Projects'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({ title: 'Resume' })
export default function Page() {
  return (
    <>
      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <h2 className="text-center font-extrabold">S.Alireza Mousavizade</h2>
        <hr />

        <h2>Education</h2>

        <div className="flex flex-row gap-1">
          <div style={{ width: '125px', height: '125px' }}>
            <img
              className="mb-3 mr-3 h-12 w-12 rounded-full sm:mb-0 justify-center"
              src={
                'https://en.sharif.edu/documents/51481/1963774/Sharif-University-of-Technology.jpg/d16d578c-4a49-1489-1fb9-e2d6f7db7d6e?t=1667282361389'
              }
              alt={'sut'}
              style={{ width: '100%', height: '100%' }} // Add this style
            />
          </div>
          <div className={'content'}>
            <div className="text-2xl font-extrabold">Sharif University of Technology</div>
            <div className="text-lg">Bachelor | Computer Science & Economics</div>
            <div className="text-lg text-gray-500">2018-2023</div>
          </div>
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
        <h4>To do ... :)</h4>
        {/*<Projects />*/}
      </div>
    </>
  )
}
