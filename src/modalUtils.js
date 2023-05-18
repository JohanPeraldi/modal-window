export default function toggleModal() {
  const modal = document.querySelector('[data-modal]');
  if (modal) {
    if (modal.open) {
      modal.close();
    } else {
      modal.showModal();
    }
  }
};
