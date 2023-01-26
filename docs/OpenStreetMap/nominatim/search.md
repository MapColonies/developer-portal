# Search queries <!-- {docsify-ignore} -->

The search API allows you to look up a location from a textual description
or address. Nominatim supports structured and free-form search queries.

The search query may also contain
*special phrases* (for example "airport near lod")
which are translated into specific OpenStreetMap (OSM) tags (e.g. Pub => `amenity=pub`).
This can be used to narrow down the kind of objects to be returned.

## Parameters <!-- {docsify-ignore} -->

The search API has the following format:

```
   <VECTOR-NOMINATIM-SERVICE_URL>/search?<params>
```

The search term may be specified with two different sets of parameters:

* `q=<query>`

    Free-form query string to search for.
    Free-form queries are processed first left-to-right and then right-to-left if that fails. So you may search for
    [pilkington avenue, birmingham](<VECTOR-NOMINATIM-SERVICE_URL>/search?q=pilkington+avenue,birmingham) as well as for
    [birmingham, pilkington avenue](<VECTOR-NOMINATIM-SERVICE_URL>/search?q=birmingham,+pilkington+avenue).
    Commas are optional, but improve performance by reducing the complexity of the search.


* `street=<housenumber> <streetname>`
* `city=<city>`
* `county=<county>`
* `state=<state>`
* `country=<country>`
* `postalcode=<postalcode>`

    Alternative query string format split into several parameters for structured requests.
    Structured requests are faster but are less robust against alternative
    OSM tagging schemas. **Do not combine with** `q=<query>` **parameter**.

Both query forms accept the additional parameters listed below.

### Output format <!-- {docsify-ignore} -->

* `format=[xml|json|jsonv2|geojson|geocodejson]`

See [Place Output Formats](/OpenStreetMap/nominatim/output.md#output-formats) for details on each format. (Default: jsonv2)


* `json_callback=<string>`

Wrap JSON output in a callback function `JSONP` i.e. `<string>(<json>)`.
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
specified in the ["Accept-Language" HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language).
Either use a standard RFC2616 accept-language string or a simple
comma-separated list of language codes.

### Result limitation <!-- {docsify-ignore} -->

* `countrycodes=<countrycode>[,<countrycode>][,<countrycode>]...`

Limit search results to one or more countries. `<countrycode>` must be the
[ISO 3166-1alpha2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code,
e.g. `gb` for the United Kingdom, `de` for Germany.

Each place in Nominatim is assigned to one country code based
on OSM country boundaries. In rare cases a place may not be in any country
at all, for example, in international waters.

* `exclude_place_ids=<place_id,[place_id],[place_id]`

If you do not want certain OSM objects to appear in the search
result, give a comma separated list of the `place_id`s you want to skip.
This can be used to retrieve additional search results. For example, if a
previous query only returned a few results, then including those here would
cause the search to return other, less accurate, matches (if possible).


* `limit=<integer>`

Limit the number of returned results. (Default: 10, Maximum: 50)


* `viewbox=<x1>,<y1>,<x2>,<y2>`

The preferred area to find search results. Any two corner points of the box
are accepted as long as they span a real box. `x` is longitude,
`y` is latitude.


* `bounded=[0|1]`

When a viewbox is given, restrict the result to items contained within that
viewbox (see above). When `viewbox` and `bounded=1` are given, an amenity
only search is allowed. Give the special keyword for the amenity in square
brackets, e.g. `[pub]` and a selection of objects of this type is returned.
There is no guarantee that the result is complete. (Default: 0)


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

* `dedupe=[0|1]`

Sometimes you have several objects in OSM identifying the same place or
object in reality. The simplest case is a street being split into many
different OSM ways due to different characteristics. Nominatim will
attempt to detect such duplicates and only return one match unless
this parameter is set to 0. (Default: 1)

* `debug=[0|1]`

Output assorted developer debug information. Data on internals of Nominatim's
"Search Loop" logic, and SQL queries. The output is (rough) HTML format.
This overrides the specified machine readable format. (Default: 0)



## Examples <!-- {docsify-ignore} -->


##### XML with kml polygon <!-- {docsify-ignore} -->

[<VECTOR-NOMINATIM-SERVICE_URL>/search?q=נוה+שאנן+20+ירושלים&format=xml&polygon_geojson=1&addressdetails=1](<VECTOR-NOMINATIM-SERVICE_URL>/search?q=נוה+שאנן+20+ירושלים&format=xml&polygon_geojson=1&addressdetails=1)

[Demo Link](<VECTOR-NOMINATIM-UI_URL>/search.html?q=נוה+שאנן+20+ירושלים&polygon_geojson=1&addressdetails=1)
```xml
  <searchresults timestamp="Mon, 23 Jan 23 11:14:56 +0000"
    attribution="Data © OpenStreetMap contributors, ODbL 1.0. http://www.openstreetmap.org/copyright"
    querystring="נוה שאנן 20 ירושלים" exclude_place_ids="135102101"
    more_url="<VECTOR-NOMINATIM-SERVICE_URL>/search/?q=%D7%A0%D7%95%D7%94+%D7%A9%D7%90%D7%A0%D7%9F+20+%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D&addressdetails=1&polygon_geojson=1&exclude_place_ids=135102101&format=xml&accept-language=en-GB%2Cen-US%3Bq%3D0.9%2Cen%3Bq%3D0.8">
    <place place_id="135102101" osm_type="way" osm_id="117395912" place_rank="26" address_rank="26"
      boundingbox="31.7701362,31.7728728,35.2005205,35.2011552" geojson="{" type":" LineString"," coordinates":[[35.2005205,31.7728728],[35.2006515,31.7727207],[35.2008554,31.7724425],[35.2008817,31.7722532],[35.2009251,31.7719408],[35.2010378,31.7709603],[35.2010813,31.77059],[35.2011075,31.7703674],[35.2011369,31.7702248],[35.2011552,31.7701362]]}" lat="31.7719408"
      lon="35.2009251"
      display_name="Nave Shaanan, Nayot, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9218812, Israel"
      class="highway" type="residential" importance="0.10001">
      <road>Nave Shaanan</road>
      <suburb>Nayot</suburb>
      <city>Jerusalem</city>
      <state_district>Jerusalem Subdistrict</state_district>
      <state>Jerusalem District</state>
      <ISO3166-2-lvl4>IL-JM</ISO3166-2-lvl4>
      <postcode>9218812</postcode>
      <country>Israel</country>
      <country_code>il</country_code>
    </place>
  </searchresults>
```

##### JSON with SVG polygon <!-- {docsify-ignore} -->

[https://nominatim.openstreetmap.org/search/?q=שדרות+רוטשילד+תל+אביב&format=json&addressdetails=1&limit=1&polygon_svg=1](<VECTOR-NOMINATIM-SERVICE_URL>/search/?q=שדרות+רוטשילד+תל+אביב&format=json&addressdetails=1&limit=1&polygon_svg=1)

[Demo Link](<VECTOR-NOMINATIM-UI_URL>/search.html?q=שדרות+רוטשילד+תל+אביב&format=jsonv2&addressdetails=1&limit=1)

```json
    {
        "place_id": 144435067,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "way",
        "osm_id": 154741757,
        "boundingbox": [
            "32.0635149",
            "32.0681999",
            "34.7729215",
            "34.7779348"
        ],
        "lat": "32.0654291",
        "lon": "34.7766695",
        "display_name": "Rothschild Boulevard, Tel Aviv, Lev Tel Aviv, Tel Aviv-Yafo, Tel Aviv Subdistrict, Tel Aviv District, 6688209, Israel",
        "class": "highway",
        "type": "tertiary",
        "importance": 0.10000999999999993,
        "address": {
            "road": "Rothschild Boulevard",
            "residential": "Tel Aviv",
            "suburb": "Lev Tel Aviv",
            "city": "Tel Aviv-Yafo",
            "state_district": "Tel Aviv Subdistrict",
            "state": "Tel Aviv District",
            "ISO3166-2-lvl4": "IL-TA",
            "postcode": "6688209",
            "country": "Israel",
            "country_code": "il"
        },
        "svg": "M 34.7779348 -32.0681999 L 34.7779248 -32.0681693 34.777464 -32.0667233 34.7774456 -32.0666655 34.7774298 -32.0666189 34.7771958 -32.0659273 34.7767089 -32.0654665 34.7766695 -32.0654291 34.7755674 -32.0643757 34.7748309 -32.0641328 34.7747835 -32.0641179 34.7747331 -32.0641021 34.7744227 -32.0640012 34.7741919 -32.0639261 34.7740025 -32.0638618 34.7737944 -32.0637997 34.7737636 -32.0637897 34.7729979 -32.0635408 34.7729506 -32.0635243 34.7729215 -32.0635149"
    }
```

##### JSON with address details <!-- {docsify-ignore} -->

[<VECTOR-NOMINATIM-SERVICE_URL>/search?addressdetails=1&q=bakery+in+beer+sheba+&format=json&limit=1](<VECTOR-NOMINATIM-SERVICE_URL>/search?addressdetails=1&q=bakery+in+beer+sheba+&format=json&limit=1)

[Demo Link](<VECTOR-NOMINATIM-UI_URL>/search.html?addressdetails=1&q=bakery+in+beer+sheba+&format=json&limit=1)

```json
    {
        "place_id": 15852500,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 1772765812,
        "boundingbox": [
            "31.2447187",
            "31.2448187",
            "34.8124668",
            "34.8125668"
        ],
        "lat": "31.2447687",
        "lon": "34.8125168",
        "display_name": "Harishonim bakery, Eliyahu Nawi, Beersheba Industrial Area, Beer-Sheba, Beersheba Subdistrict, South District, 8441410, Israel",
        "class": "shop",
        "type": "bakery",
        "importance": 0.40001,
        "icon": "<VECTOR-NOMINATIM-SERVICE_URL>/ui/mapicons/shopping_bakery.p.20.png",
        "address": {
            "shop": "Harishonim bakery",
            "road": "Eliyahu Nawi",
            "suburb": "Beersheba Industrial Area",
            "city": "Beer-Sheba",
            "state_district": "Beersheba Subdistrict",
            "state": "South District",
            "ISO3166-2-lvl4": "IL-D",
            "postcode": "8441410",
            "country": "Israel",
            "country_code": "il"
        }
    }
```

##### GeoJSON <!-- {docsify-ignore} -->

[<VECTOR-NOMINATIM-SERVICE_URL>/search?q=חורב+15+חיפה&format=geojson](<VECTOR-NOMINATIM-SERVICE_URL>/search?q=חורב+15+חיפה&format=geojson)

[Demo Link](<VECTOR-NOMINATIM-UI_URL>/search.html?q=חורב+15+חיפה&format=geojson)

```json
{
    "type": "FeatureCollection",
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "place_id": 123700904,
                "osm_type": "way",
                "osm_id": 60468022,
                "display_name": "Horev Center, 15, Horev, Ahuzzat Shemuel, Carmel Heights District, Haifa, Haifa Subdistrict, Haifa District, 3434120, Israel",
                "place_rank": 30,
                "category": "shop",
                "type": "mall",
                "importance": 0.11000999999999997
            },
            "bbox": [
                34.9867531,
                32.7841525,
                34.9877418,
                32.785079
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    34.98706599757996,
                    32.7845887
                ]
            }
        }
    ]
}
```

##### GeocodeJSON <!-- {docsify-ignore} -->

[<VECTOR-NOMINATIM-SERVICE_URL>/search?q=הכותל+המערבי&format=geocodejson](<VECTOR-NOMINATIM-SERVICE_URL>/search?q=הכותל+המערבי&format=geocodejson)

[Demo Link](<VECTOR-NOMINATIM-UI_URL>/search.html?q=הכותל+המערבי&format=geocodejson)

```json
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "attribution": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "licence": "ODbL",
        "query": "הכותל המערבי"
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "geocoding": {
                    "place_id": 267010108,
                    "osm_type": "way",
                    "osm_id": 817206833,
                    "osm_key": "amenity",
                    "osm_value": "place_of_worship",
                    "type": "house",
                    "label": "Western Wall, Wilson's Arch, Jewish Quarter, Old City, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9511208, Israel",
                    "name": "Western Wall"
                }
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    35.23446114230339,
                    31.776734949999998
                ]
            }
        }
    ]
}
```
