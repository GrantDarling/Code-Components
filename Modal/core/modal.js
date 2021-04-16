/* Modal Core Functionality */

const closeModal = () => {
    const ModalContainer = document.querySelector("#Modal-backdrop")
    const HideModal = ModalContainer.style.display = 'none';

    return HideModal;
}

const ModalCloseBtn = document.querySelector("#Modal-close").addEventListener("click", closeModal);

