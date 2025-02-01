# Community Portal

A modern web platform built with Next.js for managing and discovering communities.

For detailed documentation, please visit [our documentation site](https://communityportaldocs.vercel.app).

## Features

- 🚀 Modern UI built with Next.js 15 and React 19
- 💅 Styled with Tailwind CSS and Shadcn UI
- 🎨 Consistent code style with Prettier
- 📱 Fully responsive design
- ✨ Type-safe with TypeScript
- 📦 Monorepo structure with Turborepo
- ⚡️ Fast package management with pnpm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/community-portal.git
cd community-portal
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The applications will be available at:

- Main App: `http://localhost:3000`
- Admin Panel: `http://localhost:3001`

## Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm lint` - Run ESLint across all applications
- `pnpm format` - Format code with Prettier
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

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Form Handling:** React Hook Form with Zod
- **Code Quality:** ESLint, Prettier
- **Package Manager:** pnpm
- **Build System:** Turborepo

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
├── packages/        # Shared packages
│   ├── ui/         # Shared UI components
│   │   ├── components/  # Reusable UI components
│   │   ├── styles/     # Shared styles and themes
│   │   └── icons/      # Shared icons
│   ├── config/     # Shared configurations
│   │   ├── eslint/     # ESLint configurations
│   │   ├── typescript/ # TypeScript configurations
│   │   └── tailwind/   # Tailwind configurations
│   └── utils/      # Shared utility functions
└── ...config files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
