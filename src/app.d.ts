// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      auth: import('lucia-auth').AuthRequest;
    }
    // interface PageData {}
    // interface Platform {}
  }

  declare namespace Lucia {
    type Auth = import('$lib/server/auth').Auth;
    type UserAttributes = undefined;
  }
}

export {};
