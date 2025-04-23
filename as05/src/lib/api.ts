import { UserData, Project } from './types';

export function fetchUserData(): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData: UserData = {
        name: 'Max Mustermann',
        email: 'max.mustermann@example.com',
        role: 'admin',
        isActive: true,
        lastActive: new Date(),
        loginCount: 42
      };

      resolve(userData);
    }, 1500);
  });
}

export async function fetchProjects(): Promise<Project[]> {
  const baseUrl = typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.host}`
    : 'http://localhost:3000';

  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Website Redesign',
            description: 'Revamp the corporate website with modern design',
            createdAt: new Date(2023, 0, 15),
            status: 'active'
          },
          {
            id: 2,
            name: 'Mobile App Development',
            description: 'Create a companion mobile app for our service',
            createdAt: new Date(2023, 1, 10),
            status: 'completed'
          },
          {
            id: 3,
            name: 'Database Migration',
            description: 'Migrate from SQL to NoSQL database',
            createdAt: new Date(2023, 2, 5),
            status: 'archived'
          }
        ]);
      }, 1000);
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}
