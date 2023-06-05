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







    const lista = document.getElementById("listaElementos");

    // Función para crear la lista de elementos
    function crearLista() {
      // Limpiar la lista actual
      lista.innerHTML = "";

      // Recorrer el array de elementos y crear los <li> correspondientes
      // placasDeVideo.forEach((placa, index) => {
      //   const li = document.createElement("li");
      //   li.textContent = placa.id + ' ' + placa.fabricante + ' ' + placa.marca + ' ' + placa.modelo + ' ' + placa.memoria + ' ' + placa.precio;
      
        placasDeVideo.forEach((placa, index) => {
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


        // Crear el botón de eliminación y agregar un evento de clic
        const eliminarButton = document.createElement("button");
        eliminarButton.textContent = "Eliminar";
        eliminarButton.addEventListener("click", () => {
          mostrarConfirmacion(index);
        });

        li.appendChild(eliminarButton);
        lista.appendChild(li);
      });
    }

    // Función para mostrar el mensaje de confirmación antes de eliminar el elemento
    function mostrarConfirmacion(index) {
      Swal.fire({
        title: "Eliminar elemento",
        text: "¿Estás seguro de que deseas eliminar este elemento?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          eliminarElemento(index);
        }
      });
    }

    // Función para eliminar el elemento del array
    function eliminarElemento(index) {
      placasDeVideo.splice(index, 1);
      crearLista();
    }

    // Crear la lista inicial
    crearLista();