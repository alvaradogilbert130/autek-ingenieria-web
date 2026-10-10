# Resumen del Proyecto para Edición

## 1. Estructura de Directorios
```text
📁 ./
  📄 .env.example
  📄 .firebaserc
  📄 .gitignore
  📄 .npmrc
  📄 README.md
  📄 components.json
  📄 firebase.json
  📄 next-env.d.ts
  📄 next.config.ts
  📄 package.json
  📄 postcss.config.mjs
  📄 studio.json
  📄 tailwind.config.ts
  📄 tsconfig.json
  📄 tsconfig.tsbuildinfo
  📁 docs/
    📄 blueprint.md
  📁 scratch/
    📄 payload_app.json
    📄 payload_components.json
    📄 payload_config.json
  📁 src/
    📁 ai/
      📄 ai-instance.ts
      📄 dev.ts
    📁 app/
      📄 globals.css
      📄 layout.tsx
      📄 page.tsx
      📄 robots.ts
      📁 actions/
        📄 send-contact-email.ts
      📁 equipos-industriales/
        📄 page.tsx
        📁 bandas-transportadoras/
          📄 page.tsx
        📁 calderas/
          📄 page.tsx
        📁 elevador-de-carne/
          📄 page.tsx
        📁 hiladora-de-queso/
          📄 page.tsx
        📁 mezclador-de-carne/
          📄 page.tsx
        📁 tanques-de-leche/
          📄 page.tsx
      📁 sitemap.xml/
        📄 route.ts
    📁 components/
      📄 providers.tsx
      📄 whatsapp-button.tsx
      📁 layout/
        📄 footer.tsx
        📄 header.tsx
      📁 sections/
        📄 about-section.tsx
        📄 contact-section.tsx
        📄 hero-section.tsx
        📄 portfolio-section.tsx
        📄 services-section.tsx
        📄 testimonials-section.tsx
      📁 ui/
        📄 accordion.tsx
        📄 alert-dialog.tsx
        📄 alert.tsx
        📄 avatar.tsx
        📄 badge.tsx
        📄 button.tsx
        📄 calendar.tsx
        📄 card.tsx
        📄 carousel.tsx
        📄 chart.tsx
        📄 checkbox.tsx
        📄 dialog.tsx
        📄 dropdown-menu.tsx
        📄 form.tsx
        📄 input.tsx
        📄 label.tsx
        📄 menubar.tsx
        📄 popover.tsx
        📄 progress.tsx
        📄 radio-group.tsx
        📄 scroll-area.tsx
        📄 select.tsx
        📄 separator.tsx
        📄 sheet.tsx
        📄 sidebar.tsx
        📄 skeleton.tsx
        📄 slider.tsx
        📄 switch.tsx
        📄 table.tsx
        📄 tabs.tsx
        📄 textarea.tsx
        📄 toast.tsx
        📄 toaster.tsx
        📄 tooltip.tsx
    📁 hooks/
      📄 use-mobile.tsx
      📄 use-toast.ts
    📁 lib/
      📄 utils.ts
```

## 2. Contenido de Archivos Clave

### `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### `firebase.json`
```json
{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  },
  "apphosting": {
    "backendId": "studio",
    "rootDir": "./"
  }
}

```

### `next-env.d.ts`
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

### `next.config.ts`
```ts

import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      { // Add new pattern for Firebase Storage
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

```

### `package.json`
```json
{
  "name": "autek-ingenieria-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/googleai": "^1.6.2",
    "@genkit-ai/next": "^1.6.2",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@tanstack-query-firebase/react": "^1.0.5",
    "@tanstack/react-query": "^5.66.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-autoplay": "^8.1.0",
    "embla-carousel-react": "^8.1.9",
    "firebase": "^11.3.0",
    "genkit": "^1.6.2",
    "lucide-react": "^0.475.0",
    "next": "15.2.8",
    "nodemailer": "^6.9.14",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/nodemailer": "^6.4.15",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "genkit-cli": "^1.6.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

### `studio.json`
```json
{"firebaseProjectId":"ga-solutions-web"}
```

### `tailwind.config.ts`
```ts
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

### `scratch\payload_components.json`
```json
[
  {
    "path": "src\\components\\ui\\alert-dialog.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as AlertDialogPrimitive from \"@radix-ui/react-alert-dialog\"\n\nimport { cn } from \"@/lib/utils\"\nimport { buttonVariants } from \"@/components/ui/button\"\n\nconst AlertDialog = AlertDialogPrimitive.Root\n\nconst AlertDialogTrigger = AlertDialogPrimitive.Trigger\n\nconst AlertDialogPortal = AlertDialogPrimitive.Portal\n\nconst AlertDialogOverlay = React.forwardRef<\n  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,\n  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>\n>(({ className, ...props }, ref) => (\n  <AlertDialogPrimitive.Overlay\n    className={cn(\n      \"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0\",\n      className\n    )}\n    {...props}\n    ref={ref}\n  />\n))\nAlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName\n\nconst AlertDialogContent = React.forwardRef<\n  React.ElementRef<typeof AlertDialogPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>\n>(({ className, ...props }, ref) => (\n  <AlertDialogPortal>\n    <AlertDialogOverlay />\n    <AlertDialogPrimitive.Content\n      ref={ref}\n      className={cn(\n        \"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg\",\n        className\n      )}\n      {...props}\n    />\n  </AlertDialogPortal>\n))\nAlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName\n\nconst AlertDialogHeader = ({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLDivElement>) => (\n  <div\n    className={cn(\n      \"flex flex-col space-y-2 text-center sm:text-left\",\n      className\n    )}\n    {...props}\n  />\n)\nAlertDialogHeader.displayName = \"AlertDialogHeader\"\n\nconst AlertDialogFooter = ({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLDivElement>) => (\n  <div\n    className={cn(\n      \"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2\",\n      className\n    )}\n    {...props}\n  />\n)\nAlertDialogFooter.displayName = \"AlertDialogFooter\"\n\nconst AlertDialogTitle = React.forwardRef<\n  React.ElementRef<typeof AlertDialogPrimitive.Title>,\n  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>\n>(({ className, ...props }, ref) => (\n  <AlertDialogPrimitive.Title\n    ref={ref}\n    className={cn(\"text-lg font-semibold\", className)}\n    {...props}\n  />\n))\nAlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName\n\nconst AlertDialogDescription = React.forwardRef<\n  React.ElementRef<typeof AlertDialogPrimitive.Description>,\n  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>\n>(({ className, ...props }, ref) => (\n  <AlertDialogPrimitive.Description\n    ref={ref}\n    className={cn(\"text-sm text-muted-foreground\", className)}\n    {...props}\n  />\n))\nAlertDialogDescription.displayName =\n  AlertDialogPrimitive.Description.displayName\n\nconst AlertDialogAction = React.forwardRef<\n  React.ElementRef<typeof AlertDialogPrimitive.Action>,\n  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>\n>(({ className, ...props }, ref) => (\n  <AlertDialogPrimitive.Action\n    ref={ref}\n    className={cn(buttonVariants(), className)}\n    {...props}\n  />\n))\nAlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName\n\nconst AlertDialogCancel = React.forwardRef<\n  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,\n  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>\n>(({ className, ...props }, ref) => (\n  <AlertDialogPrimitive.Cancel\n    ref={ref}\n    className={cn(\n      buttonVariants({ variant: \"outline\" }),\n      \"mt-2 sm:mt-0\",\n      className\n    )}\n    {...props}\n  />\n))\nAlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName\n\nexport {\n  AlertDialog,\n  AlertDialogPortal,\n  AlertDialogOverlay,\n  AlertDialogTrigger,\n  AlertDialogContent,\n  AlertDialogHeader,\n  AlertDialogFooter,\n  AlertDialogTitle,\n  AlertDialogDescription,\n  AlertDialogAction,\n  AlertDialogCancel,\n}\n"
  },
  {
    "path": "src\\components\\ui\\alert.tsx",
    "content": "import * as React from \"react\"\nimport { cva, type VariantProps } from \"class-variance-authority\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst alertVariants = cva(\n  \"relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground\",\n  {\n    variants: {\n      variant: {\n        default: \"bg-background text-foreground\",\n        destructive:\n          \"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n    },\n  }\n)\n\nconst Alert = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>\n>(({ className, variant, ...props }, ref) => (\n  <div\n    ref={ref}\n    role=\"alert\"\n    className={cn(alertVariants({ variant }), className)}\n    {...props}\n  />\n))\nAlert.displayName = \"Alert\"\n\nconst AlertTitle = React.forwardRef<\n  HTMLParagraphElement,\n  React.HTMLAttributes<HTMLHeadingElement>\n>(({ className, ...props }, ref) => (\n  <h5\n    ref={ref}\n    className={cn(\"mb-1 font-medium leading-none tracking-tight\", className)}\n    {...props}\n  />\n))\nAlertTitle.displayName = \"AlertTitle\"\n\nconst AlertDescription = React.forwardRef<\n  HTMLParagraphElement,\n  React.HTMLAttributes<HTMLParagraphElement>\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    className={cn(\"text-sm [&_p]:leading-relaxed\", className)}\n    {...props}\n  />\n))\nAlertDescription.displayName = \"AlertDescription\"\n\nexport { Alert, AlertTitle, AlertDescription }\n"
  },
  {
    "path": "src\\components\\ui\\avatar.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as AvatarPrimitive from \"@radix-ui/react-avatar\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Avatar = React.forwardRef<\n  React.ElementRef<typeof AvatarPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>\n>(({ className, ...props }, ref) => (\n  <AvatarPrimitive.Root\n    ref={ref}\n    className={cn(\n      \"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full\",\n      className\n    )}\n    {...props}\n  />\n))\nAvatar.displayName = AvatarPrimitive.Root.displayName\n\nconst AvatarImage = React.forwardRef<\n  React.ElementRef<typeof AvatarPrimitive.Image>,\n  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>\n>(({ className, ...props }, ref) => (\n  <AvatarPrimitive.Image\n    ref={ref}\n    className={cn(\"aspect-square h-full w-full\", className)}\n    {...props}\n  />\n))\nAvatarImage.displayName = AvatarPrimitive.Image.displayName\n\nconst AvatarFallback = React.forwardRef<\n  React.ElementRef<typeof AvatarPrimitive.Fallback>,\n  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>\n>(({ className, ...props }, ref) => (\n  <AvatarPrimitive.Fallback\n    ref={ref}\n    className={cn(\n      \"flex h-full w-full items-center justify-center rounded-full bg-muted\",\n      className\n    )}\n    {...props}\n  />\n))\nAvatarFallback.displayName = AvatarPrimitive.Fallback.displayName\n\nexport { Avatar, AvatarImage, AvatarFallback }\n"
  },
  {
    "path": "src\\components\\ui\\badge.tsx",
    "content": "import * as React from \"react\"\nimport { cva, type VariantProps } from \"class-variance-authority\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst badgeVariants = cva(\n  \"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2\",\n  {\n    variants: {\n      variant: {\n        default:\n          \"border-transparent bg-primary text-primary-foreground hover:bg-primary/80\",\n        secondary:\n          \"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80\",\n        destructive:\n          \"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80\",\n        outline: \"text-foreground\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n    },\n  }\n)\n\nexport interface BadgeProps\n  extends React.HTMLAttributes<HTMLDivElement>,\n    VariantProps<typeof badgeVariants> {}\n\nfunction Badge({ className, variant, ...props }: BadgeProps) {\n  return (\n    <div className={cn(badgeVariants({ variant }), className)} {...props} />\n  )\n}\n\nexport { Badge, badgeVariants }\n"
  },
  {
    "path": "src\\components\\ui\\button.tsx",
    "content": "import * as React from \"react\"\nimport { Slot } from \"@radix-ui/react-slot\"\nimport { cva, type VariantProps } from \"class-variance-authority\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst buttonVariants = cva(\n  \"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0\",\n  {\n    variants: {\n      variant: {\n        default: \"bg-primary text-primary-foreground hover:bg-primary/90\",\n        destructive:\n          \"bg-destructive text-destructive-foreground hover:bg-destructive/90\",\n        outline:\n          \"border border-input bg-background hover:bg-accent hover:text-accent-foreground\",\n        secondary:\n          \"bg-secondary text-secondary-foreground hover:bg-secondary/80\",\n        ghost: \"hover:bg-accent hover:text-accent-foreground\",\n        link: \"text-primary underline-offset-4 hover:underline\",\n      },\n      size: {\n        default: \"h-10 px-4 py-2\",\n        sm: \"h-9 rounded-md px-3\",\n        lg: \"h-11 rounded-md px-8\",\n        icon: \"h-10 w-10\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n      size: \"default\",\n    },\n  }\n)\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement>,\n    VariantProps<typeof buttonVariants> {\n  asChild?: boolean\n}\n\nconst Button = React.forwardRef<HTMLButtonElement, ButtonProps>(\n  ({ className, variant, size, asChild = false, ...props }, ref) => {\n    const Comp = asChild ? Slot : \"button\"\n    return (\n      <Comp\n        className={cn(buttonVariants({ variant, size, className }))}\n        ref={ref}\n        {...props}\n      />\n    )\n  }\n)\nButton.displayName = \"Button\"\n\nexport { Button, buttonVariants }\n"
  },
  {
    "path": "src\\components\\ui\\calendar.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport { ChevronLeft, ChevronRight } from \"lucide-react\"\nimport { DayPicker } from \"react-day-picker\"\n\nimport { cn } from \"@/lib/utils\"\nimport { buttonVariants } from \"@/components/ui/button\"\n\nexport type CalendarProps = React.ComponentProps<typeof DayPicker>\n\nfunction Calendar({\n  className,\n  classNames,\n  showOutsideDays = true,\n  ...props\n}: CalendarProps) {\n  return (\n    <DayPicker\n      showOutsideDays={showOutsideDays}\n      className={cn(\"p-3\", className)}\n      classNames={{\n        months: \"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0\",\n        month: \"space-y-4\",\n        caption: \"flex justify-center pt-1 relative items-center\",\n        caption_label: \"text-sm font-medium\",\n        nav: \"space-x-1 flex items-center\",\n        nav_button: cn(\n          buttonVariants({ variant: \"outline\" }),\n          \"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100\"\n        ),\n        nav_button_previous: \"absolute left-1\",\n        nav_button_next: \"absolute right-1\",\n        table: \"w-full border-collapse space-y-1\",\n        head_row: \"flex\",\n        head_cell:\n          \"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]\",\n        row: \"flex w-full mt-2\",\n        cell: \"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20\",\n        day: cn(\n          buttonVariants({ variant: \"ghost\" }),\n          \"h-9 w-9 p-0 font-normal aria-selected:opacity-100\"\n        ),\n        day_range_end: \"day-range-end\",\n        day_selected:\n          \"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground\",\n        day_today: \"bg-accent text-accent-foreground\",\n        day_outside:\n          \"day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground\",\n        day_disabled: \"text-muted-foreground opacity-50\",\n        day_range_middle:\n          \"aria-selected:bg-accent aria-selected:text-accent-foreground\",\n        day_hidden: \"invisible\",\n        ...classNames,\n      }}\n      components={{\n        IconLeft: ({ className, ...props }) => (\n          <ChevronLeft className={cn(\"h-4 w-4\", className)} {...props} />\n        ),\n        IconRight: ({ className, ...props }) => (\n          <ChevronRight className={cn(\"h-4 w-4\", className)} {...props} />\n        ),\n      }}\n      {...props}\n    />\n  )\n}\nCalendar.displayName = \"Calendar\"\n\nexport { Calendar }\n"
  },
  {
    "path": "src\\components\\ui\\card.tsx",
    "content": "import * as React from \"react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Card = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    className={cn(\n      \"rounded-lg border bg-card text-card-foreground shadow-sm\",\n      className\n    )}\n    {...props}\n  />\n))\nCard.displayName = \"Card\"\n\nconst CardHeader = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    className={cn(\"flex flex-col space-y-1.5 p-6\", className)}\n    {...props}\n  />\n))\nCardHeader.displayName = \"CardHeader\"\n\nconst CardTitle = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    className={cn(\n      \"text-2xl font-semibold leading-none tracking-tight\",\n      className\n    )}\n    {...props}\n  />\n))\nCardTitle.displayName = \"CardTitle\"\n\nconst CardDescription = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    className={cn(\"text-sm text-muted-foreground\", className)}\n    {...props}\n  />\n))\nCardDescription.displayName = \"CardDescription\"\n\nconst CardContent = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => (\n  <div ref={ref} className={cn(\"p-6 pt-0\", className)} {...props} />\n))\nCardContent.displayName = \"CardContent\"\n\nconst CardFooter = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    className={cn(\"flex items-center p-6 pt-0\", className)}\n    {...props}\n  />\n))\nCardFooter.displayName = \"CardFooter\"\n\nexport { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }\n"
  },
  {
    "path": "src\\components\\ui\\carousel.tsx",
    "content": "\n\"use client\"\n\nimport * as React from \"react\"\nimport useEmblaCarousel, {\n  type UseEmblaCarouselType,\n} from \"embla-carousel-react\"\nimport { ArrowLeft, ArrowRight } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\nimport { Button } from \"@/components/ui/button\"\n\ntype CarouselApi = UseEmblaCarouselType[1]\ntype UseCarouselParameters = Parameters<typeof useEmblaCarousel>\ntype CarouselOptions = UseCarouselParameters[0]\ntype CarouselPlugin = UseCarouselParameters[1]\n\ntype CarouselProps = {\n  opts?: CarouselOptions\n  plugins?: CarouselPlugin\n  orientation?: \"horizontal\" | \"vertical\"\n  setApi?: (api: CarouselApi) => void\n}\n\ntype CarouselContextProps = {\n  carouselRef: ReturnType<typeof useEmblaCarousel>[0]\n  api: ReturnType<typeof useEmblaCarousel>[1]\n  scrollPrev: () => void\n  scrollNext: () => void\n  canScrollPrev: boolean\n  canScrollNext: boolean\n} & CarouselProps\n\nconst CarouselContext = React.createContext<CarouselContextProps | null>(null)\n\nfunction useCarousel() {\n  const context = React.useContext(CarouselContext)\n\n  if (!context) {\n    throw new Error(\"useCarousel must be used within a <Carousel />\")\n  }\n\n  return context\n}\n\nconst Carousel = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement> & CarouselProps\n>(\n  (\n    {\n      orientation = \"horizontal\",\n      opts,\n      setApi,\n      plugins,\n      className,\n      children,\n      ...props\n    },\n    ref\n  ) => {\n    const [carouselRef, api] = useEmblaCarousel(\n      {\n        ...opts,\n        axis: orientation === \"horizontal\" ? \"x\" : \"y\",\n      },\n      plugins\n    )\n    const [canScrollPrev, setCanScrollPrev] = React.useState(false)\n    const [canScrollNext, setCanScrollNext] = React.useState(false)\n\n    const onSelect = React.useCallback((api: CarouselApi) => {\n      if (!api) {\n        return\n      }\n\n      setCanScrollPrev(api.canScrollPrev())\n      setCanScrollNext(api.canScrollNext())\n    }, [])\n\n    const scrollPrev = React.useCallback(() => {\n      api?.scrollPrev()\n    }, [api])\n\n    const scrollNext = React.useCallback(() => {\n      api?.scrollNext()\n    }, [api])\n\n    const handleKeyDown = React.useCallback(\n      (event: React.KeyboardEvent<HTMLDivElement>) => {\n        if (event.key === \"ArrowLeft\") {\n          event.preventDefault()\n          scrollPrev()\n        } else if (event.key === \"ArrowRight\") {\n          event.preventDefault()\n          scrollNext()\n        }\n      },\n      [scrollPrev, scrollNext]\n    )\n\n    React.useEffect(() => {\n      if (!api || !setApi) {\n        return\n      }\n\n      setApi(api)\n    }, [api, setApi])\n\n    React.useEffect(() => {\n      if (!api) {\n        return\n      }\n\n      onSelect(api)\n      api.on(\"reInit\", onSelect)\n      api.on(\"select\", onSelect)\n\n      return () => {\n        api?.off(\"select\", onSelect)\n      }\n    }, [api, onSelect])\n\n    return (\n      <CarouselContext.Provider\n        value={{\n          carouselRef,\n          api: api,\n          opts,\n          orientation:\n            orientation || (opts?.axis === \"y\" ? \"vertical\" : \"horizontal\"),\n          scrollPrev,\n          scrollNext,\n          canScrollPrev,\n          canScrollNext,\n        }}\n      >\n        <div\n          ref={ref}\n          onKeyDownCapture={handleKeyDown}\n          className={cn(\"relative\", className)}\n          role=\"region\"\n          aria-roledescription=\"carousel\"\n          {...props}\n        >\n          {children}\n        </div>\n      </CarouselContext.Provider>\n    )\n  }\n)\nCarousel.displayName = \"Carousel\"\n\nconst CarouselContent = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => {\n  const { carouselRef, orientation } = useCarousel()\n\n  return (\n    <div ref={carouselRef} className=\"overflow-hidden\">\n      <div\n        ref={ref}\n        className={cn(\n          \"flex\",\n          orientation === \"horizontal\" ? \"-ml-4\" : \"-mt-4 flex-col\",\n          className\n        )}\n        {...props}\n      />\n    </div>\n  )\n})\nCarouselContent.displayName = \"CarouselContent\"\n\nconst CarouselItem = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => {\n  const { orientation } = useCarousel()\n\n  return (\n    <div\n      ref={ref}\n      role=\"group\"\n      aria-roledescription=\"slide\"\n      className={cn(\n        \"min-w-0 shrink-0 grow-0 basis-full\",\n        orientation === \"horizontal\" ? \"pl-4\" : \"pt-4\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nCarouselItem.displayName = \"CarouselItem\"\n\nconst CarouselPrevious = React.forwardRef<\n  HTMLButtonElement,\n  React.ComponentProps<typeof Button>\n>(({ className, variant = \"outline\", size = \"icon\", ...props }, ref) => {\n  const { orientation, scrollPrev, canScrollPrev } = useCarousel()\n\n  return (\n    <Button\n      ref={ref}\n      variant={variant}\n      size={size}\n      className={cn(\n        \"absolute  h-8 w-8 rounded-full\",\n        orientation === \"horizontal\"\n          ? \"-left-12 top-1/2 -translate-y-1/2\"\n          : \"-top-12 left-1/2 -translate-x-1/2 rotate-90\",\n        className\n      )}\n      disabled={!canScrollPrev}\n      onClick={scrollPrev}\n      {...props}\n    >\n      <ArrowLeft className=\"h-4 w-4\" />\n      <span className=\"sr-only\">Previous slide</span>\n    </Button>\n  )\n})\nCarouselPrevious.displayName = \"CarouselPrevious\"\n\nconst CarouselNext = React.forwardRef<\n  HTMLButtonElement,\n  React.ComponentProps<typeof Button>\n>(({ className, variant = \"outline\", size = \"icon\", ...props }, ref) => {\n  const { orientation, scrollNext, canScrollNext } = useCarousel()\n\n  return (\n    <Button\n      ref={ref}\n      variant={variant}\n      size={size}\n      className={cn(\n        \"absolute h-8 w-8 rounded-full\",\n        orientation === \"horizontal\"\n          ? \"-right-12 top-1/2 -translate-y-1/2\"\n          : \"-bottom-12 left-1/2 -translate-x-1/2 rotate-90\",\n        className\n      )}\n      disabled={!canScrollNext}\n      onClick={scrollNext}\n      {...props}\n    >\n      <ArrowRight className=\"h-4 w-4\" />\n      <span className=\"sr-only\">Next slide</span>\n    </Button>\n  )\n})\nCarouselNext.displayName = \"CarouselNext\"\n\nexport {\n  type CarouselApi,\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselPrevious,\n  CarouselNext,\n}\n"
  },
  {
    "path": "src\\components\\ui\\chart.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as RechartsPrimitive from \"recharts\"\n\nimport { cn } from \"@/lib/utils\"\n\n// Format: { THEME_NAME: CSS_SELECTOR }\nconst THEMES = { light: \"\", dark: \".dark\" } as const\n\nexport type ChartConfig = {\n  [k in string]: {\n    label?: React.ReactNode\n    icon?: React.ComponentType\n  } & (\n    | { color?: string; theme?: never }\n    | { color?: never; theme: Record<keyof typeof THEMES, string> }\n  )\n}\n\ntype ChartContextProps = {\n  config: ChartConfig\n}\n\nconst ChartContext = React.createContext<ChartContextProps | null>(null)\n\nfunction useChart() {\n  const context = React.useContext(ChartContext)\n\n  if (!context) {\n    throw new Error(\"useChart must be used within a <ChartContainer />\")\n  }\n\n  return context\n}\n\nconst ChartContainer = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\"> & {\n    config: ChartConfig\n    children: React.ComponentProps<\n      typeof RechartsPrimitive.ResponsiveContainer\n    >[\"children\"]\n  }\n>(({ id, className, children, config, ...props }, ref) => {\n  const uniqueId = React.useId()\n  const chartId = `chart-${id || uniqueId.replace(/:/g, \"\")}`\n\n  return (\n    <ChartContext.Provider value={{ config }}>\n      <div\n        data-chart={chartId}\n        ref={ref}\n        className={cn(\n          \"flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none\",\n          className\n        )}\n        {...props}\n      >\n        <ChartStyle id={chartId} config={config} />\n        <RechartsPrimitive.ResponsiveContainer>\n          {children}\n        </RechartsPrimitive.ResponsiveContainer>\n      </div>\n    </ChartContext.Provider>\n  )\n})\nChartContainer.displayName = \"Chart\"\n\nconst ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {\n  const colorConfig = Object.entries(config).filter(\n    ([, config]) => config.theme || config.color\n  )\n\n  if (!colorConfig.length) {\n    return null\n  }\n\n  return (\n    <style\n      dangerouslySetInnerHTML={{\n        __html: Object.entries(THEMES)\n          .map(\n            ([theme, prefix]) => `\n${prefix} [data-chart=${id}] {\n${colorConfig\n  .map(([key, itemConfig]) => {\n    const color =\n      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||\n      itemConfig.color\n    return color ? `  --color-${key}: ${color};` : null\n  })\n  .join(\"\\n\")}\n}\n`\n          )\n          .join(\"\\n\"),\n      }}\n    />\n  )\n}\n\nconst ChartTooltip = RechartsPrimitive.Tooltip\n\nconst ChartTooltipContent = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &\n    React.ComponentProps<\"div\"> & {\n      hideLabel?: boolean\n      hideIndicator?: boolean\n      indicator?: \"line\" | \"dot\" | \"dashed\"\n      nameKey?: string\n      labelKey?: string\n    }\n>(\n  (\n    {\n      active,\n      payload,\n      className,\n      indicator = \"dot\",\n      hideLabel = false,\n      hideIndicator = false,\n      label,\n      labelFormatter,\n      labelClassName,\n      formatter,\n      color,\n      nameKey,\n      labelKey,\n    },\n    ref\n  ) => {\n    const { config } = useChart()\n\n    const tooltipLabel = React.useMemo(() => {\n      if (hideLabel || !payload?.length) {\n        return null\n      }\n\n      const [item] = payload\n      const key = `${labelKey || item.dataKey || item.name || \"value\"}`\n      const itemConfig = getPayloadConfigFromPayload(config, item, key)\n      const value =\n        !labelKey && typeof label === \"string\"\n          ? config[label as keyof typeof config]?.label || label\n          : itemConfig?.label\n\n      if (labelFormatter) {\n        return (\n          <div className={cn(\"font-medium\", labelClassName)}>\n            {labelFormatter(value, payload)}\n          </div>\n        )\n      }\n\n      if (!value) {\n        return null\n      }\n\n      return <div className={cn(\"font-medium\", labelClassName)}>{value}</div>\n    }, [\n      label,\n      labelFormatter,\n      payload,\n      hideLabel,\n      labelClassName,\n      config,\n      labelKey,\n    ])\n\n    if (!active || !payload?.length) {\n      return null\n    }\n\n    const nestLabel = payload.length === 1 && indicator !== \"dot\"\n\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          \"grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl\",\n          className\n        )}\n      >\n        {!nestLabel ? tooltipLabel : null}\n        <div className=\"grid gap-1.5\">\n          {payload.map((item, index) => {\n            const key = `${nameKey || item.name || item.dataKey || \"value\"}`\n            const itemConfig = getPayloadConfigFromPayload(config, item, key)\n            const indicatorColor = color || item.payload.fill || item.color\n\n            return (\n              <div\n                key={item.dataKey}\n                className={cn(\n                  \"flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground\",\n                  indicator === \"dot\" && \"items-center\"\n                )}\n              >\n                {formatter && item?.value !== undefined && item.name ? (\n                  formatter(item.value, item.name, item, index, item.payload)\n                ) : (\n                  <>\n                    {itemConfig?.icon ? (\n                      <itemConfig.icon />\n                    ) : (\n                      !hideIndicator && (\n                        <div\n                          className={cn(\n                            \"shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]\",\n                            {\n                              \"h-2.5 w-2.5\": indicator === \"dot\",\n                              \"w-1\": indicator === \"line\",\n                              \"w-0 border-[1.5px] border-dashed bg-transparent\":\n                                indicator === \"dashed\",\n                              \"my-0.5\": nestLabel && indicator === \"dashed\",\n                            }\n                          )}\n                          style={\n                            {\n                              \"--color-bg\": indicatorColor,\n                              \"--color-border\": indicatorColor,\n                            } as React.CSSProperties\n                          }\n                        />\n                      )\n                    )}\n                    <div\n                      className={cn(\n                        \"flex flex-1 justify-between leading-none\",\n                        nestLabel ? \"items-end\" : \"items-center\"\n                      )}\n                    >\n                      <div className=\"grid gap-1.5\">\n                        {nestLabel ? tooltipLabel : null}\n                        <span className=\"text-muted-foreground\">\n                          {itemConfig?.label || item.name}\n                        </span>\n                      </div>\n                      {item.value && (\n                        <span className=\"font-mono font-medium tabular-nums text-foreground\">\n                          {item.value.toLocaleString()}\n                        </span>\n                      )}\n                    </div>\n                  </>\n                )}\n              </div>\n            )\n          })}\n        </div>\n      </div>\n    )\n  }\n)\nChartTooltipContent.displayName = \"ChartTooltip\"\n\nconst ChartLegend = RechartsPrimitive.Legend\n\nconst ChartLegendContent = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\"> &\n    Pick<RechartsPrimitive.LegendProps, \"payload\" | \"verticalAlign\"> & {\n      hideIcon?: boolean\n      nameKey?: string\n    }\n>(\n  (\n    { className, hideIcon = false, payload, verticalAlign = \"bottom\", nameKey },\n    ref\n  ) => {\n    const { config } = useChart()\n\n    if (!payload?.length) {\n      return null\n    }\n\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          \"flex items-center justify-center gap-4\",\n          verticalAlign === \"top\" ? \"pb-3\" : \"pt-3\",\n          className\n        )}\n      >\n        {payload.map((item) => {\n          const key = `${nameKey || item.dataKey || \"value\"}`\n          const itemConfig = getPayloadConfigFromPayload(config, item, key)\n\n          return (\n            <div\n              key={item.value}\n              className={cn(\n                \"flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground\"\n              )}\n            >\n              {itemConfig?.icon && !hideIcon ? (\n                <itemConfig.icon />\n              ) : (\n                <div\n                  className=\"h-2 w-2 shrink-0 rounded-[2px]\"\n                  style={{\n                    backgroundColor: item.color,\n                  }}\n                />\n              )}\n              {itemConfig?.label}\n            </div>\n          )\n        })}\n      </div>\n    )\n  }\n)\nChartLegendContent.displayName = \"ChartLegend\"\n\n// Helper to extract item config from a payload.\nfunction getPayloadConfigFromPayload(\n  config: ChartConfig,\n  payload: unknown,\n  key: string\n) {\n  if (typeof payload !== \"object\" || payload === null) {\n    return undefined\n  }\n\n  const payloadPayload =\n    \"payload\" in payload &&\n    typeof payload.payload === \"object\" &&\n    payload.payload !== null\n      ? payload.payload\n      : undefined\n\n  let configLabelKey: string = key\n\n  if (\n    key in payload &&\n    typeof payload[key as keyof typeof payload] === \"string\"\n  ) {\n    configLabelKey = payload[key as keyof typeof payload] as string\n  } else if (\n    payloadPayload &&\n    key in payloadPayload &&\n    typeof payloadPayload[key as keyof typeof payloadPayload] === \"string\"\n  ) {\n    configLabelKey = payloadPayload[\n      key as keyof typeof payloadPayload\n    ] as string\n  }\n\n  return configLabelKey in config\n    ? config[configLabelKey]\n    : config[key as keyof typeof config]\n}\n\nexport {\n  ChartContainer,\n  ChartTooltip,\n  ChartTooltipContent,\n  ChartLegend,\n  ChartLegendContent,\n  ChartStyle,\n}\n"
  },
  {
    "path": "src\\components\\ui\\checkbox.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as CheckboxPrimitive from \"@radix-ui/react-checkbox\"\nimport { Check } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Checkbox = React.forwardRef<\n  React.ElementRef<typeof CheckboxPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>\n>(({ className, ...props }, ref) => (\n  <CheckboxPrimitive.Root\n    ref={ref}\n    className={cn(\n      \"peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground\",\n      className\n    )}\n    {...props}\n  >\n    <CheckboxPrimitive.Indicator\n      className={cn(\"flex items-center justify-center text-current\")}\n    >\n      <Check className=\"h-4 w-4\" />\n    </CheckboxPrimitive.Indicator>\n  </CheckboxPrimitive.Root>\n))\nCheckbox.displayName = CheckboxPrimitive.Root.displayName\n\nexport { Checkbox }\n"
  },
  {
    "path": "src\\components\\ui\\dialog.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as DialogPrimitive from \"@radix-ui/react-dialog\"\nimport { X } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Dialog = DialogPrimitive.Root\n\nconst DialogTrigger = DialogPrimitive.Trigger\n\nconst DialogPortal = DialogPrimitive.Portal\n\nconst DialogClose = DialogPrimitive.Close\n\nconst DialogOverlay = React.forwardRef<\n  React.ElementRef<typeof DialogPrimitive.Overlay>,\n  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>\n>(({ className, ...props }, ref) => (\n  <DialogPrimitive.Overlay\n    ref={ref}\n    className={cn(\n      \"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0\",\n      className\n    )}\n    {...props}\n  />\n))\nDialogOverlay.displayName = DialogPrimitive.Overlay.displayName\n\nconst DialogContent = React.forwardRef<\n  React.ElementRef<typeof DialogPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>\n>(({ className, children, ...props }, ref) => (\n  <DialogPortal>\n    <DialogOverlay />\n    <DialogPrimitive.Content\n      ref={ref}\n      className={cn(\n        \"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg\",\n        className\n      )}\n      {...props}\n    >\n      {children}\n      <DialogPrimitive.Close className=\"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground\">\n        <X className=\"h-4 w-4\" />\n        <span className=\"sr-only\">Close</span>\n      </DialogPrimitive.Close>\n    </DialogPrimitive.Content>\n  </DialogPortal>\n))\nDialogContent.displayName = DialogPrimitive.Content.displayName\n\nconst DialogHeader = ({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLDivElement>) => (\n  <div\n    className={cn(\n      \"flex flex-col space-y-1.5 text-center sm:text-left\",\n      className\n    )}\n    {...props}\n  />\n)\nDialogHeader.displayName = \"DialogHeader\"\n\nconst DialogFooter = ({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLDivElement>) => (\n  <div\n    className={cn(\n      \"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2\",\n      className\n    )}\n    {...props}\n  />\n)\nDialogFooter.displayName = \"DialogFooter\"\n\nconst DialogTitle = React.forwardRef<\n  React.ElementRef<typeof DialogPrimitive.Title>,\n  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>\n>(({ className, ...props }, ref) => (\n  <DialogPrimitive.Title\n    ref={ref}\n    className={cn(\n      \"text-lg font-semibold leading-none tracking-tight\",\n      className\n    )}\n    {...props}\n  />\n))\nDialogTitle.displayName = DialogPrimitive.Title.displayName\n\nconst DialogDescription = React.forwardRef<\n  React.ElementRef<typeof DialogPrimitive.Description>,\n  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>\n>(({ className, ...props }, ref) => (\n  <DialogPrimitive.Description\n    ref={ref}\n    className={cn(\"text-sm text-muted-foreground\", className)}\n    {...props}\n  />\n))\nDialogDescription.displayName = DialogPrimitive.Description.displayName\n\nexport {\n  Dialog,\n  DialogPortal,\n  DialogOverlay,\n  DialogClose,\n  DialogTrigger,\n  DialogContent,\n  DialogHeader,\n  DialogFooter,\n  DialogTitle,\n  DialogDescription,\n}\n"
  },
  {
    "path": "src\\components\\ui\\dropdown-menu.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as DropdownMenuPrimitive from \"@radix-ui/react-dropdown-menu\"\nimport { Check, ChevronRight, Circle } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst DropdownMenu = DropdownMenuPrimitive.Root\n\nconst DropdownMenuTrigger = DropdownMenuPrimitive.Trigger\n\nconst DropdownMenuGroup = DropdownMenuPrimitive.Group\n\nconst DropdownMenuPortal = DropdownMenuPrimitive.Portal\n\nconst DropdownMenuSub = DropdownMenuPrimitive.Sub\n\nconst DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup\n\nconst DropdownMenuSubTrigger = React.forwardRef<\n  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,\n  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {\n    inset?: boolean\n  }\n>(({ className, inset, children, ...props }, ref) => (\n  <DropdownMenuPrimitive.SubTrigger\n    ref={ref}\n    className={cn(\n      \"flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0\",\n      inset && \"pl-8\",\n      className\n    )}\n    {...props}\n  >\n    {children}\n    <ChevronRight className=\"ml-auto\" />\n  </DropdownMenuPrimitive.SubTrigger>\n))\nDropdownMenuSubTrigger.displayName =\n  DropdownMenuPrimitive.SubTrigger.displayName\n\nconst DropdownMenuSubContent = React.forwardRef<\n  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,\n  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>\n>(({ className, ...props }, ref) => (\n  <DropdownMenuPrimitive.SubContent\n    ref={ref}\n    className={cn(\n      \"z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2\",\n      className\n    )}\n    {...props}\n  />\n))\nDropdownMenuSubContent.displayName =\n  DropdownMenuPrimitive.SubContent.displayName\n\nconst DropdownMenuContent = React.forwardRef<\n  React.ElementRef<typeof DropdownMenuPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>\n>(({ className, sideOffset = 4, ...props }, ref) => (\n  <DropdownMenuPrimitive.Portal>\n    <DropdownMenuPrimitive.Content\n      ref={ref}\n      sideOffset={sideOffset}\n      className={cn(\n        \"z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2\",\n        className\n      )}\n      {...props}\n    />\n  </DropdownMenuPrimitive.Portal>\n))\nDropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName\n\nconst DropdownMenuItem = React.forwardRef<\n  React.ElementRef<typeof DropdownMenuPrimitive.Item>,\n  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {\n    inset?: boolean\n  }\n>(({ className, inset, ...props }, ref) => (\n  <DropdownMenuPrimitive.Item\n    ref={ref}\n    className={cn(\n      \"relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0\",\n      inset && \"pl-8\",\n      className\n    )}\n    {...props}\n  />\n))\nDropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName\n\nconst DropdownMenuCheckboxItem = React.forwardRef<\n  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,\n  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>\n>(({ className, children, checked, ...props }, ref) => (\n  <DropdownMenuPrimitive.CheckboxItem\n    ref={ref}\n    className={cn(\n      \"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50\",\n      className\n    )}\n    checked={checked}\n    {...props}\n  >\n    <span className=\"absolute left-2 flex h-3.5 w-3.5 items-center justify-center\">\n      <DropdownMenuPrimitive.ItemIndicator>\n        <Check className=\"h-4 w-4\" />\n      </DropdownMenuPrimitive.ItemIndicator>\n    </span>\n    {children}\n  </DropdownMenuPrimitive.CheckboxItem>\n))\nDropdownMenuCheckboxItem.displayName =\n  DropdownMenuPrimitive.CheckboxItem.displayName\n\nconst DropdownMenuRadioItem = React.forwardRef<\n  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,\n  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>\n>(({ className, children, ...props }, ref) => (\n  <DropdownMenuPrimitive.RadioItem\n    ref={ref}\n    className={cn(\n      \"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50\",\n      className\n    )}\n    {...props}\n  >\n    <span className=\"absolute left-2 flex h-3.5 w-3.5 items-center justify-center\">\n      <DropdownMenuPrimitive.ItemIndicator>\n        <Circle className=\"h-2 w-2 fill-current\" />\n      </DropdownMenuPrimitive.ItemIndicator>\n    </span>\n    {children}\n  </DropdownMenuPrimitive.RadioItem>\n))\nDropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName\n\nconst DropdownMenuLabel = React.forwardRef<\n  React.ElementRef<typeof DropdownMenuPrimitive.Label>,\n  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {\n    inset?: boolean\n  }\n>(({ className, inset, ...props }, ref) => (\n  <DropdownMenuPrimitive.Label\n    ref={ref}\n    className={cn(\n      \"px-2 py-1.5 text-sm font-semibold\",\n      inset && \"pl-8\",\n      className\n    )}\n    {...props}\n  />\n))\nDropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName\n\nconst DropdownMenuSeparator = React.forwardRef<\n  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,\n  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>\n>(({ className, ...props }, ref) => (\n  <DropdownMenuPrimitive.Separator\n    ref={ref}\n    className={cn(\"-mx-1 my-1 h-px bg-muted\", className)}\n    {...props}\n  />\n))\nDropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName\n\nconst DropdownMenuShortcut = ({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLSpanElement>) => {\n  return (\n    <span\n      className={cn(\"ml-auto text-xs tracking-widest opacity-60\", className)}\n      {...props}\n    />\n  )\n}\nDropdownMenuShortcut.displayName = \"DropdownMenuShortcut\"\n\nexport {\n  DropdownMenu,\n  DropdownMenuTrigger,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuCheckboxItem,\n  DropdownMenuRadioItem,\n  DropdownMenuLabel,\n  DropdownMenuSeparator,\n  DropdownMenuShortcut,\n  DropdownMenuGroup,\n  DropdownMenuPortal,\n  DropdownMenuSub,\n  DropdownMenuSubContent,\n  DropdownMenuSubTrigger,\n  DropdownMenuRadioGroup,\n}\n"
  },
  {
    "path": "src\\components\\ui\\form.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as LabelPrimitive from \"@radix-ui/react-label\"\nimport { Slot } from \"@radix-ui/react-slot\"\nimport {\n  Controller,\n  FormProvider,\n  useFormContext,\n  type ControllerProps,\n  type FieldPath,\n  type FieldValues,\n} from \"react-hook-form\"\n\nimport { cn } from \"@/lib/utils\"\nimport { Label } from \"@/components/ui/label\"\n\nconst Form = FormProvider\n\ntype FormFieldContextValue<\n  TFieldValues extends FieldValues = FieldValues,\n  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>\n> = {\n  name: TName\n}\n\nconst FormFieldContext = React.createContext<FormFieldContextValue>(\n  {} as FormFieldContextValue\n)\n\nconst FormField = <\n  TFieldValues extends FieldValues = FieldValues,\n  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>\n>({\n  ...props\n}: ControllerProps<TFieldValues, TName>) => {\n  return (\n    <FormFieldContext.Provider value={{ name: props.name }}>\n      <Controller {...props} />\n    </FormFieldContext.Provider>\n  )\n}\n\nconst useFormField = () => {\n  const fieldContext = React.useContext(FormFieldContext)\n  const itemContext = React.useContext(FormItemContext)\n  const { getFieldState, formState } = useFormContext()\n\n  const fieldState = getFieldState(fieldContext.name, formState)\n\n  if (!fieldContext) {\n    throw new Error(\"useFormField should be used within <FormField>\")\n  }\n\n  const { id } = itemContext\n\n  return {\n    id,\n    name: fieldContext.name,\n    formItemId: `${id}-form-item`,\n    formDescriptionId: `${id}-form-item-description`,\n    formMessageId: `${id}-form-item-message`,\n    ...fieldState,\n  }\n}\n\ntype FormItemContextValue = {\n  id: string\n}\n\nconst FormItemContext = React.createContext<FormItemContextValue>(\n  {} as FormItemContextValue\n)\n\nconst FormItem = React.forwardRef<\n  HTMLDivElement,\n  React.HTMLAttributes<HTMLDivElement>\n>(({ className, ...props }, ref) => {\n  const id = React.useId()\n\n  return (\n    <FormItemContext.Provider value={{ id }}>\n      <div ref={ref} className={cn(\"space-y-2\", className)} {...props} />\n    </FormItemContext.Provider>\n  )\n})\nFormItem.displayName = \"FormItem\"\n\nconst FormLabel = React.forwardRef<\n  React.ElementRef<typeof LabelPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>\n>(({ className, ...props }, ref) => {\n  const { error, formItemId } = useFormField()\n\n  return (\n    <Label\n      ref={ref}\n      className={cn(error && \"text-destructive\", className)}\n      htmlFor={formItemId}\n      {...props}\n    />\n  )\n})\nFormLabel.displayName = \"FormLabel\"\n\nconst FormControl = React.forwardRef<\n  React.ElementRef<typeof Slot>,\n  React.ComponentPropsWithoutRef<typeof Slot>\n>(({ ...props }, ref) => {\n  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()\n\n  return (\n    <Slot\n      ref={ref}\n      id={formItemId}\n      aria-describedby={\n        !error\n          ? `${formDescriptionId}`\n          : `${formDescriptionId} ${formMessageId}`\n      }\n      aria-invalid={!!error}\n      {...props}\n    />\n  )\n})\nFormControl.displayName = \"FormControl\"\n\nconst FormDescription = React.forwardRef<\n  HTMLParagraphElement,\n  React.HTMLAttributes<HTMLParagraphElement>\n>(({ className, ...props }, ref) => {\n  const { formDescriptionId } = useFormField()\n\n  return (\n    <p\n      ref={ref}\n      id={formDescriptionId}\n      className={cn(\"text-sm text-muted-foreground\", className)}\n      {...props}\n    />\n  )\n})\nFormDescription.displayName = \"FormDescription\"\n\nconst FormMessage = React.forwardRef<\n  HTMLParagraphElement,\n  React.HTMLAttributes<HTMLParagraphElement>\n>(({ className, children, ...props }, ref) => {\n  const { error, formMessageId } = useFormField()\n  const body = error ? String(error?.message ?? \"\") : children\n\n  if (!body) {\n    return null\n  }\n\n  return (\n    <p\n      ref={ref}\n      id={formMessageId}\n      className={cn(\"text-sm font-medium text-destructive\", className)}\n      {...props}\n    >\n      {body}\n    </p>\n  )\n})\nFormMessage.displayName = \"FormMessage\"\n\nexport {\n  useFormField,\n  Form,\n  FormItem,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormField,\n}\n"
  },
  {
    "path": "src\\components\\ui\\input.tsx",
    "content": "import * as React from \"react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Input = React.forwardRef<HTMLInputElement, React.ComponentProps<\"input\">>(\n  ({ className, type, ...props }, ref) => {\n    return (\n      <input\n        type={type}\n        className={cn(\n          \"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm\",\n          className\n        )}\n        ref={ref}\n        {...props}\n      />\n    )\n  }\n)\nInput.displayName = \"Input\"\n\nexport { Input }\n"
  },
  {
    "path": "src\\components\\ui\\label.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as LabelPrimitive from \"@radix-ui/react-label\"\nimport { cva, type VariantProps } from \"class-variance-authority\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst labelVariants = cva(\n  \"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70\"\n)\n\nconst Label = React.forwardRef<\n  React.ElementRef<typeof LabelPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &\n    VariantProps<typeof labelVariants>\n>(({ className, ...props }, ref) => (\n  <LabelPrimitive.Root\n    ref={ref}\n    className={cn(labelVariants(), className)}\n    {...props}\n  />\n))\nLabel.displayName = LabelPrimitive.Root.displayName\n\nexport { Label }\n"
  },
  {
    "path": "src\\components\\ui\\menubar.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as MenubarPrimitive from \"@radix-ui/react-menubar\"\nimport { Check, ChevronRight, Circle } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\n\nfunction MenubarMenu({\n  ...props\n}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {\n  return <MenubarPrimitive.Menu {...props} />\n}\n\nfunction MenubarGroup({\n  ...props\n}: React.ComponentProps<typeof MenubarPrimitive.Group>) {\n  return <MenubarPrimitive.Group {...props} />\n}\n\nfunction MenubarPortal({\n  ...props\n}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {\n  return <MenubarPrimitive.Portal {...props} />\n}\n\nfunction MenubarRadioGroup({\n  ...props\n}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {\n  return <MenubarPrimitive.RadioGroup {...props} />\n}\n\nfunction MenubarSub({\n  ...props\n}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {\n  return <MenubarPrimitive.Sub data-slot=\"menubar-sub\" {...props} />\n}\n\nconst Menubar = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>\n>(({ className, ...props }, ref) => (\n  <MenubarPrimitive.Root\n    ref={ref}\n    className={cn(\n      \"flex h-10 items-center space-x-1 rounded-md border bg-background p-1\",\n      className\n    )}\n    {...props}\n  />\n))\nMenubar.displayName = MenubarPrimitive.Root.displayName\n\nconst MenubarTrigger = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.Trigger>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>\n>(({ className, ...props }, ref) => (\n  <MenubarPrimitive.Trigger\n    ref={ref}\n    className={cn(\n      \"flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground\",\n      className\n    )}\n    {...props}\n  />\n))\nMenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName\n\nconst MenubarSubTrigger = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {\n    inset?: boolean\n  }\n>(({ className, inset, children, ...props }, ref) => (\n  <MenubarPrimitive.SubTrigger\n    ref={ref}\n    className={cn(\n      \"flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground\",\n      inset && \"pl-8\",\n      className\n    )}\n    {...props}\n  >\n    {children}\n    <ChevronRight className=\"ml-auto h-4 w-4\" />\n  </MenubarPrimitive.SubTrigger>\n))\nMenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName\n\nconst MenubarSubContent = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.SubContent>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>\n>(({ className, ...props }, ref) => (\n  <MenubarPrimitive.SubContent\n    ref={ref}\n    className={cn(\n      \"z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2\",\n      className\n    )}\n    {...props}\n  />\n))\nMenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName\n\nconst MenubarContent = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>\n>(\n  (\n    { className, align = \"start\", alignOffset = -4, sideOffset = 8, ...props },\n    ref\n  ) => (\n    <MenubarPrimitive.Portal>\n      <MenubarPrimitive.Content\n        ref={ref}\n        align={align}\n        alignOffset={alignOffset}\n        sideOffset={sideOffset}\n        className={cn(\n          \"z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2\",\n          className\n        )}\n        {...props}\n      />\n    </MenubarPrimitive.Portal>\n  )\n)\nMenubarContent.displayName = MenubarPrimitive.Content.displayName\n\nconst MenubarItem = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.Item>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {\n    inset?: boolean\n  }\n>(({ className, inset, ...props }, ref) => (\n  <MenubarPrimitive.Item\n    ref={ref}\n    className={cn(\n      \"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50\",\n      inset && \"pl-8\",\n      className\n    )}\n    {...props}\n  />\n))\nMenubarItem.displayName = MenubarPrimitive.Item.displayName\n\nconst MenubarCheckboxItem = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>\n>(({ className, children, checked, ...props }, ref) => (\n  <MenubarPrimitive.CheckboxItem\n    ref={ref}\n    className={cn(\n      \"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50\",\n      className\n    )}\n    checked={checked}\n    {...props}\n  >\n    <span className=\"absolute left-2 flex h-3.5 w-3.5 items-center justify-center\">\n      <MenubarPrimitive.ItemIndicator>\n        <Check className=\"h-4 w-4\" />\n      </MenubarPrimitive.ItemIndicator>\n    </span>\n    {children}\n  </MenubarPrimitive.CheckboxItem>\n))\nMenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName\n\nconst MenubarRadioItem = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.RadioItem>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>\n>(({ className, children, ...props }, ref) => (\n  <MenubarPrimitive.RadioItem\n    ref={ref}\n    className={cn(\n      \"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50\",\n      className\n    )}\n    {...props}\n  >\n    <span className=\"absolute left-2 flex h-3.5 w-3.5 items-center justify-center\">\n      <MenubarPrimitive.ItemIndicator>\n        <Circle className=\"h-2 w-2 fill-current\" />\n      </MenubarPrimitive.ItemIndicator>\n    </span>\n    {children}\n  </MenubarPrimitive.RadioItem>\n))\nMenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName\n\nconst MenubarLabel = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.Label>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {\n    inset?: boolean\n  }\n>(({ className, inset, ...props }, ref) => (\n  <MenubarPrimitive.Label\n    ref={ref}\n    className={cn(\n      \"px-2 py-1.5 text-sm font-semibold\",\n      inset && \"pl-8\",\n      className\n    )}\n    {...props}\n  />\n))\nMenubarLabel.displayName = MenubarPrimitive.Label.displayName\n\nconst MenubarSeparator = React.forwardRef<\n  React.ElementRef<typeof MenubarPrimitive.Separator>,\n  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>\n>(({ className, ...props }, ref) => (\n  <MenubarPrimitive.Separator\n    ref={ref}\n    className={cn(\"-mx-1 my-1 h-px bg-muted\", className)}\n    {...props}\n  />\n))\nMenubarSeparator.displayName = MenubarPrimitive.Separator.displayName\n\nconst MenubarShortcut = ({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLSpanElement>) => {\n  return (\n    <span\n      className={cn(\n        \"ml-auto text-xs tracking-widest text-muted-foreground\",\n        className\n      )}\n      {...props}\n    />\n  )\n}\nMenubarShortcut.displayname = \"MenubarShortcut\"\n\nexport {\n  Menubar,\n  MenubarMenu,\n  MenubarTrigger,\n  MenubarContent,\n  MenubarItem,\n  MenubarSeparator,\n  MenubarLabel,\n  MenubarCheckboxItem,\n  MenubarRadioGroup,\n  MenubarRadioItem,\n  MenubarPortal,\n  MenubarSubContent,\n  MenubarSubTrigger,\n  MenubarGroup,\n  MenubarSub,\n  MenubarShortcut,\n}\n"
  },
  {
    "path": "src\\components\\ui\\popover.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as PopoverPrimitive from \"@radix-ui/react-popover\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Popover = PopoverPrimitive.Root\n\nconst PopoverTrigger = PopoverPrimitive.Trigger\n\nconst PopoverContent = React.forwardRef<\n  React.ElementRef<typeof PopoverPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>\n>(({ className, align = \"center\", sideOffset = 4, ...props }, ref) => (\n  <PopoverPrimitive.Portal>\n    <PopoverPrimitive.Content\n      ref={ref}\n      align={align}\n      sideOffset={sideOffset}\n      className={cn(\n        \"z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2\",\n        className\n      )}\n      {...props}\n    />\n  </PopoverPrimitive.Portal>\n))\nPopoverContent.displayName = PopoverPrimitive.Content.displayName\n\nexport { Popover, PopoverTrigger, PopoverContent }\n"
  },
  {
    "path": "src\\components\\ui\\progress.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as ProgressPrimitive from \"@radix-ui/react-progress\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Progress = React.forwardRef<\n  React.ElementRef<typeof ProgressPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>\n>(({ className, value, ...props }, ref) => (\n  <ProgressPrimitive.Root\n    ref={ref}\n    className={cn(\n      \"relative h-4 w-full overflow-hidden rounded-full bg-secondary\",\n      className\n    )}\n    {...props}\n  >\n    <ProgressPrimitive.Indicator\n      className=\"h-full w-full flex-1 bg-primary transition-all\"\n      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}\n    />\n  </ProgressPrimitive.Root>\n))\nProgress.displayName = ProgressPrimitive.Root.displayName\n\nexport { Progress }\n"
  },
  {
    "path": "src\\components\\ui\\radio-group.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as RadioGroupPrimitive from \"@radix-ui/react-radio-group\"\nimport { Circle } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst RadioGroup = React.forwardRef<\n  React.ElementRef<typeof RadioGroupPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>\n>(({ className, ...props }, ref) => {\n  return (\n    <RadioGroupPrimitive.Root\n      className={cn(\"grid gap-2\", className)}\n      {...props}\n      ref={ref}\n    />\n  )\n})\nRadioGroup.displayName = RadioGroupPrimitive.Root.displayName\n\nconst RadioGroupItem = React.forwardRef<\n  React.ElementRef<typeof RadioGroupPrimitive.Item>,\n  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>\n>(({ className, ...props }, ref) => {\n  return (\n    <RadioGroupPrimitive.Item\n      ref={ref}\n      className={cn(\n        \"aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50\",\n        className\n      )}\n      {...props}\n    >\n      <RadioGroupPrimitive.Indicator className=\"flex items-center justify-center\">\n        <Circle className=\"h-2.5 w-2.5 fill-current text-current\" />\n      </RadioGroupPrimitive.Indicator>\n    </RadioGroupPrimitive.Item>\n  )\n})\nRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName\n\nexport { RadioGroup, RadioGroupItem }\n"
  },
  {
    "path": "src\\components\\ui\\scroll-area.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as ScrollAreaPrimitive from \"@radix-ui/react-scroll-area\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst ScrollArea = React.forwardRef<\n  React.ElementRef<typeof ScrollAreaPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>\n>(({ className, children, ...props }, ref) => (\n  <ScrollAreaPrimitive.Root\n    ref={ref}\n    className={cn(\"relative overflow-hidden\", className)}\n    {...props}\n  >\n    <ScrollAreaPrimitive.Viewport className=\"h-full w-full rounded-[inherit]\">\n      {children}\n    </ScrollAreaPrimitive.Viewport>\n    <ScrollBar />\n    <ScrollAreaPrimitive.Corner />\n  </ScrollAreaPrimitive.Root>\n))\nScrollArea.displayName = ScrollAreaPrimitive.Root.displayName\n\nconst ScrollBar = React.forwardRef<\n  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,\n  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>\n>(({ className, orientation = \"vertical\", ...props }, ref) => (\n  <ScrollAreaPrimitive.ScrollAreaScrollbar\n    ref={ref}\n    orientation={orientation}\n    className={cn(\n      \"flex touch-none select-none transition-colors\",\n      orientation === \"vertical\" &&\n        \"h-full w-2.5 border-l border-l-transparent p-[1px]\",\n      orientation === \"horizontal\" &&\n        \"h-2.5 flex-col border-t border-t-transparent p-[1px]\",\n      className\n    )}\n    {...props}\n  >\n    <ScrollAreaPrimitive.ScrollAreaThumb className=\"relative flex-1 rounded-full bg-border\" />\n  </ScrollAreaPrimitive.ScrollAreaScrollbar>\n))\nScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName\n\nexport { ScrollArea, ScrollBar }\n"
  },
  {
    "path": "src\\components\\ui\\select.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as SelectPrimitive from \"@radix-ui/react-select\"\nimport { Check, ChevronDown, ChevronUp } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Select = SelectPrimitive.Root\n\nconst SelectGroup = SelectPrimitive.Group\n\nconst SelectValue = SelectPrimitive.Value\n\nconst SelectTrigger = React.forwardRef<\n  React.ElementRef<typeof SelectPrimitive.Trigger>,\n  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>\n>(({ className, children, ...props }, ref) => (\n  <SelectPrimitive.Trigger\n    ref={ref}\n    className={cn(\n      \"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1\",\n      className\n    )}\n    {...props}\n  >\n    {children}\n    <SelectPrimitive.Icon asChild>\n      <ChevronDown className=\"h-4 w-4 opacity-50\" />\n    </SelectPrimitive.Icon>\n  </SelectPrimitive.Trigger>\n))\nSelectTrigger.displayName = SelectPrimitive.Trigger.displayName\n\nconst SelectScrollUpButton = React.forwardRef<\n  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,\n  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>\n>(({ className, ...props }, ref) => (\n  <SelectPrimitive.ScrollUpButton\n    ref={ref}\n    className={cn(\n      \"flex cursor-default items-center justify-center py-1\",\n      className\n    )}\n    {...props}\n  >\n    <ChevronUp className=\"h-4 w-4\" />\n  </SelectPrimitive.ScrollUpButton>\n))\nSelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName\n\nconst SelectScrollDownButton = React.forwardRef<\n  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,\n  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>\n>(({ className, ...props }, ref) => (\n  <SelectPrimitive.ScrollDownButton\n    ref={ref}\n    className={cn(\n      \"flex cursor-default items-center justify-center py-1\",\n      className\n    )}\n    {...props}\n  >\n    <ChevronDown className=\"h-4 w-4\" />\n  </SelectPrimitive.ScrollDownButton>\n))\nSelectScrollDownButton.displayName =\n  SelectPrimitive.ScrollDownButton.displayName\n\nconst SelectContent = React.forwardRef<\n  React.ElementRef<typeof SelectPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>\n>(({ className, children, position = \"popper\", ...props }, ref) => (\n  <SelectPrimitive.Portal>\n    <SelectPrimitive.Content\n      ref={ref}\n      className={cn(\n        \"relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2\",\n        position === \"popper\" &&\n          \"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1\",\n        className\n      )}\n      position={position}\n      {...props}\n    >\n      <SelectScrollUpButton />\n      <SelectPrimitive.Viewport\n        className={cn(\n          \"p-1\",\n          position === \"popper\" &&\n            \"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]\"\n        )}\n      >\n        {children}\n      </SelectPrimitive.Viewport>\n      <SelectScrollDownButton />\n    </SelectPrimitive.Content>\n  </SelectPrimitive.Portal>\n))\nSelectContent.displayName = SelectPrimitive.Content.displayName\n\nconst SelectLabel = React.forwardRef<\n  React.ElementRef<typeof SelectPrimitive.Label>,\n  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>\n>(({ className, ...props }, ref) => (\n  <SelectPrimitive.Label\n    ref={ref}\n    className={cn(\"py-1.5 pl-8 pr-2 text-sm font-semibold\", className)}\n    {...props}\n  />\n))\nSelectLabel.displayName = SelectPrimitive.Label.displayName\n\nconst SelectItem = React.forwardRef<\n  React.ElementRef<typeof SelectPrimitive.Item>,\n  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>\n>(({ className, children, ...props }, ref) => (\n  <SelectPrimitive.Item\n    ref={ref}\n    className={cn(\n      \"relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50\",\n      className\n    )}\n    {...props}\n  >\n    <span className=\"absolute left-2 flex h-3.5 w-3.5 items-center justify-center\">\n      <SelectPrimitive.ItemIndicator>\n        <Check className=\"h-4 w-4\" />\n      </SelectPrimitive.ItemIndicator>\n    </span>\n\n    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>\n  </SelectPrimitive.Item>\n))\nSelectItem.displayName = SelectPrimitive.Item.displayName\n\nconst SelectSeparator = React.forwardRef<\n  React.ElementRef<typeof SelectPrimitive.Separator>,\n  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>\n>(({ className, ...props }, ref) => (\n  <SelectPrimitive.Separator\n    ref={ref}\n    className={cn(\"-mx-1 my-1 h-px bg-muted\", className)}\n    {...props}\n  />\n))\nSelectSeparator.displayName = SelectPrimitive.Separator.displayName\n\nexport {\n  Select,\n  SelectGroup,\n  SelectValue,\n  SelectTrigger,\n  SelectContent,\n  SelectLabel,\n  SelectItem,\n  SelectSeparator,\n  SelectScrollUpButton,\n  SelectScrollDownButton,\n}\n"
  },
  {
    "path": "src\\components\\ui\\separator.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as SeparatorPrimitive from \"@radix-ui/react-separator\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Separator = React.forwardRef<\n  React.ElementRef<typeof SeparatorPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>\n>(\n  (\n    { className, orientation = \"horizontal\", decorative = true, ...props },\n    ref\n  ) => (\n    <SeparatorPrimitive.Root\n      ref={ref}\n      decorative={decorative}\n      orientation={orientation}\n      className={cn(\n        \"shrink-0 bg-border\",\n        orientation === \"horizontal\" ? \"h-[1px] w-full\" : \"h-full w-[1px]\",\n        className\n      )}\n      {...props}\n    />\n  )\n)\nSeparator.displayName = SeparatorPrimitive.Root.displayName\n\nexport { Separator }\n"
  },
  {
    "path": "src\\components\\ui\\sheet.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as SheetPrimitive from \"@radix-ui/react-dialog\"\nimport { cva, type VariantProps } from \"class-variance-authority\"\nimport { X } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Sheet = SheetPrimitive.Root\n\nconst SheetTrigger = SheetPrimitive.Trigger\n\nconst SheetClose = SheetPrimitive.Close\n\nconst SheetPortal = SheetPrimitive.Portal\n\nconst SheetOverlay = React.forwardRef<\n  React.ElementRef<typeof SheetPrimitive.Overlay>,\n  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>\n>(({ className, ...props }, ref) => (\n  <SheetPrimitive.Overlay\n    className={cn(\n      \"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0\",\n      className\n    )}\n    {...props}\n    ref={ref}\n  />\n))\nSheetOverlay.displayName = SheetPrimitive.Overlay.displayName\n\nconst sheetVariants = cva(\n  \"fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500\",\n  {\n    variants: {\n      side: {\n        top: \"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top\",\n        bottom:\n          \"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom\",\n        left: \"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm\",\n        right:\n          \"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm\",\n      },\n    },\n    defaultVariants: {\n      side: \"right\",\n    },\n  }\n)\n\ninterface SheetContentProps\n  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,\n    VariantProps<typeof sheetVariants> {}\n\nconst SheetContent = React.forwardRef<\n  React.ElementRef<typeof SheetPrimitive.Content>,\n  SheetContentProps\n>(({ side = \"right\", className, children, ...props }, ref) => (\n  <SheetPortal>\n    <SheetOverlay />\n    <SheetPrimitive.Content\n      ref={ref}\n      className={cn(sheetVariants({ side }), className)}\n      {...props}\n    >\n      {children}\n      <SheetPrimitive.Close className=\"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary\">\n        <X className=\"h-4 w-4\" />\n        <span className=\"sr-only\">Close</span>\n      </SheetPrimitive.Close>\n    </SheetPrimitive.Content>\n  </SheetPortal>\n))\nSheetContent.displayName = SheetPrimitive.Content.displayName\n\nconst SheetHeader = ({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLDivElement>) => (\n  <div\n    className={cn(\n      \"flex flex-col space-y-2 text-center sm:text-left\",\n      className\n    )}\n    {...props}\n  />\n)\nSheetHeader.displayName = \"SheetHeader\"\n\nconst SheetFooter = ({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLDivElement>) => (\n  <div\n    className={cn(\n      \"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2\",\n      className\n    )}\n    {...props}\n  />\n)\nSheetFooter.displayName = \"SheetFooter\"\n\nconst SheetTitle = React.forwardRef<\n  React.ElementRef<typeof SheetPrimitive.Title>,\n  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>\n>(({ className, ...props }, ref) => (\n  <SheetPrimitive.Title\n    ref={ref}\n    className={cn(\"text-lg font-semibold text-foreground\", className)}\n    {...props}\n  />\n))\nSheetTitle.displayName = SheetPrimitive.Title.displayName\n\nconst SheetDescription = React.forwardRef<\n  React.ElementRef<typeof SheetPrimitive.Description>,\n  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>\n>(({ className, ...props }, ref) => (\n  <SheetPrimitive.Description\n    ref={ref}\n    className={cn(\"text-sm text-muted-foreground\", className)}\n    {...props}\n  />\n))\nSheetDescription.displayName = SheetPrimitive.Description.displayName\n\nexport {\n  Sheet,\n  SheetPortal,\n  SheetOverlay,\n  SheetTrigger,\n  SheetClose,\n  SheetContent,\n  SheetHeader,\n  SheetFooter,\n  SheetTitle,\n  SheetDescription,\n}\n"
  },
  {
    "path": "src\\components\\ui\\sidebar.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport { Slot } from \"@radix-ui/react-slot\"\nimport { VariantProps, cva } from \"class-variance-authority\"\nimport { PanelLeft } from \"lucide-react\"\n\nimport { useIsMobile } from \"@/hooks/use-mobile\"\nimport { cn } from \"@/lib/utils\"\nimport { Button } from \"@/components/ui/button\"\nimport { Input } from \"@/components/ui/input\"\nimport { Separator } from \"@/components/ui/separator\"\nimport { Sheet, SheetContent } from \"@/components/ui/sheet\"\nimport { Skeleton } from \"@/components/ui/skeleton\"\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipProvider,\n  TooltipTrigger,\n} from \"@/components/ui/tooltip\"\n\nconst SIDEBAR_COOKIE_NAME = \"sidebar_state\"\nconst SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7\nconst SIDEBAR_WIDTH = \"16rem\"\nconst SIDEBAR_WIDTH_MOBILE = \"18rem\"\nconst SIDEBAR_WIDTH_ICON = \"3rem\"\nconst SIDEBAR_KEYBOARD_SHORTCUT = \"b\"\n\ntype SidebarContext = {\n  state: \"expanded\" | \"collapsed\"\n  open: boolean\n  setOpen: (open: boolean) => void\n  openMobile: boolean\n  setOpenMobile: (open: boolean) => void\n  isMobile: boolean\n  toggleSidebar: () => void\n}\n\nconst SidebarContext = React.createContext<SidebarContext | null>(null)\n\nfunction useSidebar() {\n  const context = React.useContext(SidebarContext)\n  if (!context) {\n    throw new Error(\"useSidebar must be used within a SidebarProvider.\")\n  }\n\n  return context\n}\n\nconst SidebarProvider = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\"> & {\n    defaultOpen?: boolean\n    open?: boolean\n    onOpenChange?: (open: boolean) => void\n  }\n>(\n  (\n    {\n      defaultOpen = true,\n      open: openProp,\n      onOpenChange: setOpenProp,\n      className,\n      style,\n      children,\n      ...props\n    },\n    ref\n  ) => {\n    const isMobile = useIsMobile()\n    const [openMobile, setOpenMobile] = React.useState(false)\n\n    // This is the internal state of the sidebar.\n    // We use openProp and setOpenProp for control from outside the component.\n    const [_open, _setOpen] = React.useState(defaultOpen)\n    const open = openProp ?? _open\n    const setOpen = React.useCallback(\n      (value: boolean | ((value: boolean) => boolean)) => {\n        const openState = typeof value === \"function\" ? value(open) : value\n        if (setOpenProp) {\n          setOpenProp(openState)\n        } else {\n          _setOpen(openState)\n        }\n\n        // This sets the cookie to keep the sidebar state.\n        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`\n      },\n      [setOpenProp, open]\n    )\n\n    // Helper to toggle the sidebar.\n    const toggleSidebar = React.useCallback(() => {\n      return isMobile\n        ? setOpenMobile((open) => !open)\n        : setOpen((open) => !open)\n    }, [isMobile, setOpen, setOpenMobile])\n\n    // Adds a keyboard shortcut to toggle the sidebar.\n    React.useEffect(() => {\n      const handleKeyDown = (event: KeyboardEvent) => {\n        if (\n          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&\n          (event.metaKey || event.ctrlKey)\n        ) {\n          event.preventDefault()\n          toggleSidebar()\n        }\n      }\n\n      window.addEventListener(\"keydown\", handleKeyDown)\n      return () => window.removeEventListener(\"keydown\", handleKeyDown)\n    }, [toggleSidebar])\n\n    // We add a state so that we can do data-state=\"expanded\" or \"collapsed\".\n    // This makes it easier to style the sidebar with Tailwind classes.\n    const state = open ? \"expanded\" : \"collapsed\"\n\n    const contextValue = React.useMemo<SidebarContext>(\n      () => ({\n        state,\n        open,\n        setOpen,\n        isMobile,\n        openMobile,\n        setOpenMobile,\n        toggleSidebar,\n      }),\n      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]\n    )\n\n    return (\n      <SidebarContext.Provider value={contextValue}>\n        <TooltipProvider delayDuration={0}>\n          <div\n            style={\n              {\n                \"--sidebar-width\": SIDEBAR_WIDTH,\n                \"--sidebar-width-icon\": SIDEBAR_WIDTH_ICON,\n                ...style,\n              } as React.CSSProperties\n            }\n            className={cn(\n              \"group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar\",\n              className\n            )}\n            ref={ref}\n            {...props}\n          >\n            {children}\n          </div>\n        </TooltipProvider>\n      </SidebarContext.Provider>\n    )\n  }\n)\nSidebarProvider.displayName = \"SidebarProvider\"\n\nconst Sidebar = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\"> & {\n    side?: \"left\" | \"right\"\n    variant?: \"sidebar\" | \"floating\" | \"inset\"\n    collapsible?: \"offcanvas\" | \"icon\" | \"none\"\n  }\n>(\n  (\n    {\n      side = \"left\",\n      variant = \"sidebar\",\n      collapsible = \"offcanvas\",\n      className,\n      children,\n      ...props\n    },\n    ref\n  ) => {\n    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()\n\n    if (collapsible === \"none\") {\n      return (\n        <div\n          className={cn(\n            \"flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground\",\n            className\n          )}\n          ref={ref}\n          {...props}\n        >\n          {children}\n        </div>\n      )\n    }\n\n    if (isMobile) {\n      return (\n        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>\n          <SheetContent\n            data-sidebar=\"sidebar\"\n            data-mobile=\"true\"\n            className=\"w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden\"\n            style={\n              {\n                \"--sidebar-width\": SIDEBAR_WIDTH_MOBILE,\n              } as React.CSSProperties\n            }\n            side={side}\n          >\n            <div className=\"flex h-full w-full flex-col\">{children}</div>\n          </SheetContent>\n        </Sheet>\n      )\n    }\n\n    return (\n      <div\n        ref={ref}\n        className=\"group peer hidden md:block text-sidebar-foreground\"\n        data-state={state}\n        data-collapsible={state === \"collapsed\" ? collapsible : \"\"}\n        data-variant={variant}\n        data-side={side}\n      >\n        {/* This is what handles the sidebar gap on desktop */}\n        <div\n          className={cn(\n            \"duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear\",\n            \"group-data-[collapsible=offcanvas]:w-0\",\n            \"group-data-[side=right]:rotate-180\",\n            variant === \"floating\" || variant === \"inset\"\n              ? \"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]\"\n              : \"group-data-[collapsible=icon]:w-[--sidebar-width-icon]\"\n          )}\n        />\n        <div\n          className={cn(\n            \"duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex\",\n            side === \"left\"\n              ? \"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]\"\n              : \"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]\",\n            // Adjust the padding for floating and inset variants.\n            variant === \"floating\" || variant === \"inset\"\n              ? \"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]\"\n              : \"group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l\",\n            className\n          )}\n          {...props}\n        >\n          <div\n            data-sidebar=\"sidebar\"\n            className=\"flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow\"\n          >\n            {children}\n          </div>\n        </div>\n      </div>\n    )\n  }\n)\nSidebar.displayName = \"Sidebar\"\n\nconst SidebarTrigger = React.forwardRef<\n  React.ElementRef<typeof Button>,\n  React.ComponentProps<typeof Button>\n>(({ className, onClick, ...props }, ref) => {\n  const { toggleSidebar } = useSidebar()\n\n  return (\n    <Button\n      ref={ref}\n      data-sidebar=\"trigger\"\n      variant=\"ghost\"\n      size=\"icon\"\n      className={cn(\"h-7 w-7\", className)}\n      onClick={(event) => {\n        onClick?.(event)\n        toggleSidebar()\n      }}\n      {...props}\n    >\n      <PanelLeft />\n      <span className=\"sr-only\">Toggle Sidebar</span>\n    </Button>\n  )\n})\nSidebarTrigger.displayName = \"SidebarTrigger\"\n\nconst SidebarRail = React.forwardRef<\n  HTMLButtonElement,\n  React.ComponentProps<\"button\">\n>(({ className, ...props }, ref) => {\n  const { toggleSidebar } = useSidebar()\n\n  return (\n    <button\n      ref={ref}\n      data-sidebar=\"rail\"\n      aria-label=\"Toggle Sidebar\"\n      tabIndex={-1}\n      onClick={toggleSidebar}\n      title=\"Toggle Sidebar\"\n      className={cn(\n        \"absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex\",\n        \"[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize\",\n        \"[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize\",\n        \"group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar\",\n        \"[[data-side=left][data-collapsible=offcanvas]_&]:-right-2\",\n        \"[[data-side=right][data-collapsible=offcanvas]_&]:-left-2\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nSidebarRail.displayName = \"SidebarRail\"\n\nconst SidebarInset = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"main\">\n>(({ className, ...props }, ref) => {\n  return (\n    <main\n      ref={ref}\n      className={cn(\n        \"relative flex min-h-svh flex-1 flex-col bg-background\",\n        \"peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nSidebarInset.displayName = \"SidebarInset\"\n\nconst SidebarInput = React.forwardRef<\n  React.ElementRef<typeof Input>,\n  React.ComponentProps<typeof Input>\n>(({ className, ...props }, ref) => {\n  return (\n    <Input\n      ref={ref}\n      data-sidebar=\"input\"\n      className={cn(\n        \"h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nSidebarInput.displayName = \"SidebarInput\"\n\nconst SidebarHeader = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\">\n>(({ className, ...props }, ref) => {\n  return (\n    <div\n      ref={ref}\n      data-sidebar=\"header\"\n      className={cn(\"flex flex-col gap-2 p-2\", className)}\n      {...props}\n    />\n  )\n})\nSidebarHeader.displayName = \"SidebarHeader\"\n\nconst SidebarFooter = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\">\n>(({ className, ...props }, ref) => {\n  return (\n    <div\n      ref={ref}\n      data-sidebar=\"footer\"\n      className={cn(\"flex flex-col gap-2 p-2\", className)}\n      {...props}\n    />\n  )\n})\nSidebarFooter.displayName = \"SidebarFooter\"\n\nconst SidebarSeparator = React.forwardRef<\n  React.ElementRef<typeof Separator>,\n  React.ComponentProps<typeof Separator>\n>(({ className, ...props }, ref) => {\n  return (\n    <Separator\n      ref={ref}\n      data-sidebar=\"separator\"\n      className={cn(\"mx-2 w-auto bg-sidebar-border\", className)}\n      {...props}\n    />\n  )\n})\nSidebarSeparator.displayName = \"SidebarSeparator\"\n\nconst SidebarContent = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\">\n>(({ className, ...props }, ref) => {\n  return (\n    <div\n      ref={ref}\n      data-sidebar=\"content\"\n      className={cn(\n        \"flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nSidebarContent.displayName = \"SidebarContent\"\n\nconst SidebarGroup = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\">\n>(({ className, ...props }, ref) => {\n  return (\n    <div\n      ref={ref}\n      data-sidebar=\"group\"\n      className={cn(\"relative flex w-full min-w-0 flex-col p-2\", className)}\n      {...props}\n    />\n  )\n})\nSidebarGroup.displayName = \"SidebarGroup\"\n\nconst SidebarGroupLabel = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\"> & { asChild?: boolean }\n>(({ className, asChild = false, ...props }, ref) => {\n  const Comp = asChild ? Slot : \"div\"\n\n  return (\n    <Comp\n      ref={ref}\n      data-sidebar=\"group-label\"\n      className={cn(\n        \"duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0\",\n        \"group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nSidebarGroupLabel.displayName = \"SidebarGroupLabel\"\n\nconst SidebarGroupAction = React.forwardRef<\n  HTMLButtonElement,\n  React.ComponentProps<\"button\"> & { asChild?: boolean }\n>(({ className, asChild = false, ...props }, ref) => {\n  const Comp = asChild ? Slot : \"button\"\n\n  return (\n    <Comp\n      ref={ref}\n      data-sidebar=\"group-action\"\n      className={cn(\n        \"absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0\",\n        // Increases the hit area of the button on mobile.\n        \"after:absolute after:-inset-2 after:md:hidden\",\n        \"group-data-[collapsible=icon]:hidden\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nSidebarGroupAction.displayName = \"SidebarGroupAction\"\n\nconst SidebarGroupContent = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\">\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    data-sidebar=\"group-content\"\n    className={cn(\"w-full text-sm\", className)}\n    {...props}\n  />\n))\nSidebarGroupContent.displayName = \"SidebarGroupContent\"\n\nconst SidebarMenu = React.forwardRef<\n  HTMLUListElement,\n  React.ComponentProps<\"ul\">\n>(({ className, ...props }, ref) => (\n  <ul\n    ref={ref}\n    data-sidebar=\"menu\"\n    className={cn(\"flex w-full min-w-0 flex-col gap-1\", className)}\n    {...props}\n  />\n))\nSidebarMenu.displayName = \"SidebarMenu\"\n\nconst SidebarMenuItem = React.forwardRef<\n  HTMLLIElement,\n  React.ComponentProps<\"li\">\n>(({ className, ...props }, ref) => (\n  <li\n    ref={ref}\n    data-sidebar=\"menu-item\"\n    className={cn(\"group/menu-item relative\", className)}\n    {...props}\n  />\n))\nSidebarMenuItem.displayName = \"SidebarMenuItem\"\n\nconst sidebarMenuButtonVariants = cva(\n  \"peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0\",\n  {\n    variants: {\n      variant: {\n        default: \"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground\",\n        outline:\n          \"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]\",\n      },\n      size: {\n        default: \"h-8 text-sm\",\n        sm: \"h-7 text-xs\",\n        lg: \"h-12 text-sm group-data-[collapsible=icon]:!p-0\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n      size: \"default\",\n    },\n  }\n)\n\nconst SidebarMenuButton = React.forwardRef<\n  HTMLButtonElement,\n  React.ComponentProps<\"button\"> & {\n    asChild?: boolean\n    isActive?: boolean\n    tooltip?: string | React.ComponentProps<typeof TooltipContent>\n  } & VariantProps<typeof sidebarMenuButtonVariants>\n>(\n  (\n    {\n      asChild = false,\n      isActive = false,\n      variant = \"default\",\n      size = \"default\",\n      tooltip,\n      className,\n      ...props\n    },\n    ref\n  ) => {\n    const Comp = asChild ? Slot : \"button\"\n    const { isMobile, state } = useSidebar()\n\n    const button = (\n      <Comp\n        ref={ref}\n        data-sidebar=\"menu-button\"\n        data-size={size}\n        data-active={isActive}\n        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}\n        {...props}\n      />\n    )\n\n    if (!tooltip) {\n      return button\n    }\n\n    if (typeof tooltip === \"string\") {\n      tooltip = {\n        children: tooltip,\n      }\n    }\n\n    return (\n      <Tooltip>\n        <TooltipTrigger asChild>{button}</TooltipTrigger>\n        <TooltipContent\n          side=\"right\"\n          align=\"center\"\n          hidden={state !== \"collapsed\" || isMobile}\n          {...tooltip}\n        />\n      </Tooltip>\n    )\n  }\n)\nSidebarMenuButton.displayName = \"SidebarMenuButton\"\n\nconst SidebarMenuAction = React.forwardRef<\n  HTMLButtonElement,\n  React.ComponentProps<\"button\"> & {\n    asChild?: boolean\n    showOnHover?: boolean\n  }\n>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {\n  const Comp = asChild ? Slot : \"button\"\n\n  return (\n    <Comp\n      ref={ref}\n      data-sidebar=\"menu-action\"\n      className={cn(\n        \"absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0\",\n        // Increases the hit area of the button on mobile.\n        \"after:absolute after:-inset-2 after:md:hidden\",\n        \"peer-data-[size=sm]/menu-button:top-1\",\n        \"peer-data-[size=default]/menu-button:top-1.5\",\n        \"peer-data-[size=lg]/menu-button:top-2.5\",\n        \"group-data-[collapsible=icon]:hidden\",\n        showOnHover &&\n          \"group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nSidebarMenuAction.displayName = \"SidebarMenuAction\"\n\nconst SidebarMenuBadge = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\">\n>(({ className, ...props }, ref) => (\n  <div\n    ref={ref}\n    data-sidebar=\"menu-badge\"\n    className={cn(\n      \"absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none\",\n      \"peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground\",\n      \"peer-data-[size=sm]/menu-button:top-1\",\n      \"peer-data-[size=default]/menu-button:top-1.5\",\n      \"peer-data-[size=lg]/menu-button:top-2.5\",\n      \"group-data-[collapsible=icon]:hidden\",\n      className\n    )}\n    {...props}\n  />\n))\nSidebarMenuBadge.displayName = \"SidebarMenuBadge\"\n\nconst SidebarMenuSkeleton = React.forwardRef<\n  HTMLDivElement,\n  React.ComponentProps<\"div\"> & {\n    showIcon?: boolean\n  }\n>(({ className, showIcon = false, ...props }, ref) => {\n  // Random width between 50 to 90%.\n  const width = React.useMemo(() => {\n    return `${Math.floor(Math.random() * 40) + 50}%`\n  }, [])\n\n  return (\n    <div\n      ref={ref}\n      data-sidebar=\"menu-skeleton\"\n      className={cn(\"rounded-md h-8 flex gap-2 px-2 items-center\", className)}\n      {...props}\n    >\n      {showIcon && (\n        <Skeleton\n          className=\"size-4 rounded-md\"\n          data-sidebar=\"menu-skeleton-icon\"\n        />\n      )}\n      <Skeleton\n        className=\"h-4 flex-1 max-w-[--skeleton-width]\"\n        data-sidebar=\"menu-skeleton-text\"\n        style={\n          {\n            \"--skeleton-width\": width,\n          } as React.CSSProperties\n        }\n      />\n    </div>\n  )\n})\nSidebarMenuSkeleton.displayName = \"SidebarMenuSkeleton\"\n\nconst SidebarMenuSub = React.forwardRef<\n  HTMLUListElement,\n  React.ComponentProps<\"ul\">\n>(({ className, ...props }, ref) => (\n  <ul\n    ref={ref}\n    data-sidebar=\"menu-sub\"\n    className={cn(\n      \"mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5\",\n      \"group-data-[collapsible=icon]:hidden\",\n      className\n    )}\n    {...props}\n  />\n))\nSidebarMenuSub.displayName = \"SidebarMenuSub\"\n\nconst SidebarMenuSubItem = React.forwardRef<\n  HTMLLIElement,\n  React.ComponentProps<\"li\">\n>(({ ...props }, ref) => <li ref={ref} {...props} />)\nSidebarMenuSubItem.displayName = \"SidebarMenuSubItem\"\n\nconst SidebarMenuSubButton = React.forwardRef<\n  HTMLAnchorElement,\n  React.ComponentProps<\"a\"> & {\n    asChild?: boolean\n    size?: \"sm\" | \"md\"\n    isActive?: boolean\n  }\n>(({ asChild = false, size = \"md\", isActive, className, ...props }, ref) => {\n  const Comp = asChild ? Slot : \"a\"\n\n  return (\n    <Comp\n      ref={ref}\n      data-sidebar=\"menu-sub-button\"\n      data-size={size}\n      data-active={isActive}\n      className={cn(\n        \"flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground\",\n        \"data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground\",\n        size === \"sm\" && \"text-xs\",\n        size === \"md\" && \"text-sm\",\n        \"group-data-[collapsible=icon]:hidden\",\n        className\n      )}\n      {...props}\n    />\n  )\n})\nSidebarMenuSubButton.displayName = \"SidebarMenuSubButton\"\n\nexport {\n  Sidebar,\n  SidebarContent,\n  SidebarFooter,\n  SidebarGroup,\n  SidebarGroupAction,\n  SidebarGroupContent,\n  SidebarGroupLabel,\n  SidebarHeader,\n  SidebarInput,\n  SidebarInset,\n  SidebarMenu,\n  SidebarMenuAction,\n  SidebarMenuBadge,\n  SidebarMenuButton,\n  SidebarMenuItem,\n  SidebarMenuSkeleton,\n  SidebarMenuSub,\n  SidebarMenuSubButton,\n  SidebarMenuSubItem,\n  SidebarProvider,\n  SidebarRail,\n  SidebarSeparator,\n  SidebarTrigger,\n  useSidebar,\n}\n"
  },
  {
    "path": "src\\components\\ui\\skeleton.tsx",
    "content": "import { cn } from \"@/lib/utils\"\n\nfunction Skeleton({\n  className,\n  ...props\n}: React.HTMLAttributes<HTMLDivElement>) {\n  return (\n    <div\n      className={cn(\"animate-pulse rounded-md bg-muted\", className)}\n      {...props}\n    />\n  )\n}\n\nexport { Skeleton }\n"
  }
]
```

### `scratch\payload_config.json`
```json
[
  {
    "path": "src\\components\\ui\\slider.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as SliderPrimitive from \"@radix-ui/react-slider\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Slider = React.forwardRef<\n  React.ElementRef<typeof SliderPrimitive.Root>,\n  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>\n>(({ className, ...props }, ref) => (\n  <SliderPrimitive.Root\n    ref={ref}\n    className={cn(\n      \"relative flex w-full touch-none select-none items-center\",\n      className\n    )}\n    {...props}\n  >\n    <SliderPrimitive.Track className=\"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary\">\n      <SliderPrimitive.Range className=\"absolute h-full bg-primary\" />\n    </SliderPrimitive.Track>\n    <SliderPrimitive.Thumb className=\"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50\" />\n  </SliderPrimitive.Root>\n))\nSlider.displayName = SliderPrimitive.Root.displayName\n\nexport { Slider }\n"
  },
  {
    "path": "src\\components\\ui\\switch.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as SwitchPrimitives from \"@radix-ui/react-switch\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Switch = React.forwardRef<\n  React.ElementRef<typeof SwitchPrimitives.Root>,\n  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>\n>(({ className, ...props }, ref) => (\n  <SwitchPrimitives.Root\n    className={cn(\n      \"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input\",\n      className\n    )}\n    {...props}\n    ref={ref}\n  >\n    <SwitchPrimitives.Thumb\n      className={cn(\n        \"pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0\"\n      )}\n    />\n  </SwitchPrimitives.Root>\n))\nSwitch.displayName = SwitchPrimitives.Root.displayName\n\nexport { Switch }\n"
  },
  {
    "path": "src\\components\\ui\\table.tsx",
    "content": "import * as React from \"react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Table = React.forwardRef<\n  HTMLTableElement,\n  React.HTMLAttributes<HTMLTableElement>\n>(({ className, ...props }, ref) => (\n  <div className=\"relative w-full overflow-auto\">\n    <table\n      ref={ref}\n      className={cn(\"w-full caption-bottom text-sm\", className)}\n      {...props}\n    />\n  </div>\n))\nTable.displayName = \"Table\"\n\nconst TableHeader = React.forwardRef<\n  HTMLTableSectionElement,\n  React.HTMLAttributes<HTMLTableSectionElement>\n>(({ className, ...props }, ref) => (\n  <thead ref={ref} className={cn(\"[&_tr]:border-b\", className)} {...props} />\n))\nTableHeader.displayName = \"TableHeader\"\n\nconst TableBody = React.forwardRef<\n  HTMLTableSectionElement,\n  React.HTMLAttributes<HTMLTableSectionElement>\n>(({ className, ...props }, ref) => (\n  <tbody\n    ref={ref}\n    className={cn(\"[&_tr:last-child]:border-0\", className)}\n    {...props}\n  />\n))\nTableBody.displayName = \"TableBody\"\n\nconst TableFooter = React.forwardRef<\n  HTMLTableSectionElement,\n  React.HTMLAttributes<HTMLTableSectionElement>\n>(({ className, ...props }, ref) => (\n  <tfoot\n    ref={ref}\n    className={cn(\n      \"border-t bg-muted/50 font-medium [&>tr]:last:border-b-0\",\n      className\n    )}\n    {...props}\n  />\n))\nTableFooter.displayName = \"TableFooter\"\n\nconst TableRow = React.forwardRef<\n  HTMLTableRowElement,\n  React.HTMLAttributes<HTMLTableRowElement>\n>(({ className, ...props }, ref) => (\n  <tr\n    ref={ref}\n    className={cn(\n      \"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted\",\n      className\n    )}\n    {...props}\n  />\n))\nTableRow.displayName = \"TableRow\"\n\nconst TableHead = React.forwardRef<\n  HTMLTableCellElement,\n  React.ThHTMLAttributes<HTMLTableCellElement>\n>(({ className, ...props }, ref) => (\n  <th\n    ref={ref}\n    className={cn(\n      \"h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0\",\n      className\n    )}\n    {...props}\n  />\n))\nTableHead.displayName = \"TableHead\"\n\nconst TableCell = React.forwardRef<\n  HTMLTableCellElement,\n  React.TdHTMLAttributes<HTMLTableCellElement>\n>(({ className, ...props }, ref) => (\n  <td\n    ref={ref}\n    className={cn(\"p-4 align-middle [&:has([role=checkbox])]:pr-0\", className)}\n    {...props}\n  />\n))\nTableCell.displayName = \"TableCell\"\n\nconst TableCaption = React.forwardRef<\n  HTMLTableCaptionElement,\n  React.HTMLAttributes<HTMLTableCaptionElement>\n>(({ className, ...props }, ref) => (\n  <caption\n    ref={ref}\n    className={cn(\"mt-4 text-sm text-muted-foreground\", className)}\n    {...props}\n  />\n))\nTableCaption.displayName = \"TableCaption\"\n\nexport {\n  Table,\n  TableHeader,\n  TableBody,\n  TableFooter,\n  TableHead,\n  TableRow,\n  TableCell,\n  TableCaption,\n}\n"
  },
  {
    "path": "src\\components\\ui\\tabs.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as TabsPrimitive from \"@radix-ui/react-tabs\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst Tabs = TabsPrimitive.Root\n\nconst TabsList = React.forwardRef<\n  React.ElementRef<typeof TabsPrimitive.List>,\n  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>\n>(({ className, ...props }, ref) => (\n  <TabsPrimitive.List\n    ref={ref}\n    className={cn(\n      \"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground\",\n      className\n    )}\n    {...props}\n  />\n))\nTabsList.displayName = TabsPrimitive.List.displayName\n\nconst TabsTrigger = React.forwardRef<\n  React.ElementRef<typeof TabsPrimitive.Trigger>,\n  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>\n>(({ className, ...props }, ref) => (\n  <TabsPrimitive.Trigger\n    ref={ref}\n    className={cn(\n      \"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm\",\n      className\n    )}\n    {...props}\n  />\n))\nTabsTrigger.displayName = TabsPrimitive.Trigger.displayName\n\nconst TabsContent = React.forwardRef<\n  React.ElementRef<typeof TabsPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>\n>(({ className, ...props }, ref) => (\n  <TabsPrimitive.Content\n    ref={ref}\n    className={cn(\n      \"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2\",\n      className\n    )}\n    {...props}\n  />\n))\nTabsContent.displayName = TabsPrimitive.Content.displayName\n\nexport { Tabs, TabsList, TabsTrigger, TabsContent }\n"
  },
  {
    "path": "src\\components\\ui\\textarea.tsx",
    "content": "import * as React from 'react';\n\nimport {cn} from '@/lib/utils';\n\nconst Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(\n  ({className, ...props}, ref) => {\n    return (\n      <textarea\n        className={cn(\n          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',\n          className\n        )}\n        ref={ref}\n        {...props}\n      />\n    );\n  }\n);\nTextarea.displayName = 'Textarea';\n\nexport {Textarea};\n"
  },
  {
    "path": "src\\components\\ui\\toast.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as ToastPrimitives from \"@radix-ui/react-toast\"\nimport { cva, type VariantProps } from \"class-variance-authority\"\nimport { X } from \"lucide-react\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst ToastProvider = ToastPrimitives.Provider\n\nconst ToastViewport = React.forwardRef<\n  React.ElementRef<typeof ToastPrimitives.Viewport>,\n  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>\n>(({ className, ...props }, ref) => (\n  <ToastPrimitives.Viewport\n    ref={ref}\n    className={cn(\n      \"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]\",\n      className\n    )}\n    {...props}\n  />\n))\nToastViewport.displayName = ToastPrimitives.Viewport.displayName\n\nconst toastVariants = cva(\n  \"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full\",\n  {\n    variants: {\n      variant: {\n        default: \"border bg-background text-foreground\",\n        destructive:\n          \"destructive group border-destructive bg-destructive text-destructive-foreground\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n    },\n  }\n)\n\nconst Toast = React.forwardRef<\n  React.ElementRef<typeof ToastPrimitives.Root>,\n  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &\n    VariantProps<typeof toastVariants>\n>(({ className, variant, ...props }, ref) => {\n  return (\n    <ToastPrimitives.Root\n      ref={ref}\n      className={cn(toastVariants({ variant }), className)}\n      {...props}\n    />\n  )\n})\nToast.displayName = ToastPrimitives.Root.displayName\n\nconst ToastAction = React.forwardRef<\n  React.ElementRef<typeof ToastPrimitives.Action>,\n  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>\n>(({ className, ...props }, ref) => (\n  <ToastPrimitives.Action\n    ref={ref}\n    className={cn(\n      \"inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive\",\n      className\n    )}\n    {...props}\n  />\n))\nToastAction.displayName = ToastPrimitives.Action.displayName\n\nconst ToastClose = React.forwardRef<\n  React.ElementRef<typeof ToastPrimitives.Close>,\n  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>\n>(({ className, ...props }, ref) => (\n  <ToastPrimitives.Close\n    ref={ref}\n    className={cn(\n      \"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600\",\n      className\n    )}\n    toast-close=\"\"\n    {...props}\n  >\n    <X className=\"h-4 w-4\" />\n  </ToastPrimitives.Close>\n))\nToastClose.displayName = ToastPrimitives.Close.displayName\n\nconst ToastTitle = React.forwardRef<\n  React.ElementRef<typeof ToastPrimitives.Title>,\n  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>\n>(({ className, ...props }, ref) => (\n  <ToastPrimitives.Title\n    ref={ref}\n    className={cn(\"text-sm font-semibold\", className)}\n    {...props}\n  />\n))\nToastTitle.displayName = ToastPrimitives.Title.displayName\n\nconst ToastDescription = React.forwardRef<\n  React.ElementRef<typeof ToastPrimitives.Description>,\n  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>\n>(({ className, ...props }, ref) => (\n  <ToastPrimitives.Description\n    ref={ref}\n    className={cn(\"text-sm opacity-90\", className)}\n    {...props}\n  />\n))\nToastDescription.displayName = ToastPrimitives.Description.displayName\n\ntype ToastProps = React.ComponentPropsWithoutRef<typeof Toast>\n\ntype ToastActionElement = React.ReactElement<typeof ToastAction>\n\nexport {\n  type ToastProps,\n  type ToastActionElement,\n  ToastProvider,\n  ToastViewport,\n  Toast,\n  ToastTitle,\n  ToastDescription,\n  ToastClose,\n  ToastAction,\n}\n"
  },
  {
    "path": "src\\components\\ui\\toaster.tsx",
    "content": "\"use client\"\n\nimport { useToast } from \"@/hooks/use-toast\"\nimport {\n  Toast,\n  ToastClose,\n  ToastDescription,\n  ToastProvider,\n  ToastTitle,\n  ToastViewport,\n} from \"@/components/ui/toast\"\n\nexport function Toaster() {\n  const { toasts } = useToast()\n\n  return (\n    <ToastProvider>\n      {toasts.map(function ({ id, title, description, action, ...props }) {\n        return (\n          <Toast key={id} {...props}>\n            <div className=\"grid gap-1\">\n              {title && <ToastTitle>{title}</ToastTitle>}\n              {description && (\n                <ToastDescription>{description}</ToastDescription>\n              )}\n            </div>\n            {action}\n            <ToastClose />\n          </Toast>\n        )\n      })}\n      <ToastViewport />\n    </ToastProvider>\n  )\n}\n"
  },
  {
    "path": "src\\components\\ui\\tooltip.tsx",
    "content": "\"use client\"\n\nimport * as React from \"react\"\nimport * as TooltipPrimitive from \"@radix-ui/react-tooltip\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst TooltipProvider = TooltipPrimitive.Provider\n\nconst Tooltip = TooltipPrimitive.Root\n\nconst TooltipTrigger = TooltipPrimitive.Trigger\n\nconst TooltipContent = React.forwardRef<\n  React.ElementRef<typeof TooltipPrimitive.Content>,\n  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>\n>(({ className, sideOffset = 4, ...props }, ref) => (\n  <TooltipPrimitive.Content\n    ref={ref}\n    sideOffset={sideOffset}\n    className={cn(\n      \"z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2\",\n      className\n    )}\n    {...props}\n  />\n))\nTooltipContent.displayName = TooltipPrimitive.Content.displayName\n\nexport { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }\n"
  },
  {
    "path": "src\\components\\whatsapp-button.tsx",
    "content": "\nimport Link from 'next/link';\nimport { Button } from '@/components/ui/button';\nimport { Phone } from 'lucide-react'; // Using Phone icon as WhatsApp is not standard in lucide\n\nexport function WhatsAppButton() {\n  const whatsappNumber = \"573167835605\"; // Updated WhatsApp number (include country code without + or spaces)\n  const message = \"Hola, me gustaría solicitar una cotización.\"; // Default message\n\n  // Ensure message is URL encoded\n  const encodedMessage = encodeURIComponent(message);\n  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;\n\n  return (\n    <Link\n      href={whatsappLink}\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n      className=\"fixed bottom-6 right-6 z-40\"\n      aria-label=\"Contactar por WhatsApp\"\n    >\n      <Button\n        size=\"icon\"\n        className=\"bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-14 w-14 shadow-lg\"\n      >\n        {/* Using a simple phone icon */}\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          viewBox=\"0 0 24 24\"\n          fill=\"currentColor\"\n          className=\"h-7 w-7\"\n        >\n          <path d=\"M19.5 15.5c-1.1 0-2.15-.35-3.08-.99-.35-.24-.8-.21-1.11.08l-1.61 1.61c-2.61-1.33-4.78-3.5-6.11-6.11l1.61-1.61c.29-.31.32-.76.08-1.11C8.85 6.65 8.5 5.6 8.5 4.5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z\" />\n        </svg>\n      </Button>\n    </Link>\n  );\n}\n"
  },
  {
    "path": "src\\hooks\\use-mobile.tsx",
    "content": "import * as React from \"react\"\n\nconst MOBILE_BREAKPOINT = 768\n\nexport function useIsMobile() {\n  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)\n\n  React.useEffect(() => {\n    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)\n    const onChange = () => {\n      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)\n    }\n    mql.addEventListener(\"change\", onChange)\n    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)\n    return () => mql.removeEventListener(\"change\", onChange)\n  }, [])\n\n  return !!isMobile\n}\n"
  },
  {
    "path": "src\\hooks\\use-toast.ts",
    "content": "\"use client\"\n\n// Inspired by react-hot-toast library\nimport * as React from \"react\"\n\nimport type {\n  ToastActionElement,\n  ToastProps,\n} from \"@/components/ui/toast\"\n\nconst TOAST_LIMIT = 1\nconst TOAST_REMOVE_DELAY = 1000000\n\ntype ToasterToast = ToastProps & {\n  id: string\n  title?: React.ReactNode\n  description?: React.ReactNode\n  action?: ToastActionElement\n}\n\nconst actionTypes = {\n  ADD_TOAST: \"ADD_TOAST\",\n  UPDATE_TOAST: \"UPDATE_TOAST\",\n  DISMISS_TOAST: \"DISMISS_TOAST\",\n  REMOVE_TOAST: \"REMOVE_TOAST\",\n} as const\n\nlet count = 0\n\nfunction genId() {\n  count = (count + 1) % Number.MAX_SAFE_INTEGER\n  return count.toString()\n}\n\ntype ActionType = typeof actionTypes\n\ntype Action =\n  | {\n      type: ActionType[\"ADD_TOAST\"]\n      toast: ToasterToast\n    }\n  | {\n      type: ActionType[\"UPDATE_TOAST\"]\n      toast: Partial<ToasterToast>\n    }\n  | {\n      type: ActionType[\"DISMISS_TOAST\"]\n      toastId?: ToasterToast[\"id\"]\n    }\n  | {\n      type: ActionType[\"REMOVE_TOAST\"]\n      toastId?: ToasterToast[\"id\"]\n    }\n\ninterface State {\n  toasts: ToasterToast[]\n}\n\nconst toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()\n\nconst addToRemoveQueue = (toastId: string) => {\n  if (toastTimeouts.has(toastId)) {\n    return\n  }\n\n  const timeout = setTimeout(() => {\n    toastTimeouts.delete(toastId)\n    dispatch({\n      type: \"REMOVE_TOAST\",\n      toastId: toastId,\n    })\n  }, TOAST_REMOVE_DELAY)\n\n  toastTimeouts.set(toastId, timeout)\n}\n\nexport const reducer = (state: State, action: Action): State => {\n  switch (action.type) {\n    case \"ADD_TOAST\":\n      return {\n        ...state,\n        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),\n      }\n\n    case \"UPDATE_TOAST\":\n      return {\n        ...state,\n        toasts: state.toasts.map((t) =>\n          t.id === action.toast.id ? { ...t, ...action.toast } : t\n        ),\n      }\n\n    case \"DISMISS_TOAST\": {\n      const { toastId } = action\n\n      // ! Side effects ! - This could be extracted into a dismissToast() action,\n      // but I'll keep it here for simplicity\n      if (toastId) {\n        addToRemoveQueue(toastId)\n      } else {\n        state.toasts.forEach((toast) => {\n          addToRemoveQueue(toast.id)\n        })\n      }\n\n      return {\n        ...state,\n        toasts: state.toasts.map((t) =>\n          t.id === toastId || toastId === undefined\n            ? {\n                ...t,\n                open: false,\n              }\n            : t\n        ),\n      }\n    }\n    case \"REMOVE_TOAST\":\n      if (action.toastId === undefined) {\n        return {\n          ...state,\n          toasts: [],\n        }\n      }\n      return {\n        ...state,\n        toasts: state.toasts.filter((t) => t.id !== action.toastId),\n      }\n  }\n}\n\nconst listeners: Array<(state: State) => void> = []\n\nlet memoryState: State = { toasts: [] }\n\nfunction dispatch(action: Action) {\n  memoryState = reducer(memoryState, action)\n  listeners.forEach((listener) => {\n    listener(memoryState)\n  })\n}\n\ntype Toast = Omit<ToasterToast, \"id\">\n\nfunction toast({ ...props }: Toast) {\n  const id = genId()\n\n  const update = (props: ToasterToast) =>\n    dispatch({\n      type: \"UPDATE_TOAST\",\n      toast: { ...props, id },\n    })\n  const dismiss = () => dispatch({ type: \"DISMISS_TOAST\", toastId: id })\n\n  dispatch({\n    type: \"ADD_TOAST\",\n    toast: {\n      ...props,\n      id,\n      open: true,\n      onOpenChange: (open) => {\n        if (!open) dismiss()\n      },\n    },\n  })\n\n  return {\n    id: id,\n    dismiss,\n    update,\n  }\n}\n\nfunction useToast() {\n  const [state, setState] = React.useState<State>(memoryState)\n\n  React.useEffect(() => {\n    listeners.push(setState)\n    return () => {\n      const index = listeners.indexOf(setState)\n      if (index > -1) {\n        listeners.splice(index, 1)\n      }\n    }\n  }, [state])\n\n  return {\n    ...state,\n    toast,\n    dismiss: (toastId?: string) => dispatch({ type: \"DISMISS_TOAST\", toastId }),\n  }\n}\n\nexport { useToast, toast }\n"
  },
  {
    "path": "src\\lib\\utils.ts",
    "content": "import { clsx, type ClassValue } from \"clsx\"\nimport { twMerge } from \"tailwind-merge\"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n"
  },
  {
    "path": "docs\\blueprint.md",
    "content": "# **App Name**: GA Solutions Web\n\n## Core Features:\n\n- Responsive Design: Responsive design: Ensure the website adapts seamlessly to different screen sizes (desktop, tablet, mobile).\n- Service Cards: Service Cards: Create visually appealing cards to display services with icons and brief descriptions.\n- Portfolio Gallery: Portfolio Gallery: Implement a photo gallery showcasing before/after project images with descriptions of the project, client, location, and technical challenges.\n\n## Style Guidelines:\n\n- Primary color: Dark blue (#003366) to convey professionalism and trust.\n- Secondary color: Light gray (#F2F2F2) for clean backgrounds and content separation.\n- Accent: Electric blue (#7DF9FF) for highlights, buttons, and calls to action.\n- Clean, modern layout with clear section divisions and a fixed header.\n- Use of industry-related icons (e.g., electricity symbols, gears, tools) for services and features."
  },
  {
    "path": ".env.example",
    "content": "# Autek Ingeniería - Environment Variables Template\n# Copy this file to .env.local for local development. DO NOT commit .env.local to version control.\n\n# Email Service Configuration (Nodemailer)\nEMAIL_HOST=smtp.gmail.com\nEMAIL_PORT=587\nEMAIL_USER=your-email@gmail.com\nEMAIL_PASS=your-gmail-app-password\nEMAIL_FROM=your-email@gmail.com\n\n# Firebase / GenAI Configuration\nGOOGLE_GENAI_API_KEY=your-google-genai-api-key\nNEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key\nNEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com\nNEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id\nNEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com\nNEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id\nNEXT_PUBLIC_FIREBASE_APP_ID=your-app-id\n"
  },
  {
    "path": "package.json",
    "content": "{\n  \"name\": \"nextn\",\n  \"version\": \"0.1.0\",\n  \"private\": true,\n  \"scripts\": {\n    \"dev\": \"next dev --turbopack -p 9002\",\n    \"genkit:dev\": \"genkit start -- tsx src/ai/dev.ts\",\n    \"genkit:watch\": \"genkit start -- tsx --watch src/ai/dev.ts\",\n    \"build\": \"next build\",\n    \"start\": \"next start\",\n    \"lint\": \"next lint\",\n    \"typecheck\": \"tsc --noEmit\"\n  },\n  \"dependencies\": {\n    \"@genkit-ai/googleai\": \"^1.6.2\",\n    \"@genkit-ai/next\": \"^1.6.2\",\n    \"@hookform/resolvers\": \"^4.1.3\",\n    \"@radix-ui/react-accordion\": \"^1.2.3\",\n    \"@radix-ui/react-alert-dialog\": \"^1.1.6\",\n    \"@radix-ui/react-avatar\": \"^1.1.3\",\n    \"@radix-ui/react-checkbox\": \"^1.1.4\",\n    \"@radix-ui/react-dialog\": \"^1.1.6\",\n    \"@radix-ui/react-dropdown-menu\": \"^2.1.6\",\n    \"@radix-ui/react-label\": \"^2.1.2\",\n    \"@radix-ui/react-menubar\": \"^1.1.6\",\n    \"@radix-ui/react-popover\": \"^1.1.6\",\n    \"@radix-ui/react-progress\": \"^1.1.2\",\n    \"@radix-ui/react-radio-group\": \"^1.2.3\",\n    \"@radix-ui/react-scroll-area\": \"^1.2.3\",\n    \"@radix-ui/react-select\": \"^2.1.6\",\n    \"@radix-ui/react-separator\": \"^1.1.2\",\n    \"@radix-ui/react-slider\": \"^1.2.3\",\n    \"@radix-ui/react-slot\": \"^1.1.2\",\n    \"@radix-ui/react-switch\": \"^1.1.3\",\n    \"@radix-ui/react-tabs\": \"^1.1.3\",\n    \"@radix-ui/react-toast\": \"^1.2.6\",\n    \"@radix-ui/react-tooltip\": \"^1.1.8\",\n    \"@tanstack-query-firebase/react\": \"^1.0.5\",\n    \"@tanstack/react-query\": \"^5.66.0\",\n    \"class-variance-authority\": \"^0.7.1\",\n    \"clsx\": \"^2.1.1\",\n    \"date-fns\": \"^3.6.0\",\n    \"embla-carousel-autoplay\": \"^8.1.0\",\n    \"embla-carousel-react\": \"^8.1.9\",\n    \"firebase\": \"^11.3.0\",\n    \"genkit\": \"^1.6.2\",\n    \"lucide-react\": \"^0.475.0\",\n    \"next\": \"15.2.8\",\n    \"nodemailer\": \"^6.9.14\",\n    \"patch-package\": \"^8.0.0\",\n    \"react\": \"^18.3.1\",\n    \"react-day-picker\": \"^8.10.1\",\n    \"react-dom\": \"^18.3.1\",\n    \"react-hook-form\": \"^7.54.2\",\n    \"recharts\": \"^2.15.1\",\n    \"tailwind-merge\": \"^3.0.1\",\n    \"tailwindcss-animate\": \"^1.0.7\",\n    \"zod\": \"^3.24.2\"\n  },\n  \"devDependencies\": {\n    \"@types/node\": \"^20\",\n    \"@types/nodemailer\": \"^6.4.15\",\n    \"@types/react\": \"^18\",\n    \"@types/react-dom\": \"^18\",\n    \"genkit-cli\": \"^1.6.1\",\n    \"postcss\": \"^8\",\n    \"tailwindcss\": \"^3.4.1\",\n    \"typescript\": \"^5\"\n  }\n}\n"
  },
  {
    "path": "tsconfig.json",
    "content": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2017\",\n    \"lib\": [\"dom\", \"dom.iterable\", \"esnext\"],\n    \"allowJs\": true,\n    \"skipLibCheck\": true,\n    \"strict\": true,\n    \"noEmit\": true,\n    \"esModuleInterop\": true,\n    \"module\": \"esnext\",\n    \"moduleResolution\": \"bundler\",\n    \"resolveJsonModule\": true,\n    \"isolatedModules\": true,\n    \"jsx\": \"preserve\",\n    \"incremental\": true,\n    \"plugins\": [\n      {\n        \"name\": \"next\"\n      }\n    ],\n    \"paths\": {\n      \"@/*\": [\"./src/*\"]\n    }\n  },\n  \"include\": [\"next-env.d.ts\", \"**/*.ts\", \"**/*.tsx\", \".next/types/**/*.ts\"],\n  \"exclude\": [\"node_modules\"]\n}\n"
  },
  {
    "path": "tailwind.config.ts",
    "content": "import type { Config } from \"tailwindcss\";\n\nexport default {\n    darkMode: [\"class\"],\n    content: [\n    \"./src/pages/**/*.{js,ts,jsx,tsx,mdx}\",\n    \"./src/components/**/*.{js,ts,jsx,tsx,mdx}\",\n    \"./src/app/**/*.{js,ts,jsx,tsx,mdx}\",\n  ],\n  theme: {\n  \textend: {\n  \t\tcolors: {\n  \t\t\tbackground: 'hsl(var(--background))',\n  \t\t\tforeground: 'hsl(var(--foreground))',\n  \t\t\tcard: {\n  \t\t\t\tDEFAULT: 'hsl(var(--card))',\n  \t\t\t\tforeground: 'hsl(var(--card-foreground))'\n  \t\t\t},\n  \t\t\tpopover: {\n  \t\t\t\tDEFAULT: 'hsl(var(--popover))',\n  \t\t\t\tforeground: 'hsl(var(--popover-foreground))'\n  \t\t\t},\n  \t\t\tprimary: {\n  \t\t\t\tDEFAULT: 'hsl(var(--primary))',\n  \t\t\t\tforeground: 'hsl(var(--primary-foreground))'\n  \t\t\t},\n  \t\t\tsecondary: {\n  \t\t\t\tDEFAULT: 'hsl(var(--secondary))',\n  \t\t\t\tforeground: 'hsl(var(--secondary-foreground))'\n  \t\t\t},\n  \t\t\tmuted: {\n  \t\t\t\tDEFAULT: 'hsl(var(--muted))',\n  \t\t\t\tforeground: 'hsl(var(--muted-foreground))'\n  \t\t\t},\n  \t\t\taccent: {\n  \t\t\t\tDEFAULT: 'hsl(var(--accent))',\n  \t\t\t\tforeground: 'hsl(var(--accent-foreground))'\n  \t\t\t},\n  \t\t\tdestructive: {\n  \t\t\t\tDEFAULT: 'hsl(var(--destructive))',\n  \t\t\t\tforeground: 'hsl(var(--destructive-foreground))'\n  \t\t\t},\n  \t\t\tborder: 'hsl(var(--border))',\n  \t\t\tinput: 'hsl(var(--input))',\n  \t\t\tring: 'hsl(var(--ring))',\n  \t\t\tchart: {\n  \t\t\t\t'1': 'hsl(var(--chart-1))',\n  \t\t\t\t'2': 'hsl(var(--chart-2))',\n  \t\t\t\t'3': 'hsl(var(--chart-3))',\n  \t\t\t\t'4': 'hsl(var(--chart-4))',\n  \t\t\t\t'5': 'hsl(var(--chart-5))'\n  \t\t\t},\n  \t\t\tsidebar: {\n  \t\t\t\tDEFAULT: 'hsl(var(--sidebar-background))',\n  \t\t\t\tforeground: 'hsl(var(--sidebar-foreground))',\n  \t\t\t\tprimary: 'hsl(var(--sidebar-primary))',\n  \t\t\t\t'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',\n  \t\t\t\taccent: 'hsl(var(--sidebar-accent))',\n  \t\t\t\t'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',\n  \t\t\t\tborder: 'hsl(var(--sidebar-border))',\n  \t\t\t\tring: 'hsl(var(--sidebar-ring))'\n  \t\t\t}\n  \t\t},\n  \t\tborderRadius: {\n  \t\t\tlg: 'var(--radius)',\n  \t\t\tmd: 'calc(var(--radius) - 2px)',\n  \t\t\tsm: 'calc(var(--radius) - 4px)'\n  \t\t},\n  \t\tkeyframes: {\n  \t\t\t'accordion-down': {\n  \t\t\t\tfrom: {\n  \t\t\t\t\theight: '0'\n  \t\t\t\t},\n  \t\t\t\tto: {\n  \t\t\t\t\theight: 'var(--radix-accordion-content-height)'\n  \t\t\t\t}\n  \t\t\t},\n  \t\t\t'accordion-up': {\n  \t\t\t\tfrom: {\n  \t\t\t\t\theight: 'var(--radix-accordion-content-height)'\n  \t\t\t\t},\n  \t\t\t\tto: {\n  \t\t\t\t\theight: '0'\n  \t\t\t\t}\n  \t\t\t}\n  \t\t},\n  \t\tanimation: {\n  \t\t\t'accordion-down': 'accordion-down 0.2s ease-out',\n  \t\t\t'accordion-up': 'accordion-up 0.2s ease-out'\n  \t\t}\n  \t}\n  },\n  plugins: [require(\"tailwindcss-animate\")],\n} satisfies Config;\n"
  },
  {
    "path": "postcss.config.mjs",
    "content": "/** @type {import('postcss-load-config').Config} */\nconst config = {\n  plugins: {\n    tailwindcss: {},\n  },\n};\n\nexport default config;\n"
  },
  {
    "path": "next.config.ts",
    "content": "\nimport type {NextConfig} from 'next';\n\nconst nextConfig: NextConfig = {\n  /* config options here */\n  typescript: {\n    ignoreBuildErrors: true,\n  },\n  eslint: {\n    ignoreDuringBuilds: true,\n  },\n  images: {\n    remotePatterns: [\n      {\n        protocol: 'https',\n        hostname: 'picsum.photos',\n        port: '',\n        pathname: '/**',\n      },\n      { // Add new pattern for Firebase Storage\n        protocol: 'https',\n        hostname: 'firebasestorage.googleapis.com',\n        port: '',\n        pathname: '/**',\n      },\n    ],\n  },\n};\n\nexport default nextConfig;\n"
  },
  {
    "path": "components.json",
    "content": "{\n  \"$schema\": \"https://ui.shadcn.com/schema.json\",\n  \"style\": \"default\",\n  \"rsc\": true,\n  \"tsx\": true,\n  \"tailwind\": {\n    \"config\": \"tailwind.config.ts\",\n    \"css\": \"src/app/globals.css\",\n    \"baseColor\": \"neutral\",\n    \"cssVariables\": true,\n    \"prefix\": \"\"\n  },\n  \"aliases\": {\n    \"components\": \"@/components\",\n    \"utils\": \"@/lib/utils\",\n    \"ui\": \"@/components/ui\",\n    \"lib\": \"@/lib\",\n    \"hooks\": \"@/hooks\"\n  },\n  \"iconLibrary\": \"lucide\"\n}"
  },
  {
    "path": ".gitignore",
    "content": "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.*\n.yarn/*\n!.yarn/patches\n!.yarn/plugins\n!.yarn/releases\n!.yarn/versions\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n.pnpm-debug.log*\n\n# vercel\n.vercel\n\n# typescript\n*.tsbuildinfo\nnext-env.d.ts\n\n.genkit/*\n.env*\n!.env.example\n\n# IDE & local metadata\n.vscode/\nstudio.json\n.modified\n"
  },
  {
    "path": "firebase.json",
    "content": "{\n  \"apphosting\": {\n    \"backendId\": \"studio\",\n    \"rootDir\": \"./\",\n    \"ignore\": [\n      \"node_modules\",\n      \".git\",\n      \"firebase-debug.log\",\n      \"firebase-debug.*.log\"\n    ]\n  }\n}\n"
  },
  {
    "path": ".firebaserc",
    "content": "{\n  \"projects\": {\n    \"default\": \"ga-solutions-web\"\n  }\n}"
  },
  {
    "path": "README.md",
    "content": "# Autek Ingeniería - Plataforma Web Industrial 🚀\n\nBienvenido al repositorio oficial del sitio web y catálogo digital de **Autek Ingeniería**, especialistas en soluciones integrales de ingeniería industrial, maquinaria para procesamiento de alimentos, calderas, tableros de control y automatización de procesos.\n\n---\n\n## 🛠️ Tecnologías Utilizadas\n\n- **Framework principal:** [Next.js 15](https://nextjs.org/) (App Router)\n- **Biblioteca de UI:** [React 18](https://react.dev/)\n- **Estilos & Diseño:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)\n- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)\n- **Servicio de Correo:** [Nodemailer](https://nodemailer.com/) (con fallback seguro simulado para entorno de desarrollo)\n- **IA & Backend:** [Firebase App Hosting](https://firebase.google.com/) & [Genkit AI Framework](https://firebase.google.com/docs/genkit)\n\n---\n\n## ✨ Características Principales\n\n1. **Diseño Adaptativo (Responsive Design):** Experiencia optimizada para dispositivos móviles, tabletas y computadoras de escritorio.\n2. **Catálogo de Servicios y Equipos:** Presentación visual de maquinaria industrial (bandas transportadoras, hiladoras, mezcladores, calderas, ciclónicos, tanques industriales y tableros de control).\n3. **Galería de Portafolio:** Exhibición de proyectos ejecutados con imágenes de alta resolución, retos técnicos solucionados y resultados de clientes.\n4. **Formulario de Contacto Seguro:** Integración con Server Actions de Next.js y Nodemailer con sanitización de inputs mediante Zod.\n5. **Arquitectura Limpia & Seguridad:** Estricta separación de variables de entorno y prevención de fugas de credenciales.\n\n---\n\n## 🔑 Configuración del Entorno de Desarrollo\n\n1. **Clonar el repositorio:**\n   ```bash\n   git clone https://github.com/alvaradogilbert130/autek-ingenieria-web.git\n   cd autek-ingenieria-web\n   ```\n\n2. **Instalar dependencias:**\n   ```bash\n   npm install\n   ```\n\n3. **Configurar Variables de Entorno:**\n   Copia el archivo `.env.example` para crear tu entorno local:\n   ```bash\n   cp .env.example .env.local\n   ```\n   *Nota: Nunca subas `.env.local` al control de versiones.*\n\n---\n\n## 💻 Comandos Disponibles\n\n- **Iniciar servidor de desarrollo:**\n  ```bash\n  npm run dev\n  ```\n  Abre [http://localhost:9002](http://localhost:9002) en tu navegador.\n\n- **Verificación de Tipos (TypeScript):**\n  ```bash\n  npm run typecheck\n  ```\n\n- **Compilar para Producción:**\n  ```bash\n  npm run build\n  ```\n\n- **Ejecutar servidor de Producción:**\n  ```bash\n  npm start\n  ```\n\n---\n\n## 🛡️ Seguridad & Buenas Prácticas\n\n- Ninguna clave de API, contraseña de correo o credencial privada está hardcodeada en el código fuente.\n- Todas las variables sensibles son administradas mediante variables de entorno en tiempo de ejecución.\n- Los mensajes enviados a través del formulario de contacto son sanitizados usando esquemas descriptivos Zod.\n\n---\n\n## 🚀 Despliegue\n\nEste proyecto está configurado para desplegarse en **Firebase App Hosting**. Para desplegar una versión en la nube:\n\n```bash\nnpx firebase deploy\n```\n\n---\n\n© 2026 **Autek Ingeniería**. Todos los derechos reservados.\n"
  }
]
```

### `src\ai\ai-instance.ts`
```ts
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});

```

### `src\ai\dev.ts`
```ts
// Flows will be imported for their side effects in this file.

```

### `src\app\globals.css`
```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%; /* Rich Dark Slate #0f172a */
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 210 100% 20%; /* Dark Blue #003366 */
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%; /* Soft Light Gray #f1f5f9 */
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 38%; /* Darker slate for high contrast text #475569 */
    --accent: 184 100% 74%; /* Electric Blue #7DF9FF */
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 210 100% 20%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  /* Contact Form Labels */
  .custom-form-label {
    color: #1e293b !important;
    font-weight: 600 !important;
    font-size: 0.9rem !important;
    margin-bottom: 0.4rem !important;
    display: block !important;
  }

  /* Contact Form Inputs & Textarea */
  .custom-form-input {
    color: #0f172a !important;
    background-color: #ffffff !important;
    border: 1px solid #cbd5e1 !important;
    border-radius: 0.5rem !important;
    padding: 0.75rem 1rem !important;
    font-size: 0.95rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
    transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
  }

  .custom-form-input:focus {
    border-color: #0284c7 !important;
    outline: none !important;
    box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.2) !important;
  }

  /* Contact Form Native & Radix Dropdown Select */
  .custom-form-select {
    color: #0f172a !important;
    background-color: #ffffff !important;
    border: 1px solid #cbd5e1 !important;
    border-radius: 0.5rem !important;
    padding: 0.75rem 2.5rem 0.75rem 1rem !important;
    font-size: 0.95rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e") !important;
    background-repeat: no-repeat !important;
    background-position: right 1rem center !important;
    background-size: 1.25rem !important;
    cursor: pointer !important;
    transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
  }

  .custom-form-select option {
    color: #0f172a !important;
    background-color: #ffffff !important;
  }

  .custom-form-select:focus {
    border-color: #0284c7 !important;
    outline: none !important;
    box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.2) !important;
  }

  /* Target Radix Select Trigger if present */
  [role="combobox"].custom-form-select {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
  }
}


```

### `src\app\layout.tsx`
```tsx

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import Providers from '@/components/providers'; // Import Providers

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fabricación de Tableros de Control y Automatización Industrial | Autek Colombia',
  description: 'Diseño y ensamble de tableros eléctricos de control, CCM, programación de PLC y variadores en Bucaramanga y Colombia. Proyectos llave en mano con planos RETIE.',
  keywords: 'fabricacion de tableros de control bucaramanga, tableros electricos industriales colombia, integracion plc bucaramanga, ccm control de motores, automatizacion maquinaria alimentos',
  authors: [{ name: 'Autek Ingeniería' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Fabricación de Tableros de Control y Automatización Industrial | Autek Colombia',
    description: 'Diseño y ensamble de tableros eléctricos de control, CCM, programación de PLC y variadores en Bucaramanga y Colombia. Proyectos llave en mano con planos RETIE.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.autekcolombia.com',
    siteName: 'Autek Ingeniería',
    images: [
      {
        url: '/images/inicio_1.png',
        width: 1200,
        height: 630,
        alt: 'Fabricación de Tableros de Control y Automatización Industrial',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fabricación de Tableros de Control y Automatización Industrial | Autek Colombia',
    description: 'Diseño y ensamble de tableros eléctricos de control, CCM, programación de PLC y variadores en Bucaramanga y Colombia. Proyectos llave en mano con planos RETIE.',
    images: ['/images/inicio_1.png'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.autekcolombia.com',
  },
  icons: {
    icon: '/images/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EngineeringService',
  name: 'Autek Ingeniería',
  image: 'https://www.autekcolombia.com/images/inicio_1.png',
  url: 'https://www.autekcolombia.com',
  telephone: '+57-316-7835605',
  email: 'autekingenieria@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bucaramanga',
    addressRegion: 'Santander',
    addressCountry: 'CO',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Bucaramanga',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Santander',
    },
    {
      '@type': 'Country',
      name: 'Colombia',
    },
  ],
  description:
    'Diseño y ensamble de tableros eléctricos de control, CCM, programación de PLC y variadores en Bucaramanga y Colombia. Proyectos llave en mano con planos RETIE.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Ingeniería Electromecánica y Automatización Industrial',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Diseño y Ensamble de Tableros de Control (CCM y Automatización)',
          description:
            'Fabricación de tableros de control de motores (CCM), automatización con PLC/HMI y distribución en baja tensión bajo norma RETIE.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aliado Eléctrico para Fabricantes de Maquinaria (OEM)',
          description:
            'Integración eléctrica, diseño de control, ensamble de tableros y programación de maquinaria industrial.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Programación de PLC y HMI',
          description:
            'Desarrollo de lógica de control de procesos industriales e interfaces gráficas HMI.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instalación de Variadores de Frecuencia y Arrancadores Suaves',
          description:
            'Integración y parámetros de control de velocidad y arranque de motores en baja tensión.',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <WhatsAppButton />
          <Footer />
          <Toaster /> {/* Add Toaster for notifications */}
        </Providers>
      </body>
    </html>
  );
}

```

### `src\app\page.tsx`
```tsx
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

```

### `src\app\robots.ts`
```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.autekcolombia.com'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}

```

### `src\app\actions\send-contact-email.ts`
```ts

'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  companyRole: z.string().optional(),
  phone: z.string().min(7, { message: "Por favor, introduce un número de teléfono o WhatsApp válido." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  clientType: z.string().min(1, { message: "Por favor, selecciona el tipo de cliente." }),
  projectRequirement: z.string().min(1, { message: "Por favor, selecciona el requerimiento principal." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(data: ContactFormInput): Promise<{ success: boolean; message: string }> {
  const parsedData = contactFormSchema.safeParse(data);
  if (!parsedData.success) {
    const errorMessages = parsedData.error.errors.map(err => err.message).join(' ');
    return { success: false, message: `Datos inválidos: ${errorMessages}` };
  }

  const { name, companyRole, phone, email, clientType, projectRequirement, message } = parsedData.data;

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
  const emailPort = parseInt(process.env.EMAIL_PORT || '587', 10);
  const emailFrom = process.env.EMAIL_FROM || emailUser || 'no-reply@autekingenieria.com';

  if (!emailUser || !emailPass) {
    console.warn('Email credentials (EMAIL_USER, EMAIL_PASS) are not configured. Email sending is simulated.');
    console.log('Simulated email sending:', parsedData.data);
    return { success: true, message: 'Solicitud de propuesta técnica recibida con éxito. Nos pondremos en contacto a la brevedad.' };
  }

  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailPort === 465,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${emailFrom}>`, 
    to: 'autekingenieria@gmail.com',
    replyTo: email,
    subject: `Solicitud de Propuesta Técnica - ${name} (${companyRole || clientType})`,
    html: `
      <h2>Nueva Solicitud de Cotización / Propuesta Técnica</h2>
      <p>Se ha recibido una consulta de proyecto a través de autekcolombia.com:</p>
      <ul>
        <li><strong>Nombre Completo:</strong> ${name}</li>
        <li><strong>Empresa y Cargo:</strong> ${companyRole || 'No especificado'}</li>
        <li><strong>Teléfono / WhatsApp:</strong> ${phone}</li>
        <li><strong>Correo Electrónico:</strong> ${email}</li>
        <li><strong>Tipo de Cliente:</strong> ${clientType}</li>
        <li><strong>Requerimiento Principal:</strong> ${projectRequirement}</li>
      </ul>
      <h3>Detalles del Proyecto:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr>
      <p><em>Autek Ingeniería - Sistema de Cotizaciones B2B</em></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Solicitud enviada con éxito. Un ingeniero de Autek revisará su proyecto a la brevedad.' };
  } catch (error) {
    console.error('Failed to send email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido.';
    return { success: false, message: `Error al enviar la solicitud: ${errorMessage}. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.` };
  }
}

```

### `src\app\equipos-industriales\page.tsx`
```tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Settings, ShieldAlert, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Equipos Industriales en Bucaramanga | Maquinaria en Acero Inoxidable',
  description: 'Diseño y fabricación de maquinaria industrial, bandas transportadoras, elevadores de carne y calderas en Bucaramanga. Ingeniería a la medida.',
  keywords: 'maquinaria industrial Bucaramanga, hiladora de queso Santander, mezcladores de carne Bucaramanga, bandas transportadoras Santander, calderas industriales',
};

export default function EquiposIndustrialesPage() {
  const categories = [
    {
      title: 'Industria Alimentaria',
      description: 'Sistemas automáticos y semiautomáticos en acero inoxidable para procesamiento de alimentos. Diseños higiénicos y eficientes que cumplen normas sanitarias (INVIMA).',
      image: '/images/foto_hiladora_1.jpg',
      icon: <Cpu className="h-6 w-6 text-primary" />,
      products: [
        { label: 'Hiladora Industrial de Queso', href: '/equipos-industriales/hiladora-de-queso' },
        { label: 'Tanques de Almacenamiento de Leche', href: '/equipos-industriales/tanques-de-leche' },
        { label: 'Mezclador de Carne', href: '/equipos-industriales/mezclador-de-carne' },
      ],
    },
    {
      title: 'Transporte de Materiales',
      description: 'Sistemas de bandas transportadoras y elevadores mecánicos diseñados para un flujo ágil, continuo y seguro de productos en su línea de empaque o procesamiento.',
      image: '/images/foto_banda_inclinada.jpg',
      icon: <Settings className="h-6 w-6 text-primary" />,
      products: [
        { label: 'Bandas Transportadoras', href: '/equipos-industriales/bandas-transportadoras' },
        { label: 'Elevadores de Carne (por carro/canastilla)', href: '/equipos-industriales/elevador-de-carne' },
      ],
    },
    {
      title: 'Calderas Industriales',
      description: 'Equipos de calentamiento y generación de vapor de alta eficiencia para procesos de cocción, pasteurización, esterilización y limpieza a presión en plantas.',
      image: '/images/foto_caldera_1.jpeg',
      icon: <ShieldAlert className="h-6 w-6 text-primary" />,
      products: [
        { label: 'Calderas de Vapor y Gas', href: '/equipos-industriales/calderas' },
      ],
    },
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-accent uppercase tracking-wider text-sm font-semibold mb-3 block">
            Ingeniería y Fabricación B2B
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Equipos Industriales para Optimizar su Producción
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
            Diseñamos y comercializamos equipos industriales orientados a mejorar la productividad, reducir tiempos operativos y garantizar procesos más eficientes.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#categorias">Explorar Categorías</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
              <Link href="/#contacto">Hablar con un Ingeniero</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categorias" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Categorías de Maquinaria</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nuestras soluciones abarcan sectores críticos de la manufactura y la agroindustria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Card key={cat.title} className="flex flex-col overflow-hidden shadow-lg border-none hover:shadow-xl transition-all duration-300 bg-card">
                <div className="relative h-48 w-full">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="p-2 bg-secondary rounded-lg">
                    {cat.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed text-justify">
                    {cat.description}
                  </CardDescription>
                  
                  <div className="space-y-2 pt-2 border-t border-border">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">Equipos Disponibles:</span>
                    <ul className="space-y-2">
                      {cat.products.map((prod) => (
                        <li key={prod.label}>
                          <Link href={prod.href} className="text-sm text-[#0052cc] hover:text-accent font-semibold flex items-center gap-1 transition-colors">
                            <span className="text-accent">•</span> {prod.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-primary hover:bg-primary/95 text-primary-foreground flex items-center justify-center gap-2">
                    <Link href={cat.products[0].href}>
                      Ver Equipos <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="bg-muted py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-primary mb-3">¿Tiene un proyecto o requerimiento de equipo especial?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Fabricamos maquinaria según los planos o necesidades específicas de su línea de producción. Solicite asesoría sin compromiso.
          </p>
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
            <Link href="https://wa.me/573167835605?text=Hola,%20quisiera%20cotizar%20un%20equipo%20industrial%20a%20medida." target="_blank" rel="noopener noreferrer">
              Cotizar por WhatsApp
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

```

### `src\app\equipos-industriales\bandas-transportadoras\page.tsx`
```tsx
"use client";

import React, { useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import { 
  Zap, 
  Settings, 
  Maximize2, 
  RefreshCw, 
  TrendingUp, 
  HelpCircle, 
  Phone, 
  CheckCircle,
  FileText,
  Camera
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function BandasTransportadorasPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/foto_banda_inclinada.jpg",
    "/images/foto_banda_curva.jpg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para un sistema de Bandas Transportadoras Industriales.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización de Bandas Transportadoras",
      message: "Hola, me interesa conocer más sobre las Bandas Transportadoras Industriales. Solicito una cotización formal y asesoría de diseño.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Enviada",
            description: "Hemos recibido tu solicitud de cotización. Un ingeniero se pondrá en contacto pronto.",
          });
          form.reset({
            name: "",
            email: "",
            service: "Cotización de Bandas Transportadoras",
            message: "Hola, me interesa conocer más sobre las Bandas Transportadoras Industriales. Solicito una cotización formal y asesoría de diseño.",
          });
        } else {
          toast({
            title: "Error al enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error. Por favor, vuelve a intentarlo.",
          variant: "destructive",
        });
      }
    });
  }

  const benefits = [
    {
      title: "Mayor productividad",
      description: "Optimiza los tiempos de traslado de materiales e insumos, permitiendo una mayor tasa de procesamiento.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Flujo constante de material",
      description: "Mantiene la línea de producción alimentada de forma continua para evitar paradas y cuellos de botella.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Menor esfuerzo operativo",
      description: "Reduce la manipulación física por parte del personal, disminuyendo riesgos de fatiga y lesiones laborales.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Integración con procesos automatizados",
      description: "Diseño preparado para conectarse con sensores, pesadoras, envasadoras y otros equipos de la línea.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Reducción de tiempos muertos",
      description: "Equipos de alta fiabilidad y bajo mantenimiento, minimizando interrupciones en la producción.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Plantas cárnicas", desc: "Transporte higiénico y seguro de canales, cortes y productos procesados." },
    { name: "Procesamiento de alimentos", desc: "Movimiento de materias primas, frutas, verduras y masas en ambientes limpios." },
    { name: "Líneas de empaque", desc: "Desplazamiento eficiente de envases, bandejas y cajas selladas hacia embalaje." },
    { name: "Transporte de materias primas", desc: "Alimentación continua de tolvas, mezcladoras y estaciones de dosificación." },
    { name: "Procesos de clasificación y distribución", desc: "Separación y direccionamiento de productos según características de proceso." }
  ];

  const features = [
    "Control de velocidad mediante variador de frecuencia.",
    "Operación continua y confiable.",
    "Diseño modular.",
    "Fabricación en acero inoxidable.",
    "Adaptación a diferentes capacidades y longitudes.",
    "Fácil limpieza y mantenimiento."
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Sistemas de Logística y Transporte
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Bandas Transportadoras Industriales
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Transporte eficiente para procesos continuos de producción
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Diseñamos y fabricamos bandas transportadoras industriales para optimizar el flujo de materiales dentro de plantas de procesamiento alimentario y líneas de producción.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#cotizar">Solicitar Cotización</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> WhatsApp Directo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary-foreground/10 bg-white">
            <Image
              src="/images/foto_banda_inclinada.jpg"
              alt="Bandas Transportadoras Industriales"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Left and Center: Content */}
            <div className="md:col-span-2 space-y-12 min-w-0">
              {/* Descripción General */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" /> Descripción General
                </h2>
                <hr />
                <p className="text-muted-foreground text-justify leading-relaxed mb-4">
                  Nuestras bandas transportadoras permiten el movimiento seguro y eficiente de materias primas y productos terminados, reduciendo tiempos de operación y minimizando la manipulación manual.
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  El sistema incorpora variador de frecuencia para controlar la velocidad de transporte según las necesidades específicas de cada proceso.
                </p>
              </div>

              {/* Galería de Imágenes */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" /> Galería del Equipo
                </h2>
                <hr />
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="snap-center flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md transition-shadow group">
                      <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Características Principales */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" /> Características Principales
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold text-lg mt-0.5">•</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beneficios */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" /> Beneficios
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((b) => (
                    <Card key={b.title} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors duration-200">
                      <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-primary flex items-center gap-2">
                          {b.icon} {b.title}
                        </h3>
                        <p className="text-muted-foreground text-sm text-justify">
                          {b.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Aplicaciones
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.name} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <h4 className="font-bold text-primary">{app.name}</h4>
                      <p className="text-xs text-muted-foreground text-justify">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Lead Form */}
            <div id="cotizar" className="md:col-span-1 min-w-0">
              <div className="sticky top-24 bg-card p-6 rounded-lg shadow-lg border border-border space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary">Solicitud de Cotización</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario y le enviaremos una oferta económica ajustada a su proyecto (especifique longitud, ancho y peso máximo).
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Corporativo</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input type="hidden" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Detalles de Diseño</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Requiero una banda de 4 metros de longitud, ancho de 40cm en PVC sanitario para transporte de pollo..."
                              className="min-h-[100px] text-sm"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" disabled={isPending}>
                      {isPending ? 'Enviando Solicitud...' : 'Solicitar Precios'}
                    </Button>
                  </form>
                </Form>

                <div className="text-center border-t pt-4">
                  <span className="text-xs text-muted-foreground block mb-2">O si lo prefiere</span>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" /> Hablar con Asesor
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

```

### `src\app\equipos-industriales\calderas\page.tsx`
```tsx
"use client";

import React, { useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import { 
  Zap, 
  Settings, 
  Maximize2, 
  RefreshCw, 
  TrendingUp, 
  HelpCircle, 
  Phone, 
  CheckCircle,
  FileText,
  Camera
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function CalderasPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/foto_caldera_1.jpeg",
    "/images/foto_caldera_2.jpeg",
    "/images/foto_caldera_3.jpeg",
    "/images/foto_caldera_4.jpeg",
    "/images/foto_caldera_5.jpeg",
    "/images/foto_caldera_6.jpeg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para una Caldera Industrial de vapor.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización de Caldera Industrial",
      message: "Hola, me interesa conocer más sobre las Calderas Industriales de vapor. Solicito una cotización formal y asesoría de capacidad (BHP).",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Enviada",
            description: "Hemos recibido tu solicitud de cotización. Un ingeniero se pondrá en contacto pronto.",
          });
          form.reset({
            name: "",
            email: "",
            service: "Cotización de Caldera Industrial",
            message: "Hola, me interesa conocer más sobre las Calderas Industriales de vapor. Solicito una cotización formal y asesoría de capacidad (BHP).",
          });
        } else {
          toast({
            title: "Error al enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error. Por favor, vuelve a intentarlo.",
          variant: "destructive",
        });
      }
    });
  }

  const benefits = [
    {
      title: "Alta eficiencia energética",
      description: "Maximiza la transferencia térmica reduciendo el consumo de combustible en la generación de vapor.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Operación segura y confiable",
      description: "Equipada con múltiples sistemas de protección, control de llama y válvulas de seguridad certificadas.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Adaptación a diferentes capacidades",
      description: "Diseños configurables en dimensiones y potencia térmica (BHP) para ajustarse a los requerimientos de su planta.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Bajo costo operativo",
      description: "La robustez mecánica y la facilidad de mantenimiento garantizan un ciclo de vida largo con costos mínimos.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Integración con sistemas automatizados",
      description: "Permite el monitoreo digital de presión, temperatura y niveles de agua para un control centralizado.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Plantas lácteas", desc: "Pasteurización, calentamiento de marmitas e hilado de quesos." },
    { name: "Procesamiento de alimentos", desc: "Cocción, esterilización en autoclaves y calentamiento de fluidos de proceso." },
    { name: "Cocción industrial", desc: "Suministro constante de vapor a alta temperatura para grandes lotes de producción alimentaria." },
    { name: "Procesos térmicos especializados", desc: "Intercambiadores de calor, reactores y sistemas de sanitización industrial." }
  ];

  const features = [
    "Suministro de vapor altamente eficiente.",
    "Aislamiento térmico de alta densidad.",
    "Quemadores industriales de alta tecnología.",
    "Tablero de control automatizado.",
    "Sistemas de seguridad y alarmas redundantes.",
    "Construcción bajo normas y códigos internacionales."
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Generación de Energía Térmica y Vapor
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Calderas Industriales
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Energía confiable para procesos productivos
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Nuestras calderas industriales están diseñadas para suministrar vapor y energía térmica de forma eficiente, contribuyendo a mejorar la productividad y garantizar la estabilidad de los procesos.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#cotizar">Solicitar Cotización</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> WhatsApp Directo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary-foreground/10 bg-white">
            <Image
              src="/images/foto_caldera_1.jpeg"
              alt="Calderas Industriales"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Left and Center: Content */}
            <div className="md:col-span-2 space-y-12 min-w-0">
              {/* Descripción General */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" /> Descripción General
                </h2>
                <hr />
                <p className="text-muted-foreground text-justify leading-relaxed">
                  Nuestras calderas industriales están diseñadas para suministrar vapor y energía térmica de forma eficiente, contribuyendo a mejorar la productividad y garantizar la estabilidad de los procesos.
                </p>
              </div>

              {/* Galería de Imágenes */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" /> Galería del Equipo
                </h2>
                <hr />
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="snap-center flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md transition-shadow group">
                      <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Características Principales */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" /> Características Principales
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold text-lg mt-0.5">•</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beneficios */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" /> Beneficios
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((b) => (
                    <Card key={b.title} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors duration-200">
                      <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-primary flex items-center gap-2">
                          {b.icon} {b.title}
                        </h3>
                        <p className="text-muted-foreground text-sm text-justify">
                          {b.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Aplicaciones
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.name} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <h4 className="font-bold text-primary">{app.name}</h4>
                      <p className="text-xs text-muted-foreground text-justify">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Lead Form */}
            <div id="cotizar" className="md:col-span-1 min-w-0">
              <div className="sticky top-24 bg-card p-6 rounded-lg shadow-lg border border-border space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary">Solicitud de Cotización</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario y le enviaremos una oferta económica (especifique la capacidad deseada en BHP o kg de vapor/hora).
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Corporativo</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input type="hidden" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Capacidad Requerida</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Requiero caldera de 20 BHP, a gas natural, con tanque de retorno de condensados..."
                              className="min-h-[100px] text-sm"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" disabled={isPending}>
                      {isPending ? 'Enviando Solicitud...' : 'Solicitar Precios'}
                    </Button>
                  </form>
                </Form>

                <div className="text-center border-t pt-4">
                  <span className="text-xs text-muted-foreground block mb-2">O si lo prefiere</span>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" /> Hablar con Asesor
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

```

### `src\app\equipos-industriales\elevador-de-carne\page.tsx`
```tsx
"use client";

import React, { useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import { 
  Zap, 
  Settings, 
  Maximize2, 
  RefreshCw, 
  TrendingUp, 
  HelpCircle, 
  Phone, 
  CheckCircle,
  FileText,
  Camera
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function ElevadorDeCarnePage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/foto_elevador_1.jpg",
    "/images/foto_elevador_2.jpg",
    "/images/foto_elevador_3.jpg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para un Elevador de Carne Industrial por carro o canastilla.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización Elevador de Carne Industrial",
      message: "Hola, me interesa conocer más sobre los Elevadores de Carne por medio de carro o canastilla. Solicito una cotización formal y asesoría de altura y capacidad.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Enviada",
            description: "Hemos recibido tu solicitud de cotización. Un ingeniero se pondrá en contacto pronto.",
          });
          form.reset({
            name: "",
            email: "",
            service: "Cotización Elevador de Carne Industrial",
            message: "Hola, me interesa conocer más sobre los Elevadores de Carne por medio de carro o canastilla. Solicito una cotización formal y asesoría de altura y capacidad.",
          });
        } else {
          toast({
            title: "Error al enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error. Por favor, vuelve a intentarlo.",
          variant: "destructive",
        });
      }
    });
  }

  const benefits = [
    {
      title: "Mayor seguridad para los operarios",
      description: "Previene accidentes laborales al automatizar el proceso de elevación y volteo de cargas pesadas.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Reducción de esfuerzo físico",
      description: "Elimina la necesidad de cargar manualmente materias primas pesadas, mejorando la ergonomía de la planta.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Menor tiempo de carga de equipos",
      description: "Optimiza los ciclos de producción acelerando el llenado de mezcladoras, embutidoras o tolvas.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Incremento de productividad",
      description: "Reduce tiempos muertos entre lotes de producción mediante un vaciado rápido y eficiente.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Integración con líneas automatizadas",
      description: "Sistemas de control preparados para interactuar eléctricamente con los equipos receptores de carga.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Mezcladores de carne", desc: "Alimentación rápida de masas cárnicas y materias primas preparadas." },
    { name: "Tolvas de alimentación", desc: "Carga continua de tolvas de embutidoras, porcionadoras u otros sistemas." },
    { name: "Procesos de embutidos", desc: "Suministro constante a líneas de producción de embutidos frescos y cocidos." },
    { name: "Plantas cárnicas industriales", desc: "Solución robusta para el manejo de carga vertical en salas de desposte y empaque." }
  ];

  const features = [
    "Sistema de elevación mediante piñón y cadena.",
    "Control automático de parada.",
    "Micros de final de carrera para posicionamiento preciso.",
    "Descarga por gravedad.",
    "Diseño robusto para trabajo industrial continuo.",
    "Construcción en acero inoxidable."
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Equipos de Carga y Dosificación vertical
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Elevadores de Carne
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Transporte vertical seguro y automatizado
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Los elevadores de carne permiten elevar carros de transporte hasta una altura determinada para descargar automáticamente el producto dentro de mezcladores, tolvas o equipos de procesamiento.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#cotizar">Solicitar Cotización</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> WhatsApp Directo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary-foreground/10 bg-white">
            <Image
              src="/images/foto_elevador_1.jpg"
              alt="Elevadores de Carne"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Left and Center: Content */}
            <div className="md:col-span-2 space-y-12 min-w-0">
              {/* Descripción General */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" /> Descripción General
                </h2>
                <hr />
                <p className="text-muted-foreground text-justify leading-relaxed mb-4">
                  El sistema utiliza un mecanismo de piñón y cadena diseñado para soportar cargas pesadas de forma segura y eficiente.
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed mb-4">
                  La posición final de elevación es controlada mediante micros de final de carrera que garantizan una parada precisa del equipo en el punto de descarga.
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  Una vez alcanzada la posición programada, el material es transferido por gravedad al equipo receptor, reduciendo esfuerzos manuales y mejorando la seguridad operativa.
                </p>
              </div>

              {/* Galería de Imágenes */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" /> Galería del Equipo
                </h2>
                <hr />
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="snap-center flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md transition-shadow group">
                      <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Características Principales */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" /> Características Principales
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold text-lg mt-0.5">•</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beneficios */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" /> Beneficios
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((b) => (
                    <Card key={b.title} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors duration-200">
                      <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-primary flex items-center gap-2">
                          {b.icon} {b.title}
                        </h3>
                        <p className="text-muted-foreground text-sm text-justify">
                          {b.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Aplicaciones
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.name} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <h4 className="font-bold text-primary">{app.name}</h4>
                      <p className="text-xs text-muted-foreground text-justify">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Lead Form */}
            <div id="cotizar" className="md:col-span-1 min-w-0">
              <div className="sticky top-24 bg-card p-6 rounded-lg shadow-lg border border-border space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary">Solicitud de Cotización</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario y le enviaremos una oferta económica (especifique la altura de la tolva receptora y el peso máximo a elevar).
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Corporativo</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input type="hidden" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Detalles de Altura/Carga</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Necesito un elevador con altura de volcado de 1.8 metros, para elevar carros estándar de 200 litros..."
                              className="min-h-[100px] text-sm"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" disabled={isPending}>
                      {isPending ? 'Enviando Solicitud...' : 'Solicitar Precios'}
                    </Button>
                  </form>
                </Form>

                <div className="text-center border-t pt-4">
                  <span className="text-xs text-muted-foreground block mb-2">O si lo prefiere</span>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" /> Hablar con Asesor
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

```

### `src\app\equipos-industriales\hiladora-de-queso\page.tsx`
```tsx
"use client";

import React, { useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import { 
  Zap, 
  Settings, 
  Maximize2, 
  RefreshCw, 
  TrendingUp, 
  HelpCircle, 
  Phone, 
  CheckCircle,
  FileText,
  Camera
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function HiladoraDeQuesoPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/foto_hiladora_1.jpg",
    "/images/foto_hiladora_2.jpg",
    "/images/foto_hiladora_3.jpg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para la Hiladora Industrial de Queso en acero inoxidable.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización Hiladora Industrial de Queso",
      message: "Hola, me interesa conocer más sobre la Hiladora Industrial de Queso en acero inoxidable. Solicito una cotización formal y asesoría de capacidad.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Enviada",
            description: "Hemos recibido tu solicitud de cotización. Un ingeniero se pondrá en contacto pronto.",
          });
          form.reset({
            name: "",
            email: "",
            service: "Cotización Hiladora Industrial de Queso",
            message: "Hola, me interesa conocer más sobre la Hiladora Industrial de Queso en acero inoxidable. Solicito una cotización formal y asesoría de capacidad.",
          });
        } else {
          toast({
            title: "Error al enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error. Por favor, vuelve a intentarlo.",
          variant: "destructive",
        });
      }
    });
  }

  const benefits = [
    {
      title: "Textura Uniforme",
      description: "El control preciso de velocidad y temperatura asegura un hilado y estirado óptimo, garantizando la calidad y elasticidad ideal del queso.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Menor Trabajo Manual",
      description: "Elimina el esfuerzo físico extremo del hilado tradicional. Reduce la fatiga operativa y disminuye los riesgos de contaminación.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Control de Velocidad",
      description: "Equipada con variador de frecuencia que permite ajustar las RPM de las paletas según el tipo de cuajo y textura deseada.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Giro Automático Bidireccional",
      description: "Temporizador inteligente que invierte automáticamente el sentido de giro de las paletas para un amasado homogéneo y completo.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Fácil Operación",
      description: "Panel de control simplificado que facilita la puesta en marcha, parada y control de los ciclos de hilado.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Mayor Productividad",
      description: "Aumenta significativamente los litros procesados por lote en comparación con los métodos artesanales.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Queso Mozzarella", desc: "Excelente elasticidad e hilado uniforme para derretir." },
    { name: "Quesillo Colombiano", desc: "Textura suave y humedad óptima según las recetas tradicionales." },
    { name: "Queso Pera / Quesos Hilados", desc: "Facilidad de moldeado y homogeneidad en cada pieza." },
    { name: "Procesos Lácteos Diversos", desc: "Amasado a temperatura controlada de otros subproductos lácteos." }
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Línea de Procesamiento Lácteo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hiladora Industrial de Queso
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Producción uniforme, mayor calidad y menor esfuerzo operativo.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Automatice el proceso de hilado y amasado de sus quesos. Fabricada en acero inoxidable de grado alimenticio, con control electrónico y sistemas bidireccionales automáticos para asegurar la máxima calidad de su producto final.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#cotizar">Solicitar Cotización</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> WhatsApp Directo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary-foreground/10 bg-white">
            <Image
              src="/images/foto_hiladora_1.jpg"
              alt="Hiladora Industrial de Queso"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Left and Center: Content */}
            <div className="md:col-span-2 space-y-12 min-w-0">
              {/* Descripción General */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" /> Descripción General
                </h2>
                <hr />
                <p className="text-muted-foreground text-justify leading-relaxed">
                  Nuestra Hiladora Industrial de Queso está diseñada para automatizar por completo el proceso de amasado e hilado de la cuajada de queso. Equipada con un par de paletas internas de paso ajustable accionadas por un motor de alto torque y controladas de manera electrónica mediante un variador de frecuencia, esta máquina permite controlar la velocidad óptima de estirado sin dañar la estructura de la grasa del queso, mejorando el rendimiento por lote de producción.
                </p>
              </div>

              {/* Galería de Imágenes */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" /> Galería del Equipo
                </h2>
                <hr />
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="snap-center flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md transition-shadow group">
                      <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Funcionamiento */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" /> Funcionamiento Técnico
                </h2>
                <hr />
                <p className="text-muted-foreground text-justify leading-relaxed">
                  Las paletas de hilado giran en sentido horario y antihorario de forma totalmente programada mediante un sistema de temporización e inversión automática de giro. Esto permite que la masa del queso reciba un estirado cruzado y uniforme. La temperatura del agua o suero se mantiene en el punto de hilado óptimo y el variador de frecuencia gestiona rampas de aceleración suaves para evitar el choque mecánico del cuajo frío.
                </p>
              </div>

              {/* Beneficios */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" /> Beneficios Clave
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((b) => (
                    <Card key={b.title} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors duration-200">
                      <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-primary flex items-center gap-2">
                          {b.icon} {b.title}
                        </h3>
                        <p className="text-muted-foreground text-sm text-justify">
                          {b.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Aplicaciones Comunes
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.name} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <h4 className="font-bold text-primary">{app.name}</h4>
                      <p className="text-xs text-muted-foreground text-justify">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Lead Form */}
            <div id="cotizar" className="md:col-span-1 min-w-0">
              <div className="sticky top-24 bg-card p-6 rounded-lg shadow-lg border border-border space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary">Solicitud de Cotización</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario y le enviaremos una oferta económica ajustada a su capacidad de producción.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Corporativo</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input type="hidden" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Requerimientos Especiales</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Requiero capacidad de 500 litros/hora, con chaqueta de calefacción..."
                              className="min-h-[100px] text-sm"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" disabled={isPending}>
                      {isPending ? 'Enviando Solicitud...' : 'Solicitar Precios'}
                    </Button>
                  </form>
                </Form>

                <div className="text-center border-t pt-4">
                  <span className="text-xs text-muted-foreground block mb-2">O si lo prefiere</span>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" /> Hablar con Asesor
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

```

### `src\app\equipos-industriales\mezclador-de-carne\page.tsx`
```tsx
"use client";

import React, { useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import { 
  Zap, 
  Settings, 
  Maximize2, 
  RefreshCw, 
  TrendingUp, 
  HelpCircle, 
  Phone, 
  CheckCircle,
  FileText,
  Camera
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function MezcladorDeCarnePage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/foto_mezclador_1.jpg",
    "/images/foto_mezclador_2.jpg",
    "/images/foto_mezclador_3.jpg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para la Mezcladora Industrial de Carne en acero inoxidable.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización Mezclador de Carne Industrial",
      message: "Hola, me interesa conocer más sobre la Mezcladora Industrial de Carne en acero inoxidable. Solicito una cotización formal y asesoría de capacidad.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Enviada",
            description: "Hemos recibido tu solicitud de cotización. Un ingeniero se pondrá en contacto pronto.",
          });
          form.reset({
            name: "",
            email: "",
            service: "Cotización Mezclador de Carne Industrial",
            message: "Hola, me interesa conocer más sobre la Mezcladora Industrial de Carne en acero inoxidable. Solicito una cotización formal y asesoría de capacidad.",
          });
        } else {
          toast({
            title: "Error al enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error. Por favor, vuelve a intentarlo.",
          variant: "destructive",
        });
      }
    });
  }

  const benefits = [
    {
      title: "Mezclas homogéneas y repetibles",
      description: "Garantiza un amasado y distribución uniforme de ingredientes en cada lote de producción.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Reducción de errores operativos",
      description: "La automatización del proceso minimiza el factor de error humano en la dosificación y tiempos.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Menor desperdicio de materia prima",
      description: "Dosificación exacta de líquidos y control de formulación que reducen mermas y desperdicios.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Control preciso de formulaciones",
      description: "Almacenamiento y ejecución de recetas estandarizadas a través del sistema HMI.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Incremento de productividad",
      description: "Ciclos de mezclado optimizados y menor manipulación manual para aumentar el rendimiento por hora.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Trazabilidad del proceso",
      description: "Monitoreo en tiempo real de temperatura, caudales y tiempos para control de calidad completo.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Embutidos", desc: "Especial para salchichas, salchichones y embutidos de todo tipo." },
    { name: "Hamburguesas", desc: "Amasado preciso para dar la textura y homogeneidad requerida." },
    { name: "Chorizos", desc: "Distribución uniforme de carnes, grasas y condimentos." },
    { name: "Carne marinada", desc: "Incorporación y absorción homogénea de aditivos y salmuera." },
    { name: "Procesos cárnicos industriales", desc: "Ideal para cualquier procesamiento continuo y a gran escala." }
  ];

  const features = [
    "Dosificación automática de líquidos mediante caudalímetro.",
    "Electroválvula de control para ingreso preciso de agua.",
    "Pantalla HMI para operación y configuración.",
    "Gestión de recetas de producción.",
    "Configuración de tiempos de mezclado.",
    "Control de velocidad mediante variador de frecuencia.",
    "Monitoreo de temperatura del proceso.",
    "Monitoreo de caudal en tiempo real.",
    "Construcción sanitaria en acero inoxidable."
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Línea de Procesamiento de Carnes
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Mezclador Industrial de Carne Automatizado
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Mezcla uniforme, control preciso y recetas programables
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Nuestro mezclador industrial de carne ha sido diseñado para optimizar los procesos de producción cárnica mediante automatización avanzada, garantizando mezclas homogéneas, dosificación precisa de líquidos y repetibilidad en cada lote de producción.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#cotizar">Solicitar Cotización</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> WhatsApp Directo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary-foreground/10 bg-white">
            <Image
              src="/images/foto_mezclador_1.jpg"
              alt="Mezclador Industrial de Carne Automatizado"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Left and Center: Content */}
            <div className="md:col-span-2 space-y-12 min-w-0">
              {/* Descripción General */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" /> Descripción General
                </h2>
                <hr />
                <p className="text-muted-foreground text-justify leading-relaxed mb-4">
                  El sistema permite la incorporación automática de agua u otros líquidos mediante una electroválvula controlada por caudalímetro, asegurando que cada receta reciba exactamente la cantidad programada.
                </p>
                <p className="text-muted-foreground text-justify leading-relaxed">
                  La operación es gestionada mediante una pantalla HMI intuitiva que permite configurar y almacenar recetas de producción, ajustar velocidades de mezclado y supervisar variables críticas del proceso.
                </p>
              </div>

              {/* Galería de Imágenes */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" /> Galería del Equipo
                </h2>
                <hr />
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="snap-center flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md transition-shadow group">
                      <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Características Principales */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" /> Características Principales
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold text-lg mt-0.5">•</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beneficios */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" /> Beneficios
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((b) => (
                    <Card key={b.title} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors duration-200">
                      <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-primary flex items-center gap-2">
                          {b.icon} {b.title}
                        </h3>
                        <p className="text-muted-foreground text-sm text-justify">
                          {b.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Aplicaciones
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.name} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <h4 className="font-bold text-primary">{app.name}</h4>
                      <p className="text-xs text-muted-foreground text-justify">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Lead Form */}
            <div id="cotizar" className="md:col-span-1 min-w-0">
              <div className="sticky top-24 bg-card p-6 rounded-lg shadow-lg border border-border space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary">Solicitud de Cotización</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario y le enviaremos una oferta económica ajustada a su capacidad de producción (50kg, 100kg, 200kg o más).
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Corporativo</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input type="hidden" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Requerimientos Especiales</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Requiero capacidad de 100 kg por tanda, con volcamiento neumático..."
                              className="min-h-[100px] text-sm"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" disabled={isPending}>
                      {isPending ? 'Enviando Solicitud...' : 'Solicitar Precios'}
                    </Button>
                  </form>
                </Form>

                <div className="text-center border-t pt-4">
                  <span className="text-xs text-muted-foreground block mb-2">O si lo prefiere</span>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" /> Hablar con Asesor
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

```

### `src\app\equipos-industriales\tanques-de-leche\page.tsx`
```tsx
"use client";

import React, { useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import { 
  Settings, 
  TrendingUp, 
  HelpCircle, 
  Phone, 
  CheckCircle,
  FileText,
  Camera
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function TanquesDeLechePage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const galleryImages = [
    "/images/foto_tanque_1.jpeg",
    "/images/foto_tanque_2.jpeg",
    "/images/foto_tanque_3.jpeg",
    "/images/foto_tanque_4.jpeg",
  ];

  const whatsappNumber = "573167835605";
  const whatsappMessage = "Hola, me gustaría solicitar una cotización para un Tanque de Almacenamiento de Leche en acero inoxidable.";
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Cotización Tanques de Leche",
      message: "Hola, me interesa conocer más sobre los Tanques de Almacenamiento y Enfriamiento de Leche. Solicito una cotización formal y asesoría de capacidad.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Enviada",
            description: "Hemos recibido tu solicitud de cotización. Un ingeniero se pondrá en contacto pronto.",
          });
          form.reset({
            name: "",
            email: "",
            service: "Cotización Tanques de Leche",
            message: "Hola, me interesa conocer más sobre los Tanques de Almacenamiento y Enfriamiento de Leche. Solicito una cotización formal y asesoría de capacidad.",
          });
        } else {
          toast({
            title: "Error al enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error. Por favor, vuelve a intentarlo.",
          variant: "destructive",
        });
      }
    });
  }

  const benefits = [
    {
      title: "Preservación de la calidad de la leche",
      description: "Mantiene la temperatura ideal de conservación previniendo la proliferación de bacterias y acidez.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Control preciso de temperatura",
      description: "Sistemas electrónicos digitales que regulan el enfriamiento constante y seguro del producto.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Cumplimiento de normas INVIMA",
      description: "Diseño sanitario en acero inoxidable que cumple con todas las regulaciones de la industria alimentaria colombiana.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Estructura robusta y de larga durabilidad",
      description: "Aislamiento de poliuretano de alta densidad e inyección a presión que maximiza la inercia térmica.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    },
    {
      title: "Fácil sanitización y limpieza",
      description: "Esquinas redondeadas y pulido espejo para facilitar el lavado rápido manual o mediante sistemas CIP.",
      icon: <CheckCircle className="h-5 w-5 text-accent" />
    }
  ];

  const applications = [
    { name: "Plantas de procesamiento lácteo", desc: "Almacenamiento de grandes volúmenes de leche cruda o pasteurizada listos para proceso." },
    { name: "Centros de recolección de leche", desc: "Enfriamiento rápido del producto recibido de diferentes productores locales." },
    { name: "Fincas y hatos lecheros", desc: "Conservación primaria inmediatamente después del ordeño automático o manual." },
    { name: "Procesos de quesería e industria agroalimentaria", desc: "Estación de alimentación a hiladoras, marmitas y maduradores de derivados lácteos." }
  ];

  const features = [
    "Construcción sanitaria en acero inoxidable AISI 304.",
    "Sistema de enfriamiento eficiente (chaqueta de refrigeración).",
    "Agitador automático programado para evitar la separación de la grasa.",
    "Aislamiento térmico de poliuretano de alta densidad.",
    "Control de temperatura digital de precisión.",
    "Limpieza automática (sistema CIP opcional)."
  ];

  return (
    <div className="pt-20 bg-secondary min-h-screen">
      {/* Product Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-accent/20 text-accent uppercase tracking-wider text-xs font-semibold px-3 py-1 rounded-full border border-accent/30 inline-block">
              Línea de Procesamiento Lácteo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tanques de Almacenamiento de Leche
            </h1>
            <p className="text-xl text-primary-foreground/90 font-medium leading-normal">
              Almacenamiento higiénico, control de temperatura y conservación óptima
            </p>
            <p className="text-primary-foreground/80 leading-relaxed text-justify">
              Diseñamos y fabricamos tanques de almacenamiento y enfriamiento de leche en acero inoxidable para garantizar la conservación de la materia prima bajo estrictas normas sanitarias.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#cotizar">Solicitar Cotización</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" /> WhatsApp Directo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video md:aspect-square w-full rounded-lg overflow-hidden shadow-2xl border-4 border-primary-foreground/10 bg-white">
            <Image
              src="/images/foto_tanque_1.jpeg"
              alt="Tanque de Almacenamiento de Leche"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {/* Left and Center: Content */}
            <div className="md:col-span-2 space-y-12 min-w-0">
              {/* Descripción General */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" /> Descripción General
                </h2>
                <hr />
                <p className="text-muted-foreground text-justify leading-relaxed">
                  Nuestros tanques de almacenamiento y enfriamiento para la industria láctea están diseñados para resguardar las propiedades físico-químicas de la leche. Construidos en acero inoxidable sanitario con soldaduras TIG pulidas, impiden la adherencia de grasa y facilitan una completa sanitización. Su chaqueta de refrigeración acoplada a una unidad condensadora asegura que el producto descienda a la temperatura ideal de almacenamiento en tiempos mínimos.
                </p>
              </div>

              {/* Galería de Imágenes */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" /> Galería del Equipo
                </h2>
                <hr />
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="snap-center flex-shrink-0 relative w-80 h-60 rounded-lg overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md transition-shadow group">
                      <Image
                        src={img}
                        alt={`Galería ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Características Principales */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" /> Características Principales
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold text-lg mt-0.5">•</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beneficios */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" /> Beneficios
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((b) => (
                    <Card key={b.title} className="border-none shadow-sm bg-card hover:bg-accent/5 transition-colors duration-200">
                      <CardContent className="p-4 space-y-2">
                        <h3 className="font-semibold text-primary flex items-center gap-2">
                          {b.icon} {b.title}
                        </h3>
                        <p className="text-muted-foreground text-sm text-justify">
                          {b.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="bg-card p-6 md:p-8 rounded-lg shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Aplicaciones
                </h2>
                <hr />
                <div className="grid sm:grid-cols-2 gap-4">
                  {applications.map((app) => (
                    <div key={app.name} className="p-3 bg-secondary/50 rounded-lg space-y-1">
                      <h4 className="font-bold text-primary">{app.name}</h4>
                      <p className="text-xs text-muted-foreground text-justify">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Lead Form */}
            <div id="cotizar" className="md:col-span-1 min-w-0">
              <div className="sticky top-24 bg-card p-6 rounded-lg shadow-lg border border-border space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary">Solicitud de Cotización</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete el formulario y le enviaremos una oferta económica ajustada a su proyecto (especifique capacidad en litros).
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Corporativo</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input type="hidden" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Capacidad y Especificaciones</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Requiero un tanque de enfriamiento de 2000 litros, con control digital..."
                              className="min-h-[100px] text-sm"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/95 text-primary-foreground" disabled={isPending}>
                      {isPending ? 'Enviando Solicitud...' : 'Solicitar Precios'}
                    </Button>
                  </form>
                </Form>

                <div className="text-center border-t pt-4">
                  <span className="text-xs text-muted-foreground block mb-2">O si lo prefiere</span>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2">
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4" /> Hablar con Asesor
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

```

### `src\app\sitemap.xml\route.ts`
```ts
// src/app/sitemap.xml/route.ts
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.autekcolombia.com';

interface SitemapPage {
  loc: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}

const otherPages: SitemapPage[] = [
  { loc: `${BASE_URL}/equipos-industriales`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/hiladora-de-queso`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/tanques-de-leche`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/mezclador-de-carne`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/bandas-transportadoras`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/elevador-de-carne`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
  { loc: `${BASE_URL}/equipos-industriales/calderas`, lastModified: new Date().toISOString(), changeFrequency: 'monthly', priority: 0.9 },
];

function generateSiteMapXml() {
  let urlsXml = '';

  urlsXml += `
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;

  otherPages.forEach(page => {
    urlsXml += `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlsXml}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSiteMapXml();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

```

### `src\components\providers.tsx`
```tsx
"use client";

import * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

```

### `src\components\whatsapp-button.tsx`
```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
  const whatsappNumber = "573167835605";
  const message = "Hola Autek, quiero cotizar la fabricación de un tablero de control para un proyecto";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="icon"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full h-14 w-14 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M19.5 15.5c-1.1 0-2.15-.35-3.08-.99-.35-.24-.8-.21-1.11.08l-1.61 1.61c-2.61-1.33-4.78-3.5-6.11-6.11l1.61-1.61c.29-.31.32-.76.08-1.11C8.85 6.65 8.5 5.6 8.5 4.5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
        </svg>
      </Button>
    </Link>
  );
}

```

### `src\components\layout\footer.tsx`
```tsx
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <div>
          <h4 className="text-base font-semibold text-foreground">
            Gilbert Alvarado — Consultoría en Ingeniería Mecatrónica & Automatización Industrial
          </h4>
          <p className="text-xs text-muted-foreground mt-1 max-w-3xl">
            Servicios de diseño, ensamble de tableros y control de procesos con el respaldo técnico de Autek • Bucaramanga, Santander, Colombia
          </p>
        </div>

        <div className="w-full border-t border-border/60 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-2">
          <p>&copy; {currentYear} Gilbert Alvarado (Autek Colombia). Todos los derechos reservados.</p>
          <p>Bucaramanga, Santander • Colombia</p>
        </div>
      </div>
    </footer>
  );
}

```

### `src\components\layout\header.tsx`
```tsx

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  items?: NavSubItem[];
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios & Consultoría', href: '/#servicios' },
  { label: 'Proyectos Ejecutados', href: '/#proyectos' },
  { label: 'Sobre Mí', href: '/#sobre-mi' },
  {
    label: 'Maquinaria & Aplicaciones',
    href: '/equipos-industriales',
    items: [
      { label: 'Hiladora de Queso', href: '/equipos-industriales/hiladora-de-queso' },
      { label: 'Tanques de Leche', href: '/equipos-industriales/tanques-de-leche' },
      { label: 'Mezclador de Carne', href: '/equipos-industriales/mezclador-de-carne' },
      { label: 'Bandas Transportadoras', href: '/equipos-industriales/bandas-transportadoras' },
      { label: 'Elevadores de Carne', href: '/equipos-industriales/elevador-de-carne' },
      { label: 'Calderas Industriales', href: '/equipos-industriales/calderas' },
    ]
  },
  { label: 'Contacto', href: '/#contacto' },
];

const AutekLogo = () => (
  <div className="flex items-center gap-2.5">
    <Image
      src="/images/logo.png"
      alt="Autek Ingenieria Logo"
      width={90}
      height={26}
      style={{ height: 'auto' }}
      priority
    />
    <div className="flex flex-col border-l border-border pl-2.5">
      <span className="text-sm font-semibold leading-tight text-foreground tracking-tight">Gilbert Alvarado</span>
      <span className="text-[11px] font-medium text-muted-foreground leading-tight">Ingeniero Mecatrónico • Autek</span>
    </div>
  </div>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 shadow-md backdrop-blur-md border-b border-border'
          : 'bg-background/90 shadow-xs backdrop-blur-md border-b border-border/60'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <AutekLogo />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            if (item.items) {
              return (
                <div key={item.label} className="relative group py-2">
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-md shadow-lg bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 z-50 flex flex-col p-2 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/80 rounded-md px-3 py-2 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background overflow-y-auto">
            <nav className="flex flex-col gap-4 pt-8">
             <Link href="/" className="flex items-center gap-2 mb-4 pl-4" onClick={handleLinkClick}>
                <AutekLogo />
             </Link>
              {navItems.map((item) => {
                if (item.items) {
                  const isOpen = mobileDropdownOpen === item.label;
                  return (
                    <div key={item.label} className="flex flex-col pl-4">
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="text-lg font-medium text-foreground hover:text-primary flex items-center justify-between w-full py-2 text-left"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200", isOpen && "rotate-180")} />
                      </button>
                      {isOpen && (
                        <div className="flex flex-col pl-4 mt-1 space-y-2 border-l border-muted">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={handleLinkClick}
                              className="text-base text-foreground/80 hover:text-primary transition-colors py-2"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors pl-4 py-2"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

```

### `src\components\sections\about-section.tsx`
```tsx

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, FileText, Wrench, Rocket } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      icon: <Cpu className="h-6 w-6 text-primary shrink-0" />,
      title: "Visión Mecatrónica",
      desc: "Entendimiento de cinemática mecánica, potencia eléctrica y lógica de software integrados en un solo proyecto.",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary shrink-0" />,
      title: "Consultoría y Diseño a Medida",
      desc: "Levantamiento de cargas, cálculo de protecciones y desarrollo de planos CAD normativos sin sobredimensionar costes.",
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary shrink-0" />,
      title: "Ensamble Riguroso en Taller",
      desc: "Tableros armados con ruteo ordenado en canaleta ranurada, marquillado claro y validación funcional FAT previa.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary shrink-0" />,
      title: "Acompañamiento y Puesta en Marcha",
      desc: "Pruebas directas en planta, parametrización de equipos, ajuste de lazos de control y soporte posventa cercano.",
    },
  ];

  return (
    <section id="sobre-mi" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Image container */}
          <div className="relative h-80 md:h-[450px] w-full order-last md:order-first flex items-center justify-center">
            <Image
              src="/images/pet_autek_1.png" 
              alt="Gilbert Alvarado - Ingeniero Mecatrónico trabajando en panel eléctrico"
              width={500} 
              height={300} 
              style={{ objectFit: "contain" }} 
              className="rounded-lg drop-shadow-md" 
              data-ai-hint="electrical engineering team"
              priority
            />
          </div>

          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <span>Sobre Gilbert Alvarado • Marca Autek</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary leading-snug">
              Ingeniería aplicada directamente en el taller y en la línea de producción
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed text-justify">
              <p>
                Soy <strong className="text-foreground">Gilbert Alvarado</strong>, Ingeniero Mecatrónico egresado en Santander, operando comercial y técnicamente bajo mi marca <strong className="text-primary">Autek</strong>. Mi trabajo combina la rigurosidad del diseño eléctrico con la agilidad de la programación y el entendimiento mecánico de las máquinas.
              </p>
              <p>
                La principal ventaja de mi enfoque mecatrónico es la integralidad: en lugar de coordinar a un mecánico, un electricista y un programador por separado, abordo la máquina como un sistema unificado. Calculo la potencia, diseño los esquemas unifilares en CAD, ensamblo el gabinete con normas RETIE/NTC 2050 y desarrollo la lógica en PLC/HMI.
              </p>
              <p>
                Trabajo mediante un modelo de trato directo de ingeniero a cliente, entregando documentación clara, diagramas eléctricos y realizando pruebas de aceptación en taller (FAT) antes del despacho o instalación en planta.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pilares Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="bg-secondary/60 border border-border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-5 space-y-3">
                <div className="p-2.5 bg-background rounded-lg w-fit shadow-xs border border-border">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground leading-snug">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {pillar.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

```

### `src\components\sections\contact-section.tsx`
```tsx

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { sendContactEmail, type ContactFormInput } from "@/app/actions/send-contact-email";
import React from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  companyRole: z.string().optional(),
  phone: z.string().min(7, {
    message: "Por favor, introduce un número de teléfono o WhatsApp válido.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
  clientType: z.string({
    required_error: "Por favor, selecciona el tipo de cliente.",
  }).min(1, { message: "Por favor, selecciona el tipo de cliente." }),
  projectRequirement: z.string({
    required_error: "Por favor, selecciona el requerimiento principal.",
  }).min(1, { message: "Por favor, selecciona el requerimiento principal." }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export function ContactSection() {
  const { toast } = useToast();
  const [isPending, startTransition] = React.useTransition();

  const whatsappNumber = "573167835605"; 
  const whatsappMessage = "Hola Autek, quiero cotizar la fabricación de un tablero de control para un proyecto"; 
  const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyRole: "",
      phone: "",
      email: "",
      clientType: "",
      projectRequirement: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        const result = await sendContactEmail(values as ContactFormInput);
        if (result.success) {
          toast({
            title: "Solicitud Recibida",
            description: result.message,
          });
          form.reset();
        } else {
          toast({
            title: "Error al Enviar",
            description: result.message,
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error Inesperado",
          description: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <section id="contacto" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
            Cotizar Fabricación de Tableros y Automatización
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-justify leading-relaxed">
            Integración de ingeniería eléctrica y automatización industrial para proyectos OEM y plantas de producción. Solicite una propuesta técnica o contáctenos directamente para evaluar sus requerimientos.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <a href="mailto:autekingenieria@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                autekingenieria@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <a href={`tel:+${whatsappNumber}`} className="text-muted-foreground hover:text-primary transition-colors">
                (+57) 316 7835605
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground">Bucaramanga - Santander, Colombia</span>
            </div>
          </div>
          <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 h-5 w-5" 
              >
                <path d="M19.5 15.5c-1.1 0-2.15-.35-3.08-.99-.35-.24-.8-.21-1.11.08l-1.61 1.61c-2.61-1.33-4.78-3.5-6.11-6.11l1.61-1.61c.29-.31.32-.76.08-1.11C8.85 6.65 8.5 5.6 8.5 4.5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
              Contactar por WhatsApp Directo
            </Link>
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-200">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">Nombre Completo *</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className="custom-form-input"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">
                    Empresa y Cargo <span className="text-xs text-slate-500 font-normal">(Opcional)</span>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="Ej. Industrias ABC - Gerente de Planta / Director de Proyecto"
                      className="custom-form-input"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="custom-form-label">Teléfono / WhatsApp *</FormLabel>
                    <FormControl>
                      <input
                        type="tel"
                        placeholder="Ej. +57 300 123 4567"
                        className="custom-form-input"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="custom-form-label">Correo Electrónico *</FormLabel>
                    <FormControl>
                      <input
                        type="email"
                        placeholder="carlos@empresa.com"
                        className="custom-form-input"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="clientType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">Tipo de Cliente *</FormLabel>
                  <FormControl>
                    <select
                      className="custom-form-select"
                      {...field}
                      disabled={isPending}
                    >
                      <option value="" disabled hidden>
                        Seleccione el tipo de cliente
                      </option>
                      <option value="Fabricante de Maquinaria (OEM)">Fabricante de Maquinaria (OEM)</option>
                      <option value="Planta de Producción / Empresa">Planta de Producción / Empresa</option>
                      <option value="Integrador / Contratista">Integrador / Contratista</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectRequirement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">Requerimiento Principal *</FormLabel>
                  <FormControl>
                    <select
                      className="custom-form-select"
                      {...field}
                      disabled={isPending}
                    >
                      <option value="" disabled hidden>
                        Seleccione su requerimiento
                      </option>
                      <option value="Fabricación de tablero nuevo con planos">Fabricación de tablero nuevo con planos</option>
                      <option value="Automatización / Programación de máquina (PLC/HMI)">Automatización / Programación de máquina (PLC/HMI)</option>
                      <option value="Modernización / Migración de control existente">Modernización / Migración de control existente</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="custom-form-label">Detalles del Proyecto *</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Describa las especificaciones técnicas del tablero, número de motores, señales, marca requerida de componentes o alcances del proyecto..."
                      className="custom-form-input min-h-[110px] resize-y"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 font-semibold text-white transition-colors" disabled={isPending}>
              {isPending ? 'Procesando...' : 'Solicitar Propuesta Técnica'}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

```

### `src\components\sections\hero-section.tsx`
```tsx

"use client"; // Required for embla-carousel-autoplay and useState/useEffect

import React from 'react'; // Import React for useRef
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay

export function HeroSection() {
  const whatsappNumber = "573167835605";
  const message = "Hola Ing. Gilbert, quiero consultar sobre el diseño o ensamble de un tablero/automatización";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const carouselImages = [
    { src: "/images/inicio_1.png", alt: "Tablero de control industrial moderno", hint: "control panel automation" },
    { src: "/images/inicio_2.png", alt: "Automatización de maquinaria industrial", hint: "factory machine" },
    { src: "/images/inicio_3.png", alt: "Ingeniero trabajando en panel eléctrico", hint: "engineer electrical" },
    { src: "/images/inicio_4.png", alt: "Detalle de componentes en tablero eléctrico", hint: "electrical components" },
  ];

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const trustPoints = [
    "Consultoría y diseño de planos en CAD bajo RETIE y NTC 2050.",
    "Ensamble y cableado estructurado en taller con pruebas FAT previas.",
    "Programación de PLC, HMI y lazos PID de proceso (temperatura, nivel, flujo).",
    "Aliado técnico directo sin intermediarios comerciales ni burocracia.",
  ];

  return (
    <section id="inicio" className="w-full pt-20 md:pt-24 lg:pt-28 bg-secondary pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
        {/* Text and Button Container */}
        <div className="relative z-10 flex flex-col justify-center space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 self-center md:self-start rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <span>Ingeniería Mecatrónica • Consultoría • Tableros & Automatización</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl/none text-foreground leading-tight">
            Consultoría, diseño y ensamble de{" "}
            <span className="text-sky-600 dark:text-sky-400">tableros eléctricos y control industrial</span>
          </h1>

          <p className="max-w-[600px] text-muted-foreground text-base md:text-lg mx-auto md:mx-0 text-justify font-medium leading-relaxed">
            Soy <strong className="text-foreground">Gilbert Alvarado</strong>, Ingeniero Mecatrónico. Ayudo a fabricantes de maquinaria (OEM) y plantas industriales a transformar requerimientos operativos en tableros eléctricos normativos, lazos de control estables y automatizaciones confiables con PLC y HMI en Bucaramanga y Colombia.
          </p>

          <ul className="space-y-2 py-2 max-w-[600px] text-sm text-foreground/80 font-medium text-left">
            {trustPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <svg
                  className="h-5 w-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold shadow-md">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path d="M19.5 15.5c-1.1 0-2.15-.35-3.08-.99-.35-.24-.8-.21-1.11.08l-1.61 1.61c-2.61-1.33-4.78-3.5-6.11-6.11l1.61-1.61c.29-.31.32-.76.08-1.11C8.85 6.65 8.5 5.6 8.5 4.5c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                </svg>
                Consultar con el Ingeniero
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-semibold">
              <Link href="#proyectos">
                Ver Proyectos Ejecutados
              </Link>
            </Button>
          </div>
        </div>

        {/* Carousel Image Container */}
        <div className="relative w-full max-w-md mx-auto md:mt-0 flex items-center justify-center h-[300px] md:h-[400px]">
           <Carousel
            plugins={[autoplayPlugin.current]}
            className="w-full h-full"
            opts={{ loop: true }}
           >
            <CarouselContent className="h-full">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  {/* Apply explicit responsive height to this div to ensure Next/Image with fill prop works correctly */}
                  <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
                       <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectFit: "contain" }} 
                        data-ai-hint={image.hint}
                        priority={index === 0}
                      />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 text-foreground" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/50 hover:bg-background/75 text-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

```

### `src\components\sections\portfolio-section.tsx`
```tsx
"use client"; // Required for embla-carousel-autoplay and useState/useEffect

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';


const projects = [
  {
    title: 'Automatización de Filtro de Mangas mediante PLC y HMI',
    description: 'Desarrollo de un sistema de control automatizado para un filtro de mangas, mediante programación de PLC y HMI. El programa gestiona una secuencia neumática para la limpieza secuencial de mangas, evitando la acumulación de partículas contaminantes y garantizando una operación eficiente del sistema de extracción de polvo. La interfaz HMI permite la supervisión y configuración de los ciclos de limpieza.',
    imageUrls: ['/images/mangas.jpg'],
    imageHint: 'plc hmi automation',
  },
  {
    title: 'Tablero de Control de Motores y Señales',
    description: 'Diseño, ensamble y puesta en marcha de tableros de control de motores y sistemas de adquisición de señales industriales. Integración de lectura de variables de proceso como sensores y termocuplas, así como la implementación de lazos de control automático de temperatura y velocidad a través de variadores de frecuencia para optimizar la dosificación de materia prima y garantizar la eficiencia operativa.',
    imageUrls: [
      '/images/foto_proyecto_planta_de_aceite.jpg',
      '/images/foto_proyecto_centro de control e motores.jpeg',
      '/images/foto_proyecto_tablero control de senales.jpg'
    ],
    imageHint: 'motor control panel signals',
  },
  {
    title: 'Diseño y Programación de Control para Horno Ciclónico – Proyecto Indupaddy',
    description: 'Implementación de un sistema de control PID para regular la temperatura de salida del horno ciclónico, optimizando el proceso de secado en torres. El sistema modula automáticamente la entrada de cascarilla de arroz como combustible, garantizando una temperatura estable. Adicionalmente, se integraron motores auxiliares como turbinas y barredores, todos coordinados desde un sistema centralizado mediante PLC y HMI.',
    imageUrls: [
      '/images/ciclonico_1.jpg',
      '/images/ciclonico_2.jpg',
      '/images/ciclonico_3.jpg',
      '/images/foto_proyecto_tablero de control horno ciclonico.jpeg'
    ],
    imageHint: 'oven control plc',
  },
  {
    title: 'Diseño y Ensamble de Tableros de Control de Motores',
    description: 'Diseño eléctrico y montaje de tableros de control para motores eléctricos, cumpliendo normativas RETIE y NTC 2050. Los tableros fueron desarrollados para aplicaciones industriales, integrando elementos de protección, maniobra y automatización, con enfoque en la confiabilidad y facilidad de mantenimiento.',
    imageUrls: ['/images/tablero_1.jpg', '/images/tablero_2.jpg'],
    imageHint: 'motor control panel',
  },
  {
    title: 'Sistemas de Control de Temperatura para Quemadores',
    description: 'Diseño y fabricación de tableros especializados en el control de temperatura para sistemas de combustión. Incorporación de sensores de temperatura y controladores programables para una regulación precisa del proceso térmico, mejorando la eficiencia energética y la seguridad operativa de los quemadores.',
    imageUrls: ['/images/quemador_1.jpg', '/images/quemador_2.jpg'],
    imageHint: 'temperature control burner',
  },
  {
    title: 'Instalación y Puesta en Marcha de Calderas Industriales',
    description: 'Montaje, conexionado eléctrico y puesta en marcha de calderas de vapor industriales. Integración de sistemas de seguridad para control de nivel de agua mediante sondas y sensores conductivos, lógica de control de quemador de combustión, automatización de bombas de alimentación de agua y monitoreo continuo de presión para una operación segura y eficiente.',
    imageUrls: [
      '/images/foto_caldera_1.jpeg',
      '/images/foto_caldera_2.jpeg',
      '/images/foto_caldera_3.jpeg',
      '/images/foto_caldera_4.jpeg',
      '/images/foto_caldera_5.jpeg',
      '/images/foto_caldera_6.jpeg'
    ],
    imageHint: 'boiler installation and commissioning',
  },
  {
    title: 'Automatización de Proceso de Molidos – Planta Servipetrol',
    description: 'Programación y puesta en marcha de la secuencia de control del sistema de molidos, centrado en un molino de martillos para el pulverizado de grano. La alimentación del grano se regula mediante una bazuca de carga controlada por un lazo PID, optimizando el flujo de entrada. El material pulverizado se transporta a silos de almacenamiento equipados con sensores de paletas, permitiendo el monitoreo de niveles y el llenado automático. Se implementó una lógica de recetas configurable desde HMI, que permite solicitar a los silos cantidades específicas (en kilogramos) de distintos materiales para mezclas personalizadas, antes de ser trasladadas a la zona de empaque.',
    imageUrls: ['/images/pesaje_1.jpg', '/images/pesaje_2.jpg', '/images/pesaje_3.jpg'],
    imageHint: 'grinding automation plant',
  },
  {
    title: 'Configuración y Puesta en Marcha de Arrancadores Suaves para Equipos Industriales',
    description: 'Supervisión, instalación y puesta en marcha de arrancadores suaves para distintos equipos de proceso como turbinas, bombas, mezcladoras y trituradoras. La aplicación de esta tecnología permitió un arranque progresivo y seguro de los motores, reduciendo el estrés mecánico y eléctrico, y mejorando la vida útil de los componentes involucrados.',
    imageUrls: ['/images/tablero_3.jpg'],
    imageHint: 'soft starter industrial',
  },

  {
    title: 'Mantenimiento Correctivo en Tableros de Control de Motores – Entorno Industrial',
    description: 'Ejecución de labores de mantenimiento correctivo en tableros eléctricos de control en diversas plantas industriales. Las intervenciones incluyeron diagnóstico de fallas en sistemas de control de motores, reemplazo de componentes defectuosos (contactores, relés térmicos, breakers, entre otros), corrección de conexiones, y verificación de la lógica de control. Las acciones se llevaron a cabo garantizando la mínima interrupción operativa, y cumpliendo con estándares de seguridad eléctrica y normativa RETIE.',
    imageUrls: ['/images/mantenimiento_1.jpg'], 
    imageHint: 'electrical maintenance industrial',
  },
  {
    title: 'Puesta en Marcha de Banco de Baterías para Corrección de Energía Reactiva',
    description: 'Configuración y puesta en marcha de un banco de baterías para optimización del sistema eléctrico. Se definieron los pasos de operación, así como los tiempos de entrada y salida de cada etapa, mejorando la eficiencia energética y reduciendo el consumo de energía reactiva. Esta implementación contribuyó a estabilizar la red eléctrica interna y reducir penalizaciones por bajo factor de potencia.',
    imageUrls: ['/images/baterias_1.jpg'],
    imageHint: 'battery bank power',
  },
];

const brands = [
  { name: 'WEG', path: '/images/marca1.png', hint: 'weg logo' },
  { name: 'SIEMENS', path: '/images/marca2.png', hint: 'siemens logo' },
  { name: 'POWTRAN', path: '/images/marca3.png', hint: 'powtran logo' },
  { name: 'CHNT', path: '/images/marca4.png', hint: 'chnt logo' },
  { name: 'XINJE', path: '/images/marca5.png', hint: 'xinje logo' },
  { name: 'DELTA', path: '/images/marca6.png', hint: 'delta electronics logo' },
  { name: 'REXROTH', path: '/images/marca7.png', hint: 'bosch rexroth logo' },
  { name: 'SEW', path: '/images/marca8.png', hint: 'sew eurodrive logo' },
];


export function PortfolioSection() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="proyectos" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Portafolio de Proyectos</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-justify">
            Casos de éxito que demuestran nuestra capacidad técnica y compromiso con los resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0 relative">
                <Carousel
                  plugins={[autoplayPlugin.current]}
                  opts={{ loop: project.imageUrls.length > 1 }}
                  className="w-full"
                >
                  <CarouselContent>
                    {project.imageUrls.map((imageUrl, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative w-full aspect-video">
                          <Image
                            src={imageUrl}
                            alt={`${project.title} - Imagen ${imgIndex + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-t-lg"
                            data-ai-hint={project.imageHint} 
                            priority={index < 3 && imgIndex === 0} 
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {project.imageUrls.length > 1 && (
                    <>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                    </>
                  )}
                </Carousel>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-lg font-semibold mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground text-justify">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 border-t pt-12">
           <h3 className="text-xl font-semibold text-foreground mb-6">Marcas con las que trabajamos</h3>
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                  <div className="p-1">
                    <Card className="bg-background">
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                         <Image
                          src={brand.path}
                          alt={`${brand.name} Logo`}
                          width={100}
                          height={60}
                          style={{ objectFit: "contain" }}
                          data-ai-hint={brand.hint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

```

### `src\components\sections\services-section.tsx`
```tsx

import { Card, CardHeader, CardDescription } from '@/components/ui/card';
import { FileText, Cog, Cpu, Factory, Sliders, Gauge } from 'lucide-react';

const services = [
  {
    icon: <FileText className="h-8 w-8 text-primary mb-3" />,
    title: 'Consultoría y Diseño Eléctrico en CAD',
    description: 'Levantamiento de cargas, cálculo de protecciones, esquemas unifilares y desarrollo de planos normativos bajo RETIE/NTC 2050 para tableros nuevos o regularización de instalaciones.',
  },
  {
    icon: <Cog className="h-8 w-8 text-primary mb-3" />,
    title: 'Ensamble y Fabricación de Tableros Eléctricos',
    description: 'Montaje de gabinetes de control, centros de control de motores (CCM) y distribución en baja tensión. Ruteo ordenado, marquillado técnico y pruebas funcionales FAT en taller.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary mb-3" />,
    title: 'Automatización y Programación de PLC / HMI',
    description: 'Desarrollo de secuencias automáticas, lógica de seguridad e interfaces de operación amigables para maquinaria y líneas continuas (Kinco, Siemens, Delta, Xinje).',
  },
  {
    icon: <Factory className="h-8 w-8 text-primary mb-3" />,
    title: 'Aliado Electromecánico para Fabricantes OEM',
    description: 'Servicio llave en mano para talleres y constructores de maquinaria. Tú construyes la estructura mecánica; yo diseño, armo y programo el sistema de control listo para entregar.',
  },
  {
    icon: <Sliders className="h-8 w-8 text-primary mb-3" />,
    title: 'Control de Procesos e Instrumentación',
    description: 'Lazos de control PID para quemadores, secadores, hornos ciclónicos y calderas. Integración de sensores de temperatura (PT100/termocuplas), transmisores de nivel y presión.',
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary mb-3" />,
    title: 'Variadores de Velocidad, Arrancadores y Factor de Potencia',
    description: 'Parametrización y comunicación Modbus RTU en variadores de frecuencia (VFD), arrancadores suaves para protección de motores y bancos de condensadores para corrección reactiva.',
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Servicios & Consultoría Especializada
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompañamiento técnico directo de ingeniero mecatrónico para optimizar la confiabilidad, seguridad y automatización de sus procesos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center pb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-foreground leading-snug">{service.title}</h3>
              </CardHeader>
              <CardDescription className="text-muted-foreground text-sm leading-relaxed text-justify">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

```

### `src\components\sections\testimonials-section.tsx`
```tsx
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" // Assuming Avatar is available

// Placeholder testimonial data
const testimonials = [
  {
    quote: "Muy buen servicio técnico. Puntualidad y claridad en el diseño del tablero. Totalmente recomendados.",
    name: "Carlos R.",
    company: "Empresa Agroindustrial XYZ",
    avatar: "https://picsum.photos/100/100?random=7", // Placeholder avatar
    avatarHint: "man smiling",
  },
  {
    quote: "La instalación del variador fue rápida y profesional. El motor ahora funciona mucho más eficiente.",
    name: "Ana M.",
    company: "Manufacturas ABC",
    avatar: "https://picsum.photos/100/100?random=8",
    avatarHint: "woman professional",
  },
   {
    quote: "El mantenimiento preventivo nos ha evitado paradas inesperadas. Excelente atención y conocimiento.",
    name: "Javier G.",
    company: "Constructora Delta",
    avatar: "https://picsum.photos/100/100?random=9",
    avatarHint: "man construction helmet",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Lo Que Dicen Nuestros Clientes</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                   <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                      {/* Fallback uses first letter of first and last name if available */}
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

```

### `src\components\ui\accordion.tsx`
```tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

### `src\components\ui\alert-dialog.tsx`
```tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```

### `src\components\ui\alert.tsx`
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }

```

### `src\components\ui\avatar.tsx`
```tsx
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }

```

### `src\components\ui\badge.tsx`
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```

### `src\components\ui\button.tsx`
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

### `src\components\ui\calendar.tsx`
```tsx
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

```

### `src\components\ui\card.tsx`
```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

### `src\components\ui\carousel.tsx`
```tsx

"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```

### `src\components\ui\chart.tsx`
```tsx
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

```

### `src\components\ui\checkbox.tsx`
```tsx
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

```

### `src\components\ui\dialog.tsx`
```tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

```

### `src\components\ui\dropdown-menu.tsx`
```tsx
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}

```

### `src\components\ui\form.tsx`
```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```

### `src\components\ui\input.tsx`
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

```

### `src\components\ui\label.tsx`
```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

### `src\components\ui\menubar.tsx`
```tsx
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}

```

### `src\components\ui\popover.tsx`
```tsx
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

```

### `src\components\ui\progress.tsx`
```tsx
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

```

### `src\components\ui\radio-group.tsx`
```tsx
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

```

### `src\components\ui\scroll-area.tsx`
```tsx
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }

```

### `src\components\ui\select.tsx`
```tsx
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}

```

### `src\components\ui\separator.tsx`
```tsx
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }

```

### `src\components\ui\sheet.tsx`
```tsx
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```

### `src\components\ui\sidebar.tsx`
```tsx
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```

### `src\components\ui\skeleton.tsx`
```tsx
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }

```

### `src\components\ui\slider.tsx`
```tsx
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

```

### `src\components\ui\switch.tsx`
```tsx
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

```

### `src\components\ui\table.tsx`
```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

### `src\components\ui\tabs.tsx`
```tsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

### `src\components\ui\textarea.tsx`
```tsx
import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};

```

### `src\components\ui\toast.tsx`
```tsx
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

```

### `src\components\ui\toaster.tsx`
```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

```

### `src\components\ui\tooltip.tsx`
```tsx
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

### `src\hooks\use-mobile.tsx`
```tsx
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```

### `src\hooks\use-toast.ts`
```ts
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }

```

### `src\lib\utils.ts`
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


```
