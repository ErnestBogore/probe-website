# Probe Analytics - Modern UI Component Integration

A comprehensive React application showcasing the integration of shadcn/ui components, Tailwind CSS, TypeScript, and advanced animations using Framer Motion.

## 🚀 Features

- **shadcn/ui Components**: Production-ready components built on Radix UI primitives
- **Tailwind CSS 4**: Latest version with enhanced theming and animations
- **TypeScript**: Full type safety and developer experience
- **Framer Motion**: Smooth, performant animations
- **Responsive Design**: Mobile-first approach with modern UI patterns
- **Accessibility**: WCAG compliant components with proper ARIA support
- **Dark Mode Ready**: Comprehensive theming system

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Extended Tailwind CSS with custom animations
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Main page showcasing components
├── components/ui/           # Reusable UI components
│   ├── button.tsx          # Button component with variants
│   ├── card.tsx            # Card component with sub-components
│   ├── input.tsx           # Form input component
│   ├── label.tsx           # Accessible label component
│   ├── tabs.tsx            # Tab component with Radix UI
│   ├── border-beam.tsx     # Animated border effect component
│   ├── tracing-beam.tsx    # Scroll-based animation component
│   ├── hero-195.tsx        # Comprehensive hero section demo
│   └── demo.tsx            # Demo wrapper component
└── lib/
    └── utils.ts            # Utility functions (cn helper)
```

## 🛠 Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Dependencies are already installed** - The project comes with all required packages:
   ```bash
   npm install  # if needed
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Manual Setup (if starting from scratch)

If you need to set up a similar project from scratch:

```bash
# Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest my-project --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Initialize shadcn/ui
npx shadcn@latest init

# Install additional dependencies
npm install @radix-ui/react-slot class-variance-authority @radix-ui/react-tabs @radix-ui/react-label framer-motion lucide-react
```

## 🧩 Components Overview

### Core shadcn Components

- **Button**: Multiple variants (default, destructive, outline, secondary, ghost, link)
- **Card**: Flexible container with header, content, and footer sections
- **Input**: Styled form input with proper focus management
- **Label**: Accessible labels with automatic form association
- **Tabs**: Keyboard-navigable tabbed interfaces

### Animation Components

- **BorderBeam**: Animated gradient border effect
- **TracingBeam**: Scroll-driven progress indicator

### Demo Components

- **Hero195**: Comprehensive showcase of all integrated components
- **DemoOne**: Simple wrapper for easy implementation

## 🎨 Styling & Theming

### CSS Variables

The project uses a comprehensive set of CSS variables for theming:

```css
:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(0 0% 3.9%);
  --primary: hsl(0 0% 9%);
  --secondary: hsl(0 0% 96%);
  /* ... and many more */
}
```

### Dark Mode

Dark mode is automatically supported through CSS variables:

```css
.dark {
  --background: hsl(240 10% 3.9%);
  --foreground: hsl(0 0% 98%);
  /* ... dark mode variants */
}
```

### Custom Animations

The project includes custom Tailwind animations:

- `border-beam`: Animated border effect
- `fade-in`: Smooth element entrance
- `marquee`: Continuous scroll animation
- `spin-around`: Multi-directional rotation
- And many more...

## 🔧 Usage Examples

### Basic Button Usage

```tsx
import { Button } from "@/components/ui/button";

export function MyComponent() {
  return (
    <div>
      <Button variant="default">Primary Action</Button>
      <Button variant="outline">Secondary Action</Button>
      <Button variant="ghost">Subtle Action</Button>
    </div>
  );
}
```

### Card with Border Animation

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

export function AnimatedCard() {
  return (
    <Card className="relative">
      <BorderBeam size={250} duration={12} colorFrom="#3b82f6" colorTo="#8b5cf6" />
      <CardHeader>
        <CardTitle>Animated Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card has an animated border effect.</p>
      </CardContent>
    </Card>
  );
}
```

### Form with Tabs

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function TabbedForm() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
      </TabsContent>
    </Tabs>
  );
}
```

## 🚀 Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📚 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | ^15.4.1 | React framework |
| React | ^19.1.0 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Styling |
| Framer Motion | ^12.23.5 | Animations |
| Radix UI | Various | Accessible primitives |
| Lucide React | ^0.525.0 | Icon library |

## 🎯 Best Practices

1. **Component Structure**: Each component includes proper JSDoc documentation
2. **Accessibility**: All components follow WCAG guidelines
3. **TypeScript**: Strict typing for all props and interfaces
4. **Performance**: Optimized animations and efficient rendering
5. **Modularity**: Components are designed to be reusable and composable

## 🤝 Contributing

1. Follow the existing code style and structure
2. Add proper TypeScript types for new components
3. Include comprehensive JSDoc comments
4. Test components in both light and dark modes
5. Ensure accessibility compliance

## 📄 License

This project is for demonstration purposes. Individual component libraries have their own licenses.

---

**Built with ❤️ using shadcn/ui, Tailwind CSS, and Framer Motion**
