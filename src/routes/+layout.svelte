<script>
  import '../app.postcss';
</script>

<div class="bg-gray-100 min-h-screen overflow-scroll">
  <div class="flex flex-col h-screen">
    <slot />
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © 2023 Bankify</p>
      </div>
    </footer>
  </div>
</div>
