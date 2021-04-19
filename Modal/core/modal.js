/* Modal Core Functionality */

(function () {
    const ModalContainer = document.querySelector("#Modal-backdrop");
    const ModalCloseButton = document.querySelector("#Modal-close");
    letcloseModal = sessionStorage.getItem('closeModal');

    const initModal = () => {
        if(!closeModal) {
            ModalContainer.style.display = 'flex';
        }
    }

    const toggleCloseModal = () => {
      sessionStorage.setItem('closeModal', true);
      closeModal = sessionStorage.getItem('closeModal');
      ModalContainer.style.display = closeModal ? 'none' : 'flex';

      return closeModal;
    }

    ModalCloseButton.addEventListener("click", toggleCloseModal);
    window.onload = initModal;
})();