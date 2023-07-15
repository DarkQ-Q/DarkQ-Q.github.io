let consultationBtn = document.querySelector(".first-modal-open");
let orderBtn = document.querySelector(".second-modal-open");
let thanksBtn = document.querySelector(".third-modal-open");

let consultationModal = document.querySelector("#consultationModal");
let orderModal = document.querySelector("#orderModal");
let thanksModal = document.querySelector("#thanksModal");

let overlay = document.querySelector(".overlay");

consultationBtn.addEventListener('click', () => {
  overlay.classList.add("active");
  consultationModal.classList.add("active");
});

orderBtn.addEventListener('click', () => {
  overlay.classList.add("active");
  orderModal.classList.add("active");
});

thanksBtn.addEventListener('click', () => {
  overlay.classList.add("active");
  thanksModal.classList.add("active");
});


document.querySelectorAll('.modal_close').forEach(close => {
  close.addEventListener('click', (e) => {
    let currentModal = e.target.parentElement;
  
    overlay.classList.remove('active');
    currentModal.classList.remove('active');

    setTimeout(clearInputs, 1000);
  })
});

function clearInputs()
{
  let modalInputs = document.querySelectorAll('.modal-input');

  modalInputs.forEach(input => {
    input.value = "";
  })
}