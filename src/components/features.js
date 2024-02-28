import React from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div id="Services" className="features-features">
      <div className="features-container">
        <span className="overline">
          <span>features</span>
          <br></br>
        </span>
        <h2 className="features-features-heading heading2">
          {props.featuresHeading}
        </h2>
        <span className="features-features-sub-heading bodyLarge">
          <span>
            <span>
              <span>
                Elevate your beauty experience with our exclusive offerings
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <span>
            <span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </span>
      </div>
      <div className="features-container1"></div>
      <button className="buttonFlat">{props.heroButton2}</button>
    </div>
  )
}

Features.defaultProps = {
  heroButton2: 'See Portfolio ',
  featuresHeading: 'The Artist Behind the Brush',
}

Features.propTypes = {
  heroButton2: PropTypes.string,
  featuresHeading: PropTypes.string,
}

export default Features
