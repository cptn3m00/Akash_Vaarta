import React from "react";
import IdeaGenie from '../assets/ideaGenie.png';
import projTomato from '../assets/projTomato.png';
import UrbanCart from '../assets/UrbanCart.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm w-full bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="#">
                <img className="w-full h-48 object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="mt-2 font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex flex-col sm:flex-row justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-xs sm:text-sm text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} target="_blank" rel="noopener noreferrer" className="mt-2 sm:mt-0 text-red-300 border border-gray-200 rounded-lg shadow p-2 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center">
            <div className="w-full overflow-x-auto px-4">
                <div className="flex flex-nowrap gap-7 justify-center items-start">
                    {project.map((item, index) => (
                        <ProjectCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            git={item.git}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'IdeaGenie',
        description: 'Developed a sophisticated AI-driven Content Generator that provides users with highly accurate, real-time content generation. Leveraged React.js for a dynamic and responsive frontend, and Next.js for a robust and scalable backend. Implemented comprehensive security measures, including advanced tools and APIs, to ensure real-time threat detection and protection.',
        image: IdeaGenie,
        git: 'https://github.com/cptn3m00/IdeaGenie-AI',
        technologies: ['React.js', 'Next.js', 'Tailwind.css', 'Clerk', 'NeonDB - DrizzleORM', 'Docker']
    },
    {
        title: 'Tomato',
        description: "Developed a food delivery model with a user-friendly interface, enhancing UX. Utilized Tailwind CSS to boost code efficiency by 42%. Integrated Node.js and Express.js for backend functionalities, including authentication, product management, and order processing. Implemented a secure payment gateway, improving platform reliability and user trust.",
        image: projTomato,
        git: 'https://github.com/cptn3m00/Tomato_FoodDel',
        technologies: ['MongoDb', 'ReactJS', 'Express.js', 'NodeJS', 'Tailwind.css', 'API-Gateways', 'Stripe Payments']
    },
    {
        title: 'UrbanCart',
        description: 'Developed an e-commerce platform using React.js for product browsing, cart management, and secure purchases. Created an admin panel for real-time product management. Backend handled authentication and cart functions, deployed on Render for scalability with JWT and MongoDB, ensuring a robust and scalable solution.',
        image: UrbanCart,
        git: "https://github.com/cptn3m00/UrbanCart",
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
    }
];

export default Projects;
