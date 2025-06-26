const projects = [
    {
        id: 'adamswebworks',
        title: 'Adam’s Web Works',
        summary: 'A custom-built portfolio site showcasing my work, skills, and approach to tech. Built with React and SCSS, with a focus on accessibility, performance, and visual storytelling. While simple in structure, it reflects everything I care about in design and development.',
        image: '', // fallback will apply
        tools: ['React', 'SCSS', 'HTML', 'CSS', 'JavaScript', 'GitHub', 'Figma', 'Trello', 'Project Management', 'Agile'],
        deployed: 'https://adamswebworks.netlify.app/',
        readme: 'https://github.com/AdamGCodes/AdamsWebWorks/blob/main/README.md',
        repo: 'https://github.com/AdamGCodes/AdamsWebWorks'
    },
    {
        id: 'habithelper',
        title: 'HabitHelper',
        summary: 'A full-stack habit-tracking app with timers, journaling, and habit to-dos. Built to help users reflect, reset, and build healthier routines. Features user auth, CRUD functionality, and modular SCSS design.',
        image: '/assets/images/ThumbnailHabitHelper.webp',
        tools: ['Django', 'Python', 'React', 'PostgreSQL', 'SCSS', 'GitHub', 'Figma', 'Trello', 'Project Management', 'Agile'],
        deployed: 'https://myhabithelper.netlify.app/',
        readme: 'https://github.com/AdamGCodes/habithelper-frontend/blob/main/ReadMe.md',
        repo: 'https://github.com/AdamGCodes/habithelper-frontend'
    },
    {
        id: 'localheroes',
        title: 'Local Heroes',
        summary: 'A MERN stack app connecting people offering and requesting local help. Includes tasks, profiles, and authentication. Designed with comic-style visuals to promote accessibility and positivity.',
        image: '/assets/images/ThumbnailLocalHeroes.webp',
        tools: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GitHub', 'Figma', 'Trello', 'Project Management', 'Agile'],
        deployed: 'https://local-heroes.netlify.app/',
        readme: 'https://github.com/AdamGCodes/local-heroes-frontend/blob/main/ReadMe.md',
        repo: 'https://github.com/AdamGCodes/local-heroes-frontend'
    },
    {
        id: 'qualitytime',
        title: 'Quality Time',
        summary: 'A full-stack app for parents and caregivers to find, post, and save activity ideas. Features CRUD for “Sparks” (activities), image upload, user profiles, likes, and comments. Built with accessibility and responsiveness in mind.',
        image: '/assets/images/ThumbnailQualityTime.webp',
        tools: ['MongoDB', 'Express.js', 'Node.js', 'EJS', 'JavaScript', 'GitHub', 'Figma', 'Trello', 'Slack', 'Project Management', 'Agile'],
        deployed: 'https://quality-time.netlify.app/',
        readme: 'https://github.com/AdamGCodes/quality-time/blob/main/ReadMe.md',
        repo: 'https://github.com/AdamGCodes/quality-time'
    },
    {
        id: 'cardtrumps',
        title: 'Card Trumps',
        summary: 'A digital remake of the classic card game. Players compete against the computer, selecting card categories to win rounds and collect the entire deck. Features animations, category logic, and game flow handling.',
        image: '/assets/images/ThumbnailCardTrumps.webp',
        tools: ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Figma', 'Trello', 'Project Management', 'Agile'],
        deployed: 'https://adamgcodes.github.io/-js-toptrumps/',
        readme: 'https://github.com/AdamGCodes/-js-toptrumps/blob/main/ReadMe.md',
        repo: 'https://github.com/AdamGCodes/-js-toptrumps'
    },
    {
        id: 'pos',
        title: 'POS System',
        summary: "A simple Point-of-Sale system built with just JavaScript, HTML, and CSS. This was my first ever solo JavaScript project — and while I now see all the things I’d do differently, I’ve kept it live as a reminder of where I started. It handles product selection, pricing, and basic order logic, and was my first experience building something with real UI interaction and DOM manipulation. Cringes aside, I was proud of it then — and I’m even prouder now, seeing how far I’ve come.",
        image: '/assets/images/ThumbnailPos.webp',
        tools: ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Project Management'],
        deployed: 'https://cafeinthepark-pos.netlify.app/',
        readme: 'https://github.com/AdamGCodes/CafePOS/blob/main/README.md',
        repo: 'https://github.com/AdamGCodes/CafePOS'
    }
];

export default projects;