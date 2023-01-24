# MapColonies available services

|   Domain   	|       Service       	|                  URL                  	|
|:----------:	|:-------------------:	|:-------------------------------------:	|
|            	| Catalog Application 	| `<RASTER-CATALOG-SERVICE_URL>`        	|
| **Raster** 	|                     	|                                       	|
|            	| Catalog             	| `<RASTER-CATALOG-SERVICE_URL>`        	|
|            	| Map                 	| `<RASTER-RASTER-SERVING-SERVICE_URL>` 	|
|            	| Export              	| `<RASTER-EXPORT-SERVICE_URL>`         	|
| **Vector** 	|                     	|                                       	|
|            	| Replication         	| `<VECTOR-REPLICATION-SERVICE_URL>`    	|
|            	| Query               	| `<VECTOR-QUERY-SERVICE_URL>`          	|
|            	| Nominatim               	| `<VECTOR-QUERY-SERVICE_URL>`          	|
|            	| Nominatim-UI               	| [<VECTOR-NOMINATIM-UI_URL>](<VECTOR-NOMINATIM-UI_URL>)          	|

| **3D**     	|                     	|                                       	|
|            	| Catalog             	| `<D3-CATALOG-SERVICE_URL>`            	|
|            	| Map                 	| `<D3-MODEL-SERVING-SERVICE_URL>`      	|
| **DEM**        	|                     	|                                       	|
|            	| Catalog             	| `<DEM-CATALOG-SERVICE_URL>`           	|
|            	| Superior            	| `<DEM-SUPERIOR-SERVICE_URL>`          	|
|            	| Map                 	| `<DEM-DEM-SERVING-SERVICE_URL>`       	|
<style>
  table code {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 500px !important;
    display: block;
  }
</style>
<script>
var copy = function(target) {
    var textArea = document.createElement('textarea')
    textArea.setAttribute('style','width:1px;border:0;opacity:0;')
    document.body.appendChild(textArea)
    textArea.textContent = target.innerText
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
}

// setTimeout(()=>{
  var pres = document.querySelectorAll("td code")
  pres.forEach(function(pre){
    var button = document.createElement("button")
    button.style.position = 'relative';
    button.style.top = '4px';
    button.style.height = '24px';
    // button.style.border = '0px';
    button.style.marginLeft = '10px';
    button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M10 19h10v1h-10v-1zm14-13v18h-18v-6h-6v-18h18v6h6zm-18 0h10v-4h-14v14h4v-10zm16 2h-1.93c-.669 0-1.293.334-1.664.891l-1.406 2.109h-3.93l-1.406-2.109c-.371-.557-.995-.891-1.664-.891h-2v14h14v-14zm-12 6h10v-1h-10v1zm0 3h10v-1h-10v1z"/></svg>';
    pre.parentNode.nextSibling.nextSibling.appendChild(button);
    button.addEventListener('click', function(e){
      e.preventDefault()
      copy(pre)
    });
  })
// }, 2000);
</script>
