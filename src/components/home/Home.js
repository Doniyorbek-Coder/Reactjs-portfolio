import React, { Component } from 'react'
import './HomeStyle.css'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import Typed from 'react-typed'
import Particles from 'react-particles-js'

class Home extends Component {
  render() {
    return (
      <>
        <div className="HomePage">
          <header className="hero">
            {/* <div className="hero__bg">
              <Particles
                params={{
                  particles: {
                    shape: {
                      type: 'images',
                      image: [
                        {
                          src: 'https://picsum.photos/200/300',
                          height: 20,
                          width: 20,
                        },
                        {
                          src: 'https://picsum.photos/200/300',
                          height: 20,
                          width: 20,
                        },
                      ],
                    },
                  },
                }}
              />
            </div> */}

            <div className="hero__title">
              <Typed
                strings={[
                  "Hi , I'm Doniyorbek Asqaraliyev",
                  "Hi , I'm Frontend Developer",
                  "Hi , I'm Student of TUIT",
                ]}
                typeSpeed={60}
                backSpeed={40}
              >
                <span />
              </Typed>
            </div>
            <p className="h-sub-text">
              I was admitted to Tashkent University of Information and
              Technology in 2018 and my first step in programming started here
              and I am still programming, now I am a Full Stack Programmer, in
              2020 I learned programming in PDP, now HTML, CSS, JS, I learned to
              React JS, Java, Spring Boot and other technologies, I created
              small and big projects! My goal is to work in large, friendly
              teams and to present myself as a personal firm in the future.
            </p>
            <div className="icons">
              <a
                className="icon-holder"
                href="https://github.com/doniyorbek-coder/"
                target={'_blank'}
              >
                <FontAwesomeIcon icon={faGithub} className="icon gh" />
              </a>
              <a
                className="icon-holder"
                href="https://youtube.com/channel/UCop4A255FQ4S2qPJpJavP2Q"
                target={'_blank'}
              >
                <FontAwesomeIcon icon={faYoutube} className="icon yt" />
              </a>
              <a
                className="icon-holder"
                href="https://www.facebook.com/"
                target={'_blank'}
              >
                <FontAwesomeIcon icon={faFacebook} className="icon fb" />
              </a>
              <a
                className="icon-holder"
                href="https://www.instagram.com/"
                target={'_blank'}
              >
                <FontAwesomeIcon icon={faInstagram} className="icon insta" />
              </a>
              <a
                className=" icon-holder"
                href="https://t.me/d0n1y0r_c0der/"
                target={'_blank'}
              >
                <FontAwesomeIcon icon={faTelegram} className="icon tg" />
              </a>
            </div>
          </header>
        </div>
      </>
    )
  }
}

export default Home
