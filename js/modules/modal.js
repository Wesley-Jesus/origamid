export default function initModal() {
  const botalAbrir = document.querySelector('[data-modal="abrir"]');
  const botalFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botalAbrir && botalFechar && containerModal) {
    
    function toggleModal(e) {
        console.log(containerModal)
      e.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function clickForaModal(e) {
      if (e.target === this) {
        toggleModal(e);
      }
    }

    // function fecharModal(e) {
    //     e.preventDefault();
    //     containerModal.classList.remove('ativo');
    // }

    botalAbrir.addEventListener('click', toggleModal);
    botalFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
