
export const cssData = `
/* 📌 You can edit this CSS code if you want to customize your formatting / styling further */
/* 📌 You can even import custom fonts! */
/* 📌 if you add something for styling and the result is not what you expected (bugs appear), it means that the class/id of the element you added to style it is the same as some class/id from the source code of the application, and the styling it overlaps. Try to change your class/id. */

@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap');

.content {
    font-family: Tinos, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin: 2.75rem;
}

.content .spacer {
    margin: 0px auto;
}

.content .vertical-spacer {
    height: 8px;
}

.content h1 {
    order: 0;
}

.content h1,
.content h2,
.content h3,
.content p,
.content a,
.content li {
    color: #000;
}

.content h2 {
    margin: 10px 0px;
}

.content h3 {
    margin: 6px 0px;
}

.content h1 {
    color: #000;
    text-transform: uppercase;
    text-align: left;
    font-size: 32px;
    margin: 0;
    padding: 0;
}

.content h2 {
    border-bottom: 1px solid #000;
    text-transform: uppercase;
    font-size: 16px;
    padding: 0;
}

.content h3 {
    display: flex;
    font-size: 15px;
    padding: 0;
    justify-content: space-between;
}

.content p {
    margin: 2px 0;
    padding: 0;
    display: flex;
}

.content li>p {
    display: inline;
}

.content a {
    color: #000;
}

.content ul {
    margin: 4px 0;
    padding: 0 24px;
}

.content strong,
.content em,
.content a {
    padding: 0 2px 0 1px;
}
`

export const htmlData = `
<!--
📌 Welcome to betteresume.com!
📌 This is the template you can use to get started.
📌 Do not limit yourself only to this template and its structure. Modify and change according to your needs and preferences. This also applies to the CSS part.
📌 Give it a class or an id and start modifying
-->
<div class="content">
    <h1 id="name">NAME</h1>
    <p>LOCATION | PHONE | EMAIL </p>
    <p><a href="https://{LINKEDIN}" target="_blank">LINKEDIN</a> | <a href="https://{GITHUB}" target="_blank">GITHUB</a></p>
    <div class="vertical-spacer"></div>

    <h2>Technical Skills</h2>
    <p><strong>Front End</strong> | React, NextJS, JavaScript, TypeScript, NodeJS, CSS, HTML</p>
    <p><strong>Back End</strong> | Golang, Java, C, C++, PostgreSQL, MongoDB, MySQL</p>
    <p><strong>Testing</strong> | Jest, Mocha, Chai, AWS, AWS:ECS, Terraform, JUnit</p>
    <p><strong>Developer Tools</strong> | Docker, Git, npm, Webpack, Babel, Agile Methodology, TDD</p>
    <div class="vertical-spacer"></div>

    <h2>Experience &amp; Projects</h2>
    <h3>Back-End Software Engineer / Name of Application <span class="spacer"></span>Jan 2022 - Present</h3>
    <p><em>Backend redesign for reviews module of legacy e-commerce microservice</em><span class="spacer"></span>Javascript | Node.js | Express | PostgreSQL</p>
    <ul>
        <li>Optimized existing monolithic back-end of an e-commerce website to handle 360,000 requests per minute with low latency <strong>(&lt;20 ms)</strong> and error rate <strong>(&lt;0.1%)</strong> by horizontally microservice to 5 AWS EC2 instances and using a least connections load balancing method with NGINX to increase fault tolerance</li>
        <li>Leveraged K6 and Loader.io to identify performance bottlenecks, then implemented caching to lower frequency of database retrieval to allow for a throughput increase of <strong>733%</strong></li>
        <li>Reduced query times to database from 6,000 ms to <strong>12 ms</strong> by using aggregator functions and indexing foreign keys</li>
        <li> Mentored peer engineers on front-end development and best practices</li>
    </ul>
    <div class="vertical-spacer"></div>

    <h3>Front-End Engineer, UI Lead / Name of Application<span class="spacer"></span>Jan 2021 - Jan 2022</h3>
    <p><em>Remote learning management system web application</em> <span class="spacer"></span> JavaScript | Next.js | Node.js | Firebase | Jest </p>
    <ul>
        <li>Facilitated discussions with front-end team to assess client expectations and constructed Figma wireframe</li>
        <li>Directed modeling of data and API endpoints to allow for seamless frontend integration to backend</li>
        <li>Implemented server-side rendering with Next.js to improve page load time, achieving Lighthouse SEO score of 100</li>
    </ul>
    <div class="vertical-spacer"></div>

    <h3>Front-End Engineer, UI Lead / Name of Application<span class="spacer"></span>Jan 2021 - Jan 2022</h3>
    <p><em>Remote learning management system web application</em> <span class="spacer"></span> JavaScript | Next.js | Node.js | Firebase | Jest</p>
    <ul>
        <li>Facilitated discussions with front-end team to assess client expectations and constructed Figma wireframe</li>
        <li>Directed modeling of data and API endpoints to allow for seamless frontend integration to backend</li>
        <li>Implemented server-side rendering with Next.js to improve page load time, achieving Lighthouse SEO score of 100</li>
    </ul>
    <div class="vertical-spacer"></div>

    <h3>Front-End Software Engineer / Name of Application <span class="spacer"></span> 2020-2021</h3>
    <p><em>Single page e-commerce website</em> <span class="spacer"></span> JavaScript | React | Express | Jest</p>
    <ul>
        <li>Architected a front-end service of a ratings and reviews system to allow users to post reviews, view average ratings, search by keyword, and sort helpfulness relevance, date, and/or star ratings for a specific product</li>
        <li>Improved web page quality by enabling text compression through Brotli and React Lazy Load, increasing Google Lighthouse performance by 132%</li>
        <li>Tracked user interactions throughout the application with React higher-order components to reuse component logic</li>
    </ul>
    <div class="vertical-spacer"></div>

    <!-- Move this section above Technical Skills if you are a student -->
    <h2>Education</h2>
    <p>
        <strong>University of XXX</strong> - Master of Science, Computer Science, GPA<span class="spacer"></span>2023
        <ul>
            <li>Relevant Classes | Computer and Algorithms Programming, Operational Research, Information Technology</li>
        </ul>
    </p>
    <p>
        <strong>University of XXX</strong> - Bachelors of Science, Computer Science, GPA<span class="spacer"></span>2022
        <ul>
            <li>Relevant Courses | Computer and Algorithms Programming, Operational Research, Information Technology</li>
        </ul>
    </p>
</div>
`
