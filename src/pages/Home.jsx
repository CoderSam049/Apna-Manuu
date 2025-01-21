import React from "react";
import pythonimg from "../../public/assets/home-img/python.png";
import machinelearning from "../../public/assets/home-img/machine.png";
import ai from "../../public/assets/home-img/a1.png";
import appdev from "../../public/assets/home-img/appdev.png";

import developer from "../../public/gif/developer.png";
import mobileDev from "../../public/gif/mobileDev.gif";
import webdev from "../../public/gif/webdevlopment.gif";
import wave from '../../public/assets/other/wave.svg'

export default function Home() {
  return (
    <>
   <div className="hero">
 

  {/* Hero Content */}
  <div className="hero-content">
    {/* Hero Text */}
    <div className="hero-text">
      <h1 className="desc">Unlock Your Learning Potential</h1>
      <p>
        We bring your ideas to life with cutting-edge technology and design.
        Let's build something amazing together.
      </p>
      <div className="hero-buttons">
        <a href="#learn-more" className="btn primary">Learn More</a>
        <a href="#get-start" className="btn secondary">Get Started</a>
      </div>
      
    </div>
    

    {/* Hero Image */}
    <div className="hero-image">
      <img
        src="https://raw.githubusercontent.com/CoderSam049/notes/main/uploads/student%20with%20study.jpg"
        alt="Hero Image"
      />
    </div>
  </div>

</div>
       <img className="svg-wave" src={wave} alt="wave" />
      <div className="h-line"></div>
      <main>
        <div className="secondpart">
        

          <section id="get-start" className="part-2">
            <div className="two">
              <div className="ourteam left">
                <h1>Learn, Teach, Grow, Collaborate 👏</h1>
                <p>
                  {" "}
                  Apna MANUU: Learn, teach, grow. A vibrant tech community for
                  enthusiasts, developers, and entrepreneurs. Explore trends,
                  collaborate on projects, and connect with like-minded
                  individuals. Unleash your geekiness and make a difference in
                  technology. Join us to innovate, learn, and grow together.
                </p>

      
              </div>
              <div className="right">
                <img src={developer} alt="developer" />
              </div>
            </div>
          </section>

          <section id="section-4">
            <h1>WHO ARE WE?</h1>
            <div className="container">
              <div className="card">
                <div className="icon">&#128187;</div>
                <h2>Mission</h2>
                <p>
                  Enhancing coding culture via regular classes, contests, and
                  geeky sessions on campus.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#128100;</div>
                <h2>Vision</h2>
                <p>
                  Growing as a strong coding community, impacting various
                  fields, upholding integrity worldwide.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#128161;</div>
                <h2>Value</h2>
                <p>
                  Believing in helping each other, taking care, and seeking the
                  best from everyone consistently.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#128267;</div>
                <h2>Tech Awareness</h2>
                <p>
                  Help us reach tier-two and tier-three cities, enlightening
                  people on how tech education transforms lives.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#128293;</div>
                <h2>Enthusiastic Mentor</h2>
                <p>
                  Finding like-minded, enthusiastic individuals crucial for your
                  goal through our network.
                </p>
              </div>
              <div className="card">
                <div className="icon">&#127752;</div>
                <h2>Diversity</h2>
                <p>
                  Understand diversity's vital role in generating ideas, team
                  building, and achieving maximum output.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="provide">
          <h1>Objective-</h1>
          <p>
            Our educational website offers a comprehensive range of features
            designed to enhance learning experiences. Users can access a vast
            library of educational resources, including articles, videos,
            quizzes, and interactive lessons. Personalized learning pathways
            cater to individual learning styles and preferences. Collaborative
            tools enable students to engage in discussions, group projects, and
            peer-to-peer learning. Additionally, our website provides progress
            tracking and assessment tools to monitor learning outcomes and
            measure academic growth.
          </p>
        </div>
        <div className="lining-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffa300"
              fill-opacity="1"
              d="M0,160L0,256L68.6,256L68.6,64L137.1,64L137.1,192L205.7,192L205.7,192L274.3,192L274.3,192L342.9,192L342.9,96L411.4,96L411.4,0L480,0L480,160L548.6,160L548.6,192L617.1,192L617.1,288L685.7,288L685.7,96L754.3,96L754.3,288L822.9,288L822.9,288L891.4,288L891.4,160L960,160L960,224L1028.6,224L1028.6,224L1097.1,224L1097.1,256L1165.7,256L1165.7,128L1234.3,128L1234.3,0L1302.9,0L1302.9,288L1371.4,288L1371.4,224L1440,224L1440,320L1371.4,320L1371.4,320L1302.9,320L1302.9,320L1234.3,320L1234.3,320L1165.7,320L1165.7,320L1097.1,320L1097.1,320L1028.6,320L1028.6,320L960,320L960,320L891.4,320L891.4,320L822.9,320L822.9,320L754.3,320L754.3,320L685.7,320L685.7,320L617.1,320L617.1,320L548.6,320L548.6,320L480,320L480,320L411.4,320L411.4,320L342.9,320L342.9,320L274.3,320L274.3,320L205.7,320L205.7,320L137.1,320L137.1,320L68.6,320L68.6,320L0,320L0,320Z"
            ></path>
          </svg>
        </div>
        <br />
        <br />

        <section id="learn-more"  className="features">
          <div className="section">
            <div className="content" >
              <h2>Web Development</h2>
              <p>
                Join us to embark on your web development journey and become
                part of a network committed to your growth and success. Web
                development involves building and maintaining websites and web
                applications, utilizing languages like HTML, CSS, and
                JavaScript, along with frameworks like React, Angular, and
                Vue.js for frontend development, as well as Node.js and Django
                for backend development. Additionally, we offer support in
                learning database technologies to become proficient in
                full-stack web development.
              </p>
            </div>
            <div className="image">
              <img src={webdev} alt="mobile Development Illustration" />
            </div>
          </div>

          <div className="section">
            <div className="image">
              <img src={mobileDev} alt="webDev" />
            </div>
            <div className="content">
              <h2>Android Development</h2>
              <p>
                GeekHub welcomes you to the vibrant world of Android
                Development, where innovation meets opportunity. Join our
                dynamic community to embark on a journey of app creation and
                mastery. Delve into the realms of Java/Kotlin, Android Studio,
                and cutting-edge frameworks like Flutter. From crafting
                captivating UI/UX experiences to seamless backend integration,
                GeekHub empowers you to turn your ideas into reality. Connect,
                collaborate, and chart your path to success with GeekHub - where
                creativity knows no bounds.
              </p>
            </div>
          </div>
        </section>
        <section id="feature">
          <div className="features-Images-div">
            <div className="text1 text-size">
              <span className="sub-title">E-Learning</span>
              <h2>featur of AI</h2>
              <p>
                Artificial Intelligence (AI) encompasses a range of remarkable
                abilities that enable machines to emulate human-like
                capabilities. Let’s explore some of the key features of AI:
              </p>
            </div>
            <div className="image">
              <img src={ai} />
            </div>
          </div>
          <div className="features-Images-div">
            <div className="text  text2  text-size">
              <span className="sub-title">E-Learning</span>
              <h2>Featur of Python-</h2>
              <p>
                Python is a high-level, interpreted programming language known
                for its simplicity and readability. It was created by Guido van
                Rossum and first released in 1991. Python emphasizes code
                readability and a syntax that allows programmers to express
                concepts in fewer lines of code compared to languages like C++
                or Java.
              </p>
            </div>
            <div className="image">
              <img src={pythonimg} />
            </div>
          </div>

          <div className="features-Images-div">
            <div className="text">
              <span className="sub-title">E-Learning</span>
              <h2>Featur of MachineLearning-</h2>
              <p>
                Machine Learning (ML) is a subset of Artificial Intelligence
                (AI) that focuses on the development of algorithms and
                statistical models that enable computers to perform tasks
                without being explicitly programmed. In essence, machine
                learning allows computers to learn from data and improve their
                performance over time.
              </p>
            </div>
            <div className="image">
              <img src={machinelearning} />
            </div>
          </div>

          <div className="features-Images-div">
            <div className="text text-size">
              <span className="sub-title">E-Learning</span>
              <h2>Featur of App devlopment-</h2>
              <p>
                App development, short for application development, refers to
                the process of creating software applications that run on mobile
                devices, desktop computers, or web browsers. These applications,
                commonly referred to as "apps," serve various purposes and can
                provide functionality ranging from entertainment and social
                networking to productivity and business solutions
              </p>
            </div>
            <div className="image">
              <img src={appdev} />
            </div>
          </div>

          <div className="features-Images-div">
            <div className="text  text-size">
              <span className="sub-title">E-Learning</span>
              <h2>Feature Technology 2050</h2>
              <p>
                Artificial General Intelligence (AGI): By 2050, major tech
                companies have already launched official projects to develop the
                world’s first artificial general intelligence (AGI). These
                highly complex projects are expected to take anywhere from 10 to
                20 years to complete. Scientists and engineers are figuring out
                how to model factors such as intentional creativity, strategic
                thinking, emotions, common sense, and consciousness.
              </p>
            </div>
            <div className="image iframe">
              <iframe
                width="320"
                height="215"
                src="https://www.youtube.com/embed/6_q_LHq85Cs?si=fDIaVxIQMR1lmnGE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
