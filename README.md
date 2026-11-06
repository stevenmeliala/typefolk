# Typefolk

A static Instagram font converter. No dependencies, build step, server, API keys, or environment variables are required.

## Deploy on Vercel

1. Push this project to your own Git repository and import it into Vercel.
2. Select the folder containing `vercel.json` as the Root Directory (`typefolk` if importing the whole workspace).
3. Use Framework Preset **Other**, leave the Build Command empty, and use **dist** as the Output Directory. The included `vercel.json` sets the build and output configuration.
4. Deploy.

Alternatively, with the Vercel CLI installed, run `vercel --prod` from this directory and follow the prompts for your account.

## Edit and preview

The website lives in `dist/index.html`, `dist/style.css`, `dist/fonts.js`, and `dist/app.js`. To preview locally, run `python3 -m http.server 4173 --directory dist`, then visit http://localhost:4173.

## Previous hosting

`.openai/hosting.json` records the previous ChatGPT Sites deployment. Vercel does not use it. Changing or deleting this local file does not take the existing hosted deployment offline. The connected Sites tools available during migration do not provide an unpublish or delete operation, so the previous deployment has not been taken offline. Manage its removal through the original hosting service.
