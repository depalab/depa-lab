// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're in a subdirectory by looking at the path
    const isInSubdirectory = window.location.pathname.includes('/pages/');
    const basePath = isInSubdirectory ? '../' : '/depa-lab/';
    
    loadComponent('header-container', `${basePath}components/header.html`);
    loadComponent('footer-container', `${basePath}components/footer.html`);
});

// Single loadComponent function
function loadComponent(containerId, componentPath) {
    const container = document.getElementById(containerId);
    if (container) {
        fetch(componentPath)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
            })
            .catch(error => console.error('Error loading component:', error));
    }
}
