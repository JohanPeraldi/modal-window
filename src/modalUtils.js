export default function toggleModal() {
  const modal = document.querySelector('[data-modal]');
  console.log('toggleModal function called!');
  if (modal) {
    if (modal.open) {
      console.log('From toggleModal function, inside of if statement');
      modal.close();
    } else {
      console.log('From toggleModal function, inside of else statement');
      modal.showModal();
    }
  }
};
