export const siteConfig = {
  // Site URL for when it goes live
  siteUrl: 'https://ndalton12.github.io/',
  // Your Name
  name: 'Niall Dalton',
  // Main Site Title
  title: 'Niall Dalton',
  // Description that goes under your name in main bio
  description: 'I write code and think about stuff.',
  // Social links
  github: 'https://github.com/ndalton12',
  linkedin: 'https://www.linkedin.com/in/niall-dalton/',

  // Content of the About Me section (markdown supported)
  about: `
Currently, I am taking a break from working to do my Masters in Machine Learning at University College London. I like physics, technology, and philosophy.
Previously, I was an Applied AI Engineer at Scale AI and a software engineer at Amazon on Project Kuiper, a satellite internet constellation.
I also did research and ML projects at Activ Surgical, Northeastern University, and MIT Lincoln Lab.

If you're interested, here is my [resume](/resume.pdf). Better yet, here is a picture of my [dog](/tucker.jpg).

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

  // Projects list
  projects: [
    {
      name: 'AMPED: Advantaged Markov Proxy Evolution Dynamics',
      description:
        'A novel deep RL algorithm that generalizes MuZero to n-th order Markov chains and combines the PPO objective with the MuZero objective for better generalization.',
      link: 'https://github.com/ndalton12/AMPED',
    },
    {
      name: 'Scientific Truths Are Not Self Evident: Science, Perception, and Identity in America',
      description:
        'Analyzed cultural perceptions of science with NLP techniques and big (Twitter) data and determined that science is often perceived as a narrative rather than a set of truisms.',
      link: 'https://github.com/ndalton12/nlp-english-project',
    },
    {
      name: 'Shifting Morals: A Study in Probabilistic Machine Ethics',
      description:
        'Shifting Morals is a thought experiment inspired by MIT\'s Moral Machine. However, instead of deterministic outcomes, Shifting Morals posits that outcomes are probabilistic and that everything is up to chance.',
      link: 'https://github.com/ndalton12/shifting-morals',
    },
  ],

  // Experience list
  experience: [
    {
      name: 'Scale AI',
      description: 'Applied AI Engineer, June 2024 - Present',
      link: 'https://www.scale.com/',
    },
    {
      name: 'Amazon: Project Kuiper',
      description: 'Software Engineer II, July 2023 - June 2024',
      link: 'https://www.aboutamazon.com/what-we-do/devices-services/project-kuiper',
    },
    {
      name: 'Amazon: Project Kuiper',
      description: 'Software Engineer I, September 2021 - July 2023',
      link: 'https://www.aboutamazon.com/what-we-do/devices-services/project-kuiper',
    },
  ],

  // Skills list
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
} as const;

export type SiteConfig = typeof siteConfig;
