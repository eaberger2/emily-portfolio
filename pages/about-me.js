import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import profilePhoto from '../images/profile_photo.JPG';
//npm run dev
export default function AboutMe() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emily Berger's Portfolio</title>
        <link rel="icon" href="/laptop.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hello.
        </h1>
        <h1 className={styles.title}>
          I'm Emily Berger
        </h1>
        <h1 className={styles.subtitle}>*a student and coder looking to start her journey as a software engineer :)</h1>
        <div className={styles.navbar}>
        <ul>
          <li>
          <Link href="/">
            Projects
          </Link>
          </li>
          <li className={styles.bold}>
          <Link href="/about-me">
            About Me
          </Link>
          </li>
        </ul>
        </div>
        <div className={styles.grid}>
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            width={300}
            height={200}
          />

          <div className={styles.contents}>
              <p>I am a senior at the University of Wisconsin-Madison studying Computer Science and Data Science.
                  In school, I have especially enjoyed learning about operating systems, data structures, and efficient algorithms.
                  Currently, I am taking a database management systems course and an intro to cryptography course; both have been
                  really interesting so far! As a college senior, I am actively seeking full-time Software Engineering roles for the
                  summer of 2024. I am passionate about optimizing systems with code and I hope to work on unique and interesting 
                  problems in the technology industry.
              </p>
              <p>
                In my free time, I enjoy rock climbing, painting, coding stuff like this portfolio, crossing off movies on my IMDb Top 100 poster, playing Smoothie Moves on Webkinz, and trying to solve the nyt mini crossword!
              </p>
              <h2>
                  Contact Me
              </h2>
              <div className={styles.contents}>
                <ul>
                    <li>emily.a.berger52@gmail.com</li>
                    <li><a href="https://www.linkedin.com/in/emily-a-berger/">linkedin/in/emily-a-berger</a></li>
                    <li><a href="https://github.com/eaberger2">github.com/eaberger2</a></li>
                </ul>
              </div>
              <h2>
                Skills
              </h2>
              <div className={styles.contents}>
                <ul>
                  <li><b>Languages:</b> Java, Python, C, SQL, JavaScript, HTML/CSS</li>
                  <li><b>Frameworks:</b> React, Node.js, JUnit, SpringBoot, Flask</li>
                  <li><b>Developer Tools:</b> Git, Docker, VSCode, Eclipse, Jupyter Notebook</li>
                  <li><b>Libraries:</b> pandas, NumPy, Matplotlib, scikit-learn</li>
                </ul>
              </div>
              <h2>
                Experience
              </h2>
              <h4>Entegral <i className={styles.notbold}>Software Developer Intern</i></h4>
              <p>May 2023 - August 2023</p>
              <div className={styles.contents}>
                <ul>
                  <li>
                    Rewrote essential Rest API using Java Spring Boot framework
                  </li>
                  <li>
                    Wrote a combined 40 JUnit and integration tests to thoroughly test the new API
                  </li>
                  <li>
                    Analyzed a Python machine learning program and identified areas of improvement to train a more accurate classification mode
                  </li>
                  <li>
                    Used helm charts and kubernetes to set up Google Cloud Storage buckets and queries in BigQuery
                  </li>
                </ul>
              </div>
              <h4>Baird <i className={styles.notbold}>Software Developer Intern</i></h4>
              <p>June 2022 - May 2023</p>
              <div className={styles.contents}>
                <ul>
                  <li>
                    Pair coded applications using .NET framework, Angular, and C Sharp
                  </li>
                  <li>
                    Wrote SQL queries to alter, update, and manage database tables
                  </li>
                  <li>
                    Created 30 Azure DevOps CD pipelines based on GO CD pipelines
                  </li>
                  <li>
                    Applied an Agile approach to development work
                  </li>
                  <h4>
                    Here is an excerpt from my manager evaluation by Nate Zimmerman which I am particularly proud of:
                  </h4>
                  <p>
                    "Emily has done a great job with her internship at Baird. She has a can do attitude, is a quick learner,
                      and has a great mix of research, try, and ask. She has been able to understand complex systems, processes,
                      and social situations and adapt quickly to both learn and provide tangible value for Baird, our supported
                      businesses, and her teammates."
                  </p>
                </ul>
              </div>
              <h4>NC Clean Energy Technology Center <i className={styles.notbold}>Volunteer Developer</i></h4>
              <p>Jan. 2022 - Sept. 2023</p>
              <div className={styles.contents}>
                <ul>
                  <li>
                    Created a React sign up and login page connected to an AWS Cognito User Pool
                  </li>
                  <li>
                    Used Amazon Simple Email Service to send a personalized email to the application owner
                  </li>
                  <li>
                    Used AWS Cognito User Pools and AWS Lambda functions to generate a personalized API token when users login
                  </li>
                  <li>
                    Wrote resolvers and documentation for a GraphQL API
                  </li>
                </ul>
              </div>
          </div>
      </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}