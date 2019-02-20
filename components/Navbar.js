import React, { Component } from 'react';
import Particles from 'react-particles-js';
import graphqlLogo from './../images/graphql_logo.svg';
import banner from './../images/banner.jpg';
import logo from './../images/logo.png';

function getCompletedChallenges() {
  const progress = JSON.parse(localStorage.getItem('progress'));
  if (!progress) {
    return 0;
  }
  const keys = Object.keys(progress);
  const completedSteps = keys.filter(k => !!progress[k].completed);
  return completedSteps.length;
}
class Navbar extends Component {
  state = {
    challengesCompleted: 0
  };
  constructor(props) {
    super();
    if (props.emitter) {
      props.emitter.on('statusChange', status => {
        this.setState({ challengesCompleted: getCompletedChallenges() });
      });
    }
  }

  componentDidMount() {
    this.setState({ challengesCompleted: getCompletedChallenges() });
  }
  render() {
    return (
      <nav className="Navbar">
        <Particles
          height={'210px'}
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 200
                }
              },
              color: {
                value: '#eeeeee'
              },
              shape: {
                type: 'image',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: graphqlLogo,
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.2,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.1,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 20,
                random: true,
                anim: {
                  enable: false,
                  speed: 50,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: '#333',
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                  mode: 'grab'
                },
                onclick: {
                  enable: false,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 75,
                  duration: 0.2
                },
                push: {
                  particles_nb: 2
                },
                remove: {
                  particles_nb: 2
                }
              }
            }
          }}
        />
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="completion-count">
          <p>{this.state.challengesCompleted} of 10 Challenges Complete</p>
        </div>
        <style jsx>
          {`
            .Navbar {
              position: relative;
              min-height: 210px;
              border-bottom: 3px solid #e535ab;
              background-image: url(${banner});
              background-size: cover;
              background-position: center;
            }

            .logo {
              position: absolute;
              left: 30px;
              top: 20px;
            }

            img {
              max-height: 225px;
            }

            .completion-count {
              position: absolute;
              right: 30px;
              top: 0;
              background: rgba(227, 43, 138, 0.4);
              padding: 0 10px 0 10px;
              border-radius: 0 0 15px 15px;
            }

            .completion-count p {
              color: #f9f9f9f9;
              font-family: Courier;
            }
          `}
        </style>
      </nav>
    );
  }
}

export default Navbar;
