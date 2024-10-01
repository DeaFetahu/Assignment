const Header = () => {
  return (
    <header className="bg-gray-900 p-6 shadow-lg fixed top-0 left-0 right-0 z-50 h-24 flex items-center justify-between   ">
      <h1 className="text-3xl tracking-wide font-bold text-white">My First Assignment</h1>
      <div className="space-x-2">
        <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Edit</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Publish</button>
      </div>
    </header>
  );
};

export default Header;
