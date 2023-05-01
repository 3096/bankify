import type { Actions, PageServerLoad } from './$types';
import { validateSessionAndGetUserOrThrowRedirect } from '$lib/server/auth';
import prisma from '$lib/server/prisma';
import type { FormErrorData } from '$lib/components/forms/types';
import { createTransaction, TransactionErrorInsufficientFunds } from '$lib/server/transaction';
import { type ActionFailure, fail } from '@sveltejs/kit';
import { formSchema } from '../account-creation/form';
import type { AccountFormResult, EmailFormResult } from './form';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
  const user = await prisma.user.findMany();
  const trans = await prisma.transaction.findMany();

  // async function yolo(){
  //   return await prisma.transaction.findMany();
  // }

  return { user, trans };
};

export const actions = {
  queryByEmail: async ({ request, locals }) => {
    const userId = await validateSessionAndGetUserOrThrowRedirect(locals);
    //make sure that they are a manager?

    //Grab the email from the form
    const formData = await request.formData();
    const { email } = Object.fromEntries(formData.entries());

    const res = await prisma.user.findUnique({
      where: {
        email: email.toString()
      }
    });

    console.log(res);
    return res;
  },

  queryByAccount: async ({ request, locals }) => {
    console.log('account num, yayaya');

    return null;
  }
} satisfies Actions<EmailFormResult | AccountFormResult | ActionFailure<FormErrorData>>;

// export const actions = {
//   default: async ({ request, locals }) => {
//     const userId = await validateSessionAndGetUserOrThrowRedirect(locals);

//     const parseResult = formSchema.safeParse(
//       Object.fromEntries((await request.formData()).entries())
//     );
//     if (!parseResult.success) {
//       return fail<FormErrorData>(400, { errorMessages: ['Invalid form data'] });
//     }

//     const { senderAccountNumber, recipientAccountNumber, amount } = parseResult.data;

//     const senderAccount = await prisma.account.findUniqueOrThrow({
//       where: { accountNumber: senderAccountNumber }
//     });
//     if (senderAccount.userId !== userId) {
//       return fail<FormErrorData>(403, { errorMessages: ['Forbidden'] });
//     }

//     try {
//       await createTransaction(
//         senderAccountNumber,
//         recipientAccountNumber,
//         amount,
//         'TRANSFER',
//         'Transfer'
//       );
//     } catch (e) {
//       if (e instanceof TransactionErrorInsufficientFunds) {
//         return fail<FormErrorData>(400, { errorMessages: ['Insufficient funds'] });
//       }
//       console.error(e);
//       return fail<FormErrorData>(500, { errorMessages: ['Internal server error'] });
//     }
//   }
// } satisfies Actions<void | ActionFailure<FormErrorData>>;
