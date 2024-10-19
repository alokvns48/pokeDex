/* eslint-disable react/prop-types */
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const handlePrevious = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
    return (
      <div className="flex justify-center items-center space-x-4 my-4">
        <button 
          onClick={handlePrevious} 
          disabled={currentPage === 1} 
          className={`px-4 py-2 bg-gray-300 rounded ${currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-400"}`}
        >
          Previous
        </button>
  
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
  
        <button 
          onClick={handleNext} 
          disabled={currentPage === totalPages} 
          className={`px-4 py-2 bg-gray-300 rounded ${currentPage === totalPages ? "cursor-not-allowed" : "hover:bg-gray-400"}`}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  