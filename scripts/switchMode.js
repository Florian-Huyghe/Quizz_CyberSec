const darkModeButton = document.getElementById('dark-mode-toggle');
        
        darkModeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                darkModeButton.textContent = 'Désactiver le Dark Mode';
            } else {
                darkModeButton.textContent = 'Activer le Dark Mode';
            }
        });