export default function ProjectCard({ project }) {
    return (
        <div className="container">
            <a href={project.slug}>
                <img src={project.image} alt={project.title} width={200} height={100} />
            </a>
        </div>
    );
};