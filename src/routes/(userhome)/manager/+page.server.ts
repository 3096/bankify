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

    //Retrieve User data 
    const userRes = await prisma.user.findUnique({
      where: {
        email: email.toString()
      }
    });

    //Retrieve accounts owned by that user
    const accountRes = await prisma.account.findMany({
      where: {
        userId: userRes?.id
      }
    });

    return {userResult: userRes, accountResult: accountRes};
  },

  

  queryByAccount: async ({ request, locals }) => {
    // console.log('account num, yayaya');
    const userID = await validateSessionAndGetUserOrThrowRedirect(locals);

    const formData = await request.formData();
    const {accountNumber} = Object.fromEntries(formData.entries());

    console.log(typeof(parseInt(accountNumber.toString())));

    // Find account with exact account number
    const accountRes = await prisma.account.findUnique({
      where: {
        accountNumber: parseInt(accountNumber.toString())
      }
    });
  
    const userRes = await prisma.user.findUnique({
      where: {
        id: accountRes?.userId
      }
    });
    console.log(accountRes);
    console.log(userRes);
    
    return {userResult: userRes, accountResult: accountRes};
  }
} satisfies Actions<EmailFormResult | AccountFormResult | ActionFailure<FormErrorData>>;
