const buttonClassNames =
  "px-4 py-1 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors";

const ProjectCard = ({ image, title, description, onViewMore }) => {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full max-w-2xl">
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-24 h-24 object-cover rounded-md flex-shrink-0"
      />

      {/* Texto */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
          {description}
        </p>

        {/* Botón Ver más */}
        <div className="flex justify-end mt-3">
          <button
            onClick={onViewMore}
            className={buttonClassNames}
            aria-label={`Ver más sobre ${title}`}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
