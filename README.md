# Women Owned Businesses Network (WVEF) - Modernized Mobile App

A modernized version of the Women Owned Businesses Network Mobile Application built with Vue.js and modern web technologies. This application connects women business owners with buyers and vice versa.

## Node.js Version Requirement

⚠️ **Important**: This project requires Node.js version 20 or higher for development and build processes. The current version (v18.20.8) does not support all required features.

To upgrade Node.js, we recommend using a version manager like `nvm`:
```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js v20+
nvm install 20
nvm use 20
```

## Features

- **Vue 3** with Composition API
- **Vite** for fast development
- **Pinia** for state management
- **Vue Router** for navigation
- **Tailwind CSS** for styling
- **Responsive design** for all devices
- **Modular architecture** with components
- **API-ready** with service layer
- **Cordova-compatible** for mobile deployment

## Tech Stack

- **Framework**: Vue 3
- **Build Tool**: Vite
- **State Management**: Pinia
- **Routing**: Vue Router
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Mobile**: Cordova compatible

## Project Structure

```
www/                    # Vue.js source files (formerly src/)
├── components/         # Reusable Vue components
├── views/              # Page components
├── stores/             # Pinia stores
├── assets/             # Static assets
├── utils/              # Utility functions
├── router/             # Vue Router configuration
├── main.js             # Entry point
└── App.vue             # Root component
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```
⚠️ **Note**: Requires Node.js v20+. With older versions, you'll see an error message.

3. Build for production:
```bash
npm run build
```
⚠️ **Note**: Requires Node.js v20+. With older versions, you'll see an error message.

4. Preview production build:
```bash
npm run preview
```
⚠️ **Note**: Requires Node.js v20+. With older versions, you'll see an error message.

## Development

The application follows Vue 3 Composition API patterns with Pinia for state management. All business logic is encapsulated in Pinia stores, and components are organized in a modular fashion.

## Mobile Deployment

This application is designed to work with Apache Cordova for mobile deployment. After building the application, you can integrate it with Cordova:

1. Build the application:
```bash
npm run build
```

2. The build output goes to the `www` folder, which can be used directly as the Cordova project's `www` folder

3. Add your mobile platforms:
```bash
cordova platform add android
cordova platform add ios
```

4. Build for mobile:
```bash
cordova build android
cordova build ios
```

## API Integration

The application includes an API service layer in `www/utils/api.js` that can be connected to a backend. The current implementation uses mock data but is structured to easily connect to a real API.

Environment variables can be configured in a `.env` file:
```
VITE_API_BASE_URL=https://your-api-base-url.com
```

## Contributing

Internal patches are welcome! Feel free to fork and contribute to this project. If you find a problem and wish to report it, please let us know.

## License

MIT

Maintained by Shadow Walker