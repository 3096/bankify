<script>
  import '../app.postcss';
  import { Footer, FooterCopyright } from 'flowbite-svelte';
</script>

<div class="bg-gray-100 min-h-screen">
  <div class="flex flex-col h-screen w-screen">
    <div class="w-full grow">
      <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <slot />
      </main>
    </div>
    <div class="p-4">
      <Footer customClass="">
        <FooterCopyright href="/" by="Bankify" year={2023} copyrightMessage="" />
      </Footer>
    </div>
  </div>
</div>
