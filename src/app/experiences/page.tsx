import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";

const experiencesList = [
    {
        id: 1,
        imgURL: "/aroundent.png",
        title: "A Round Entertainment",
        description: "Software Engineering Intern",
        website: "https://www.aroundentgroup.com/",
    }
]

const projectsList = [
    {
        id: 1,
        imgURL: "/SummarAI.svg",
        title: "SummarAI",
        description: "Fullstack website that summarizes news articles from the web",
        gitURL: "https://github.com/kwcreech",
    },
    {
        id: 2,
        imgURL: "/NutriWise.png",
        title: "NutriWise",
        description: "Fullstack website that uses OpenAI to provide personalized diet guidance.",
        gitURL: "https://github.com/kwcreech/hacknc2023-NutriWise",
    }
]

export default function Experiences() {
    return (
        <div className="flex flex-col m-8 dark">
            <div>
                <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 text-4xl font-extrabold mb-5 leading-tight">Experiences</h1>
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {experiencesList.map((experience) =>
                        <ExperienceCard 
                            key={experience.id}
                            imgURL={experience.imgURL}
                            title={experience.title}
                            description={experience.description}
                            website={experience.website}
                        />
                        )
                    }
                </div>
            </div>
            <div>
                <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 text-4xl font-extrabold mb-5 leading-tight">Projects</h1>
                <div className="flex flex-wrap justify-center gap-8 mb-16">
                    {projectsList.map((project) =>
                        <ProjectCard 
                            key={project.id}
                            imgURL={project.imgURL}
                            title={project.title}
                            description={project.description}
                            gitURL={project.gitURL}
                        />
                        )
                    }
                </div>
            </div>
        </div>
    );
}