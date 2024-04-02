# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#GitHub User Avatar Finder Web App

#Objective:

Develop a web application using React that allows users to input a GitHub username. Upon user input, the app
should display the avatar of the user fetched from the GitHub API. The app should incorporate debouncing to
enhance user experience and prevent excessive API calls. To implement debouncing, create a custom hook
called useDebounce.

#User Interface (UI):

 Create a simple and user-friendly UI with a text input box and an image container.
The user should be able to type in a GitHub username in the input box.
GitHub API Integration:
Utilize the GitHub API to fetch user information, specifically the user's avatar image.
Handle API requests and responses effectively.

#Avatar Display:
 Upon successful API response, display the user's avatar image in the designated container.