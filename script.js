
fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <tr>
            <td>${item.title}</td>
            <td>${item.artist}</td>
            <td> ${item.date}</td>
            <td>${item.medium}</td>
            <td>${item.dimensions_in}</td>
            <td> ${item.weight}</td>
            <td>${item.culture}</td>
            <td>${item.gallerynumber}</td>
            <td><img src='${item.image}'> </td>

         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});