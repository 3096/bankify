import type { PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      accounts: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });

  // hardcoded deals for now, lol
  const deals: { name: string; deal: string; description: string; logo: string }[] = [
    {
      name: 'Target',
      logo: 'targetdeal.png',
      deal: '10% Cashback',
      description:
        'Get 10% cash back when you shop at Target with your Bankify credit card. Offer valid through May 31, 2023.'
    },
    {
      name: 'Starbucks',
      logo: 'sbuxdeal.png',
      deal: '5% Cashback',
      description:
        'Get 5% cash back when you shop at Starbucks with your Bankify credit card. Offer valid through May 31, 2023.'
    },
    {
      name: 'Nike',
      logo: 'nikedeal.png',
      deal: '$10 off $75',
      description:
        'Get $10 off when you spend $75 or more at Nike with your Bankify credit card. Offer valid through May 31, 2023.'
    }
  ];
  return { user, deals };
};
