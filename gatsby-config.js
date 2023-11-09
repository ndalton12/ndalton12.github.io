module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ndalton12.github.io/`,
    // Your Name
    name: 'Niall Dalton',
    // Main Site Title
    title: `Niall Dalton`,
    // Description that goes under your name in main bio
    description: `I write code and think about stuff.`,
    // Optional: Github account URL
    github: `https://github.com/ndalton12`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/niall-dalton/`,
    // Content of the About Me section, I made this markdown so its formatted specially
    about: `
Currently, I am a software developer at Amazon. I like physics, technology, and philosophy.
Previously, I did research and ML projects at Activ Surgical, Northeastern University, and MIT Lincoln Lab.

If you're interested, here is my [resume](./resume.pdf). Better yet, here is a picture of my [dog](/tucker.jpg).

Here are a random assortment of things I find interesting: 
* [Neuroscience of Free Will](https://en.wikipedia.org/wiki/Neuroscience_of_free_will)
* [r/ErgoMechKeyboards](https://www.reddit.com/r/ErgoMechKeyboards/)
* [Bell's Theorem](https://en.wikipedia.org/wiki/Bell%27s_theorem)
* [Gödel's Incompleteness Theorems](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems)
* [Quanta Magazine](https://www.quantamagazine.org/)
* [Golem XIV](https://rtraba.files.wordpress.com/2017/01/golem-xiv.pdf)
* [Programming stories](https://thedailywtf.com/)
* [My favorite internet blog](https://gwern.net/index)
`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'AMPED: Advantaged Markov Proxy Evolution Dynamics',
        description:
          `A a novel deep RL algorithm that generalizes MuZero to n-th order Markov chains and combines the
          PPO objective with the MuZero objective for better generalization.`,
        link: 'https://github.com/ndalton12/AMPED',
      },
      {
        name: 'Scientific Truths Are Not Self Evident: Science, Perception, and Identity in America',
        description:
          `Analyzed cultural perceptions of science with NLP techniques and big (Twitter) data and 
          determined that science is often perceived as a narrative rather than a set of truisms.
          `,
        link: 'https://github.com/ndalton12/nlp-english-project',
      },
      {
        name: 'Shifting Morals: A Study in Probabilistic Machine Ethics',
        description:
          `Shifting Morals is a thought experiment inspired by MIT's Moral Machine.
          However, instead of deterministic outcomes, Shifting Morals posits that outcomes are probabilistic
          and that everything is up to chance.
          `,
          link: 'https://github.com/ndalton12/shifting-morals',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon: Project Kuiper',
        description: 'Embedded Satellite Software Engineer I and II, September 2021 - Present',
        link: 'https://www.aboutamazon.com/what-we-do/devices-services/project-kuiper',
      },
      {
        name: 'Activ Surgical',
        description: 'Machine Learning Intern, January 2021 - May 2021',
        link: 'https://www.activsurgical.com/',
      },
      {
        name: 'Northeastern Counter-UAS Lab',
        description: 'Research Assistant, January 2020 - June 2020',
        link: 'https://research.northeastern.edu/ecuas-lab/',
      },
      {
        name: 'MIT Lincoln Laboratory',
        description: 'Deep Learning Research Intern, May 2019 - November 2019',
        link: 'https://www.ll.mit.edu/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Rust, C/C++, Bash, PyTorch, Java, NumPy, Pandas, TensorFlow, FreeRTOS, ARM, MATLAB, Sci-Py, CUDA, Django, etc.',
      },
      {
        name: 'Other',
        description:
          'AWS (S3, Lambda, EC2, DynamoDB, etc.), Docker, Vim, Git, Linux, GCP, ML / DL, Scrum, CICD, etc.',
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
