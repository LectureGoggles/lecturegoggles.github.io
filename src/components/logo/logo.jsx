import React from 'react';
import PropTypes from 'prop-types';

const style1 = {
  fill: '#605856',
  stroke: '#001f3f',
  strokeMiterlimit: '10',
  strokeWidth: '8px'
};

const style2 = {
  fill: '#0074d9',
  stroke: '#001f3f',
  strokeMiterlimit: '10',
  strokeWidth: '5px'
};

const style3 = {
  fill: '#d0ccd0',
  stroke: '#001f3f',
  strokeMiterlimit: '10',
  strokeWidth: '8px'
};

const style4 = {
  fill: '#fbfcff',
  stroke: '#001f3f',
  strokeMiterlimit: '10',
  strokeWidth: '8px'
};

const LectureGogglesLogo = ({ width, height }) => (
  <svg
    width={`${width}`}
    height={`${height}`}
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 474 474"
  >
    <path
      d="M362.82,483H137.18A120.18,120.18,0,0,1,17,362.82V137.18A120.18,120.18,0,0,1,137.18,17H362.82A120.18,120.18,0,0,1,483,137.18V362.82A120.18,120.18,0,0,1,362.82,483Z"
      transform="translate(-13 -13)"
      style={style1}
    />
    <path
      d="M246.62,265.34c-26.48-3.28-36.23,70.15-87.81,99.07-37.71,21.15-94.37,13.76-117-18.45-23.58-33.52-4.94-89.45,2.51-106.06,5.86-13.09,24.82-44.88,56.3-63.07,20.15-11.64,36.83-8.86,70.08-11.49A1174.44,1174.44,0,0,0,294.5,148.91c76.79-14.87,97-34.69,120.49-18.79,23.76,16.1,26.22,52.11,27.35,68.74,2.84,41.55-12,106.87-60.06,126.35-37.1,15-80.27-2.79-103.88-25.06C259.22,282.06,259.16,266.89,246.62,265.34Z"
      transform="translate(-13 -13)"
      style={style2}
    />
    <path
      d="M273.41,268.83c-26.48-3.27-34.91,63.31-86.49,92.23-37.71,21.14-95.69,20.61-118.34-11.6-23.58-33.53.71-87.75,8.16-104.36C82.61,232,97,201,128.45,182.84c20.15-11.65,35.77-11.38,69-14A1173.65,1173.65,0,0,0,321.28,152.4c76.8-14.86,97-34.69,120.49-18.78,23.77,16.09,26.22,52.11,27.36,68.74,2.83,41.55-12,106.86-60.07,126.34-37.09,15-80.26-2.78-103.87-25.05C286,285.56,285.94,270.39,273.41,268.83Z"
      transform="translate(-13 -13)"
      style={style3}
    />
    <path d="M242,493" transform="translate(-13 -13)" style={style4} />
  </svg>
);

LectureGogglesLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

LectureGogglesLogo.defaultProps = {
  width: 50,
  height: 50
};

export default LectureGogglesLogo;
