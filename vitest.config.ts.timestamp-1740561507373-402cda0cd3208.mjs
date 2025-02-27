// ../../../../vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///C:/Users/Jie%20Cai/Desktop/code/test-api/node_modules/vitest/dist/config.js";

// ../../../../vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///C:/Users/Jie%20Cai/Desktop/code/test-api/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Jie%20Cai/Desktop/code/test-api/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/Jie%20Cai/Desktop/code/test-api/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Jie%20Cai/Desktop/code/test-api/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      vuetify: "vuetify/lib",
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自定义 
        additionalData: `@use "@/styles/variables.scss" as *;`
      }
    }
  },
  base: "./"
});

// ../../../../vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///C:/Users/Jie%20Cai/Desktop/code/test-api/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vdml0ZXN0LmNvbmZpZy50cyIsICIuLi8uLi8uLi8uLi92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEppZSBDYWlcXFxcRGVza3RvcFxcXFxjb2RlXFxcXHRlc3QtYXBpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKaWUgQ2FpXFxcXERlc2t0b3BcXFxcY29kZVxcXFx0ZXN0LWFwaVxcXFx2aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9KaWUlMjBDYWkvRGVza3RvcC9jb2RlL3Rlc3QtYXBpL3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBtZXJnZUNvbmZpZywgZGVmaW5lQ29uZmlnLCBjb25maWdEZWZhdWx0cyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnXG5pbXBvcnQgdml0ZUNvbmZpZyBmcm9tICcuL3ZpdGUuY29uZmlnJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxuICB2aXRlQ29uZmlnLFxuICBkZWZpbmVDb25maWcoe1xuICAgIHRlc3Q6IHtcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgICAgZXhjbHVkZTogWy4uLmNvbmZpZ0RlZmF1bHRzLmV4Y2x1ZGUsICdlMmUvKionXSxcbiAgICAgIHJvb3Q6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi8nLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9KSxcbilcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSmllIENhaVxcXFxEZXNrdG9wXFxcXGNvZGVcXFxcdGVzdC1hcGlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEppZSBDYWlcXFxcRGVza3RvcFxcXFxjb2RlXFxcXHRlc3QtYXBpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9KaWUlMjBDYWkvRGVza3RvcC9jb2RlL3Rlc3QtYXBpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlRGV2VG9vbHMoKSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIHZ1ZXRpZnk6ICd2dWV0aWZ5L2xpYicsXHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDkgXHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCJAL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiIGFzICo7YFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBiYXNlOiAnLi8nLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNULFNBQVMsaUJBQUFBLHNCQUFxQjtBQUNwVixTQUFTLGFBQWEsZ0JBQUFDLGVBQWMsc0JBQXNCOzs7QUNEd1AsU0FBUyxlQUFlLE9BQUFDLFlBQVc7QUFFclYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSnVLLElBQU0sMkNBQTJDO0FBT2hQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxLQUFLLGNBQWMsSUFBSUMsS0FBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ2pCLE1BQU07QUFBQTtBQUFBLFFBRUosZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUVKO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUNSLENBQUM7OztBRDVCZ00sSUFBTUMsNENBQTJDO0FBS2xQLElBQU8sd0JBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQUMsY0FBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEdBQUcsZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUM3QyxNQUFNQyxlQUFjLElBQUksSUFBSSxNQUFNRix5Q0FBZSxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiZmlsZVVSTFRvUGF0aCIsICJkZWZpbmVDb25maWciLCAiVVJMIiwgIlVSTCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgImRlZmluZUNvbmZpZyIsICJmaWxlVVJMVG9QYXRoIl0KfQo=
