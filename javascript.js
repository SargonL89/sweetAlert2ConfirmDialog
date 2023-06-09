function kreate() {
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
  selected.forEach(row => {
    row.addEventListener("click", () => {
      selected.forEach(row => row.classList.remove("selected"));
      row.classList.add("selected");
      kreateNDestroy();
    });
  });
}

function kreateNDestroy() {
  const eliminate = document.querySelector(".eliminate");
  const select = document.querySelector(".selected");
  eliminate.addEventListener("click", () => {
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
      }).then((result) => {
      result.isConfirmed ?
          (swalWithBootstrapButtons.fire(
            "Listo!",
            "El elemento ha sido eliminado!",
            "success"
          ))
          eliminarElemento();
      }); :
      result.dismiss === Swal.DismissReason.cancel
          (swalWithBootstrapButtons.fire(
            "Eso estuvo cerca!",
            "Tu placa de video imaginaria está a salvo! :)",
            "error"
          ));
      });
}



//     const eliminarButton = document.createElement("button");
//     eliminarButton.textContent = "Eliminar";
//     eliminarButton.addEventListener("click", () => {
//       mostrarConfirmacion(index);
//     });

//     tableBody.appendChild(eliminarButton);
//   });
// }

// function mostrarConfirmacion(index) {
//   Swal.fire({
//     title: "Eliminar elemento",
//     text: "¿Estás seguro de que deseas eliminar este elemento?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, eliminar",
//     cancelButtonText: "Cancelar",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       eliminarElemento(index);
//     }
//   });
// }

// function eliminarElemento(index) {
//   placasDeVideo.splice(index, 1);
//   Kreate();
// }

kreate();