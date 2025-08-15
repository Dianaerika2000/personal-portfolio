const buttonClassNames =
  "bg-purple-600 text-white px-4 py-1 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base text-center sm:text-left w-full sm:w-auto";

const CvCard = ({ title, fileType, downloadUrl }) => {
  return (
    <div className="p-2 sm:p-4 space-y-2 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{fileType}</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <a
          href={downloadUrl}
          download
          className={buttonClassNames}
          aria-label={`Descargar ${title}`}
        >
          Descargar
        </a>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassNames}
          aria-label={`Ver ${title} en línea`}
        >
          Ver en línea
        </a>
      </div>
    </div>
  );
};

export default CvCard;
