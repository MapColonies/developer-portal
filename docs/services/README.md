# MapColonies available services

| Service | Domain | URL | |
|-|-|-|-|
| Catalog Application | Raster, 3D, DEM, Vector | `<CATALOG_APP-SERVICE_URL>` | |
| (py)CSW | Raster | `<PYCSW-RASTER-SERVICE_URL>` | |
| Map server | Raster | `<MAP_SERVER-RASTER-SERVICE_URL>` | |
| (py)CSW | 3D | `<PYCSW-3D-SERVICE_URL>` | |
| Model Service | 3D | `<MODEL_SERVER-3D-SERVICE_URL>` | |
| (py)CSW | DEM |  `<PYCSW-DEM-SERVICE_URL>` | |
| Map server | DEM |  `<MAP_SERVER-DEM-SERVICE_URL>` | |
| Superior DEM service | DEM | `<SUPERIOR-DEM-SERVICE_URL>` | |
| Query Service | Vector | `<QUERY-VECTOR-SERVICE-URL>` | |
| Replication Service | Vector | `<REPLICATION-VECTOR-SERVICE_URL>` | |

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
