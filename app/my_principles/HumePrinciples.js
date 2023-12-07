import React from 'react'

const HumePrinciples = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-gray-500 shadow-lg rounded-lg p-6">
        <h1 className="text-xl md:text-2xl font-bold mb-4">
          Understanding Hume's Epistemology: Two Key Principles
        </h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              The Nature of Knowledge as Probability
              <h4 className="bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text font-extrabold text-transparent">
                All knowledge degenerates into the probability.
              </h4>
            </h2>
            <p className="text-sm md:text-base">
              Hume argues that all human knowledge is not of absolute certainty but rather of
              varying degrees of probability. Our understanding of the world is based on experiences
              and perceptions, which are inherently fallible and subjective. This perspective
              challenges the notion of absolute knowledge, suggesting instead that we operate within
              a spectrum of likelihoods and uncertainties.
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              Belief Proportionate to Evidence
              <h4 className="bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text font-extrabold text-transparent">
                A wise man proportions his belief to the evidence.
              </h4>
            </h2>
            <p className="text-sm md:text-base">
              A central tenet in Hume's philosophy is the idea that a wise person should align the
              strength of their beliefs with the strength of the evidence supporting them. This
              principle advocates for a rational approach to belief formation, where one's
              confidence in a particular idea is calibrated according to the available empirical or
              logical support. It's a call for intellectual humility and a cautious approach to
              claims that lack sufficient backing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HumePrinciples
