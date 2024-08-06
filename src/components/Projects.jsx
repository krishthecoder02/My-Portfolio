import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">Project</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="rounded-2xl mb-6"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 mx-14">
              <h5>{project.title}</h5>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tenology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tenology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
