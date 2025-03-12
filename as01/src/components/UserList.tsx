'use client';

import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching users');
        setLoading(false);
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-center p-4">Loading users...</div>;
  if (error) return <div className="text-center p-4 text-danger">{error}</div>;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">User List from API</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg shadow-sm">
            <h4 className="font-bold">{user.name}</h4>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
