const ProfileCard = ({ name, role, image, description, experience }) => {
  return (
    <section
      className="p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto"
      aria-label={`Perfil de ${name}`}
    >
      <img
        src={image}
        alt={`Foto de ${name}`}
        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full mx-auto mb-3 object-cover"
        loading="lazy"
        onError={(e) => (e.target.src = "/profile/default-profile.png")}
      />

      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold 
                     text-gray-900 dark:text-gray-100 text-center">
        {name}
      </h3>

      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 text-center">
        {role}
      </p>

      <p className="text-sm sm:text-base md:text-base text-gray-600 dark:text-gray-400 mt-2 text-left lg:text-justify">
        {description}
      </p>

      {experience && (
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1 font-light text-left lg:text-justify">
          {experience}
        </p>
      )}
    </section>
  );
};

export default ProfileCard;
