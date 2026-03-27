const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

fetch('./assets/passos.json')
.then(res => res.json())
.then(images => {
    images.forEach((item) => {
    const button = document.createElement('button');
    button.className = 'gallery-item';
    button.type = 'button';
    button.setAttribute('aria-label', `Abrir detalhes da ${item.title}`);

    button.innerHTML = `
        <img src="${item.src}" alt="${item.title}">
        `;
        // <span>${item.title}</span>

    button.addEventListener('click', () => {
        modalTitle.textContent = item.title;
        modalDescription.textContent = item.description;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    });

    gallery.appendChild(button);
    });
})
.catch(error => {
    console.error('Erro ao carregar images.json:', error);
});

function closePopup() {
modal.classList.remove('active');
modal.setAttribute('aria-hidden', 'true');
}

closeModal.addEventListener('click', closePopup);

modal.addEventListener('click', (event) => {
if (event.target === modal) {
    closePopup();
}
});

document.addEventListener('keydown', (event) => {
if (event.key === 'Escape' && modal.classList.contains('active')) {
    closePopup();
}
});