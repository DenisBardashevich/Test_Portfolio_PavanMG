import './Skills.css'

import bootstrap from './img/bootstrap.svg'
import css from './img/css.svg'
import git_icon from './img/git_icon.svg'
import github from './img/github.svg'
import greesock from './img/greesock.svg'
import html from './img/html.svg'
import js from './img/js.svg'
import react from './img/react.svg'
import sass from './img/sass.svg'
import tailwind from './img/tailwind.svg'
import Vector from './img/Vector.svg'
import vscode from './img/vscode.svg'

const skillsData = [
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS"},
    { src: js, alt: "JS"},
    { src: react, alt: "React"},
    { src: Vector, alt: "Vector"},
    { src: bootstrap, alt: "Bootstrap"},
    { src: tailwind, alt: "tailwind"},
    { src: sass, alt: "sass"},
    { src: git_icon, alt: "Git"},
    { src: greesock, alt: "Grennsock"},
    { src: vscode, alt: "VsCode"},
    { src: github, alt: "GitHub"},
];




const Skills = () => {
    return (
        <><div className="Skills">
            <div className="Teach_stack">
                <p className='Teach_stack_up'>My Tech Stack</p>
                <p className='Teach_stack_down'> Technologies I’ve been working with recently</p>
            </div>
            <div className="Skills_icons">
                {skillsData.map((skill, index) => (
                    <img key={index} src={skill.src} alt={skill.alt} />
                ))}
            </div>
        </div>
        
        </>
      );
};
 
export default Skills;