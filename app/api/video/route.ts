import {NextResponse} from 'next/server';
import {join} from 'path';
import {stat, readFile} from 'fs/promises';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({error: 'Missing video id'}, {status: 400});
  }

  const filePath = join(process.cwd(), 'public/assets/videos', `${id}`);

  try {
    const fileBuffer = await readFile(filePath);
    const fileStats = await stat(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': fileStats.size.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    return NextResponse.json({error: 'Video not found',errorData:err}, {status: 404});
  }
}
