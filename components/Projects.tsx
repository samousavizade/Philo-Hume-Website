import { Chip } from '@mui/material'
import Link from 'next/link'

const Projects = () => {
  const projects = [
    {
      name: 'Poisson Blending',
      type: 'CV',
      description: [
        'Combining various toxins to enhance potency.',
        'Balancing ingredients to mask detectability.',
        'Testing and refining blends for desired effects.',
      ],
    },
    {
      name: 'Image Morphing',
      type: 'CV',
      description: [
        'Establish correspondence between feature points on the source and target images.',
        'Generate intermediate shapes and cross-dissolve colors using a weighted average based on the correspondence.',
        'Render the sequence of intermediate images, creating the illusion of the source image smoothly transforming into the target image.',
      ],
    },
  ]

  return (
    <>
      <div>
        {projects.map((project) => (
          <div key={project.name}>
            <h4>
              <div className="font-extrabold">{project.name}</div>
              <div className="text-gray-500">{project.type}</div>
            </h4>
            <ul>
              {project.description.map((description) => (
                <li key={description} className="text-sm">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p>
        Other projects and descriptions are uploaded to my
        <Link href="https://github.com/samousavizade/">
          <Chip style={{ margin: '5px' }} label="Github" color={'info'} />
        </Link>
        .
      </p>
    </>
  )
}

export default Projects
