const ProductSkeleton = () => {
  return (
    <div className="animate-pulse p-4 border border-gray-200 rounded-lg shadow-md w-64">
      <div className="bg-gray-300 h-40 w-full mb-4 rounded"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default ProductSkeleton;
