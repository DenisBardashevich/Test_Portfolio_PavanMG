import './Projects.css'
import img_1 from './img/img1.png'
import img_2 from './img/img2.png'
import img_3 from './img/img3.png'
import img_4 from './img/img4.png'
import img_5 from './img/img5.png'
import img_6 from './img/img6.png'
import Project_GitHub from './img/icon/GitHub.png'
import Project_link from './img/icon/link.png'


const ProjectData = [
    { src: img_1, title: "Project Tile goes here", description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", techStack: "HTML , JavaScript, SASS, React", liveLink: "#", codeLink: "#" },
    { src: img_2, title: "Project Tile goes here", description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", techStack: "HTML , JavaScript, SASS, React", liveLink: "#", codeLink: "#" },
    { src: img_3, title: "Project Tile goes here", description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", techStack: "HTML , JavaScript, SASS, React", liveLink: "#", codeLink: "#" },
    { src: img_4, title: "Project Tile goes here", description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", techStack: "HTML , JavaScript, SASS, React", liveLink: "#", codeLink: "#" },
    { src: img_5, title: "Project Tile goes here", description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", techStack: "HTML , JavaScript, SASS, React", liveLink: "#", codeLink: "#" },
    { src: img_6, title: "Project Tile goes here", description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", techStack: "HTML , JavaScript, SASS, React", liveLink: "#", codeLink: "#" },
];

const Projects = () => {
    return ( 
        <>
        <div className="Projects">
            <div className="Projects_name">Projects</div>
            <div className="Projects_context">Things I’ve built so far</div>
        </div>
        <div className="Project_containers">
                {ProjectData.map((project, index) => (
                    <div key={index} className="Projects_container">
                        <img src={project.src} alt={project.title} />
                        <div className="Project_containers_content">
                            <div className="Project_container_name">{project.title}</div>
                            <div className="Project_container_context">{project.description}</div>
                            <div className="Project_container_stack">Tech stack : <span className='tech_items'>{project.techStack}</span></div>
                            <div className="Project_container_link">
                                <a href={project.liveLink}><img src={Project_link} alt="link" /> Live Preview</a>
                                <a href={project.codeLink}><img src={Project_GitHub} alt="GitHub" /> View Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;