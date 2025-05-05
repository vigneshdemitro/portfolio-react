import experiences from '../assets/data/experiences.json';
import skills from '../assets/data/skills.json';
import _about from '../assets/data/about.json';

const about = { ..._about, skills: skills.map(({ name }) => name ) } ;

const user = {
    name: 'Vigneshwar Pasupathi',
    position: 'Full Stack Engineer',
    experiences,
    skills,
    totalExperience: [
        {
            title: '5+',
            message: 'Years of Experience'
        },
        {
            title: 'Full Stack',
            message: 'Integration specialist'
        },
        {
            title: 'Toastmaster',
            message: 'Leadership Skills'
        },
    ],
    about,
    contact: {
        email: 'vigneshdemitro@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/vigneshwarpasupathi',
        resumeLink: 'https://drive.google.com/file/d/1Q1h7B9maSzusabVfqN9wtO11CXlFlkzi/view?usp=drive_link',
        github: 'https://github.com/vigneshdemitro',
    }
}

export {
    user
}