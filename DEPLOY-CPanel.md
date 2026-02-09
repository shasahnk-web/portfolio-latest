How to deploy this site to cPanel (static, unzip-ready)

1. Build the production site locally:

```bash
pnpm install
pnpm build
```

2. The build output will be in the `dist/` folder. The project is configured with a relative base so files work when unzipped into a subfolder.

3. Create a ZIP of `dist` contents (not the `dist` folder itself) and upload it to your cPanel `public_html` (or desired) folder. In other words, the root `index.html` from the build should be at the web root.

Example zip command (from project root):

```bash
cd dist
zip -r ../site.zip .
```

4. Upload `site.zip` in cPanel File Manager and extract it into the target folder.

5. Ensure the `.htaccess` file (provided in the project root) is present in the web root so client-side routing works. If you uploaded the built files only, also upload this `.htaccess` into the same folder as `index.html`.

Notes
- If you prefer to upload the full repository ZIP to cPanel, you must build first and copy the `dist` contents into the web root after extraction. cPanel hosts typically do not run `pnpm build` automatically.
- If your site will be served from a subdirectory, the `base: './'` configuration ensures assets use relative paths.
