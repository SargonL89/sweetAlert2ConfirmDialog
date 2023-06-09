// function cargarProductos() {
//   const tableBody = document.querySelector(".body");

// }

// function eliminarElem() {
//   const buttons = document.querySelectorAll(".eliminar");
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const swalWithBootstrapButtons = Swal.mixin({
//         customClass: {
//           confirmButton: "btn btn-success",
//           cancelButton: "btn btn-danger",
//         },
//         buttonsStyling: false
//       });

//       swalWithBootstrapButtons
//         .fire({
//           title: "Seguro que querés eliminar este elemento?",
//           text: "No podrás revertir esta acción!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonText: "Sí, eliminarlo!",
//           cancelButtonText: "No, cancelar!",
//           reverseButtons: true
//         })
//         .then((result) => {
//         result.isConfirmed ?
//             (swalWithBootstrapButtons.fire(
//               "Listo!",
//               "El elemento ha sido eliminado!",
//               "success"
//             )) :
//         result.dismiss === Swal.DismissReason.cancel
//             (swalWithBootstrapButtons.fire(
//               "Eso estuvo cerca!",
//               "Tu placa de video imaginaria está a salvo! :)",
//               "error"
//             ));
//         });
//     });
//   });
// }

// cargarProductos();
// eliminarElem();

// placasDeVideo.forEach((placa, index) => {
//   const li = document.createElement("li");
//   li.textContent = placa.id + ' ' + placa.fabricante + ' ' + placa.marca + ' ' + placa.modelo + ' ' + placa.memoria + ' ' + placa.precio;

function kreate() {
  const tableBody = document.querySelector(".tableBody");
  tableBody.innerHTML = "";

  placasDeVideo.forEach((placa, index) => {
    tableBody.innerHTML += `<tr class="tr">
        <td>${placa.id}</td>
        <td>${placa.fabricante}</td>
        <td>${placa.marca}</td>
        <td>${placa.modelo}</td>
        <td>${placa.memoria}</td>
        <td>${placa.precio}</td>
        </tr>`;
    tableBody.addEventListener("click", () => {
        placasDeVideo.forEach((placa) => placa.classList.remove("selected"));
        placa.classList.add("selected");
    });
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

const listItems = document.querySelectorAll("#myList button");

function Nuevo() {
  // Agregar el evento de clic a cada elemento de la lista
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Eliminar la clase 'selected' de todos los elementos
      listItems.forEach((item) => item.classList.remove("selected"));

      // Agregar la clase 'selected' al elemento seleccionado
      item.classList.add("selected");
    });
  });
}
Nuevo();
