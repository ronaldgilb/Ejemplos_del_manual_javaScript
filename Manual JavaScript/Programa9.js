<form>
   <table border="1">
      <tr>
         <td>Producto</td>
         <td>Precio</td>
         <td>Cantidad</td>
         <td>Subtotal</td>
      </tr>
      <tr>
         <td>Arroz</td>
         <td><input type="text" name="arroz" value="1250" disabled></td>
         <td><input type="text" name="carroz" onchange="facturar(this.form)"></td>
         <td><input type="text" name="sarroz"></td>
      </tr>
      <tr>
         <td>Frijoles</td>
         <td><input type="text" name="frijol" value="1500" disabled></td>
         <td><input type="text" name="cfrijol" onchange="facturar(this.form)"></td>
         <td><input type="text" name="sfrijol"></td>
      </tr>
      <tr>
         <td>Café</td>
         <td><input type="text" name="cafe" value="1950" disabled></td>
         <td><input type="text" name="ccafe" onchange="facturar(this.form)"></td>
         <td><input type="text" name="scafe"></td>
      </tr>
      <tr>
         <td colspan="2"></td>
         <td>Total:</td>
         <td><input type="text" name="total"></td>
      </tr>
      <tr>
         <td colspan="2"></td>
         <td>IVA (16%):</td>
         <td><input type="text" name="iva"></td>
      </tr>
      <tr>
         <td colspan="2"></td>
         <td>Neto a Pagar:</td>
         <td><input type="text" name="neto"></td>
      </tr>
   </table>
</form>

<script>
   function facturar(form) {
      form.sarroz.value = form.arroz.value * form.carroz.value;
      form.sfrijol.value = form.frijol.value * form.cfrijol.value;
      form.scafe.value = form.cafe.value * form.ccafe.value;

      var total = parseInt(form.sarroz.value) + parseInt(form.sfrijol.value) + parseInt(form.scafe.value);
      var iva = total * 0.16;
      var neto = total + iva;

      form.total.value = total;
      form.iva.value = iva;
      form.neto.value = neto;
   }
</script>
