import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";

/*CREAR UNA APLICACION DE BUSQUEDA DE GIFTS:

1. Crear un componente Home, Search y Gift
2. En el componente Home, hacer una funcion que se encargue de consumir la api para buscar gifts (guiarse con la documentacion) y ponerle como parametro la bsuqueda que el usuario escribio. Ej: function(search){}
3. siempre en el Home, crear un estado que por defecto tenga un arreglo vacio
3. Hacer uso de un UseEffect para ejecutar la funcion anterior pasandole un parametro. Ej: getGifs('demo')
4. Retornar en el componente Home, el componente Search y Gift
5. Pasarle como prop al componente Search la funcion creada en el segundo paso
6. En el componente search, devolver un input y ejecutar en su propiedad onChange la funcion recibida mediante los props. A esta funcion le pasamos como parametro el evento target value
7. En el componente Gift, devolver una tarjeta que permita renderizar la imagen, el titulo y la url del gift (Que seran recibidos en los props)
8. En el componente Home, hacer un map que recorra el arreglo del estado y que devuelva un componente Gift. A ese componente pasarle los props que vienen en la consulta que se hizo a la API (imagen, titulo y url) 
*/

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);