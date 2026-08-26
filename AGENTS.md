<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# nambiar-site — Agent Guide

This is a personal Next.js site. Use the repository's installed Next.js documentation because version 16 APIs and conventions may differ from model training data.

## Stack
- Next.js 16 App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- npm with committed `package-lock.json`
- Vercel Analytics

## Before editing
1. Check `git status` and preserve unrelated work.
2. Read `package.json`, the affected route/components and relevant material under `node_modules/next/dist/docs/`.
3. Prefer the existing design system and component patterns over new dependencies.
4. Never commit `.env*`, tokens, private analytics data or personal information not intended for the public site.

## Commands
- Development: `npm run dev`
- Lint: `npm run lint`
- Production build: `npm run build`
- Local production server: `npm run start`

There is currently no automated test script. Do not claim tests passed; use lint, build and targeted browser smoke checks.

## Change discipline
- Keep diffs small and accessible on mobile and desktop.
- Use semantic HTML, keyboard-accessible controls, meaningful alt text and sensible colour contrast.
- Avoid client components unless browser-only state or APIs require them.
- Do not add a dependency when platform or standard-library functionality is sufficient.
- Update the README when setup, deployment or architecture changes.

## Definition of done
For code changes:
1. `npm run lint` passes.
2. `npm run build` passes.
3. The affected route is exercised in a browser at relevant viewport sizes.
4. Console and network errors are checked.
5. The diff contains no secrets, generated noise or unrelated formatting changes.
6. Risk and rollback are stated for deployment-affecting changes.

## Deployment
The repository is compatible with Vercel, but do not infer the active production project or trigger a deployment without checking live configuration and receiving explicit approval. After an approved deployment, verify the production URL and the changed user path.
