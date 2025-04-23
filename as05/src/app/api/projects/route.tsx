import { NextResponse } from 'next/server';
import { Project } from '@/lib/types';

export async function GET() {
  const projects: Project[] = [
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
  ];

  await new Promise(resolve => setTimeout(resolve, 1500));

  return NextResponse.json(projects);
}
