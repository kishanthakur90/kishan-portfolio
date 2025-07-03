  document.addEventListener('DOMContentLoaded', () => {
    // Carousel Functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentItem = 0;

    function showItem(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        currentItem = (currentItem === 0) ? carouselItems.length - 1 : currentItem - 1;
        showItem(currentItem);
    });

    nextButton.addEventListener('click', () => {
        currentItem = (currentItem === carouselItems.length - 1) ? 0 : currentItem + 1;
        showItem(currentItem);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentItem = (currentItem === carouselItems.length - 1) ? 0 : currentItem + 1;
        showItem(currentItem);
    }, 5000);

    // Contact Form WhatsApp Integration
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const whatsappUrl = `https://wa.me/+918368009752?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        form.reset();
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Download Resume Function
function downloadResume() {
    const resumeContent = document.getElementById('resume-content').innerHTML;
    const blob = new Blob([`
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h3 { color: #2c3e50; }
                p, ul { margin: 10px 0; }
            </style>
        </head>
        <body>${resumeContent}</body>
        </html>
    `], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    a.click();
    URL.revokeObjectURL(url);
}
