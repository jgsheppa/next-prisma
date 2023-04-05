// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const user = await prisma.user.findUnique({
    where: { email: 'jgsheppard92@gmail.com' },
  });

  if (!user) {
    res.status(404).json({ name: 'User not found' });
    return;
  }
  res.status(200).json(user);
}
