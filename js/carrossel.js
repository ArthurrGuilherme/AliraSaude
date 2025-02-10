const items = document.querySelectorAll(".item");
const gallery = document.querySelector('.gallery');
const itemWidth = items[0].offsetWidth; // Largura de um item
let offset = 0;

// Duplicar os itens para criar o efeito contínuo
function duplicateItems() {
  const itemsArray = Array.from(items);
  itemsArray.forEach(item => {
    const clone = item.cloneNode(true); // Duplicando o item
    gallery.appendChild(clone); // Adiciona o clone ao final da galeria
  });
}

// Função para mover o carrossel para a direita
function moveCarrossel() {
  offset -= 4; // A velocidade do movimento (ajustar conforme necessário)

  // Se todos os itens da primeira parte saírem de cena, reposiciona a galeria para o início
  if (Math.abs(offset) >= itemWidth * items.length) {
    offset = 0; // Reseta o deslocamento para manter a rolagem contínua
    gallery.style.transition = 'none'; // Remove a transição para evitar "voltar" a galeria
    gallery.style.transform = `translateX(${offset}px)`; // Reposiciona a galeria para o começo
    setTimeout(() => {
      gallery.style.transition = 'transform 0.0s ease'; // Reaplica a transição suavemente
    }, 50);
  }

  gallery.style.transform = `translateX(${offset}px)`; // Aplica o deslocamento contínuo

  requestAnimationFrame(moveCarrossel); // Continua o movimento contínuo
}

// Duplicar os itens para o efeito de carrossel contínuo
duplicateItems();

// Inicia o movimento contínuo
moveCarrossel();
