document.addEventListener("DOMContentLoaded", function () {
    // Definir las tablas para cada asignatura
    const tablaAplicaciones = `
        <table id='aplicaciones'>
            <tr>
                <th>FerTob</th>
                <th>APW</th>
                <th>235</th>
            </tr>
        </table>
    `;

    const tablaRedes = `
        <table id='Redes'>
            <tr>
                <th>JOSEP</th>
                <th>SRC</th>
                <th>235</th>
            </tr>
        </table>
    `;

    const tablaEmpresas = `
        <table id='Empresas'>
            <tr>
                <th>PINO</th>
                <th>EMR</th>
                <th>126</th>
            </tr>
        </table>
    `;

    const tablaSeguridad = `
        <table id='Seguridad'>
            <tr>
                <th>ABRSAN</th>
                <th>SGF</th>
                <th>235</th>
            </tr>
        </table>
    `;

    const tablaSistemas = `
        <table id='Sistemas' >
            <tr>
                <th>EDUARD</th>
                <th>SSN</th>
                <th>235</th>
            </tr>
        </table>
    `;
//Horas de clase:
    const Hora1 = `<td> 8:00 - 8:55 </td>`
    const Hora2 = `<td> 8:55 - 9:50 </td>`
    const Hora3 = `<td> 9:50 - 10:45 </td>`
    const Hora4 = `<td> 11:15 - 12:10 </td>`
    const Hora5 = `<td> 12:10 - 13:05 </td>`
    const Hora6 = `<td> 13:05 - 14:00 </td>`

    // DIV - HTML
    const lunes = document.getElementById("lunes");
    const lunesTarde = document.getElementById("lunesTarde");
    const martes = document.getElementById("martes");
    const martesTarde = document.getElementById("martesTarde");
    const miercoles = document.getElementById("miercoles");
    const miercolesTarde = document.getElementById("miercolesTarde");
    const jueves = document.getElementById("jueves");
    const juevesTarde = document.getElementById("juevesTarde");
    const viernes = document.getElementById("viernes");
    const viernesTarde = document.getElementById("viernesTarde");



// Horario DIV, antes y después del recreo.
lunes.innerHTML = Hora1 + '<div>' + tablaAplicaciones + '</div>' + Hora2 + '<div>' + tablaAplicaciones + '</div>' + Hora3 + '<div>' + tablaRedes + '</div>';
lunesTarde.innerHTML = Hora4 + '<div>' + tablaRedes + '</div>' + Hora5 + '<div>' + tablaAplicaciones + '</div>' + Hora6 + '<div>' + tablaAplicaciones + '</div>';
martes.innerHTML = Hora1 + '<div>' + tablaSistemas + '</div>' + Hora2 + '<div>' + tablaSistemas + '</div>' + Hora3 + '<div>' + tablaEmpresas + '</div>';
martesTarde.innerHTML = Hora4 + '<div>' + tablaEmpresas + '</div>' + Hora5 + '<div>' + tablaSeguridad + '</div>' + Hora6 + '<div>' + tablaSeguridad + '</div>';
miercoles.innerHTML = Hora1 + '<div>' + tablaAplicaciones + '</div>' + Hora2 + '<div>' + tablaAplicaciones + '</div>' + Hora3 + '<div>' + tablaSeguridad + '</div>';
miercolesTarde.innerHTML = Hora4 + '<div>' + tablaSeguridad + '</div>' + Hora5 + '<div>' + tablaRedes + '</div>' + Hora6 + '<div>' + tablaEmpresas + '</div>';
jueves.innerHTML = Hora1 + '<div>' + tablaSeguridad + '</div>' + Hora2 + '<div>' + tablaSeguridad + '</div>' + Hora3 + '<div>' + tablaSistemas + '</div>';
juevesTarde.innerHTML = Hora4 + '<div>' + tablaSistemas + '</div>' + Hora5 + '<div>' + tablaRedes + '</div>' + Hora6 + '<div>' + tablaRedes + '</div>';
viernes.innerHTML = Hora1 + '<div>' + tablaSistemas + '</div>' + Hora2 + '<div>' + tablaSistemas + '</div>' + Hora3 + '<div>' + tablaEmpresas + '</div>';
viernesTarde.innerHTML = Hora4 + '<div>' + tablaAplicaciones + '</div>' + Hora5 + '<div>' + tablaRedes + '</div>' + Hora6 + '<div>' + tablaRedes + '</div>';

});
