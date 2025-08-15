const buttonClassNames =
  "px-4 py-1 text-sm rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors";

const ProjectCard = ({ id, image, title, description, onViewMore }) => {
  return (
    <div
      className="
        flex flex-col md:flex-row 
        items-center md:items-start 
        gap-4 
        rounded-lg shadow-sm 
        dark:shadow-[0_0_6px_1px_rgba(139,92,246,0.2)] 
        dark:border dark:border-purple-900/20 
        p-4 w-full max-w-2xl
      "
    >
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="
          w-full md:w-32 
          h-48 md:h-24 
          object-contain
        "
      />

      {/* Texto */}
      <div className="flex-1 text-center md:text-left flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 md:mt-0 text-left md:text-justify">
            {description}
          </p>
        </div>

        {/* Botón Ver más */}
        <div className="flex justify-end md:justify-end mt-3">
          <button
            onClick={() => onViewMore?.(id, title)}
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
