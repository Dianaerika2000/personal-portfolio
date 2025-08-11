const ProjectDetailsCard = ({ botResponse, links }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 space-y-3">
      <p className="text-gray-900 dark:text-gray-100">{botResponse}</p>
      <div className="flex gap-3">
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-primary text-white rounded"
          >
            Ver demo
          </a>
        )}
        {links.repo && (
          <a
            href={links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
          >
            Repositorio
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
