document.addEventListener('DOMContentLoaded', function() {
    const githubButton = document.getElementById('github-button');
    const educatorButton = document.getElementById('educator-button');
    const linkedinButton = document.getElementById('linkedin-button');
    const instagramButton = document.getElementById('instagram-button');

    githubButton.addEventListener('click', function() {
        window.open('https://github.com/Manpyari-Bai', '_blank');
    });

    educatorButton.addEventListener('click', function() {
        window.open('https://educator.example.com/your-profile', '_blank');
    });

    linkedinButton.addEventListener('click', function() {
        window.open('https://www.linkedin.com/in/manpyari-b-61a193301/', '_blank');
    });

    instagramButton.addEventListener('click', function() {
        window.open('https://www.instagram.com/your-profile', '_blank');
    });
});
