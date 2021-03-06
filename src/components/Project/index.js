import React from 'react';
import { Card, Button } from 'react-bootstrap';
import collectorImg from '../../assets/images/collectors-vault.PNG';
import stumbleImg from '../../assets/images/stumble.PNG';
import pizzaImg from '../../assets/images/pizza-hunt.PNG';
import runBuddyImg from '../../assets/images/run-buddy.PNG';
import justTechImg from '../../assets/images/just-tech-news.PNG';
import githubIcon from '../../assets/GitHub-Mark-32px.png';
import bikeSleuth from '../../assets/images/BikeSleuth.PNG'

function Project() {
    const applications = [
        {
            title: 'BikeSleuth',
            appLink: 'https://bikesleuth.herokuapp.com/#/',
            repoLink: ' https://github.com/Chrisdocs/FindMyBike',
            languages: 'MERN/GraphQL/JavaScript',
            picture: bikeSleuth
        },
        {
            title: 'The Collectors Vault',
            appLink: 'https://the-collectors-vault.herokuapp.com/',
            repoLink: 'https://github.com/chdonovan/the-collectors-vault',
            languages: 'HTML/CSS/JavaScript/mySQL/Express',
            picture: collectorImg
        },
        {
            title: 'Stumble',
            appLink: 'https://dani-hartley.github.io/Stumble/',
            repoLink: 'https://github.com/dani-hartley/Stumble',
            languages: 'HTML/CSS/JavaScript',
            picture: stumbleImg
        },
        {
            title: 'Pizza Hunt',
            appLink: 'https://ancient-taiga-71329.herokuapp.com/',
            repoLink: 'https://github.com/dani-hartley/pizza-hunt',
            languages: 'HTML/CSS/JavaScript',
            picture: pizzaImg
        },
        {
            title: 'Just Tech News',
            appLink: 'https://dry-coast-34790.herokuapp.com/',
            repoLink: 'https://github.com/dani-hartley/just-tech-news',
            languages: 'CSS/Handlebars/JavaScript',
            picture: justTechImg
        },
        {
            title: 'Run Buddy',
            appLink: 'https://dani-hartley.github.io/run-buddy/',
            repoLink: 'https://github.com/dani-hartley/run-buddy',
            languages: 'HTML/CSS',
            picture: runBuddyImg
        }
    ];

    return (
        // <div>
        //     {applications.map(project =>(
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" style={project.picture} />
        //         <Card.Body>
        //             <Card.Title>{project.title} </Card.Title>
        //             <Card.Text>
        //                 {project.languages}
        //             </Card.Text>
        //             <Button href={project.appLink} variant="primary">Go to Application</Button>
        //         </Card.Body>
        //     </Card>
        //     ))}
        // </div>






        <div className="project-container flex-row space-evenly">
            {applications.map(project => (
                <article className="project-card" key={project.title} style={{backgroundImage: `url(${project.picture})`}}>
                    <div className="project-content flex-column space-between">
                        <div className="project-title flex-row align-item-center" key={project.title}>
                            <h3><a href={project.appLink} target="_blank" className="appLink">{project.title}</a></h3>
                            <a href={project.repoLink} target="_blank"><img src={githubIcon} style={{width: "30px", height: "30px"}} alt="" className="project-icon"></img></a>
                        </div>
                        <span className="project-info">{project.languages}</span>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Project;
