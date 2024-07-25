import {writeFile} from 'fs/promises';
import { NextResponse } from 'next/server';
import {join} from 'path';
import { cwd } from 'process';
import prisma from '@/lib/prisma';

const POST = async(req) =>{

  const data = await req.formData();
  const file = data.get('image');
  
  // Save the image into schoolImages directory

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes);
  const uploadsDir = join(cwd(), 'public', 'schoolImages');
  const newFileName = `${Date.now()}_${file.name}`
  const path = join(uploadsDir, newFileName);

  await writeFile(path, buffer);


  // Save the other details into a cloud SQL table 
  try {
    const newSchool = await prisma.schools.create({
      data: {
        name: data.get('name'),
        address: data.get('address'),
        city: data.get('city'),
        state: data.get('state'),
        contact: data.get('contact'),
        email_id: data.get('email_id'), 
        image: newFileName        
      },
    });
    return NextResponse.json({"success":true})
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({"error":error})
  }
}

export {POST};