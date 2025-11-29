import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contents}>
              <h2>
                  Contact Me
              </h2>
              <div className={styles.contents}>
                <ul>
                    <li>emily.a.berger52@gmail.com</li>
                    <li><Link href="https://www.linkedin.com/in/emily-a-berger/" to="route" target="_blank" rel="noopener noreferrer">linkedin/in/emily-a-berger</Link></li>
                    <li><Link href="https://github.com/eaberger2" to="route" target="_blank" rel="noopener noreferrer">github.com/eaberger2</Link></li>
                    <li><Link href="https://open.spotify.com/user/emberg547?si=7af5183fd99445bf" to="route" target="_black" rel="noopener noreferrer">spotify.com/emberg547</Link></li>
                </ul>
              </div>
              <h2>
                Experience
              </h2>
              <h4>Entegral <i className={styles.notbold}>Software Engineer 1</i></h4>
              <p>June 2024 - Current</p>
              <div className={styles.contents}>
                <ul>
                  <li>
                    Maintain a variety of applications including Spring Boot APIs, Ivy APIs, Angular UIs, and Apache Wicket UIs.
                  </li>
                  <li>
                    Work with docker, kubernetes, and the Google Cloud Platform to deploy applications.
                  </li>
                </ul>
              </div>
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
                    Analyzed a Python machine learning program and identified areas of improvement to train a more accurate classification model
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
    </div>
  )
}