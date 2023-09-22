import "./TopNavBar.css";
import logo from "../assets/imgs/tibix-logo.png";
import profileIcon from "./profile.svg";

function TopNavBar() {
  return (
    <div className="TopNavBar">
      <div className="NavSector" id="navPaddingBegin"></div>
      <div className="NavSector" id="logo">
        <img src={logo} id="logoImg"></img>
        <h1 id="logoText">Tibix</h1>
      </div>
      <div className="NavSector NavTab NavSelected" id="video">
        <div>
          <h3>Video</h3>
        </div>
      </div>
      <div className="NavSector NavTab" id="manga">
        <div>
          <h3>Manga</h3>
        </div>
      </div>
      <div className="NavSector NavTab" id="music">
        <div>
          <h3>Music</h3>
        </div>
      </div>
      <div className="NavSector NavTab" id="images">
        <div>
          <h3>Images</h3>
        </div>
      </div>
      <div className="NavSector" id="quickActions">
        <svg
          fill="#000000"
          height="30px"
          width="30px"
          version="1.1"
          id="searchIconSvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-110 -110 718.4 718.4"
        >
          <path
            style={{ strokeWidth: "35px" }}
            d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
          />
        </svg>
        <svg
          fill="#000000"
          height="30px"
          width="30px"
          version="1.1"
          id="profileCircleSvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 330"
        >
          <path
            style={{ strokeWidth: "15px" }}
            d="M201.08,49.778c-38.794,0-70.355,31.561-70.355,70.355c0,18.828,7.425,40.193,19.862,57.151
				c14.067,19.181,32,29.745,50.493,29.745c18.494,0,36.426-10.563,50.494-29.745c12.437-16.958,19.862-38.323,19.862-57.151
				C271.436,81.339,239.874,49.778,201.08,49.778z M201.08,192.029c-13.396,0-27.391-8.607-38.397-23.616
				c-10.46-14.262-16.958-32.762-16.958-48.28c0-30.523,24.832-55.355,55.355-55.355s55.355,24.832,55.355,55.355
				C256.436,151.824,230.372,192.029,201.08,192.029z"
          />
          <path
            style={{ strokeWidth: "15px" }}
            d="M201.08,0C109.387,0,34.788,74.598,34.788,166.292c0,91.693,74.598,166.292,166.292,166.292
				s166.292-74.598,166.292-166.292C367.372,74.598,292.773,0,201.08,0z M201.08,317.584c-30.099-0.001-58.171-8.839-81.763-24.052
				c0.82-22.969,11.218-44.503,28.824-59.454c6.996-5.941,17.212-6.59,25.422-1.615c8.868,5.374,18.127,8.099,27.52,8.099
				c9.391,0,18.647-2.724,27.511-8.095c8.201-4.97,18.39-4.345,25.353,1.555c17.619,14.93,28.076,36.526,28.895,59.512
				C259.25,308.746,231.178,317.584,201.08,317.584z M296.981,283.218c-3.239-23.483-15.011-45.111-33.337-60.64
				c-11.89-10.074-29.1-11.256-42.824-2.939c-12.974,7.861-26.506,7.86-39.483-0.004c-13.74-8.327-30.981-7.116-42.906,3.01
				c-18.31,15.549-30.035,37.115-33.265,60.563c-33.789-27.77-55.378-69.868-55.378-116.915C49.788,82.869,117.658,15,201.08,15
				c83.423,0,151.292,67.869,151.292,151.292C352.372,213.345,330.778,255.448,296.981,283.218z"
          />
        </svg>
      </div>
      <div className="NavSector" id="navPaddingEnd"></div>
    </div>
  );
}

export default TopNavBar;
