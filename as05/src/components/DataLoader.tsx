import { use } from 'react';
import { fetchUserData } from '@/lib/api';

export default function DataLoader() {
  const userData = use(fetchUserData());

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium">User Data Loaded Successfully</h3>
      <div className="bg-white p-4 rounded-md shadow">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Role:</strong> {userData.role}</p>
        <p><strong>Last Active:</strong> {userData.lastActive.toLocaleString()}</p>
      </div>
      <p className="text-sm text-gray-500">
        This data was loaded using the 'use' hook with React Suspense
      </p>
    </div>
  );
}
