import '../../scss/layouts/signin.scss';

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const successContainer = document.querySelector('#message-success') as HTMLDivElement | null;
    successContainer && successContainer.remove();
  }, 5000);
});
