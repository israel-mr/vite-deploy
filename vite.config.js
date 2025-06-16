import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://israel-mr.github.io/vite-deploy/"
})
// This configuration sets up a Vite project with React support and specifies a base URL for deployment on GitHub Pages.
// The base URL is set to "https://israel-mr.github.io/vite-deploy", which is the repository where the project will be hosted.
// The `react` plugin is used to enable React features in the Vite build process.
// The `defineConfig` function is used to create a configuration object that Vite will use to build and serve the project.
// This setup is ideal for deploying a React application using Vite on GitHub Pages, ensuring that the application can be accessed correctly from the specified base URL.
// The `base` option is particularly important for GitHub Pages, as it ensures that all assets are correctly linked relative to the repository's URL.
// The configuration is straightforward and leverages Vite's fast build and development capabilities, making it suitable for modern web applications.
// The `react` plugin is essential for enabling JSX syntax and React-specific features in the project.
// This configuration is a good starting point for developers looking to deploy React applications using Vite on GitHub Pages.      
// It provides a clear and concise setup that can be easily extended with additional plugins or configurations as needed.
// The use of `defineConfig` helps in maintaining type safety and provides better IntelliSense support in IDEs.
// Overall, this Vite configuration is a solid foundation for building and deploying React applications with modern tooling and best practices.
