# vite-plugin-private-fields
Vite plugin that strips private fields and methods from the build. While keeping the target esnext.

## Basic

```ts
import { defineConfig } from "vite";
import vitePluginPrivateFields from "vite-plugin-private-fields";

export default defineConfig({
  plugins: [
    vitePluginPrivateFields()
  ]
});
```