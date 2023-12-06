const concepts = [
  {
    id: 1,
    title: 'Science',
    content:
      'David Hume emphasized empirical evidence and observation, laying the groundwork for the scientific method.',
  },
  {
    id: 2,
    title: 'Biology',
    content:
      'Hume rarely discussed biology directly, but his ideas on naturalism have influenced thoughts on biological processes and human nature.',
  },
  {
    id: 3,
    title: 'Good and Evil',
    content:
      'Hume believed that concepts of good and evil are rooted in human emotion rather than divine command or rational deduction.',
  },
  {
    id: 4,
    title: 'Probability',
    content:
      'Hume critiqued the notion of causality, arguing that our belief in causation and hence probability is founded on habit, not logical certainty.',
  },
  {
    id: 5,
    title: 'Mind',
    content:
      'Hume was a proponent of the idea that the mind is a set of different perceptions without a stable self to bind them together.',
  },
  {
    id: 6,
    title: 'Self-Consciousness',
    content:
      'Hume suggested that self-consciousness arises from our perceptions and experiences, not from an innate self.',
  },
  {
    id: 7,
    title: 'Nature',
    content:
      'For Hume, understanding nature is about observing patterns and regularities, which shape our expectations and beliefs.',
  },
  {
    id: 8,
    title: 'Death',
    content:
      'Hume approached death with a calm indifference, viewing it as a natural and inevitable part of life.',
  },
  // Add more concepts here if needed
]

import { useState } from 'react'

const Concept = ({ title, content, onToggle, isActive }) => {
  // Animation classes for the flash effect
  const activeClasses = 'border-0 border-blue-900 bg-gray-300 dark:bg-gray-700'
  const inactiveClasses = 'border-transparent'
  const flashEffect = 'transition-all duration-300 ease-in-out transform hover:scale-105'

  return (
    <div
      className={`${
        isActive ? activeClasses : inactiveClasses
      } ${flashEffect} overflow-hidden rounded-2xl`}
    >
      <button
        className={`w-full text-left py-3 px-5 focus:outline-none ${
          isActive ? 'font-semibold' : ''
        }`}
        onClick={onToggle}
      >
        {title}
      </button>
      <div
        className={`px-5 py-1 transition-height duration-400 ease-in-out ${
          isActive ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {content}
      </div>
    </div>
  )
}

const ConceptsAccordion = () => {
  const [activeId, setActiveId] = useState(null)

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <div className="space-y-2">
      {concepts.map((concept) => (
        <Concept
          key={concept.id}
          title={concept.title}
          content={concept.content}
          isActive={activeId === concept.id}
          onToggle={() => toggleItem(concept.id)}
        />
      ))}
    </div>
  )
}

export default ConceptsAccordion
