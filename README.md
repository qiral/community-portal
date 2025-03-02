# Community Portal

A modern web platform built with Next.js for managing and discovering communities.

## Features

- 🚀 Modern UI built with Next.js 14 and React 18
- 💅 Styled with Tailwind CSS and Shadcn UI
- 🎨 Consistent code style with ESLint and Prettier
- 📱 Fully responsive design
- ✨ Type-safe with TypeScript
- 📦 Monorepo structure with Turborepo
- ⚡️ Fast package management with pnpm
- 🔄 Shared packages for UI components and utilities

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- pnpm (v8.14.3 or higher)

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/community-portal.git
cd community-portal
```

### 2. Install dependencies:

```bash
pnpm install
```
### 3. Setup Supabase:
   
This project uses Supabase for authentication and data management. Follow the steps below to configure it:

#### 3.1. Create a Supabase project:

Go to [Supabase](https://supabase.com/) and log in. After your logged in:
- Click **"New Project"** and enter a project name.
- Select a **database region** and click **"Create new project"**.

#### 3.2. Get your project URL and API keys:

Navigate to **Project Settings** → **API**. Copy the following keys:  
- **Project URL**   
- **Service Role Key** (Keep this secret)
  
#### 3.3. Configure environment variables:

Add the URL and API keys to `.env.local` file under main:

```plaintext
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_KEY=your-anon-key
```

### 4. Start the development server:

```bash
pnpm dev
```

The applications will be available at:

- Main App: `http://localhost:3000`
- Admin Panel: `http://localhost:3010`

## Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm lint` - Run ESLint across all applications
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking
- `pnpm clean` - Clean all build outputs and node_modules
- `pnpm test` - Run tests across all applications

### Package Management

To add a new package to a specific application, use the following commands:

#### Main Application

```bash
# Add a production dependency
pnpm main:add package-name

# Add a development dependency
pnpm main:add -D package-name
```

#### Admin Panel

```bash
# Add a production dependency
pnpm admin:add package-name

# Add a development dependency
pnpm admin:add -D package-name
```

## Project Structure

```
community-portal/
├── apps/
│   ├── main/        # Main application
│   │   ├── src/
│   │   └── ...
│   └── admin/       # Admin panel
│       ├── src/
│       └── ...
├── packages/
│   ├── ui/         # Shared UI components
│   │   ├── components/  # Reusable UI components
│   │   ├── styles/     # Shared styles and themes
│   │   └── utils/      # UI utilities
│   ├── config/     # Shared configurations
│   │   ├── eslint/     # ESLint configurations
│   │   ├── typescript/ # TypeScript configurations
│   │   └── tailwind/   # Tailwind configurations
│   └── utils/      # Shared utility functions
└── ...config files
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Form Handling:** React Hook Form with Zod
- **Code Quality:** ESLint, Prettier
- **Package Manager:** pnpm 8.14.3
- **Build System:** Turborepo
- **Component Library:** Radix UI

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
