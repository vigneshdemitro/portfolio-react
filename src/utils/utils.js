import experiences from '../assets/data/experiences.json';
import skills from '../assets/data/skills.json';
import _about from '../assets/data/about.json';
import careerHighlights from '../assets/data/career-higlights.json';
import userDetails from '../assets/data/user-profile.json';
import moment from 'moment';

const about = { ..._about, skills: skills.map(({ name }) => name ) };
const monthFormat = "MM/YYYY";
const displayFormat = "MMMM YYYY";

const user = {
    ...userDetails,
    experiences,
    skills,
    careerHighlights,
    about,
};

const getDate = (dateString) => moment(dateString, monthFormat);

const formatDateRange = ({ startDate, endDate }) => {
    const start = getDate(startDate);
    const end = getDate(endDate);
    const formattedStart  = start.format(displayFormat);
    const formattedEnd  = end.format(displayFormat);

    if (!endDate) {
        return `From ${formattedStart} - Present`;
    }

    return `${formattedStart} - ${formattedEnd}`;

};

const getCompanyExperience = (positions, onlyDuration = false) => {
    // Calculate total years of experience of a company
    const { startDate, endDate } = positions.reduce(
        (acc, pos, index) => {
          if (index === 0) {
            acc.endDate = pos.endDate ? getDate(pos.endDate) : moment();
          }
          if (index === positions.length - 1) {
            acc.startDate = getDate(pos.startDate);
          }
          return acc;
        },
        { startDate: null, endDate: null }
    );

    const duration = moment.duration(endDate.diff(startDate));
    const years = duration.years();
    const months = duration.months();

    if (onlyDuration) {
        return duration;
    }

    if (years > 0) {
        return `${years} Year${years > 1 ? 's' : ''} ${months} Month${months > 1 ? 's' : ''}`;
    } else {
        return `${months} Month${months > 1 ? 's' : ''}`;
    }
};

const capitializeWord = (word) => {
    const _word = String(word);
    return _word.charAt(0).toUpperCase() + _word.slice(1).toLowerCase();
};

const capitializeSentence = (sentence) => {
    return String(sentence).split(' ').map(word => capitializeWord(word)).join(' ');
};

const getTotalExperience = (companies) => {
    let totalMonths = 0;

    companies.forEach(company => {
        const duration = getCompanyExperience(company.positions, true);
        totalMonths += duration.years() * 12 + duration.months();
    });

    const totalYears = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    if (totalYears > 0) {
        return `${totalYears}${totalYears > 1 ? '+ Years' : 'Year'}`;
    } else {
        return `${remainingMonths} Month${remainingMonths > 1 ? 's' : ''}`;
    }
};

const totalExperience = getTotalExperience(user.experiences);

export {
    capitializeSentence,
    capitializeWord,
    formatDateRange,
    getCompanyExperience,
    user,
    totalExperience,
};