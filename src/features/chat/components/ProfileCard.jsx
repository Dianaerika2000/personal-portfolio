const ProfileCard = ({ name, role, image, description }) => {
  return (
    <section className="p-4 text-center" aria-label={`Perfil de ${name}`}>
      <img
        src={image}
        alt={`Foto de ${name}`}
        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
        loading="lazy"
        onError={(e) => (e.target.src = "/default-profile.png")} // opcional fallback
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mt-1">{role}</p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </section>
  );
};

export default ProfileCard;
