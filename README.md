# Expo Router v3 shadcn-ui demo

This is a web-only guide for setting up [Tailwind CSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) in an [Expo Router](https://docs.expo.dev/router/introduction/) project.

## Setup Tailwind

Install dependencies:

```
yarn add tailwindcss postcss autoprefixer
```

Create a **tailwind.config.js** file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  // Not required but I recommend disabling hover effects on touch devices.
  future: {
    hoverOnlyWhenSupported: true,
  },
};
```

Add a **postcss.config.js** config file:

```js
module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
};
```

Create a global CSS file at **src/global.css**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the global CSS file in your root layout **src/app/\_layout.tsx**:

```tsx
import "../global.css";
```

## Setup Shadcn UI

Run the `shadcn-ui` init command to setup your project:

```
npx shadcn-ui@latest init
```

You will be asked a few questions to configure `components.json`:

```
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › src/global.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › ~/components
Configure the import alias for utils: › ~/lib/utils
Are you using React Server Components? › no
```

## Usage

Now you can install and add components to your project:

```
npx shadcn-ui@latest add button
```

The command above will add the Button component to your project. You can then import it like this:

```js
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

> Reminder: Shadcn UI does not work on native, so you'll need to ensure you don't load any Shadcn UI components on native. You can use the `Platform` module to do this. Learn more: [Platform-specific modules](https://docs.expo.dev/router/advanced/platform-specific-modules/).
