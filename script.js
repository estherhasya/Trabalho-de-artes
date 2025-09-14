// Share functionality
document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.textContent.trim();
        const title = document.querySelector('h1').textContent;
        const url = window.location.href;
        
        if (platform.includes('Copiar Link')) {
            navigator.clipboard.writeText(url).then(() => {
                alert('Link copiado para a área de transferência!');
            });
        } else {
            alert(`Compartilhando no ${platform}: "${title}"`);
        }
    });
});

// Related articles click
document.querySelectorAll('section article').forEach(article => {
    article.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        alert(`Abrindo notícia: "${title}"`);
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.textContent.includes('Início')) {
            alert('Voltando para a página inicial...');
        }
    });
});