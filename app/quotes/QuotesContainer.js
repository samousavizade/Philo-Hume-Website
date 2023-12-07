const QuotesContainer = ({ text, reference }) => {
  return (
    <div className="mx-auto mt-5 p-4 max-w-2xl bg-gray-400 dark:bg-gray-600 shadow-lg rounded-lg">
      <h3 className="text-lg md:text-xl text-blue-900 dark:text-blue-200 text-left">{text}</h3>
      {reference && (
        <p className="text-right text-blue-900 dark:text-blue-200 opacity-50 mt-4 text-sm italic">
          {reference}
        </p>
      )}
    </div>
  )
}

const quotes = [
  {
    text: 'A wise man proportions his belief to the evidence.',
    reference: 'An Enquiry Concerning Human Understanding, section 10, pt.1, 1748',
  },
  {
    text: 'There is no such thing as freedom of choice unless there is freedom to refuse.',
    reference: '',
  },
  {
    text: 'When men are most sure and arrogant they are commonly most mistaken.',
    reference: '',
  },
  {
    text: 'Beauty in things exists in the mind which contemplates them.',
    reference: '',
  },
  {
    text: 'All knowledge degenerates into probability.',
    reference: 'A Treatise of Human Nature: Top Philosophy Collections, p.144, 谷月社',
  },
  {
    text: 'If God is omnipotent, omniscient and wholly good, whence evil? If God wills to prevent evil but cannot, then He is not omnipotent. If He can prevent evil but does not, then he is not good. In either case he is not God.',
    reference: '',
  },
  {
    text: 'Nothing is more surprising than the easiness with which the many are governed by the few.',
    reference: '',
  },
  {
    text: 'Anything that is conceivable is possible.',
    reference: '',
  },
  {
    text: 'To hate, to love, to think, to feel, to see; all this is nothing but to perceive.',
    reference: 'A Treatise of Human Nature: Top Philosophy Collections, p.57, 谷月社',
  },
  {
    text: 'It is seldom, that liberty of any kind is lost all at once.',
    reference: 'Hume: Political Writings, p.253, Hackett Publishing',
  },
  {
    text: 'The life of man is of no greater importance to the universe than that of an oyster.',
    reference: 'Dialogues Concerning Natural Religion (Second Edition), p.100, Hackett Publishing',
  },
  {
    text: 'Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve and obey them.',
    reference: 'A Treatise upon Human Nature bk. 2, 1739',
  },
  {
    text: 'Beauty is no quality in things themselves: It exists merely in the mind which contemplates them; and each mind perceives a different beauty.',
    reference: "Essays, Moral, Political, and Literary 'Of the Standard of Taste', 1757",
  },
  {
    text: 'Human happiness seems to consist in three ingredients: action, pleasure and indolence.',
    reference:
      'Essays and treatises on several subjects: essays, moral, political and literary, p.266, 1825',
  },
  {
    text: 'Anticipation of pleasure is, in itself, a very considerable pleasure.',
    reference: 'A Treatise of Human Nature: Illustrated, p.405, eKitap Projesi',
  },
  {
    text: 'Reading and sauntering and lounging and dosing, which I call thinking, is my supreme Happiness.',
    reference: 'Letters of David Hume to William Strahan',
  },
  {
    text: 'The difference between a man who is led by opinion or emotion and one who is led by reason. The former, whether he will or not, performs things of which he is entirely ignorant; the latter is subordinate to no one, and only does those things which he knows to be of primary importance in his life, and which on that account he desires the most; and therefore I call the former a slave, but the latter free.',
    reference: '',
  },
  {
    text: 'No amount of observations of white swans can allow the inference that all swans are white, but the observation of a single black swan is sufficient to refute that conclusion.',
    reference: '',
  },
  {
    text: 'The unhappy of all men is he who believes himself to be so.',
    reference: '',
  },
  {
    text: 'Nothing appears more surprising to those, who consider human affairs with a philosophical eye, than the easiness with which the many are governed by the few; and the implicit submission, with which men resign their own sentiments and passions to those of their rulers.',
    reference: 'Moral and Political Philosophy, p.406, Simon and Schuster, 2010',
  },
  {
    text: 'Truth springs from argument amongst friends.',
    reference: '',
  },
  {
    text: 'Moving from an objective statement of fact to a subjective statement of value does not work, because it leaves open questions that have not been answered.',
    reference: '',
  },
  {
    text: 'It is harder to avoid censure than to gain applause.',
    reference: '',
  },
  {
    text: 'A little philosophy makes a man an Atheist: a great deal converts him to religion.',
    reference: 'Dialogues and Natural History of Religion, p.41, Oxford University Press, USA',
  },
]

export const QuotesContainerComponent = () => {
  return (
    <div className="space-y-4">
      {quotes.map((quote, index) => (
        <QuotesContainer key={index} text={quote.text} reference={quote.reference} />
      ))}
    </div>
  )
}
