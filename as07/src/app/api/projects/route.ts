import { NextResponse } from 'next/server';
import { projects } from '@/lib/utils/data';

export async function GET() {
  return NextResponse.json({ projects });
}
