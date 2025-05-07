import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';

type Job = {
  id: number;
  title: string;
  description?: string;
  company?: string;
  createdAt: string;
};

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Dashboard() {
  const { data, error } = useSWR<Job[]>('/api/jobs', fetcher);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, company }),
    });
    if (res.ok) {
      setTitle('');
      setDescription('');
      setCompany('');
      mutate('/api/jobs');
    }
  };

  if (error) return <div>Failed to load jobs.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Job Listings Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Company:</label>
          <input value={company} onChange={e => setCompany(e.target.value)} />
        </div>
        <button type="submit">Add Job</button>
      </form>

      <ul>
        {data.map(job => (
          <li key={job.id}>
            <strong>{job.title}</strong> at {job.company || 'Unknown'}<br />
            {job.description}
          </li>
        ))}
      </ul>
    </div>
  );
}