---
sidebar_position: 2
id: osm-nominatim-reverse-geocoding
slug: Osm-Reverse-Search-API
title: Reverse GeoCoding API
tags:
  - osm
  - search
  - API
  - reverse
  - nominatim

---
# Reverse Geocoding

Reverse geocoding generates an address from a latitude and longitude.

## How it works

The reverse geocoding API does not exactly compute the address for the
coordinate it receives. It works by finding the closest suitable OSM object
and returning its address information. This may occasionally lead to
unexpected results.

First of all, Nominatim only includes OSM objects in
its index that are suitable for searching. Small, unnamed paths for example
are missing from the database and can therefore not be used for reverse
geocoding either.

The other issue to be aware of is that the closest OSM object may not always
have a similar enough address to the coordinate you were requesting. For
example, in dense city areas it may belong to a completely different street.


## Parameters

The main format of the reverse API is

```
<VECTOR-NOMINATIM-SERVICE_URL>/reverse?lat=<value>&lon=<value>&<params>
```

where `lat` and `lon` are latitude and longitude of a coordinate in WGS84
projection. The API returns exactly one result or an error when the coordinate
is in an area with no OSM data coverage.
Additional parameters are accepted as listed below.

:::caution
The reverse API used to allow address lookup for a single OSM object by
  its OSM id. This use is now deprecated. Use the [Address Lookup API](/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API)
  instead.
:::

### Output format

* `format=[xml|json|jsonv2|geojson|geocodejson]`

See [Place Output Formats](/docs/MapColonies/openstreetmap/nominatim/Osm-output-API) for details on each format. (Default: xml)

* `json_callback=<string>`

Wrap JSON output in a callback function ([JSONP](https://en.wikipedia.org/wiki/JSONP)) i.e. `<string>(<json>)`.
Only has an effect for JSON output formats.

### Output details

* `addressdetails=[0|1]`

Include a breakdown of the address into elements. (Default: 1)


* `extratags=[0|1]`

Include additional information in the result if available,
e.g. wikipedia link, opening hours. (Default: 0)


* `namedetails=[0|1]`

Include a list of alternative names in the results. These may include
language variants, references, operator and brand. (Default: 0)


### Language of results

* `accept-language=<browser language string>`

Preferred language order for showing search results, overrides the value
specified in the "Accept-Language" HTTP header.
Either use a standard RFC2616 accept-language string or a simple
comma-separated list of language codes.

### Result limitation

* `zoom=[0-18]`

Level of detail required for the address. Default: 18. This is a number that
corresponds roughly to the zoom level used in XYZ tile sources in frameworks
like Leaflet.js, Openlayers etc (Please take not that WGS84 zoom level is slightly different).
In terms of address details the zoom levels are as follows:

 zoom | address detail
 -----|---------------
  3   | country
  5   | state
  8   | county
  10  | city
  14  | suburb
  16  | major streets
  17  | major and minor streets
  18  | building


### Polygon output

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

### Other

* `email=<valid email address>`

If you are making a large number of requests, please include an appropriate email
address to identify your requests (only relevant when using the service in the internet).


* `debug=[0|1]`

Output assorted developer debug information. Data on internals of Nominatim's
"Search Loop" logic, and SQL queries. The output is (rough) HTML format.
This overrides the specified machine readable format. (Default: 0)


## Examples

`/reverse.html?format=xml&lat=31.770454150126838&lon=35.20109340043129&zoom=18&addressdetails=1`

```xml title="Response in XML Format"
  <reversegeocode timestamp="Mon, 23 Jan 23 12:44:51 +0000"
    attribution="Data © OpenStreetMap contributors, ODbL 1.0. http://www.openstreetmap.org/copyright"
    querystring="format=xml&lat=31.770454150126838&lon=35.20109340043129&zoom=18&addressdetails=1">
    <result place_id="19306678" osm_type="node" osm_id="2260660571" lat="31.7704127" lon="35.2010157"
      boundingbox="31.7703627,31.7704627,35.2009657,35.2010657" place_rank="30" address_rank="30">18,
      Nave Shaanan, Nayot, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9218812, Israel</result>
    <addressparts>
      <house_number>18</house_number>
      <road>Nave Shaanan</road>
      <suburb>Nayot</suburb>
      <city>Jerusalem</city>
      <state_district>Jerusalem Subdistrict</state_district>
      <state>Jerusalem District</state>
      <ISO3166-2-lvl4>IL-JM</ISO3166-2-lvl4>
      <postcode>9218812</postcode>
      <country>Israel</country>
      <country_code>il</country_code>
    </addressparts>
  </reversegeocode>
```

##### Example with `format=jsonv2`

`/reverse.html?format=jsonv2&lat=32.06906022673506&lon=34.778194163532476`

```json title="Response in jsonv2 Format"
{
    "place_id": 143009880,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 149962182,
    "lat": "32.0691986",
    "lon": "34.77800567065701",
    "place_rank": 30,
    "category": "building",
    "type": "apartments",
    "importance": 0.00000999999999995449,
    "addresstype": "building",
    "name": null,
    "display_name": "109, Rothschild Boulevard, Tel Aviv, Lev Tel Aviv, Tel Aviv-Yafo, Tel Aviv Subdistrict, Tel Aviv District, 6527401, Israel",
    "address": {
        "house_number": "109",
        "road": "Rothschild Boulevard",
        "residential": "Tel Aviv",
        "suburb": "Lev Tel Aviv",
        "city": "Tel Aviv-Yafo",
        "state_district": "Tel Aviv Subdistrict",
        "state": "Tel Aviv District",
        "ISO3166-2-lvl4": "IL-TA",
        "postcode": "6527401",
        "country": "Israel",
        "country_code": "il"
    },
    "boundingbox": [
        "32.0690938",
        "32.0693033",
        "34.7778663",
        "34.778145"
    ]
}
```

##### Example with `format=geojson`

* `/reverse.html?format=geojson&lat=31.258847882906082&lon=34.801318450147534`

```json title="Response in GeoJSON Format"
{
    "type": "FeatureCollection",
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "place_id": 161967817,
                "osm_type": "way",
                "osm_id": 219455608,
                "place_rank": 30,
                "category": "building",
                "type": "yes",
                "importance": 0.00000999999999995449,
                "addresstype": "building",
                "name": "מחלקות ילדים א-ד",
                "display_name": "מחלקות ילדים א-ד, אשפוז יום כירורגי, Be'er Sheva Innovation District, Gimel, Beer Sheva, Beersheba Subdistrict, South District, 8452566, Israel",
                "address": {
                    "building": "מחלקות ילדים א-ד",
                    "road": "אשפוז יום כירורגי",
                    "commercial": "Be'er Sheva Innovation District",
                    "suburb": "Gimel",
                    "city": "Beer Sheva",
                    "state_district": "Beersheba Subdistrict",
                    "state": "South District",
                    "ISO3166-2-lvl4": "IL-D",
                    "postcode": "8452566",
                    "country": "Israel",
                    "country_code": "il"
                }
            },
            "bbox": [
                34.8012294,
                31.2585054,
                34.8016819,
                31.2589849
            ],
            "geometry": {
                "type": "Point",
                "coordinates": [
                    34.801452912210586,
                    31.2586442
                ]
            }
        }
    ]
}
```

##### Example with `format=geocodejson`

`/reverse.html?format=geocodejson&lat=31.77671359535347&lon=35.234473935516405`

```json title="Response in GeoCodeJSON Format"
{
  "type": "FeatureCollection",
  "geocoding": {
      "version": "0.1.0",
      "attribution": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
      "licence": "ODbL",
      "query": "31.776713595353,35.234473935516"
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "geocoding": {
          "place_id": 267010108,
          "osm_type": "way",
          "osm_id": 817206833,
          "type": "house",
          "accuracy": 0,
          "label": "Western Wall, Wilson's Arch, Jewish Quarter, Old City, Jerusalem, Jerusalem Subdistrict, Jerusalem District, 9511208, Israel",
          "name": "Western Wall",
          "country": "Israel",
          "postcode": "9511208",
          "state": "Jerusalem District",
          "county": "Jerusalem Subdistrict",
          "city": "Jerusalem",
          "district": "Old City",
          "locality": "Jewish Quarter",
          "street": "Wilson's Arch",
          "admin": {
            "level4": "Jerusalem District",
            "level5": "Jerusalem Subdistrict",
            "level8": "Jerusalem",
            "level9": "Old City",
            "level10": "Jewish Quarter"
          }
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
