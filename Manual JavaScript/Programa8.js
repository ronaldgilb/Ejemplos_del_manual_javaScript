<form>
   Diagonal Mayor: <input type="text" id="Dmayor"><br>
   Diagonal Menor: <input type="text" id="Dmenor"><br>
   Área: <input type="text" id="area" readonly><br>
   <button type="button" onclick="AreaRombo()">Calcular</button>
</form>

<script>
   function AreaRombo() {
      var Dmayor = document.getElementById("Dmayor").value;
      var Dmenor = document.getElementById("Dmenor").value;
      var area = (Dmayor * Dmenor) / 2;
      document.getElementById("area").value = area;
   }
</script>
