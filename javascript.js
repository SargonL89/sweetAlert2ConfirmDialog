function kreateTable() {
  const tableBody = document.querySelector(".tableBody");
  tableBody.innerHTML = "";

  placasDeVideo.forEach((placa) => {
    tableBody.innerHTML += `<tr class="tr">
        <td>${placa.id}</td>
        <td>${placa.fabricante}</td>
        <td>${placa.marca}</td>
        <td>${placa.modelo}</td>
        <td>${placa.memoria}</td>
        <td>${placa.precio}</td>
        </tr>`;
  });
  const selected = document.querySelectorAll(".tr");
  selected.forEach((row) => {
    row.addEventListener("click", () => {
      selected.forEach((row) => row.classList.remove("selected"));
      row.classList.add("selected");
      sweetAlert2();
    });
  });
}

function sweetAlert2() {
  const selected = document.querySelector(".selected");

  const comprar = document.querySelector(".comprar");
  comprar.addEventListener("click", () => {
    const selected = document.querySelector(".selected");
    if (selected) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Confirmación de compra",
          text: selected.textContent,
          showCancelButton: true,
          confirmButtonText: "Comprar",
          cancelButtonText: "Cancelar",
          reverseButtons: true,
        })
        .then((result) => {
          result.isConfirmed
            ? swalWithBootstrapButtons.fire(
                "¡Gracias por tu compra!",
                "Hemos recibido tu pedido y nos estamos preparando para enviarlo. Te mantendremos informado sobre el estado de entrega",
                "success"
              )
            : result.dismiss === Swal.DismissReason.cancel;
        });
    }
  });

  const eliminate = document.querySelector(".eliminate");
  eliminate.addEventListener("click", () => {
    const selected = document.querySelector(".selected");
    if (selected) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Seguro que querés eliminar este elemento?",
          text: "No podrás revertir esta acción!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminarlo!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then((result) => {
          result.isConfirmed
            ? (swalWithBootstrapButtons.fire(
                "Listo!",
                "El elemento ha sido eliminado!",
                "success"
              ),
              eliminar())
            : result.dismiss ===
              Swal.DismissReason.cancel(
                swalWithBootstrapButtons.fire(
                  "Eso estuvo cerca!",
                  "Tu placa de video imaginaria está a salvo! :)",
                  "error"
                )
              );
        });
    }
  });
}

function eliminar() {
  const selected = document.querySelector(".selected");
  const index = Array.from(selected.parentNode.children).indexOf(selected);
  placasDeVideo.splice(index, 1);
  kreateTable();
}

kreateTable();
