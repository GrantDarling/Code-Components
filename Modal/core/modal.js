/* Modal Core Functionality */

(function () {
    let modalStatus = sessionStorage.getItem('toggleModal');
    const ModalContainer = document.querySelector("#Modal-backdrop");
    const ModalCloseButton = document.querySelector("#Modal-close");

    const initModal = () => {
        if(!modalStatus) {
            toggleModal();
        }
    }

    const toggleModal = () => {
        let openModal = !modalStatus;
        ModalContainer.style.display = openModal ? 'flex' : 'none';
        sessionStorage.setItem('toggleModal', modalStatus);

        return modalStatus = !modalStatus;
    }

    ModalCloseButton.addEventListener("click", toggleModal);
    window.onload = initModal;
})();