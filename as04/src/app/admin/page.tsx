export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm text-gray-500 mt-2">Total products in database</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-500 mt-2">Registered users</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p className="text-3xl font-bold">24</p>
          <p className="text-sm text-gray-500 mt-2">Total orders</p>
        </div>
      </div>


    </div>
  );
}
