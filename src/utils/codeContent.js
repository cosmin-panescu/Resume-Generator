
export const cssData = `/* You can edit this CSS code if you want to customize your formatting / styling further */
/* You can even import custom fonts! ^^*/

/* fonts */
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap');

.body {
    font-family: Tinos, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    font-size:  12.5px;
    font-weight: 400;
    margin: 2.25rem;
}

.spacer {
    margin: 0px auto;
}

.vertical-spacer {
    height: 8px;
}

h1 {
    order: 0;
}

.headerInfo {
    order: 1;
}

h1, h2, h3, p, a, li {
    color: black;
}

h2 {
    margin: 10px 0px;
}

h3 {
    margin: 6px 0px;
}

h1 {
    color: black;
    text-transform: uppercase;
    text-align: left;
    font-size: 32px;
    margin: 0;
    padding: 0;
}

h2 {
    border-bottom: 1px solid #000000;
    text-transform: uppercase;
    font-size: 16px;
    padding: 0;
}

h3 {
    display: flex;
    font-size: 15px;
    padding: 0;
    justify-content: space-between;
}

p {
    margin: 0;
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 0;
    display: flex;
}

li > p {
    display: inline;
}

a {
    color: black;
}

ul {
    margin: 4px 0;
    padding-left: 24px;
    padding-right: 24px;
}

strong, em, a {
    padding-left: 1px;
    padding-right: 2px;
}

.headerInfo > ul {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 6px auto 0px !important;
    padding: 0;
}

.headerInfo > ul > li {
    display: inline;
    white-space: pre;
    list-style-type: none;
}

.headerInfo > ul >li:not(:last-child) {
    margin-right: 8px;
}

.headerInfo > ul > li:not(:last-child):after {
    content: "•";
    margin-left: 8px;
}
`

export const htmlData = `
<section class="body">
<h1 id="-name-">NAME</h1>
<p>LOCATION | PHONE | EMAIL </p>
<p><a href="https://LINKEDIN">https://LINKEDIN</a> | <a href="https://GITHUB">https://GITHUB</a></p>
<div className="vertical-spacer"></div>

<h2 id="technical-skills">Technical Skills</h2>
<p><strong>Front End</strong> | React, NextJS, Javascript, TypeScript, NodeJS, CSS, styled-components</p>
<p><strong>Back End</strong> | Golang, Java, C, C++, PostgreSQL, MongoDB, MySQL</p>
<p><strong>Testing/Deployment</strong> | Jest, Mocha, Chai, AWS:EC2, AWS:ECS, Terraform, JUnit</p>
<p><strong>Developer Tools</strong> | Docker, Git, npm, Webpack, Babel, Agile Methodology, TDD</p>
<div className="vertical-spacer"></div>

<h2 id="experience-projects">Experience &amp; Projects</h2>
<h3 id="back-end-software-engineer-name-of-application-span-class-spacer-span-jan-2022-present">Back-End Software Engineer | Name of Application <span class="spacer"></span>Jan 2022 - Present</h3>
<p><em>Backend redesign for reviews module of legacy e-commerce microservice</em><span class="spacer"></span>Javascript | Node.js | Express | PostgreSQL | EC2</p>
<ul>
<li>Optimized existing monolithic back-end of an e-commerce website to handle 360,000 requests per minute with low latency <strong>(&lt;20 ms)</strong> and error rate <strong>(&lt;0.1%)</strong> by horizontally microservice to 5 AWS EC2 instances and using a least connections load balancing method with NGINX to increase fault tolerance</li>
<li>Leveraged K6 and Loader.io to identify performance bottlenecks, then implemented caching to lower frequency of database retrieval to allow for a throughput increase of <strong>733%</strong></li>
<li>Reduced query times to database from 6,000 ms to <strong>12 ms</strong> by using aggregator functions and indexing foreign keys</li>
<li>Mentored peer engineers on front-end development and best practices</li>
</ul>
<div className="vertical-spacer"></div>

<h3 id="front-end-engineer-ui-lead-name-of-application-span-class-spacer-span-jan-2021-jan-2022">Front-End Engineer, UI Lead | Name of Application<span class="spacer"></span>Jan 2021 - Jan 2022</h3>
<p><em>Remote learning management system web application</em> <span class="spacer"></span> JavaScript | Next.js | MUI | Node.js | Firebase | Jest</p>
<ul>
<li>Facilitated discussions with front-end team to assess client expectations and constructed Figma wireframe</li>
<li>Directed modeling of data and API endpoints to allow for seamless frontend integration to backend</li>
<li>Implemented server-side rendering with Next.js to improve page load time, achieving Lighthouse SEO score of 100</li>
</ul>
<div className="vertical-spacer"></div>

<h3 id="front-end-engineer-ui-lead-name-of-application-span-class-spacer-span-jan-2021-jan-2022">Front-End Engineer, UI Lead | Name of Application<span class="spacer"></span>Jan 2021 - Jan 2022</h3>
<p><em>Remote learning management system web application</em> <span class="spacer"></span> JavaScript | Next.js | MUI | Node.js | Firebase | Jest</p>
<ul>
<li>Facilitated discussions with front-end team to assess client expectations and constructed Figma wireframe</li>
<li>Directed modeling of data and API endpoints to allow for seamless frontend integration to backend</li>
<li>Implemented server-side rendering with Next.js to improve page load time, achieving Lighthouse SEO score of 100</li>
</ul>
<div className="vertical-spacer"></div>

<h3 id="front-end-software-engineer-name-of-application-span-class-spacer-span-2020-2021">Front-End Software Engineer | Name of Application <span class="spacer"></span> 2020-2021</h3>
<p><em>Single page e-commerce website</em> <span class="spacer"></span> JavaScript | React | Express | EC2 | Jest</p>
<ul>
<li>Architected a front-end service of a ratings and reviews system to allow users to post reviews, view average ratings, search by keyword, and sort by helpfulness, relevance, date, and/or star ratings for a specific product</li>
<li>Improved web page quality by enabling text compression through Brotli and React Lazy Load, increasing Google Lighthouse performance by 132%</li>
<li>Tracked user interactions throughout the application with React higher-order components to reuse component logic</li>
</ul>
<div className="vertical-spacer"></div>

<!-- Move this section above Technical Skills if you're a student/new grad -->
<h2 id="education">Education</h2>
<p><strong>University of XXX</strong> - Master of Science, Computer Science, GPA (only &gt;= 3.7)<span class="spacer"></span>2023</p>
<p><strong>University of XXX</strong> - Bachelors of Science, Computer Science, GPA (only &gt;= 3.7)<span class="spacer"></span>2022</p>
</section>
`
