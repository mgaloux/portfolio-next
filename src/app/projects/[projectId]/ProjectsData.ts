export interface TestimonialDataInterface {
  referent: string;
  referentRole: string;
  testimonialText: string;
  referentPictureUrl: string;
  linkedInUrl?: string;
}

export interface ProjectDataInterface {
  testimonials?: TestimonialDataInterface[];
  tags: string[];
  bodyDescription: string | TrustedHTML;
  contextDescription: string | TrustedHTML;
  responsibilities: string[];
  pictureUrl: string;
  date: string;
  title: string;
  subtitle: string;
  images?: string[];
}

const conityProjectData: ProjectDataInterface = {
  testimonials: [
    {
      referent: "Richard Raduly",
      referentRole: "CTO at Conity",
      testimonialText: `Martin a fait preuve d'une capacité d'apprentissage remarquable et s'est très rapidement intégré à l'équipe. Il a brillamment relevé les défis de notre start-up, en démontrant une maîtrise et une polyvalence qui présagent d'un avenir très prometteur.`,
      referentPictureUrl:
        "https://media.licdn.com/dms/image/D5603AQHgSciRut4pCw/profile-displayphoto-shrink_800_800/0/1680486502917?e=1704326400&v=beta&t=LM0_xMGreInYEBHk8Uh4nT-eKxl4YGdAIEDAGTfU_g4",
      linkedInUrl: "https://www.linkedin.com/in/r-ichard/",
    },
    {
      referent: "Thomas Raquin",
      referentRole: "President at Conity",
      testimonialText: "...",
      referentPictureUrl:
        "https://media.licdn.com/dms/image/C4E03AQHTHUBgrqJWSg/profile-displayphoto-shrink_800_800/0/1516783408268?e=1704326400&v=beta&t=k2bSeqBnHoEhciALCJwfJUv31gIowehQAENlTeduxDc",
      linkedInUrl: "https://www.linkedin.com/in/thomas-raquin-4b723395/",
    },
  ],
  tags: [
    "Web Development",
    "UI/UX",
    "Testing",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Symfony",
    "PHP",
    "CI/CD",
    "Docker",
    "Selenium",
  ],
  bodyDescription: `In response to an initial lack of sales, my first strategic move involved the development of a new website, conity.fr. This landing page was designed with a specific purpose in mind: to serve as a powerful tool for our sales team, enabling them to engage builders and construction companies, our valued clientele.<br/><br/>

  The implementation of this website yielded positive results, paving the way for a subsequent phase of my role. I primarily focused on the maintenance of our Symfony platform, a critical component of our SaaS product. In addition, I embarked on the significant task of implementing automated end-to-end testing procedures, leveraging the capabilities of Selenium to ensure the quality and robustness of our software.`,
  contextDescription: `In early stage of development, Conity was approaching the building sector, pioneering a transformative <b>connection between homebuilders and individuals seeking to construct their dream homes</b>. In the formative stages of the company, with a lean yet dedicated team of just five individuals, our primary objective was to optimize our sales initiatives.`,
  responsibilities: [
    "Full Stack Development of a landing page website",
    "UI & UX Design",
    "Unit & End to End Testing",
    "Teaching Web Fundamentals to non-technical team members",
  ],
  pictureUrl:
    "data:image/jpeg;base64,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",
  date: "2018 Setember to December",
  title: "CONITY",
  subtitle: "Internship",
};

const maskottProjectData: ProjectDataInterface = {
  testimonials: [
    {
      referent: "Romain Biard",
      referentRole: "CTO & COO at Maskott",
      testimonialText: `...`,
      referentPictureUrl:
        "https://media.licdn.com/dms/image/C5603AQGybsK4xdOMcw/profile-displayphoto-shrink_800_800/0/1648732945019?e=1704326400&v=beta&t=vtJBn0xbw5qKyQAGAyg8ibqzHSzQ-B_BNxMpooHqT1I",
      linkedInUrl: "https://www.linkedin.com/in/rbiard/",
    },
    {
      referent: "Thomas Mauconduit",
      referentRole: "Lead Developer at Maskott",
      testimonialText:
        "Martin a été un excellent collègue durant toute notre collaboration. Il a su m’épauler quand j’en avais besoin et a toujours réussi à résoudre les problématiques qui lui étaient confiées. Je recommande grandement son profil et j’espère avoir l’occasion de retravailler avec lui ",
      referentPictureUrl:
        "https://media.licdn.com/dms/image/C5603AQE_QfHkH5-PZw/profile-displayphoto-shrink_800_800/0/1561012565390?e=1704326400&v=beta&t=pHXUuoTrihO43wcZlxyj1NIai7DZVsaHwuuX9C8mTmg",
      linkedInUrl: "https://www.linkedin.com/in/tmauc/",
    },
  ],
  tags: [
    "React.js",
    "Web Development",
    "UI/UX",
    "Testing",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Jest",
    "CI/CD",
    "Docker",
    "Azure",
    "MongoDB",
    "Node.js",
  ],
  bodyDescription: `Within the development teams at Maskott, we employ the agile methodology. Our teams typically consist of a manager, a product owner, and several developers working on each project. While some developers possess complementary skills, with certain individuals leaning towards backend development and others towards frontend development, my own experience has involved working across both domains, albeit with a stronger emphasis on frontend development.`,
  contextDescription: `Maskott is a Lyon-based startup founded two decades ago by Pascal Bringer, a former teacher within the national education system, with the primary goal of digitizing the learning experience within schools.
  Initially, the company produced physical digital media, including CDs integrated into textbooks used in schools during the early 2000s. However, as the years passed, Maskott shifted its focus towards creating a web platform to comprehensively digitize all educational content used by students in schools. This initiative aimed to replace traditional textbooks and exercise books, which can be burdensome for children and result in substantial logistical and environmental costs.<br/><br/>
  Originally developed in C# using the Orchard framework, Maskott introduced a digital solution that gained adoption in 20% of secondary schools in France by the year 2020.<br/>
  In pursuit of technical optimization and enhanced visual appeal, the decision was made to undertake a complete overhaul of the application in 2021, transitioning to the React technology stack. It is within the framework of this project that my involvement takes place.<br/>`,
  responsibilities: [
    "Full Front-End Rework of a legacy webapp",
    "Support on product design and UI/UX design",
    "Unit & End to End Testing",
    "Rework from JavaScript to TypeScript",
  ],
  pictureUrl:
    "https://media.licdn.com/dms/image/C4D03AQFGsp_1v7jivg/profile-displayphoto-shrink_800_800/0/1609803669665?e=1704326400&v=beta&t=pCIoxpSNkBaKRyPpRCiPsSJeVDgS2EURU6O0CxnzrIc",
  date: "2022 June - Current Position",
  title: "Maskott",
  subtitle: "Full-Time Contract",
};

const deepLogicProjectData: ProjectDataInterface = {
  testimonials: [
    {
      referent: "Stéphane Barbier",
      referentRole: "Founder and President of Deep-Logic",
      testimonialText: `Martin a réalisé un excellent travail au sein de notre équipe en tant que seul développeur Front. Ses propositions pertinentes ont permis de réaliser une UI moderne et efficace, sans détail laissé au hasard. Ayant toujours à cœur d'offrir la meilleure expérience utilisateur, il a su monter en compétence de manière autonome dans toutes les technos nécessaires. Parfaitement intégré à l'équipe, moteur et très bon développeur, travailler avec Martin a été un honneur et un plaisir. `,
      referentPictureUrl:
        "https://media.licdn.com/dms/image/C4D03AQFGsp_1v7jivg/profile-displayphoto-shrink_800_800/0/1609803669665?e=1704326400&v=beta&t=pCIoxpSNkBaKRyPpRCiPsSJeVDgS2EURU6O0CxnzrIc",
      linkedInUrl: "https://www.linkedin.com/in/stefbbr/",
    },
  ],
  tags: [
    "Mobile Development",
    "iOS",
    "Android",
    "React Native",
    "UI / UX",
    "Figma",
    "MongoDB",
  ],
  bodyDescription: `The objective of this emerging startup was to establish a proof-of-concept project aimed at validating the feasibility of a data structure replicable across multiple domains. To achieve this goal, we made the strategic decision to launch a highly customizable cooking application. Our vision encompassed leveraging artificial intelligence to provide meals that were tailored precisely to each customer's preferences and requirements.`,
  contextDescription: `The objective of this emerging startup was to establish a proof-of-concept project aimed at validating the feasibility of a data structure replicable across multiple domains. To achieve this goal, we made the strategic decision to launch a highly customizable cooking application. Our vision encompassed leveraging artificial intelligence to provide meals that were tailored precisely to each customer's preferences and requirements.`,
  responsibilities: [
    "Full Stack mobile development in React and MongoDB",
    "Digitial conceptualisation of a hyper-personnalized cooking app",
    "UI / UX design of a mobile app from scratch with Figma",
    "Front-End mobile app development with React Native / JavaScript",
  ],
  pictureUrl:
    "https://media.licdn.com/dms/image/C4D0BAQFsi0YLteCanw/company-logo_200_200/0/1576335715495?e=1706745600&v=beta&t=Mf0n2mCgDhZ7_9-icfmgBjS4IuLfW4Cy5OLp1rGNnM4",
  date: `2020 March - 2020 July<br/> 2021 September - 2022 February`,
  title: "DeepLogic",
  subtitle: "Internships",
};

const exchangeProjectData: ProjectDataInterface = {
  images: [
    "https://cdn.discordapp.com/attachments/909785310039253022/1169945708820967465/DEXScreenshot.png?ex=65573fd9&is=6544cad9&hm=5e1eb8bd3a634544f8c9439786f3ff083f4690e1b1965fcc9abf709d696e8f2f&",
  ],
  tags: [
    "Smart Contracts",
    "Solidity",
    "Blockchain",
    "Web3",
    "React.js",
    "JavaScript",
    "Hardhat",
    "ethers.js",
    "MetaMask",
  ],
  bodyDescription: `
  Here are the development steps of my DEX project from scratch and expected features I was able to fulfill.<br/><br/>
  
  <b>Metamask Integration</b>: Seamless integration with Metamask for secure and user-friendly blockchain connectivity.<br/><br/>
  <b>User Connection</b>: Implement a user-friendly 'Connect' button for hassle-free account linkage.<br/><br/>
  
  <b>Blockchain Network Selection</b>: Enable users to choose their preferred blockchain or test network through a 'Network Select' feature.<br/><br/>
  
  <b>Market Selection</b>: Facilitate market selection, allowing users to choose their preferred tokens with the 'Select Market' button.<br/><br/>
  
  <b>Deposit Mechanism</b>: Create a secure and efficient deposit system for users' assets.<br/><br/>
  
  <b>Order Creation</b>: Develop an intuitive order creation system for trading.<br/><br/>
  
  <b>Token Trading</b>: Enable users to seamlessly trade tokens on the platform.<br/><br/>
  
  <b>Candlestick Chart</b>: Implement a user-friendly candlestick chart for market analysis.<br/><br/>
  
  <b>Developer Fees</b>: Establish a mechanism where transaction fees contribute to the platform's development and sustainability.<br/><br/>
  
  <b>User Listings</b>: Allow users to list cryptocurrencies for buying or selling among the available options.<br/><br/>
  
  <b>Website Development</b>: Construct a dynamic and responsive website using React.<br/><br/>
  
  <b>Blockchain Setup</b>: Configure and deploy the blockchain on the Hardhat development environment.<br/><br/>
  
  <b>Smart Contracts</b>: Develop a set of smart contracts, including exchanges and tokens.<br/><br/>
  
  <b>Configuration</b>: Initial setup and configuration of the entire platform.<br/><br/>
  
  <b>Smart Contract Integration</b>: Integration of smart contracts for tokens and exchanges into the platform.<br/><br/>
  
  <b>Testing</b>: Thoroughly test the functionality and security of the platform.<br/><br/>
  
  <b>Front-end Development</b>: Build a user-friendly and responsive front-end using React and Redux.<br/><br/>
  
  <b>Ethers Integration</b>: Establish Ether.js for seamless communication between the front-end and back-end.<br/><br/>
  
  <b>Deployment</b>: Deploy the platform on the live blockchain network for public access.<br/><br/>
  
  These milestones represent the comprehensive development process for our project.<br/>`,
  contextDescription: `Decentralized Exchange (DEX): A Cryptocurrency Trading Platform

  Dissimilar to mainstream exchanges such as Binance, our platform operates on the foundation of smart contracts, ensuring complete autonomy within the blockchain ecosystem.<br/>
  
  Purpose:<br/><br/>
  
  A Real-world Endeavor: We embarked on this venture to create a practical and impactful project.<br/>
  Embracing DeFi: Our platform contributes to the growing realm of Decentralized Finance (DeFi).<br/>
  A Launchpad for Innovation: It provides a solid foundation for building diverse applications and leveraging the limitless possibilities of blockchain technology.<br/>`,
  responsibilities: [
    "Learning technologies like Solidity, Hardhat, Ethers.js and MetaMask",
    "Smart Contract Token and Exchange development with Solidity",
    "UI / UX responsive design",
    "Full Stack Web Development in React.js",
    "Deployment to testnets",
    "Unit Testing the whole platform",
  ],
  pictureUrl:
    "https://cdn.discordapp.com/attachments/909785310039253022/1169945708820967465/DEXScreenshot.png?ex=65573fd9&is=6544cad9&hm=5e1eb8bd3a634544f8c9439786f3ff083f4690e1b1965fcc9abf709d696e8f2f&",
  date: `2023`,
  title: "Decentralized Cryptocurrency Exchange",
  subtitle: "Personal Project",
};

const liveExtensionProjectData: ProjectDataInterface = {
  images: [
    "https://lh3.googleusercontent.com/ywrDYmxaZmV6N2OY_6PB72WuSYoROUImJNzuoATie1IAed1WO_Hf6T4k0DSlmsqfC9xKCdC2_tM85tJmW-lX1r59Qg=s1280-w1280-h800",
  ],
  tags: [
    "Chrome Extension",
    "HTML",
    "JavaScript",
    "React.js",
    "GraphQL",
    "Twitch",
    "YouTube",
    "API",
  ],
  testimonials: [
    {
      referentPictureUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKZ9dIxjSJi5Ee_VgHAYtOw4kWwn0jI6ShxO5o9YCA=s900-c-k-c0x00ffffff-no-rj",
      referent: "Zack Nani",
      referentRole: "Streamer & Youtuber",
      testimonialText: "My fans love it ! Martin delivered an incredibly fast and reliable service. With just a few relevant questions during our initial chat, he set the bar higher than my expectations. I now get my viewers drastically faster when I launch a live show.",
    },
  ],
  bodyDescription: `I began by clarifying the streamer's expectations to identify the desired features. Subsequently, I proposed an initial prototype following prototyping conducted on Figma, and we iterated until we found the perfect solution for my client.<br/><br/>

  Once the design and features were defined, I constructed the HTML page and implemented various notification features using the YouTube and Twitch APIs. This enabled viewers to receive updates every minute, indicating the release of a new video or the start of Zack's live stream.<br/><br/>
  
  By employing different colors for the icon and notifications, we effectively kept users informed at all times, allowing them to join with a single click from their browser and ensuring they didn't miss any of his valuable content.`,
  contextDescription: `In order to enhance and stabilize his viewership, renowned streamer Zack Nani required a Google Chrome extension. This extension allowed him to provide his dedicated community with real-time notifications on their screens whenever he initiated a live streaming session.`,
  responsibilities: [
    "Clarified client expectations",
    "Designed and developed a Chrome extension",
    "Frontend made with (HTML, CSS, JavaScript)",
    "Backend (YouTube and Twitch API via GraphQL)",
    "Published the extension on the Chrome Web Store for user access",
  ],
  pictureUrl:
    "/images/projects/ZackNaniLogo.png",
  date: `2023`,
  title: "Zack Nani Live Extension",
  subtitle: "Freelance Project",
};

const streamManagerProjectData: ProjectDataInterface = {
  images: [
    "https://cdn.discordapp.com/attachments/909785310039253022/1170005574017101975/NodeCGScreen.PNG?ex=6557779a&is=6545029a&hm=e0525c7503f376d88e4097a502b60d0c555792d77ffebadaca279bf688cf0372&",
  ],
  tags: [
    "Twitch Streaming Tools",
    "Graphical programming",
    "nodeCG",
    "start GG API",
    "HTML",
    "JavaScript",
    "React.js",
    "GraphQL",
    "Twitch",
    "API",
    "Postman",
  ],
  testimonials: [
    {
      referentPictureUrl:
        "https://pbs.twimg.com/profile_images/1539688296909004802/XDwY2O0C_400x400.jpg",
      referent: "Florian Gibault",
      referentRole: "Stream Manager for Gametek",
      testimonialText: "Wow pas mal",
    },
  ],
  bodyDescription: `<b>Requirement Clarification</b>: I initiated in-depth discussions with stream managers to understand their specific needs and the goals of the project. By thoroughly clarifying the specifications, we laid a solid foundation for the development process.<br/><br/>

  <b>Dashboard Website Development</b>: I took on the challenge of designing and developing a comprehensive dashboard website from scratch. This involved creating a user-friendly interface that provided advanced functionality for managing and viewing esports tournaments.<br/><br/>
  
  <b>Overlay Creation</b>: To enhance the viewer experience, I designed and developed overlay web pages. These overlays presented real-time information in a visually appealing manner, immersing esports fans in the gaming action.<br/><br/>
  
  <b>Modular Overlay Design</b>: For greater flexibility and seamless integration with OBS, I designed modular overlays. By utilizing tools like Photoshop, I ensured that scene transitions during streaming were smooth and captivating.<br/><br/>
  
  <b>Frontend Development</b>: The frontend of the website was my responsibility. I implemented it using a combination of HTML, CSS, JavaScript, and React, guaranteeing that users had access to a responsive and intuitive platform.<br/><br/>
  
  <b>Backend Integration</b>: I integrated the backend using the Start.gg API through GraphQL. This empowered the website to deliver up-to-the-minute data on scores, player tags, team details, stream queues, and match information. This made the platform highly interactive and engaging for the esports community.<br/><br/>
  
  <b>Deployment</b>: After extensive development and testing, I successfully deployed the website. This made it easily accessible to viewers, stream managers, and tournament participants worldwide, ensuring that they could enjoy a seamless and feature-rich experience.<br/><br/>
  
  <b>Key Features</b>:<br/><br/>
  
  I ensured real-time score updates were an integral part of the platform.<br/>
  Player tags were meticulously implemented for easy identification.<br/>
  Team information for players was made readily available.<br/>
  A stream queue management feature was added for enhanced control.<br/>
  The platform provided in-depth match information for the convenience of both viewers and participants.<br/>
  By taking on this project, I aimed to elevate the esports streaming experience, making it more immersive and interactive for all stakeholders involved.<br/><br/>
  
  By employing different colors for the icon and notifications, we effectively kept users informed at all times, allowing them to join with a single click from their browser and ensuring they didn't miss any of his valuable content.`,
  contextDescription: `In Esports and Smash tournaments, live streaming is a standard practice to reach a broader audience and enhance the competitive spirit for both players and spectators. Typically, for setting up such streams, we rely on a director who operates OBS to switch scenes, update player scores, and provide match-related information, all aimed at ensuring an optimal viewer experience. The objective of this project was to streamline the responsibilities of these directors by automating a significant portion of their tasks through the start.gg API, the platform where tournaments take place.`,
  responsibilities: [
    "Clarified specs with stream managers",
    "Designed and developed a dashboard website",
    "Designed and developed overlays web pages",
    "Designed modular overlays with Photoshop for OBS",
    "Frontend made with (HTML, CSS, JavaScript, React)",
    "Backend (Start gg API via GraphQL)",
    "Deployed the website for easier access",
  ],
  pictureUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Open_Broadcaster_Software_Logo.png/2048px-Open_Broadcaster_Software_Logo.png",
  date: `2022-2023`,
  title: "Stream Manager",
  subtitle: "Personal Project",
};

export const projectsData = new Map<string, ProjectDataInterface>([
  ["conity", conityProjectData],
  ["deep-logic", deepLogicProjectData],
  ["stream-manager", streamManagerProjectData],
  ["exchange", exchangeProjectData],
  ["maskott", maskottProjectData],
  ["live-extension", liveExtensionProjectData],
]);
