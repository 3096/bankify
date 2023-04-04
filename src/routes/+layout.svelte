<script>
  import '../app.postcss';
</script>

<div class="bg-gray-100 min-h-screen">
  <div class="flex flex-col h-screen">
    <div class="w-full grow">
      <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <slot />
      </main>
    </div>
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © 2023 Bankify</p>
      </div>
    </footer>
  </div>
</div>
