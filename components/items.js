import React from 'react'

import PropTypes from 'prop-types'

const Items = (props) => {
  return (
    <>
      <div className={`items-items ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="items-element1 accordion"
        >
          <div className="items-content1">
            <span className="items-header1">{props.header}</span>
            <span data-role="accordion-content" className="items-description1">
              {props.description}
            </span>
          </div>
          <div className="items-icon-container1">
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-closed"
              className="items-icon10"
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-open"
              className="items-icon12"
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="items-element2 accordion"
        >
          <div className="items-content2">
            <span className="items-header2">{props.header1}</span>
            <span data-role="accordion-content" className="items-description2">
              {props.description1}
            </span>
          </div>
          <div className="items-icon-container2">
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-closed"
              className="items-icon14"
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-open"
              className="items-icon16"
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="items-element3 accordion"
        >
          <div className="items-content3">
            <span className="items-header3">{props.header2}</span>
            <span data-role="accordion-content" className="items-description3">
              {props.description2}
            </span>
          </div>
          <div className="items-icon-container3">
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-closed"
              className="items-icon18"
            >
              <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              data-role="accordion-icon-open"
              className="items-icon20"
            >
              <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .items-items {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .items-element1 {
            align-items: flex-start;
          }
          .items-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .items-header1 {
            font-size: 24px;
          }
          .items-description1 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .items-icon-container1 {
            position: relative;
            padding-top: var(--dl-space-space-halfunit);
          }
          .items-icon10 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .items-icon12 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .items-element2 {
            align-items: flex-start;
          }
          .items-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .items-header2 {
            font-size: 24px;
          }
          .items-description2 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .items-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .items-icon14 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .items-icon16 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .items-element3 {
            align-items: flex-start;
          }
          .items-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .items-header3 {
            font-size: 24px;
          }
          .items-description3 {
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .items-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .items-icon18 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .items-icon20 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          @media (max-width: 767px) {
            .items-element2 {
              align-items: flex-start;
            }
          }
          @media (max-width: 479px) {
            .items-header1 {
              font-size: 16px;
            }
            .items-description1 {
              font-size: 14px;
              line-height: 21px;
            }
            .items-header2 {
              font-size: 16px;
            }
            .items-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .items-header3 {
              font-size: 16px;
            }
            .items-description3 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Items.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  description1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  description2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  header: 'Esse cillum dolore eu fugiat nulla pariatur.',
  header1: 'Esse cillum dolore eu fugiat nulla pariatur.',
  rootClassName: '',
  header2: 'Esse cillum dolore eu fugiat nulla pariatur.',
}

Items.propTypes = {
  description: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  header: PropTypes.string,
  header1: PropTypes.string,
  rootClassName: PropTypes.string,
  header2: PropTypes.string,
}

export default Items
