import { defineConfig } from 'astro/config';
import analogjsAngular from "@analogjs/astro-angular";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [analogjsAngular(), react(), svelte(), vue()]
});