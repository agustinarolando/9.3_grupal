document.addEventListener("DOMContentLoaded", ()=> {
    let itemList = [];
    let container = document.getElementById("contenedor");

    function reloadPage() {
        //Toma el array almacenado en localStorage y lo convierte a un objeto de JavaScript.
        let savedList = JSON.parse(localStorage.getItem("itemList"));

        if (savedList !== null) {
            //Si recargo la página y hay información previa se actualiza a la lista vacía para que se siga mostrando.
            itemList = savedList;
            for (let i = 0; i < savedList.length; i++) {
                container.innerHTML += '<li class="list-group-item">' + savedList[i] + '</li>';
            };
        };
    };

    reloadPage();

    document.getElementById("agregar").addEventListener("click", ()=> {
        //Agrega el elemento a la lista.
        itemList.push(document.getElementById("item").value);

        container.innerHTML += '<li class="list-group-item">' + document.getElementById("item").value + '</li>' ;

        //Toma el objeto de JavaScript y lo guarda como una cadena JSON en localStorage.
        localStorage.setItem("itemList", JSON.stringify(itemList));
    });

    document.getElementById("limpiar").addEventListener("click", ()=> {
        //Vacío la lista, el contenedor y resetea el almacenamiento local.
        itemList = [];

        container.innerHTML = "";

        localStorage.setItem("itemList", JSON.stringify(itemList));
    });
});