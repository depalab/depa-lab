// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the index page
    const isIndexPage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname.endsWith('/');
    const isInSubdirectory = window.location.pathname.includes('/pages/');
    const basePath = isInSubdirectory ? '../' : '';
    
    // Only load the header component if we're not on the index page
    if (!isIndexPage) {
        loadComponent('header-container', `${basePath}components/header.html`);
    }
    
    // Always load the footer component
    loadComponent('footer-container', `${basePath}components/footer.html`);
});

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
