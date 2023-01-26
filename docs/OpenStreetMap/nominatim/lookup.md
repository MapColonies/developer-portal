# Address lookup <!-- {docsify-ignore} -->

The lookup API allows to query the address and other details of one or
multiple OSM objects like node, way or relation.

## Parameters <!-- {docsify-ignore} -->

The lookup API has the following format:

```
  <VECTOR-NOMINATIM-SERVICE_URL>/lookup?osm_ids=[N|W|R]<value>,…,…,&<params>
```

`osm_ids` is mandatory and must contain a comma-separated list of OSM ids each
prefixed with its type, one of node(N), way(W) or relation(R). Up to 50 ids
can be queried at the same time.

Additional optional parameters are explained below.

### Output format <!-- {docsify-ignore} -->

* `format=[xml|json|jsonv2|geojson|geocodejson]`

See [Place Output Formats](/OpenStreetMap/nominatim/output.md#output-formats) for details on each format. (Default: xml)

* `json_callback=<string>`

Wrap JSON output in a callback function (JSONP) i.e. `<string>(<json>)`.
Only has an effect for JSON output formats.

### Output details <!-- {docsify-ignore} -->

* `addressdetails=[0|1]`

Include a breakdown of the address into elements. (Default: 0)


* `extratags=[0|1]`

Include additional information in the result if available,
e.g. wikipedia link, opening hours. (Default: 0)


* `namedetails=[0|1]`

Include a list of alternative names in the results. These may include
language variants, references, operator and brand. (Default: 0)


### Language of results <!-- {docsify-ignore} -->

* `accept-language=<browser language string>`

Preferred language order for showing search results, overrides the value
specified in the "Accept-Language" HTTP header.
Either use a standard RFC2616 accept-language string or a simple
comma-separated list of language codes.

### Polygon output <!-- {docsify-ignore} -->

* `polygon_geojson=1`
* `polygon_kml=1`
* `polygon_svg=1`
* `polygon_text=1`

Output geometry of results as a GeoJSON, KML, SVG or WKT. Only one of these
options can be used at a time. (Default: 0)

* `polygon_threshold=0.0`

Return a simplified version of the output geometry. The parameter is the
tolerance in degrees with which the geometry may differ from the original
geometry. Topology is preserved in the result. (Default: 0.0)

### Other <!-- {docsify-ignore} -->

* `email=<valid email address>`

If you are making large numbers of request please include an appropriate email
address to identify your requests (only relevant when using the service in the internet).

* `debug=[0|1]`

Output assorted developer debug information. Data on internals of Nominatim's
"Search Loop" logic, and SQL queries. The output is (rough) HTML format.
This overrides the specified machine readable format. (Default: 0)


## Examples <!-- {docsify-ignore} -->

##### XML <!-- {docsify-ignore} -->

[<VECTOR-NOMINATIM-SERVICE_URL>/lookup?osm_ids=R7116646,W551414758,N4976386821](<VECTOR-NOMINATIM-SERVICE_URL>/lookup?osm_ids=R7116646,W551414758,N4976386821)

```xml
  <lookupresults timestamp="Tue, 24 Jan 23 06:41:19 +0000"
    attribution="Data © OpenStreetMap contributors, ODbL 1.0. http://www.openstreetmap.org/copyright"
    querystring="R7116646,W551414758,N4976386821" more_url="">
    <place place_id="308733271" osm_type="relation" osm_id="7116646" place_rank="30" address_rank="30"
      boundingbox="31.7805304,31.7816054,35.2033623,35.2046501" lat="31.78107505"
      lon="35.20375223509767"
      display_name="Supreme Court of Israel, Rotschild, Kiryat HaMemshalah, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9432301, Israel"
      class="amenity" type="courthouse" importance="0.24232784765904">
      <amenity>Supreme Court of Israel</amenity>
      <road>Rotschild</road>
      <suburb>Kiryat HaMemshalah</suburb>
      <city>Jerusalem</city>
      <state_district>Jerusalem Subdistrict</state_district>
      <state>Jerusalem District</state>
      <ISO3166-2-lvl4>IL-JM</ISO3166-2-lvl4>
      <postcode>9432301</postcode>
      <country>Israel</country>
      <country_code>il</country_code>
    </place>
    <place place_id="222933834" osm_type="way" osm_id="551414758" place_rank="30" address_rank="30"
      boundingbox="31.7760076,31.776938,35.2048741,35.2059629" lat="31.776474049999997"
      lon="35.20538295033272"
      display_name="Knesset, Berman Square, Kiryat HaMemshalah, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9107202, Israel"
      class="office" type="government" importance="0.34176259084946">
      <office>Knesset</office>
      <road>Berman Square</road>
      <suburb>Kiryat HaMemshalah</suburb>
      <city>Jerusalem</city>
      <state_district>Jerusalem Subdistrict</state_district>
      <state>Jerusalem District</state>
      <ISO3166-2-lvl4>IL-JM</ISO3166-2-lvl4>
      <postcode>9107202</postcode>
      <country>Israel</country>
      <country_code>il</country_code>
    </place>
    <place place_id="55796886" osm_type="node" osm_id="4976386821" place_rank="30" address_rank="30"
      boundingbox="32.0695874,32.0696874,34.7845255,34.7846255" lat="32.0696374" lon="34.7845755"
      display_name="Lehamim, 103, HaHashmonaim, Sarona Gardens, Tel Aviv, Bitsaron, Tel Aviv-Yafo, Tel Aviv Subdistrict, Tel Aviv District, 6713203, Israel"
      class="shop" type="bakery" importance="9.9999999999545E-6">
      <shop>Lehamim</shop>
      <house_number>103</house_number>
      <road>HaHashmonaim</road>
      <suburb>Bitsaron</suburb>
      <residential>Tel Aviv</residential>
      <city>Tel Aviv-Yafo</city>
      <state_district>Tel Aviv Subdistrict</state_district>
      <state>Tel Aviv District</state>
      <ISO3166-2-lvl4>IL-TA</ISO3166-2-lvl4>
      <postcode>6713203</postcode>
      <country>Israel</country>
      <country_code>il</country_code>
    </place>
  </lookupresults>
```

##### JSON with extratags <!-- {docsify-ignore} -->

[<VECTOR-NOMINATIM-SERVICE_URL>/lookup?osm_ids=W44296789&format=json&extratags=1](<VECTOR-NOMINATIM-SERVICE_URL>/lookup?osm_ids=W44296789&format=json&extratags=1)

[Demo Link](<VECTOR-NOMINATIM-UI_URL>/details.html?osmtype=W&osmid=44296789)

```json
[
    {
        "place_id": 119518296,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "way",
        "osm_id": 44296789,
        "boundingbox": [
            "31.7775552",
            "31.777817",
            "35.2019221",
            "35.203181"
        ],
        "lat": "31.777682300000002",
        "lon": "35.202551594501585",
        "display_name": "Ministry of Finance, Rupin, Kiryat HaMemshalah, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9218812, Israel",
        "class": "office",
        "type": "government",
        "importance": 0.4438713827293206,
        "address": {
            "office": "Ministry of Finance",
            "road": "Rupin",
            "suburb": "Kiryat HaMemshalah",
            "city": "Jerusalem",
            "state_district": "Jerusalem Subdistrict",
            "state": "Jerusalem District",
            "ISO3166-2-lvl4": "IL-JM",
            "postcode": "9218812",
            "country": "Israel",
            "country_code": "il"
        },
        "extratags": {
            "wikidata": "Q1707870",
            "government": "ministry",
            "building:levels": "7"
        }
    }
]
```
