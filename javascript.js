function cargarProductos() {
  const tableBody = document.querySelector(".body");

  placasDeVideo.forEach((placa) => {
    tableBody.innerHTML += `<tr>
            <td>${placa.id}</td>
            <td>${placa.fabricante}</td>
            <td>${placa.marca}</td>
            <td>${placa.modelo}</td>
            <td>${placa.memoria}</td>
            <td>${placa.precio}</td>
            <td><button class="eliminar">Eliminar elemento</button></td>
        </tr>`;
  });
}

function eliminarElem() {
  const buttons = document.querySelectorAll(".eliminar");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: "Seguro que querés eliminar este elemento?",
          text: "No podrás revertir esta acción!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminarlo!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true
        })
        .then((result) => {
        result.isConfirmed ? 
            (swalWithBootstrapButtons.fire(
              "Listo!",
              "El elemento ha sido eliminado!",
              "success"
            )) :
        result.dismiss === Swal.DismissReason.cancel 
            (swalWithBootstrapButtons.fire(
              "Eso estuvo cerca!",
              "Tu placa de video imaginaria está a salvo! :)",
              "error"
            ));
        });
    });
  });
}

cargarProductos();
eliminarElem();


