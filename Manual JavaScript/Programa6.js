function calcular(actual, nacimiento) {
    return actual - nacimiento;
 }
 
 function datos(nombre, apellido, actual, nacimiento) {
    var edad = calcular(actual, nacimiento);
    document.write("Nombre: " + nombre + " " + apellido + "<br>");
    document.write("Edad: " + edad + " años<br>");
 }
 
 Llamado en HTML:
 
 <script>datos("Carlos", "Pérez", 2025, 1990);</script>
 