export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
        <h1 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Admin Panel</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="/admin" className="block py-2 px-4 rounded hover:bg-gray-800">Dashboard</a>
            </li>
            <li>
              <a href="/admin/products" className="block py-2 px-4 rounded hover:bg-gray-800">Products</a>
            </li>
            <li>
              <a href="/admin/users" className="block py-2 px-4 rounded hover:bg-gray-800">Users</a>
            </li>
            <li>
              <a href="/admin/settings" className="block py-2 px-4 rounded hover:bg-gray-800">Settings</a>
            </li>
            <li className="pt-4 mt-4 border-t border-gray-700">
              <a href="/" className="block py-2 px-4 rounded hover:bg-gray-800">Back to Site</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 bg-gray-100 min-h-screen">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
