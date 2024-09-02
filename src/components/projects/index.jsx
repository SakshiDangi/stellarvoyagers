'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Stellar Voyagers",
        description: "Discover the wonders of space with Stellarvoyagers.",
        speed: 0.5
    },
    {
        title: "Welcome",
        description: "Join Stellarvoyagers and explore the universe with fellow space enthusiasts.",
        speed: 0.5
    },
    {
        title: "TeamMeet",
        description: " Meet the leaders who guide Stellarvoyagers to stellar experiences.",
        speed: 0.67
    },
    {
        title: "Join Crew",
        description: "Become a member and start your cosmic journey today—no experience needed.",
        speed: 0.67
    },
    {
        title: "Stellar Events",
        description: "Don't miss our exciting stargazing nights, guest speakers, and more.",
        speed: 0.8
    },
    {
        title: "Mission Control",
        description: "Engage in hands-on projects and events to deepen your space knowledge.",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}
