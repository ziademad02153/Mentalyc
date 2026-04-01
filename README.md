# Mentalyc - Client Management System

A modern web application for managing mental health clients and clinicians. Built with React and Material-UI, this system provides an intuitive interface for managing client information, sessions, and clinical notes.

## Features

- **Client Management**
  - Add and manage client profiles
  - Track client types (Individual, Couple, Family, Child, Group)
  - Monitor session history
  - Manage unsaved notes

- **User Interface**
  - Modern, responsive design
  - Material Design components
  - Custom styled components
  - Intuitive navigation

- **Search & Filter**
  - Filter clients by name and clinician
  - Sort and organize client data
  - Quick access to client information

## Technologies Used

- **Frontend Framework**
  - React 18
  - TypeScript
  - Vite (Build tool)

- **UI Components**
  - Material-UI (MUI)
  - Styled Components
  - Custom CSS

- **State Management**
  - React Hooks
  - Context API

- **Development Tools**
  - ESLint
  - Prettier
  - Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/mentalyc.git
```

2. Install dependencies:
```bash
cd mentalyc
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Configuration

The application uses the following environment variables:
- `VITE_APP_API_URL` - API endpoint (if applicable)
- `VITE_APP_ENV` - Environment (development/production)

## Project Structure

```
mentalyc/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── types/          # TypeScript types
│   ├── styles/         # Global styles
│   └── App.tsx         # Main application component
├── public/             # Static assets
└── package.json        # Project dependencies
```

## Design System

The application follows a consistent design system:
- Primary Color: `#8B1D94` (Purple)
- Font: Inter for text, Dancing Script for logo
- Responsive breakpoints for all screen sizes
- Consistent spacing and typography

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


