/* START Interest */
const interest = [
    {
        id: 1,
        title: 'Design',
        pt: 'Improving my web design skill',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215678/icons/npqxde3b98uxeeg99lla.png'
    },
    {
        id: 2,
        title: 'Code',
        pt: 'Learning web app programming',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215678/icons/gbzlxwspmj9tif5cu6l3.png'
    },
    {
        id: 3,
        title: 'QA',
        pt: `Checking systems' user experience`,
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670215733/icons/faemsczzlhaszb3jt2ov.png'
    },
]/* END Interest */

/* START Skills */
const skills = [
    {
        id: 1,
        skill: 'Figma',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237384/icons/ibdziqncbnwjle0l1axc.svg'
    },
    {
        id: 2,
        skill: 'HTML',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237602/icons/stb3wn5tabkjb8xduqpt.svg'
    },
    {
        id: 3,
        skill: 'CSS',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237602/icons/hzztmpdh8ymsygnn8ogf.svg'
    },
    {
        id: 4,
        skill: 'SCSS',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237602/icons/kxuhzeznvi0di61alkaw.svg'
    },
    {
        id: 5,
        skill: 'Bootstrap',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670223477/icons/k2q9a8uxlee9b4y2riro.svg'
    },
    {
        id: 6,
        skill: 'TailwindCSS',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670223479/icons/kpymfu6pc6qbstgjruoj.svg'
    },
    {
        id: 7,
        skill: 'JavaScript',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670223473/icons/e0n8w6vhoasqylqdo3kg.svg'
    },
    {
        id: 8,
        skill: 'ReactJS',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667237602/icons/nwj8o9c9k9qkxkmarczy.svg'
    },
    {
        id: 9,
        skill: 'NextJS',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1667293231/icons/xkgcutbelbcuml2zxywh.svg'
    },
    {
        id: 10,
        skill: 'NodeJS',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670224251/icons/yvmxlf3c3carvdlul33r.svg'
    },
    {
        id: 11,
        skill: 'ExpressJS',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670224251/icons/dmpowjilrdvef1s9j9dm.svg'
    },
    {
        id: 12,
        skill: 'MySQL',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670225206/icons/rnqcburcaaknt6nfat0s.svg'
    },
    {
        id: 13,
        skill: 'Cloudinary',
        icon: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670224251/icons/gfdvtppwlv6ys1ntqroc.svg'
    }
]/* END Skills */

/* START Projects */
const projects = [
    {
        id: 1,
        type: 'Final Year Project',
        title: 'Complaint system',
        desc: 'Built a full stack system which consist a two-way communication between student and admin. Stack used is Bootstrap, PHP and MySQL.',
        img: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670415043/pf-project/ndgjcsy2jnp5ufsoqxnk.jpg'
    },
    {
        id: 2,
        type: 'Intern',
        title: 'AOneSchools system',
        desc: 'Explored and managed the system. Taught employees on how to use features like registration, attendance, payment and more.',
        img: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670425208/pf-project/ha5wza2zez2hypbanro6.jpg'
    },
    {
        id: 3,
        type: 'Intern',
        title: 'Robotic events',
        desc: `Participated in robotic events in several places. Promoted the company’s products and services to clients regarding Robotic Academy's class.`,
        img: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670415135/pf-project/mbroh2m8ryd9rewl7xso.jpg'
    },
    {
        id: 4,
        type: 'Intern',
        title: 'STEM modules',
        desc: 'Created and updated several of STEM modules for the academy uses.',
        img: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670425732/pf-project/z63fsg5berg41z21wwae.jpg'
    },
    {
        id: 6,
        type: 'Mini Projects',
        title: 'Personal portfolio',
        desc: 'Designed and developed a personal portfolio using ReactJS, NextJS and TailwindCSS.',
        img: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670424176/pf-project/onbzlpponhffjmk8ktla.jpg'
    },
    {
        id: 7,
        type: 'Mini Projects',
        title: 'Simple Projects',
        desc: 'Few simple projects on GitHub.',
        img: 'https://res.cloudinary.com/dltslq5fh/image/upload/v1670425601/pf-project/yn8omjgcvmr3nklyjumo.png'
    }

]/* END Projects */

/* START Footer Links */
const ft_links = [
    {
        id: 1,
        title: 'About Site 🌍',
        links: [
            {
                id: 1,
                link: '/',
                name: 'Home'
            },
            {
                id: 2,
                link: '#about',
                name: 'About'
            },
            {
                id: 3,
                link: '#skill',
                name: 'Skill'
            },
            {
                id: 4,
                link: '#project',
                name: 'Project'
            }
        ]
    },
    {
        id: 2,
        title: 'Design Resource 🎨',
        links: [
            {
                id: 1,
                link: 'https://icons8.com/',
                name: 'Icon'
            },
            {
                id: 2,
                link: 'https://fonts.google.com/',
                name: 'Google Font'
            },
            {
                id: 3,
                link: 'https://uigradients.com/',
                name: 'Color Gradient'
            },
            {
                id: 4,
                link: 'https://animista.net/',
                name: 'Basic Animation'
            },
            {
                id: 5,
                link: 'https://yoksel.github.io/grid-cheatsheet/',
                name: 'Grid Layout'
            }
        ]
    },
    {
        id: 3,
        title: 'Tech Research 🕹️',
        links: [
            {
                id: 1,
                link: 'https://nextjs.org/',
                name: 'NextJS'
            },
            {
                id: 2,
                link: 'https://reactjs.org/',
                name: 'ReactJS'
            },
            {
                id: 3,
                link: 'https://swiperjs.com/',
                name: 'SwiperJS'
            },
            {
                id: 4,
                link: 'https://tailwindcss.com/',
                name: 'TailwindCSS'
            }
        ]
    }
]/* END Footer Links */

export {
    interest,
    skills,
    projects,
    ft_links
}