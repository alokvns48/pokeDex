const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-350px)] p-4">
      <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-bold mt-4">
        No Pokemon Found!
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-500 mt-2 text-center">
        Try adjusting your search or filters.
      </p>
    </div>
  );
};

export default NotFoundPage;
