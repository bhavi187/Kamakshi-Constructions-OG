
document.addEventListener('DOMContentLoaded', () => {
    const statBoxes = document.querySelectorAll('.stat-box.animate-scroll');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.4 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                observer.unobserve(entry.target);
            }
        });
    };

    if (statBoxes.length > 0) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        statBoxes.forEach(box => {
            observer.observe(box);
        });
    }
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
     
        navMenu.classList.toggle('is-open');
    });
}
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        // Only close the menu on smaller screens
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('is-open');
        }
    });
});

const sendSmsBtn = document.getElementById('send-sms-btn');
const formMessage = document.getElementById('form-message');
const phone = '8977887377'; 

if (sendSmsBtn && formMessage) {
    sendSmsBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (!name || !message) {
            formMessage.textContent = 'Please fill out your name and message.';
            formMessage.classList.remove('hidden');
            formMessage.style.color = 'red';
            return;
        }

        const text = `Hello Kamakshi Constructions,\nMy name is ${name}. \nI have a question:\n"${message}"`;
        
        const encodedText = encodeURIComponent(text);

        const whatsappLink = `https://wa.me/${phone}?text=${encodedText}`;

        window.open(whatsappLink, '_blank');

        formMessage.textContent = 'Opening WhatsApp with your message...';
        formMessage.classList.remove('hidden');
        formMessage.style.color = 'green';

        setTimeout(() => {
            document.getElementById('message-form').reset();
            formMessage.classList.add('hidden');
        }, 3000);
    });
}