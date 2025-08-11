const buttonClassNames =
  "bg-purple-600 text-white px-4 py-1 rounded-lg hover:bg-purple-700 transition-colors";

const CvCard = ({ title, fileType, downloadUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 space-y-2">
      <h4 className="text-gray-900 dark:text-gray-100 font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{fileType}</p>
      <div className="flex gap-3">
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
