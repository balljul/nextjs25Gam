import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Job } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job | Job[] | { error: string }>
) {
  if (req.method === 'GET') {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return res.status(200).json(jobs);
  }

  if (req.method === 'POST') {
    const { title, description, company } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const job = await prisma.job.create({
      data: { title, description, company },
    });
    return res.status(201).json(job);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}