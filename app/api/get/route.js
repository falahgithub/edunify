import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const schools = await prisma.schools.findMany({
      select: {
        id:true,
      address: true,
      name: true,
      city: true,
      image: true,
    }});
    return NextResponse.json(schools, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
