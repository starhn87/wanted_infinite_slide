import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/header.scss";

const Header: React.FC = () => (
  <>
    <div role="presentation" className="navBox">
      <div className="navContainer" role="presentation">
        <nav className="navBar">
          <div className="navBarTop">
            <div className="navBarTopLogo">
              <button
                type="button"
                aria-label="jobCategoryMenuButton"
                data-attribute-id="gnb"
                data-gnb-kind="jobCategoryMenu"
                className="navButton"
              >
                <img
                  src="https://static.wanted.co.kr/images/icon-menu.png"
                  alt="hamberger menu"
                  className="menuImage"
                />
              </button>
              <a
                href="/"
                className="homeMenu"
                aria-label="homeLink"
                data-attribute-id="gnb"
                data-gnb-kind="home"
              >
                <i className="icon-logo_new" />
              </a>
            </div>
          </div>
          <ul className="menuList">
            <li
              className="xsHomeButton xsOnly selectedNav"
              data-attribute-id="gnb"
              data-gnb-kind="home"
            >
              <a href="/" className="" aria-label="">
                홈
              </a>
            </li>
            <li className="" data-attribute-id="gnb" data-gnb-kind="jobs">
              <a href="/jobsfeed" className="" aria-label="">
                채용
              </a>
            </li>
            <li className="" data-attribute-id="gnb" data-gnb-kind="event">
              <a href="/events" className="" aria-label="">
                이벤트
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="salary"
            >
              <a href="/salary" className="" aria-label="">
                직군별 연봉
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="resume"
            >
              <a href="/cv" className="" aria-label="">
                이력서
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="community"
            >
              <a href="/community" className="" aria-label="">
                커뮤니티
                <em>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="9"
                      fontWeight="500"
                    >
                      <g fill="#36F">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                      <tspan x="0" y="8">
                                        New
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </em>
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="freelancer"
            >
              <a
                href="https://www.wanted.co.kr/gigs/experts"
                className=""
                aria-label=""
                target="_blank"
                rel="noopener noreferrer"
              >
                프리랜서
              </a>
            </li>
            <li
              className="smMoreVisible"
              data-attribute-id="gnb"
              data-gnb-kind="aiScore"
            >
              <a href="/aiscore/resume" className="" aria-label="">
                AI 합격예측
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="9"
                      fontWeight="500"
                    >
                      <g fill="#36F">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                      <tspan x="0" y="8">
                                        Beta
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <aside className="aside isLoggedIn">
            <ul>
              <li>
                <button
                  type="button"
                  aria-label="searchButton"
                  className="searchButton headerBtn"
                  data-attribute-id="gnb"
                  data-gnb-kind="search"
                >
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    xmlnsXlink="https://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <defs>
                      <path
                        id="qt2dnsql4a"
                        d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                      ></path>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <use
                        fill="#333"
                        fillRule="nonzero"
                        stroke="#333"
                        strokeWidth=".3"
                        xlinkHref="#qt2dnsql4a"
                      ></use>
                    </g>
                  </svg>
                </button>
              </li>
              <li className="alarm">
                <button
                  type="button"
                  aria-label="notiButton"
                  className="notiButton headerBtn"
                  data-attribute-id="gnb"
                  data-gnb-kind="bell"
                >
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    xmlnsXlink="https://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <defs>
                      <path
                        id="bpnpn3yn0a"
                        d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                      ></path>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                        <mask id="1dencd96ob" fill="#fff">
                          <use xlinkHref="#bpnpn3yn0a"></use>
                        </mask>
                        <use
                          fillRule="nonzero"
                          stroke="currentColor"
                          strokeWidth=".3"
                          xlinkHref="#bpnpn3yn0a"
                        ></use>
                        <g fill="currentColor" mask="url(#1dencd96ob)">
                          <path d="M0 0H18V18H0z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
                <span className="badge headerBadge">
                  <svg className="" width="5" height="5" viewBox="0 0 6 6">
                    <g fill="#fff" fillRule="nonzero">
                      <path
                        d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                        transform="translate(-123 -375) translate(20 365) translate(98 5)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </li>
              <li className="mdMoreVisible profileBox hasNewMywantedAlarm">
                <button
                  type="button"
                  data-attribute-id="gnb"
                  data-gnb-kind="photo"
                  className="profileButton"
                  aria-label="avatarButton"
                  data-badge="true"
                >
                  <div className="avatarBorder">
                    <div className="avatarImage avatarImageLayout"></div>
                  </div>
                </button>
                <span className="badge headerBadge">
                  <svg className="" width="5" height="5" viewBox="0 0 6 6">
                    <g fill="#fff" fillRule="nonzero">
                      <path
                        d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                        transform="translate(-123 -375) translate(20 365) translate(98 5)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </li>
              <li
                className="mdMoreVisible leftDivision"
                data-attribute-id="gnb"
                data-gnb-kind="forEmployers"
              >
                <a className="dashboardButton" href="/dashboard">
                  기업 서비스
                </a>
              </li>
              <li className="asideMenu">
                <button
                  className="menuButton"
                  aria-label="menuButton"
                  type="button"
                  data-attribute-id="gnb"
                  data-gnb-kind="more"
                >
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <path
                        d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
                        id="a"
                      ></path>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <mask id="b" fill="#fff">
                        <use xlinkHref="#a"></use>
                      </mask>
                      <use fill="#333" xlinkHref="#a"></use>
                      <g mask="url(#b)" fill="#333">
                        <path d="M0 0h18v18H0z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </li>
            </ul>
            <div className="asideMenu"></div>
          </aside>
        </nav>
      </div>
    </div>
    <div className="menuPadding"></div>
  </>
);

export default Header;
