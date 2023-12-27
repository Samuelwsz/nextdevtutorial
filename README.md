This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Dependencies

### themes

https://github.com/pacocoursey/next-themes

```
npm install next-themes
```

https://ui.shadcn.com/docs/installation/next

```
npx shadcn-ui@latest init
```

### faq

https://ui.shadcn.com/docs/components/accordion

```
npx shadcn-ui@latest add accordion
```

### button

https://ui.shadcn.com/docs/components/button

```
npx shadcn-ui@latest add button
```

### dropdown

https://ui.shadcn.com/docs/components/dropdown-menu

```
npx shadcn-ui@latest add dropdown-menu
```

### icons

https://lucide.dev/guide/packages/lucide-react

```
npm install lucide-react
```

### @tailwindcss/typography

https://tailwindcss.com/docs/typography-plugin

```
npm install -D @tailwindcss/typography
```

### cta sections

https://tailwindui.com/components/marketing/sections/cta-sections

### tailwind.config.js

```
const { fontFamily } = require("tailwindcss/defaultTheme")
```

```
fontFamily: {
  sans: ["var(--font-sans)", ...fontFamily.sans],
  heading: ["var(--font-heading)", ...fontFamily.sans],
},
```

```
plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
```

### separator

https://ui.shadcn.com/docs/components/separator

```
npx shadcn-ui@latest add separator
```

### react hook mask

https://www.npmjs.com/package/@react-input/mask

```
npm install react-input-mask --save
```

### react hook form

https://react-hook-form.com/get-started

```
npm install react-hook-form
```

### zod

https://zod.dev/?id=from-npm-nodebun

```
npm install zod
```

https://www.npmjs.com/package/@hookform/resolvers

```
npm install @hookform/resolvers
```

### react dom confetti

https://www.npmjs.com/package/react-dom-confetti

```
npm i react-dom-confetti
```

### dialog

https://ui.shadcn.com/docs/components/dialog

```
npx shadcn-ui@latest add dialog
```

### form

https://ui.shadcn.com/docs/components/form

```
npx shadcn-ui@latest add form
```

### input

https://ui.shadcn.com/docs/components/input

```
npx shadcn-ui@latest add input
```

tailwind config.ts padrao

import type { Config } from 'tailwindcss'

const config: Config = {
content: [
'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
],
theme: {
extend: {
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'gradient-conic':
'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
},
},
},
plugins: [],
}
export default config

https://www.youtube.com/watch?v=hJTPDo8JlMc&list=WL&index=32&t=3839s&ab_channel=LucasNhimi
