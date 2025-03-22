# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# How to Run

On AWS server:
- git clone https://github.com/neder-hachana/frametale.git
- cd frametale
- npm install
- npm run build
- sudo cp -r dist/* /var/www/html/
- sudo systemctl restart httpd
- sudo systemctl status httpd

Locally:
- npm install
- npm run dev