module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Rohit Sharma',
    // Main Site Title
    title: `Rohit Sharma | Back-end Developer`,
    // Description that goes under your name in main bio
    description: `Back-end developer based in Kansas City, Missouri.`,
    // Optional: Twitter account handle
    author: `@TheHunterGuy`,
    // Optional: Github account URL
    github: `https://github.com/rohit13`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/rohitsharma13/`,
    // Content of the About Me section
    about: `Experience Software Engineer with extensive practice in backend and frontend software development.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Cerner Corporation',
        description: 'Associate Senior Software Engineer, July 2017 - Present',
        link: '',
      },
      {
        name: 'Syracuse University',
        description: 'Graduate Teaching Assistant, August 2016 - May 2017',
        link: '',
      },
      {
        name: 'Amdocs India',
        description: 'Senior Subject Matter Expert, Oct 2010 - July 2015',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, J2EE, C++, SQL, XML, HTML, CSS, JavaScript, jQuery. Familiar with C#, Python, Android Programming',
      },
      {
        name: 'Servers & Databases',
        description: 'Oracle BEA WebLogic 9.2, Apache Tomcat, Nginx, Oracle 9i/10g, MySQL',
      },
      {
        name: 'Tools and frameworks',
        description:
          'Git, Perforce, Mercurial using Tortoise Client, Eclipse, Visual Studio, MATLAB, Soap UI, Postman REST Client, Apache Maven, Struts, Spring Core, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
