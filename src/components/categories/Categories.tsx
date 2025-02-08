const Categories = () => {
  const categories = ["Electronics", "Fashion", "Home", "Toys", "Sports"];

  return (
    <section className="container py-10">
      <h2 className="text-2xl font-bold mb-4">Browse By Category</h2>
      <div className="grid grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg text-center cursor-pointer hover:bg-gray-100"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
