# Hugo Dev Container

This devcontainer provides a ready-to-use environment for developing and previewing your Hugo site.

## Features
- Installs Hugo (extended version)
- Exposes port 1313 for live preview
- Runs `hugo server` on container start

## Usage
1. Open this folder in VS Code and reopen in container when prompted.
2. The Hugo server will be available at http://localhost:1313
3. Edit your site and see live updates in the browser.

## Customization
- To change Hugo version, edit the Dockerfile.
- To add more tools, extend the Dockerfile as needed.
