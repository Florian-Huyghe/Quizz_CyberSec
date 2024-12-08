// Fonction pour envoyer les données au serveur PHP
async function submitQuizData(nom, prenom, entreprise, checkbox, result, email) {
    try {
        const response = await fetch('https://tgxcbnrr.infinityfree.com/api/insert.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom: nom,
                prenom: prenom,
                entreprise: entreprise,
                checkbox: checkbox,
                result: result,
                email: email
            })
        });

        // Vérifier si la requête a réussi
        if (!response.ok) {
            throw new Error('Erreur lors de la requête : ' + response.status);
        }

        // Lire la réponse du serveur (si nécessaire)
        const data = await response.json();

        if (data.error) {
            console.error('Erreur dans la réponse:', data.error);
            alert('Une erreur est survenue lors de l\'enregistrement des données.');
        } else {
            console.log('Données insérées:', data);
            alert('Merci d\'avoir répondu au quiz !');
            document.getElementById('quiz-form').style.display = 'None';
            resultsContainer.classList.remove("hidden");
            restartButton.classList.remove("hidden");
        }
    } catch (error) {
        console.error('Erreur de réseau:', error.message);
        alert('Une erreur est survenue lors de la communication avec le serveur.');
    }
}


document.getElementById('submit-button').addEventListener('click', function() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const entreprise = document.getElementById('entreprise').value;
    const checkbox = document.getElementById('checkbox').checked ? 1 : 0;
    const email = document.getElementById('email').value;

    if (checkbox === 0) {
        alert('Veuillez cocher la case pour soumettre vos résultats.');
        return;
    }

    const result = score; // Score du quiz
    submitQuizData(nom, prenom, entreprise, checkbox, result, email);
});
