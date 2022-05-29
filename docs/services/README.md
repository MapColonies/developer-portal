# MapColonies available services

### Raster
- (py)CSW Raster: <br/>
  `<PYCSW-RASTER-SERVICE_URL>`

- (py)CSW 3D: <br/>
  `<PYCSW-3D-SERVICE_URL>`

- (py)CSW DEM: <br/>
  `<PYCSW-DEM-SERVICE_URL>`

- Map server Raster: <br/>
  `<MAP_SERVER-RASTER-SERVICE_URL>`

### DEM
- Map server DEM: <br/>
  `<MAP_SERVER-DEM-SERVICE_URL>`

### Vector
- Query Service VECTOR: <br/>
  `<QUERY-VECTOR-SERVICE-URL>`
- Replication Service VECTOR: <br/>
  `<REPLICATION-VECTOR-SERVICE_URL>`
גרןהק
<script>
var copy = function(target) {
    var textArea = document.createElement('textarea')
    textArea.setAttribute('style','width:1px;border:0;opacity:0;')
    document.body.appendChild(textArea)
    textArea.textContent = target.innerText
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)

    console.log(target);
}

// setTimeout(()=>{
  var pres = document.querySelectorAll("li code")
  console.log(pres);
  pres.forEach(function(pre){
    console.log(pre);
    var button = document.createElement("button")
    button.style.position = 'relative';
    button.style.top = '4px';
    button.style.height = '24px';
    // button.style.border = '0px';
    button.style.marginLeft = '10px';
    button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M10 19h10v1h-10v-1zm14-13v18h-18v-6h-6v-18h18v6h6zm-18 0h10v-4h-14v14h4v-10zm16 2h-1.93c-.669 0-1.293.334-1.664.891l-1.406 2.109h-3.93l-1.406-2.109c-.371-.557-.995-.891-1.664-.891h-2v14h14v-14zm-12 6h10v-1h-10v1zm0 3h10v-1h-10v1z"/></svg>';
    pre.parentNode.insertBefore(button, pre.nextSibling)
    button.addEventListener('click', function(e){
      e.preventDefault()
      copy(pre)
    })
  })
// }, 2000);
</script>
