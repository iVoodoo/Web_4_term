const btn = document.getElementById("button__form")
btn.addEventListener('click', () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Спасибо за заявку!',
        showConfirmButton: false,
        timer: 2000}
      )
})