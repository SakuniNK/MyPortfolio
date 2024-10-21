import frontendIcon from '../Assets/images/frontend.png';
import backendIcon from '../Assets/images/backend.png';
import softskiilsIcon from '../Assets/images/skill.png';
import toolIcon from '../Assets/images/tools.png';

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontendIcon,
        skills: [
            { skills: "HTML", percentage: "80%"},
            { skills: "CSS", percentage: "90%"},
            { skills: "JavaScript", percentage: "75%"},
            { skills: "React.js", percentage: "80%"},
        ],
    },
    {
        title: "Backend",
        icon: backendIcon,
        skills: [
            { skills: "Java", percentage: "80%"},
            { skills: "Python", percentage: "90%"},
            { skills: "Sprign", percentage: "75%"},
            { skills: "PHP", percentage: "80%"},
        ],
    },
    {
        title: "Tools",
        icon: toolIcon,
        skills: [
            { skills: "Git & GitHub", percentage: "80%"},
            { skills: "Visual Studio Code", percentage: "90%"},
            { skills: "Interllij", percentage: "75%"},
            { skills: "PyCharm", percentage: "80%"},
        ],
    },
    {
        title: "Soft Skills",
        icon: softskiilsIcon,
        skills: [
            { skills: "Critical Thinking", percentage: "80%"},
            { skills: "Problem Solving", percentage: "90%"},
            { skills: "Leadership", percentage: "75%"},
            { skills: "Analytical Thinking", percentage: "80%"},
        ],
    },
]