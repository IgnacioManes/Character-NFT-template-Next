import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Character NFT template</title>
          <meta property="og:title" content="Character NFT template" />
        </Head>
        <header className="home-header10">
          <header data-thq="thq-navbar" className="home-navbar">
            <span className="home-logo1">Character</span>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="home-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <button className="home-button1 button-clean button">
                  About
                </button>
                <button className="home-button2 button-clean button">
                  Features
                </button>
                <button className="home-button3 button-clean button">
                  Pricing
                </button>
                <button className="home-button4 button-clean button">
                  Team
                </button>
                <button className="home-button5 button-clean button">
                  Blog
                </button>
              </nav>
            </div>
            <div data-thq="thq-navbar-btn-group" className="home-btn-group">
              <div className="home-socials1">
                <button className="social button">
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="home-image10"
                  />
                </button>
                <button className="social button">
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="home-image11"
                  />
                </button>
              </div>
              <button className="button">View on Opensea</button>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <button className="button home-button6">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </button>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav2"
              >
                <div className="home-container2">
                  <span className="home-logo2">Character</span>
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav3"
                >
                  <span className="home-text10">About</span>
                  <span className="home-text11">Features</span>
                  <span className="home-text12">Pricing</span>
                  <span className="home-text13">Team</span>
                  <span className="home-text14">Blog</span>
                </nav>
                <div className="home-container3">
                  <button className="home-login button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
        <section className="home-hero">
          <div className="home-heading10">
            <h1 className="home-header11">Create yourself for the metaverse</h1>
            <p className="home-caption10">
              A character custom collection is joining the NFT space on Opensea.
            </p>
          </div>
          <div className="home-buttons">
            <button className="button">View on Opensea</button>
            <button className="home-learn1 button-clean button">
              Learn more
            </button>
          </div>
        </section>
        <section className="home-description10">
          <img
            alt="image"
            src="/hero-divider-1500w.png"
            className="home-divider-image"
          />
          <div className="home-container4">
            <div className="home-description11">
              <div className="home-content10">
                <p className="home-paragraph1">
                  We are a team of digital aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat.
                </p>
                <p className="home-paragraph2">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Nemo enim
                  ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit.
                </p>
              </div>
              <div className="home-links1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link10 button-link button"
                >
                  <span>Follow us on Twitter</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-arrow1"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link11 button-link button"
                >
                  <span>Join us on Discord</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-arrow2"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="home-cards">
          <div className="home-row1">
            <div className="home-card10">
              <div className="home-avatar1">
                <img
                  alt="image"
                  src="/Avatars/avatar.svg"
                  className="home-avatar2"
                />
              </div>
              <div className="home-main1">
                <div className="home-content11">
                  <h2 className="home-header12">10,000+ unique characters</h2>
                  <p className="home-description12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliquat enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </div>
                <button className="home-learn2 button">
                  <span className="home-text17">Learn more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image12"
                  />
                </button>
              </div>
            </div>
            <div className="home-card11">
              <div className="home-avatar3">
                <img
                  alt="image"
                  src="/Avatars/default-avatar.svg"
                  className="home-avatar4"
                />
              </div>
              <div className="home-main2">
                <div className="home-content12">
                  <h2 className="home-header13">
                    Create yourself for the metaverse
                  </h2>
                  <p className="home-description13">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliquat enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </div>
                <button className="home-learn3 button">
                  <span className="home-text18">Learn more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image13"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="home-card12">
            <div className="home-avatar5">
              <img
                alt="image"
                src="/Avatars/light-avatar.svg"
                className="home-avatar6"
              />
            </div>
            <div className="home-row2">
              <div className="home-main3">
                <div className="home-content13">
                  <h2 className="home-header14">
                    Create yourself for the metaverse
                  </h2>
                  <p className="home-description14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliquat enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </div>
                <button className="home-learn4 button">
                  <span className="home-text19">Learn more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image14"
                  />
                </button>
              </div>
              <img
                alt="image"
                src="/group%202262.svg"
                className="home-image15"
              />
            </div>
          </div>
        </section>
        <section className="home-collection">
          <div className="home-content14">
            <span className="home-caption11">collection</span>
            <div className="home-heading11">
              <h2 className="home-header15">All time best collections</h2>
              <p className="home-header16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
          <div className="home-main4">
            <div className="home-card13">
              <div className="home-image16">
                <img
                  alt="image"
                  src="/Characters/character-1.svg"
                  className="home-image17"
                />
              </div>
              <div className="home-content15">
                <span className="home-caption12">Character #1</span>
                <h3 className="home-title1">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card14">
              <div className="home-image18">
                <img
                  alt="image"
                  src="/Characters/character-2.svg"
                  className="home-image19"
                />
              </div>
              <div className="home-content16">
                <span className="home-caption13">Character #2</span>
                <h3 className="home-title2">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card15">
              <div className="home-image20">
                <img
                  alt="image"
                  src="/Characters/character-3.svg"
                  className="home-image21"
                />
              </div>
              <div className="home-content17">
                <span className="home-caption14">Character #3</span>
                <h3 className="home-title3">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card16">
              <div className="home-image22">
                <img
                  alt="image"
                  src="/Characters/character-4.svg"
                  className="home-image23"
                />
              </div>
              <div className="home-content18">
                <span className="home-caption15">
                  <span>Character #4</span>
                  <br></br>
                </span>
                <h3 className="home-title4">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card17">
              <div className="home-image24">
                <img
                  alt="image"
                  src="/Characters/character-5.svg"
                  className="home-image25"
                />
              </div>
              <div className="home-content19">
                <span className="home-caption16">Character #5</span>
                <h3 className="home-title5">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card18">
              <div className="home-image26">
                <img
                  alt="image"
                  src="/Characters/character-6.svg"
                  className="home-image27"
                />
              </div>
              <div className="home-content20">
                <span className="home-caption17">Character #6</span>
                <h3 className="home-title6">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card19">
              <div className="home-image28">
                <img
                  alt="image"
                  src="/Characters/character-7.svg"
                  className="home-image29"
                />
              </div>
              <div className="home-content21">
                <span className="home-caption18">Character #7</span>
                <h3 className="home-title7">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card20">
              <div className="home-image30">
                <img
                  alt="image"
                  src="/Characters/character-8.svg"
                  className="home-image31"
                />
              </div>
              <div className="home-content22">
                <span className="home-caption19">Character #8</span>
                <h3 className="home-title8">0.05 ETH</h3>
              </div>
            </div>
          </div>
          <button className="home-view3 button-link button">View all</button>
        </section>
        <section className="home-project">
          <div className="home-understand">
            <div className="home-content23">
              <span className="home-caption20">Project</span>
              <div className="home-heading12">
                <h2 className="home-header17">Understand the project</h2>
                <p className="home-header18">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button className="home-view4 button-link button">
                <span>Learn More</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image32"
                />
              </button>
            </div>
            <img alt="image" src="/group%202415.svg" className="home-image33" />
          </div>
          <div className="home-mining">
            <img alt="image" src="/group%202422.svg" className="home-image34" />
            <div className="home-content24">
              <span className="home-caption21">Project</span>
              <div className="home-heading13">
                <h2 className="home-header19">How the minting works</h2>
                <p className="home-header20">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </span>
                  <br></br>
                </p>
              </div>
              <button className="home-view5 button-link button">
                <span>Learn More</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image35"
                />
              </button>
            </div>
          </div>
        </section>
        <section className="home-roadmap">
          <div className="home-heading14">
            <h2 className="home-header21">Roadmap</h2>
            <p className="home-header22">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="home-list1">
            <div className="home-step1">
              <span className="home-caption22">01</span>
              <div className="home-heading15">
                <h2 className="home-header23">Project Launch</h2>
                <p className="home-header24">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button className="home-button7 button">View on Opensea</button>
            </div>
            <div className="home-step2">
              <span className="home-caption23">02</span>
              <div className="home-heading16">
                <h2 className="home-header25">Metadata and Character</h2>
                <p className="home-header26">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-step3">
              <span className="home-caption24">03</span>
              <div className="home-heading17">
                <h2 className="home-header27">Get Physical</h2>
                <p className="home-header28">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-step4">
              <span className="home-caption25">04</span>
              <div className="home-heading18">
                <h2 className="home-header29">Private club community</h2>
                <p className="home-header30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="home-benefits">
                  <div className="home-item1">
                    <img
                      alt="image"
                      src="/Icons/people.svg"
                      className="home-image36"
                    />
                    <p className="home-header31">Consectetur adipiscing elit</p>
                  </div>
                  <div className="home-item2">
                    <img
                      alt="image"
                      src="/Icons/paper.svg"
                      className="home-image37"
                    />
                    <p className="home-header32">Consectetur adipiscing elit</p>
                  </div>
                  <div className="home-item3">
                    <img
                      alt="image"
                      src="/Icons/checklist.svg"
                      className="home-image38"
                    />
                    <p className="home-header33">Consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-join-us">
          <div className="home-content25">
            <div className="home-main5">
              <div className="home-heading19">
                <h2 className="home-header34">Create your character now</h2>
                <p className="home-caption26">
                  A character custom collection is joining the NFT space on
                  Opensea.
                </p>
              </div>
              <button className="home-view6 button">View on Opensea</button>
            </div>
            <img alt="image" src="/group%202273.svg" className="home-image39" />
          </div>
        </section>
        <section className="home-faq">
          <h2 className="home-header35">We have all the answers</h2>
          <div className="home-accordion1">
            <div
              data-role="accordion-container"
              className="home-element1 accordion"
            >
              <div className="home-content26">
                <span className="home-header36">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description15"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon20"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon22"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion"
            >
              <div className="home-content27">
                <span className="home-header37">
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description16"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon24"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon26"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion"
            >
              <div className="home-content28">
                <span className="home-header38">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description17"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon28"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon30"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion"
            >
              <div className="home-content29">
                <span className="home-header39">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description18"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon32"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon34"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element5 accordion"
            >
              <div className="home-content30">
                <span className="home-header40">
                  Incididunt ut labore et dolore?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description19"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container5">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon36"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon38"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="home-get-yours">
          <div className="home-row3">
            <div className="home-column1">
              <div className="home-card21">
                <img
                  alt="image"
                  src="/Characters/character-9.svg"
                  className="home-image40"
                />
              </div>
            </div>
            <div className="home-column2">
              <div className="home-card22">
                <img
                  alt="image"
                  src="/Characters/character-10.svg"
                  className="home-image41"
                />
              </div>
            </div>
          </div>
          <div className="home-column3">
            <div className="home-card23">
              <div className="home-content31">
                <h2 className="home-header41">Get yours now</h2>
                <p className="home-description20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam.
                </p>
              </div>
              <button className="home-button8 button">View on Opensea</button>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-main6">
            <div className="home-branding">
              <div className="home-heading20">
                <h2 className="home-logo3">Character</h2>
                <p className="home-caption27">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div className="home-socials2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-twitter2 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="home-image42"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-discord2 social button"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="home-image43"
                  />
                </a>
              </div>
            </div>
            <div className="home-links2">
              <div className="home-list2">
                <h3 className="home-heading21">Site</h3>
                <div className="home-items1">
                  <button className="home-link12 button-clean button">
                    About
                  </button>
                  <button className="home-link13 button-clean button">
                    Collection
                  </button>
                  <button className="home-link14 button-clean button">
                    Roadmap
                  </button>
                  <button className="home-link15 button-clean button">
                    Features
                  </button>
                </div>
              </div>
              <div className="home-list3">
                <h3 className="home-heading22">Company</h3>
                <div className="home-items2">
                  <button className="home-link16 button-clean button">
                    Team
                  </button>
                  <button className="home-link17 button-clean button">
                    Press
                  </button>
                  <button className="home-link18 button-clean button">
                    Terms
                  </button>
                  <button className="home-link19 button-clean button">
                    Limitations
                  </button>
                  <button className="home-link20 button-clean button">
                    Licenses
                  </button>
                </div>
              </div>
            </div>
            <div className="home-socials3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter3 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image44"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord3 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image45"
                />
              </a>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </footer>
        <div>
          <div className="home-container6">
            <Script
              html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .home-header10 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav1 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button1 {
            color: rgb(255, 255, 255);
          }
          .home-button2 {
            color: rgb(255, 255, 255);
          }
          .home-button3 {
            color: rgb(255, 255, 255);
          }
          .home-button4 {
            color: rgb(255, 255, 255);
          }
          .home-button5 {
            color: rgb(255, 255, 255);
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-socials1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image10 {
            width: 100px;
            object-fit: cover;
          }
          .home-image11 {
            width: 100px;
            object-fit: cover;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text13 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon16 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon18 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading10 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption10 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-learn1 {
            color: rgb(255, 255, 255);
          }
          .home-description10 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-divider-image {
            width: 100%;
            object-fit: cover;
          }
          .home-container4 {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-description11 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph1 {
            color: #ffffff;
            font-size: 40px;
            line-height: 60px;
          }
          .home-paragraph2 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            line-height: 60px;
          }
          .home-links1 {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-link10 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
            border-top-width: 0px;
          }
          .home-arrow1 {
            width: 25px;
            object-fit: cover;
          }
          .home-link11 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            text-decoration: none;
            border-top-width: 0px;
          }
          .home-arrow2 {
            width: 25px;
            object-fit: cover;
          }
          .home-cards {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-row1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-card10 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #000000;
          }
          .home-avatar1 {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #fdea6b;
          }
          .home-avatar2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content11 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            color: rgb(255, 255, 255);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description12 {
            color: rgba(255, 255, 255, 0.8);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn2 {
            gap: var(--dl-space-space-unit);
            color: white;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text17 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image12 {
            width: 16px;
            object-fit: cover;
          }
          .home-card11 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #ffcf77;
          }
          .home-avatar3 {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #ec7495;
          }
          .home-avatar4 {
            width: 28px;
            object-fit: cover;
          }
          .home-main2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content12 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header13 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description13 {
            color: #000000;
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn3 {
            gap: var(--dl-space-space-unit);
            color: #000000;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text18 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image13 {
            width: 16px;
            object-fit: cover;
          }
          .home-card12 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #8fa7df;
          }
          .home-avatar5 {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .home-avatar6 {
            width: 22px;
            object-fit: cover;
          }
          .home-row2 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-main3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content13 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header14 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description14 {
            color: #000000;
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn4 {
            gap: var(--dl-space-space-unit);
            color: #000000;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text19 {
            font-style: normal;
            font-weight: 500;
          }
          .home-image14 {
            width: 16px;
            object-fit: cover;
          }
          .home-image15 {
            width: 100%;
            object-fit: cover;
          }
          .home-collection {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content14 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption11 {
            color: #ffcf77;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading11 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header15 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header16 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-main4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(4, 1fr);
          }
          .home-card13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image16 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image17 {
            object-fit: cover;
          }
          .home-content15 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption12 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image18 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ffcf77;
          }
          .home-image19 {
            object-fit: cover;
          }
          .home-content16 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption13 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image20 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #8fa7df;
          }
          .home-image21 {
            object-fit: cover;
          }
          .home-content17 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption14 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title3 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card16 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image22 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #9ddadb;
          }
          .home-image23 {
            object-fit: cover;
          }
          .home-content18 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption15 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title4 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card17 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image24 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #9fd8e5;
          }
          .home-image25 {
            object-fit: cover;
          }
          .home-content19 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption16 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title5 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card18 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image26 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ec7495;
          }
          .home-image27 {
            object-fit: cover;
          }
          .home-content20 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption17 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title6 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card19 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image28 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ffcf77;
          }
          .home-image29 {
            object-fit: cover;
          }
          .home-content21 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption18 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title7 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card20 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image30 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image31 {
            object-fit: cover;
          }
          .home-content22 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption19 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title8 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-view3 {
            width: 100%;
            text-align: center;
          }
          .home-project {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-understand {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content23 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption20 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading12 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header17 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header18 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-view4 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            text-align: left;
            align-items: center;
            flex-direction: row;
          }
          .home-image32 {
            width: 25px;
            object-fit: cover;
          }
          .home-image33 {
            width: 480px;
            object-fit: cover;
          }
          .home-mining {
            gap: 130px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image34 {
            width: 510px;
            object-fit: cover;
          }
          .home-content24 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption21 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading13 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header19 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header20 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-view5 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            text-align: left;
            align-items: center;
            flex-direction: row;
          }
          .home-image35 {
            width: 25px;
            object-fit: cover;
          }
          .home-roadmap {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-heading14 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            flex-direction: column;
          }
          .home-header21 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            font-weight: 500;
            line-height: 108px;
          }
          .home-header22 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            text-align: center;
            line-height: 36px;
          }
          .home-list1 {
            gap: 106px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-left-width: 1px;
          }
          .home-step1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption22 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading15 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header23 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header24 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button7 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-step2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption23 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading16 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header25 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header26 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption24 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading17 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header27 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header28 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption25 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading18 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header29 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header30 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-benefits {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-item1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image36 {
            width: 16px;
            object-fit: cover;
          }
          .home-header31 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-item2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image37 {
            width: 16px;
            object-fit: cover;
          }
          .home-header32 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-item3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image38 {
            width: 20px;
            object-fit: cover;
          }
          .home-header33 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-join-us {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content25 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #ffcf77;
          }
          .home-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading19 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header34 {
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption26 {
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-view6 {
            background-color: #9ddadb;
          }
          .home-image39 {
            width: 100%;
            object-fit: cover;
          }
          .home-faq {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header35 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-accordion1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-element1 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
            border-top-width: 1px;
          }
          .home-content26 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header36 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description15 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon20 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon22 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content27 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header37 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description16 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon24 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon26 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content28 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header38 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description17 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon28 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon30 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element4 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content29 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header39 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description18 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon32 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon34 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element5 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content30 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header40 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description19 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container5 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon36 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon38 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-get-yours {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 555px;
            display: flex;
            max-width: 1440px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-row3 {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            flex-direction: row;
          }
          .home-column1 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-card21 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            background-color: #ffcf77;
          }
          .home-image40 {
            width: 240px;
            object-fit: cover;
          }
          .home-column2 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-card22 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-image41 {
            width: 240px;
            object-fit: cover;
          }
          .home-column3 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-card23 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: #8fa7df;
          }
          .home-content31 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header41 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description20 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 500px;
            line-height: 27px;
          }
          .home-button8 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-footer {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-main6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading20 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-logo3 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-caption27 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-socials2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-twitter2 {
            text-decoration: none;
          }
          .home-image42 {
            width: 100px;
            object-fit: cover;
          }
          .home-discord2 {
            text-decoration: none;
          }
          .home-image43 {
            width: 100px;
            object-fit: cover;
          }
          .home-links2 {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-list2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading21 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-items1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link12 {
            color: rgb(255, 255, 255);
          }
          .home-link13 {
            color: rgb(255, 255, 255);
          }
          .home-link14 {
            color: rgb(255, 255, 255);
          }
          .home-link15 {
            color: rgb(255, 255, 255);
          }
          .home-list3 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading22 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-items2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link16 {
            color: rgb(255, 255, 255);
          }
          .home-link17 {
            color: rgb(255, 255, 255);
          }
          .home-link18 {
            color: rgb(255, 255, 255);
          }
          .home-link19 {
            color: rgb(255, 255, 255);
          }
          .home-link20 {
            color: rgb(255, 255, 255);
          }
          .home-socials3 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-twitter3 {
            text-decoration: none;
          }
          .home-image44 {
            width: 100px;
            object-fit: cover;
          }
          .home-discord3 {
            text-decoration: none;
          }
          .home-image45 {
            width: 100px;
            object-fit: cover;
          }
          .home-copyright {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .home-container6 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button6 {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-logo2 {
              color: #000000;
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-card10 {
              width: 100%;
            }
            .home-card11 {
              width: 100%;
            }
            .home-row2 {
              flex-direction: column;
            }
            .home-main4 {
              grid-template-columns: repeat(2, 1fr);
            }
            .home-project {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-understand {
              align-items: center;
              flex-direction: column;
            }
            .home-mining {
              flex-direction: column-reverse;
            }
            .home-heading19 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption26 {
              text-align: center;
            }
            .home-get-yours {
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .home-row3 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              height: 555px;
              align-items: center;
              justify-content: center;
            }
            .home-column1 {
              flex: 1;
              align-items: flex-start;
            }
            .home-card21 {
              width: 100%;
              aspect-ratio: 0.85;
              justify-content: center;
            }
            .home-column2 {
              flex: 1;
              align-items: flex-end;
            }
            .home-card22 {
              width: 100%;
              aspect-ratio: 0.85;
            }
            .home-column3 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading10 {
              gap: var(--dl-space-space-unit);
            }
            .home-header11 {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption10 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description10 {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-description11 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content10 {
              gap: var(--dl-space-space-unit);
            }
            .home-paragraph1 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph2 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-cards {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-card10 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header12 {
              font-size: 24px;
            }
            .home-description12 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card11 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header13 {
              font-size: 24px;
            }
            .home-description13 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card12 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-row2 {
              gap: var(--dl-space-space-twounits);
            }
            .home-main3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header14 {
              font-size: 24px;
            }
            .home-description14 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-collection {
              gap: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content14 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading11 {
              gap: var(--dl-space-space-unit);
            }
            .home-header15 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header16 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image16 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image18 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image20 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image22 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image24 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image26 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image28 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image30 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-view3 {
              display: none;
            }
            .home-project {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-understand {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-content23 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading12 {
              gap: var(--dl-space-space-unit);
            }
            .home-header17 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header18 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-view4 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-image33 {
              width: 100%;
            }
            .home-mining {
              gap: var(--dl-space-space-fourunits);
            }
            .home-image34 {
              width: 100%;
            }
            .home-content24 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading13 {
              gap: var(--dl-space-space-unit);
            }
            .home-header19 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header20 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-view5 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-roadmap {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading14 {
              gap: var(--dl-space-space-unit);
            }
            .home-header21 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-header22 {
              width: 80%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-list1 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-heading15 {
              gap: var(--dl-space-space-unit);
            }
            .home-header23 {
              font-size: 32px;
            }
            .home-header24 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-button7 {
              margin-top: 0px;
            }
            .home-heading16 {
              gap: var(--dl-space-space-unit);
            }
            .home-header25 {
              font-size: 32px;
            }
            .home-header26 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading17 {
              gap: var(--dl-space-space-unit);
            }
            .home-header27 {
              font-size: 32px;
            }
            .home-header28 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading18 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header29 {
              font-size: 32px;
            }
            .home-header30 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header31 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header32 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image38 {
              width: 17px;
            }
            .home-header33 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-join-us {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content25 {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-main5 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading19 {
              gap: var(--dl-space-space-unit);
            }
            .home-header34 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-caption26 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image39 {
              width: 150%;
            }
            .home-faq {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header35 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-element1 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header36 {
              font-size: 16px;
            }
            .home-description15 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element2 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header37 {
              font-size: 16px;
            }
            .home-description16 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element3 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header38 {
              font-size: 16px;
            }
            .home-description17 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element4 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header39 {
              font-size: 16px;
            }
            .home-description18 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element5 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header40 {
              font-size: 16px;
            }
            .home-description19 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-get-yours {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-row3 {
              gap: var(--dl-space-space-oneandhalfunits);
              height: 555px;
            }
            .home-card21 {
              padding: var(--dl-space-space-unit);
            }
            .home-image40 {
              width: 100%;
            }
            .home-card22 {
              padding: var(--dl-space-space-unit);
            }
            .home-image41 {
              width: 100%;
            }
            .home-card23 {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content31 {
              align-items: center;
            }
            .home-header41 {
              font-size: 32px;
              text-align: center;
            }
            .home-description20 {
              font-size: 14px;
              text-align: center;
              line-height: 21px;
            }
            .home-button8 {
              margin-top: 0px;
            }
            .home-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-main6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-heading20 {
              gap: var(--dl-space-space-unit);
            }
            .home-logo3 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-caption27 {
              width: 80%;
              font-size: 12px;
              line-height: 18px;
            }
            .home-socials2 {
              display: none;
            }
            .home-links2 {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              justify-content: flex-start;
            }
            .home-list2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-list3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-socials3 {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-main4 {
              grid-template-columns: repeat(1, 1fr);
            }
            .home-image39 {
              width: 200%;
            }
            .home-header36 {
              font-size: 16px;
            }
            .home-description15 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header37 {
              font-size: 16px;
            }
            .home-description16 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header38 {
              font-size: 16px;
            }
            .home-description17 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header39 {
              font-size: 16px;
            }
            .home-description18 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header40 {
              font-size: 16px;
            }
            .home-description19 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-row3 {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
