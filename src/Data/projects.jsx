const projects = [
    {
        id: 'cardtrumps',
        title: 'Card Trumps',
        summary: 'A digital remake of the classic card game. Players compete against the computer, selecting card categories to win rounds and collect the entire deck. Features animations, category logic, and game flow handling.',
        image: '/assets/images/ThumbnailCardTrumps.jpg',
        tools: ['JavaScript', 'HTML', 'CSS'],
        deployed: 'https://adamgcodes.github.io/-js-toptrumps/',
        readme: 'https://github.com/AdamGCodes/-js-toptrumps/blob/main/ReadMe.md',
        repo: 'https://github.com/AdamGCodes/-js-toptrumps'
    },
    {
        id: 'habithelper',
        title: 'HabitHelper',
        summary: 'A full-stack habit-tracking app with timers, journaling, and habit to-dos. Built to help users reflect, reset, and build healthier routines. Features user auth, CRUD functionality, and modular SCSS design.',
        image: '/assets/images/ThumbnailHabitHelper.jpg',
        tools: ['Django', 'Python', 'React', 'PostgreSQL', 'SCSS'],
        deployed: 'https://habithelper.netlify.app/',
        readme: 'https://github.com/AdamGCodes/habithelper-frontend/blob/main/ReadMe.md',
        repo: 'https://github.com/AdamGCodes/habithelper-frontend'
    },
    {
        id: 'localheroes',
        title: 'Local Heroes',
        summary: 'A MERN stack app connecting people offering and requesting local help. Includes tasks, profiles, and authentication. Designed with comic-style visuals to promote accessibility and positivity.',
        image: '/assets/images/ThumbnailLocalHeroes.jpg',
        tools: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        deployed: 'https://local-heroes.netlify.app/',
        readme: 'https://github.com/AdamGCodes/local-heroes-frontend/blob/main/ReadMe.md',
        repo: 'https://github.com/AdamGCodes/local-heroes-frontend'
    },
    {
        id: 'qualitytime',
        title: 'Quality Time',
        summary: 'A full-stack app for parents and caregivers to find, post, and save activity ideas. Features CRUD for “Sparks” (activities), image upload, user profiles, likes, and comments. Built with accessibility and responsiveness in mind.',
        image: '/assets/images/ThumbnailQualityTime.jpg',
        tools: ['MongoDB', 'Express.js', 'Node.js', 'EJS', 'JavaScript'],
        deployed: '', // Add your Netlify link if hosted
        readme: 'https://github.com/AdamGCodes/quality-time/blob/main/ReadMe.md',
        repo: 'https://github.com/AdamGCodes/quality-time'
    },
    {
        id: 'pos',
        title: 'POS System',
        summary: 'A simple Point of Sale system built with just JavaScript, HTML, and CSS. Allows product selection, pricing, and simple cart management logic. Designed for practice with UI interactions and DOM manipulation.',
        image: '/assets/images/ThumbnailPos.jpg',
        tools: ['JavaScript', 'HTML', 'CSS'],
        deployed: '', // Add if deployed
        readme: '',   // Optional: add if you write one later
        repo: ''      // Optional: add GitHub link if hosted
    }
];

export default projects;  