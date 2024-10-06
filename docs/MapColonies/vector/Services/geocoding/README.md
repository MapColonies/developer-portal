---
id: vector-geocoding-service
slug: info
title: Geocoding 📍
description: Search engine for locations and Control Language
tags:
  - Vector
  - API
  - Geocoding
---

# Geocoding 📍

:::info
Click [here](/docs/MapColonies/vector/Services/geocoding/api) for the OpenAPI
:::

## TL;DR

Search for places, control tiles, routes and items. Ability to convert from WGS 84 Coordinates to Control Tile/ US Army MGRS. 

## Terminology

### What is the Control layer?

:::tip
Check [`Control Search request examples`](#control-examples).
:::

MapColonies has its own Control Reference System. Like the US Army MGRS, we divided our user's area of interest to Tiles. Each tile is 10kmX10km and has Sub-Tiles which are 1kmX1km. Each tile has 100 sub-tiles. <br/>
A tile's name is exactly 3-letters, while a Sub-Tile is a 2-digit number. <br/>


<details>
    <summary>JSON Schema of Tile Response</summary>

```json
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "tile": "RIT",
            "disable_fuzziness": true,
            "limit": 5
        },
        "response": {
            "results_count": 1,
            "max_score": 2.0481892,
            "match_latency_ms": 77
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [ [ 12.539507865186607, 41.851751203650096 ],
                        [ 12.536787075186538, 41.94185043165008 ],
                        [ 12.42879133518656, 41.93952837265009 ],
                        [ 12.431625055186686, 41.84943698365008 ],
                        [ 12.539507865186607, 41.851751203650096] ] ],
                "type": "Polygon"
            },
            "properties": {
                "TILE_NAME": "RIT",
                "LAYER_NAME": "CONTROL.TILES",
                "TYPE": "TILE",
                "matches": [ { "layer": "CONTROL.TILES", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "RIT" ], "display": "Tile RIT" },
                "score": 2.0481892
            }
        }
    ]
}
```
</details>

<details>
    <summary>JSON Schema of Sub Tile Response</summary>

```json
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "tile": "RIT",
            "sub_tile": "65",
            "disable_fuzziness": true,
            "limit": 5
        },
        "response": {
            "results_count": 1,
            "max_score": 3.588634,
            "match_latency_ms": 5
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [ [ 12.439530324602458, 41.93031190061167 ],
                        [12.439646505602468, 41.9393328566117 ],
                        [ 12.429158378602494, 41.939432381611695 ],
                        [ 12.429043189602453, 41.930411390611695 ],
                        [ 12.439530324602458, 41.93031190061167 ] ] ],
                "type": "Polygon"
            },
            "properties": {
                "SUB_TILE_ID": "65",
                "TILE_NAME": "RIT",
                "LAYER_NAME": "CONTROL.SUB_TILES",
                "TYPE": "SUB_TILE",
                "matches": [ { "layer": "CONTROL.SUB_TILES", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "65" ], "display": "Tile RIT Sub Tile 65" },
                "score": 3.588634
            }
        }
    ]
}
```
</details>

### Understanding the Control language
Routes are roads and streams. Each Route has Control Points. Control Points are points scattered on the route. They are usefull when end-user reports it's location on the route. Its used to "pin-point" end-user location.<br/>
Route name is just a string (in any length). For main roads, the route's name will be unique. For minor roads the name might be reused in other areas of interest. <br/>
Route's Control point is a 3-digit number.

<details>
    <summary>JSON Schema of Route Response</summary>

```json
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "command_name": "olimpiade",
            "disable_fuzziness": false,
            "limit": 5
        },
        "response": {
            "results_count": 1,
            "max_score": 3.2834144,
            "match_latency_ms": 16
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [ 12.472759211857749, 41.932073169074016 ],
                    [ 12.475880836863752, 41.93239148035457 ] ],
                "type": "LineString"
            },
            "properties": {
                "OBJECT_COMMAND_NAME": "olimpiade",
                "LAYER_NAME": "CONTROL.ROUTES",
                "ENTITY_HEB": "route",
                "TYPE": "ROUTE",
                "matches": [ { "layer": "CONTROL.ROUTES", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "olimpiade" ], "display": "Route olimpiade" },
                "score": 3.2834144
            }
        }
    ]
}
```
</details>

<details>
    <summary>JSON Schema of Route's Control Point Response</summary>

```json
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "command_name": "olimpiade",
            "control_point": "111",
            "disable_fuzziness": true,
            "limit": 5
        },
        "response": {
            "results_count": 1,
            "max_score": 1.89712,
            "match_latency_ms": 7
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ 12.475638293442415, 41.932360642739155 ],
                "type": "Point"
            },
            "properties": {
                "OBJECT_COMMAND_NAME": "111",
                "TIED_TO": "olimpiade",
                "ENTITY_HEB": "control point",
                "LAYER_NAME": "CONTROL_GIL_GDB.CTR_CONTROL_POINT_CROSS_N",
                "TYPE": "ITEM",
                "matches": [ { "layer": "CONTROL_GIL_GDB.CTR_CONTROL_POINT_CROSS_N", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "111" ], "display": "Route olimpiade Control Point 111" },
                "score": 1.89712
            }
        }
    ]
}
```
</details>

Items are simply buildings\ items in the field. Item's name consists 4-digit number. It might be reused in different tiles! <br/>

<details>
    <summary>JSON Schema of Item Response</summary>

```json
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "command_name": "1234",
            "limit": 5,
            "disable_fuzziness": true
        },
        "response": {
            "results_count": 1,
            "max_score": 2.664375,
            "match_latency_ms": 5
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [
                        [ 12.432792582620323, 41.9327692706986 ],
                        [ 12.432648028923637, 41.93209008126263 ],
                        [ 12.43295235249525, 41.93189198298137 ],
                        [ 12.435105441764364, 41.93235609798671 ],
                        [ 12.435516278586334, 41.93274663116725 ],
                        [ 12.43637599267521, 41.93308056343986 ],
                        [ 12.436026020567567, 41.93386161853829 ],
                        [ 12.432792582620323, 41.9327692706986 ] ] ],
                "type": "Polygon"
            },
            "properties": {
                "OBJECT_COMMAND_NAME": "1234",
                "TILE_NAME": "RIT",
                "SUB_TILE_ID": "37",
                "LAYER_NAME": "CONTROL.ITEMS",
                "ENTITY_HEB": "hotel",
                "TYPE": "ITEM",
                "matches": [ { "layer": "CONTROL.ITEMS", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "1234" ], "display": "Item 1234" },
                "score": 2.664375
            }
        }
    ]
}
```
</details>

## Location Name Based Search: 
:::tip
Check [`Location Search request examples`](#location-search-examples).
:::

We have created a location search engine. In the query parameter simple search a place that you want to find. For example, if you search for `White House, Washington DC` you will get matching results for your query. <br/>
You can also search for supported regions and sources so you can filter the results for a specific region/ specific source (it will result results from all regions and sources by default). <br/>

<details>
    <summary>JSON Schema of Route Response</summary>

```json
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0-prealpha.5",
        "query": {
            "query": "JFK new york",
            "disable_fuzziness": false,
            "limit": 1
        },
        "response": {
            "results_count": 1,
            "max_score": 2.2699702,
            "match_latency_ms": 18,
            "name": "york",
            "place_types": [
                "transportation"
            ],
            "sub_place_types": [
                "port"
            ],
            "hierarchies": []
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [ [ [ -73.81278266814672, 40.66039916690434 ],
                        [ -73.8177430790069, 40.66160065836647 ],
                        [ -73.82178645734075, 40.66043068890016 ],
                        [ -73.82341214553732, 40.658185554886586 ],
                        [ -73.82407909454082, 40.65496001884071 ],
                        [ -73.8229536180974, 40.650532558586235 ],
                        [ -73.82211993184252, 40.647939195437345 ],
                        [ -73.81290769732489, 40.643985699842915 ],
                        [ -73.79214887014153, 40.63414837731818 ],
                        [ -73.78339516446982, 40.62987771430167 ],
                        [ -73.7898562329419, 40.62275933562921 ],
                        [ -73.78443726476769, 40.620069953803636 ],
                        [ -73.7791433570518, 40.627188619100366 ],
                        [ -73.77639219241223, 40.62706207167477 ],
                        [ -73.77159849644941, 40.62336045339214 ],
                        [ -73.77209870820208, 40.619975033140975 ],
                        [ -73.77047302000595, 40.61908910045176 ],
                        [ -73.76547094984971, 40.628422477310664 ],
                        [ -73.75338249916041, 40.63291467256053 ],
                        [ -73.74733827381596, 40.63601474373485 ],
                        [ -73.7467963777506, 40.64208793530722 ],
                        [ -73.752548854642, 40.64749646458006 ],
                        [ -73.76213624656812, 40.65309424493557 ],
                        [ -73.78181122379466, 40.66270746643491 ],
                        [ -73.79106514121902, 40.66438330508498 ],
                        [ -73.7957754685564, 40.665205399216404 ],
                        [ -73.79856831750864, 40.66283394629252 ],
                        [ -73.80390390953731, 40.66175885985783 ],
                        [ -73.8073637074931, 40.66039916690434 ],
                        [ -73.8109068740743, 40.66074699797244 ],
                        [ -73.81278266814672, 40.66039916690434 ] ] ]
            },
            "properties": {
                "score": 2.2699702,
                "matches": [ { "layer": "osm_airports", "source": "OSM", "source_id": [ "03ed6d97-fc81-4340-b68a-11993554eef1" ] } ],
                "names": { "en": [ "JFK Airport" ], "fr": [ "Aeropuerto JFK" ], "default": [ "JFK" ], "display": "JFK Airport" },
                "placetype": "transportation",
                "sub_placetype": "airport",
                "regions": [ { "region": "USA", "sub_region_names": [ "New York" ] } ]
            }
        }
    ]
}
```
</details>

## Conversions

:::tip
Check [`Conversions request examples`](#conversions-1).
:::

You can convert WGS84 coordinates to 2 grids: Mapcolonies Control Grid/ US Army MGRS. In order to choose your target grid you pass `target_grid` query parameter.<br/>
<details>
    <summary>Conversion example</summary>

```curl title="Request"
curl --location '<geocoding_url>/lookup/coordinates?lat=52.57326537485767&lon=12.948781146422107&target_grid=control' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Response"
{
    "type": "Feature",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "lat": 52.57326537485767,
            "lon": 12.948781146422107,
            "target_grid": "control"
        },
        "response": {
            "max_score": 1,
            "results_count": 1,
            "match_latency_ms": 0
        }
    },
    "bbox": [ 12.93694771534361, 52.51211561266182, 13.080296161196031, 52.60444267653175 ],
    "geometry": {
        "type": "Polygon",
        "coordinates": [ [ [ 12.93694771534361, 52.51211561266182 ],
                [ 12.93694771534361, 52.60444267653175 ],
                [ 13.080296161196031, 52.60444267653175 ],
                [ 13.080296161196031, 52.51211561266182 ],
                [ 12.93694771534361, 52.51211561266182 ] ] ]
    },
    "properties": {
        "name": "BRN",
        "tileName": "BRN",
        "subTileNumber": [ "06", "97", "97" ]
    }
}
```
</details>

## Common Query Params

Almost all of our routes consists the same common query params: geo_context, geo_context_mode, limit & disable_fuzziness. <br/>
* `geo_context`: via this param you can give the search engine the geo context of the search.
* `geo_context_mode`: via this param you tell the search engine what to do with `geo_context`. You can filter results (which will result with every feature that matches the query and intersects with `geo_context` shape) or you can bias the results. So features that intersects with `geo_context` will appear first.
* `limit`: by default, we will return our top 5 features that matches the query. You can change the limit and set it anything from 1 to 15 maximum results. We might return less than `limit`, but we limit the returned amount.
* `disable_fuzziness`: fuzziness is on by default. If you want exact match, you may set `disable_fuzziness: true`. 

## Usage
:::caution
**You will need an API token as part of the service authentication &nbsp;**
:::

:::caution
**All routes require `x-api-key` and `x-user-id`.<br/> 
`x-api-key`'s value should be the token provided by our team. <br/>
`x-user-id`'s value should be the user's id that queried our service. &nbsp;**
:::

:::note
**All returned responses by Geocoding API are valid GeoJSON documents &nbsp;**
:::

### Control Examples

<details>
    <summary>Tile examples</summary>

```curl title="Tile Search Request"
curl --location '<geocoding_url>/search/control/tiles?tile=RIT&disable_fuzziness=true' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Tile Response"
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "tile": "RIT",
            "disable_fuzziness": true,
            "limit": 5
        },
        "response": {
            "results_count": 1,
            "max_score": 2.0481892,
            "match_latency_ms": 77
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [ [ 12.539507865186607, 41.851751203650096 ],
                        [ 12.536787075186538, 41.94185043165008 ],
                        [ 12.42879133518656, 41.93952837265009 ],
                        [ 12.431625055186686, 41.84943698365008 ],
                        [ 12.539507865186607, 41.851751203650096] ] ],
                "type": "Polygon"
            },
            "properties": {
                "TILE_NAME": "RIT",
                "LAYER_NAME": "CONTROL.TILES",
                "TYPE": "TILE",
                "matches": [ { "layer": "CONTROL.TILES", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "RIT" ], "display": "Tile RIT" },
                "score": 2.0481892
            }
        }
    ]
}
```
</details>

<details>
    <summary>Route examples</summary>

```curl title="Route Search Request"
curl --location '<geocoding_url>/search/control/routes?command_name=olimpiade' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Route Response"
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "command_name": "olimpiade",
            "disable_fuzziness": false,
            "limit": 5
        },
        "response": {
            "results_count": 1,
            "max_score": 3.2834144,
            "match_latency_ms": 16
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [ 12.472759211857749, 41.932073169074016 ],
                    [ 12.475880836863752, 41.93239148035457 ] ],
                "type": "LineString"
            },
            "properties": {
                "OBJECT_COMMAND_NAME": "olimpiade",
                "LAYER_NAME": "CONTROL.ROUTES",
                "ENTITY_HEB": "route",
                "TYPE": "ROUTE",
                "matches": [ { "layer": "CONTROL.ROUTES", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "olimpiade" ], "display": "Route olimpiade" },
                "score": 3.2834144
            }
        }
    ]
}
```

```curl title="Route Search Request"
curl --location '<geocoding_url>/search/control/routes?command_name=olimpiade&disable_fuzziness=true&control_point=111' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Route's Control Point Response"
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "command_name": "olimpiade",
            "control_point": "111",
            "disable_fuzziness": true,
            "limit": 5
        },
        "response": {
            "results_count": 1,
            "max_score": 1.89712,
            "match_latency_ms": 7
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ 12.475638293442415, 41.932360642739155 ],
                "type": "Point"
            },
            "properties": {
                "OBJECT_COMMAND_NAME": "111",
                "TIED_TO": "olimpiade",
                "ENTITY_HEB": "control point",
                "LAYER_NAME": "CONTROL_GIL_GDB.CTR_CONTROL_POINT_CROSS_N",
                "TYPE": "ITEM",
                "matches": [ { "layer": "CONTROL_GIL_GDB.CTR_CONTROL_POINT_CROSS_N", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "111" ], "display": "Route olimpiade Control Point 111" },
                "score": 1.89712
            }
        }
    ]
}
```
</details>


<details>
    <summary>Item examples</summary>

```curl title="Item Search Request"
curl --location '<geocoding_url>/search/control/items?command_name=1234&disable_fuzziness=true' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Item Response"
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "command_name": "1234",
            "limit": 5,
            "disable_fuzziness": true
        },
        "response": {
            "results_count": 1,
            "max_score": 2.664375,
            "match_latency_ms": 5
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [
                        [ 12.432792582620323, 41.9327692706986 ],
                        [ 12.432648028923637, 41.93209008126263 ],
                        [ 12.43295235249525, 41.93189198298137 ],
                        [ 12.435105441764364, 41.93235609798671 ],
                        [ 12.435516278586334, 41.93274663116725 ],
                        [ 12.43637599267521, 41.93308056343986 ],
                        [ 12.436026020567567, 41.93386161853829 ],
                        [ 12.432792582620323, 41.9327692706986 ] ] ],
                "type": "Polygon"
            },
            "properties": {
                "OBJECT_COMMAND_NAME": "1234",
                "TILE_NAME": "RIT",
                "SUB_TILE_ID": "37",
                "LAYER_NAME": "CONTROL.ITEMS",
                "ENTITY_HEB": "hotel",
                "TYPE": "ITEM",
                "matches": [ { "layer": "CONTROL.ITEMS", "source": "control_gil_v5_test", "source_id": [] } ],
                "names": { "default": [ "1234" ], "display": "Item 1234" },
                "score": 2.664375
            }
        }
    ]
}
```
</details>

### Location Search Examples 

<details>
    <summary>query example</summary>

```curl title="Query Search Request"
curl --location '<geocoding_url>/search/location/query?query=school' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Query Response"
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "query": "school",
            "disable_fuzziness": false,
            "limit": 5
        },
        "response": {
            "results_count": 2,
            "max_score": 1.2880917,
            "match_latency_ms": 7,
            "name": "",
            "place_types": [
                "education"
            ],
            "sub_place_types": [
                "school"
            ],
            "hierarchies": []
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [ [ -118.30812263653988, 33.71684417247593 ],
                        [ -118.30861990876181, 33.71674433152869 ],
                        [ -118.30879709771484, 33.71635922964194 ],
                        [ -118.30619642115158, 33.71550819588987 ],
                        [ -118.30586490633668, 33.715921827872904 ],
                        [ -118.30587062210924, 33.716183318328746 ],
                        [ -118.30812263653988, 33.71684417247593 ]
                    ]
                ],
                "type": "Polygon"
            },
            "properties": {
                "score": 1.2880917,
                "matches": [ { "layer": "osm_schools", "source": "OSM", "source_id": [ "1a5b981b-bb0e-44dd-b9e2-424b92f2de49" ] } ],
                "names": { "en": [ "White Point Elementary School" ], "fr": [ "Escuela Primaria White Point" ], "default": [ "White Point Elementary School" ], "display": "White Point Elementary School" },
                "placetype": "education",
                "sub_placetype": "school",
                "regions": [ { "region": "USA", "sub_region_names": [ "Los Angeles" ] } ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [
                        [ 2.346441270696971, 48.88088750665477 ],
                        [ 2.3462780852304945, 48.88018258877358 ],
                        [ 2.347503576087604, 48.87999951892243 ],
                        [ 2.347737155284733, 48.88070864783427 ],
                        [ 2.346441270696971, 48.88088750665477 ] ] ],
                "type": "Polygon"
            },
            "properties": {
                "score": 1.2880917,
                "matches": [
                    { "layer": "osm_schools", "source": "OSM", "source_id": [ "dc02a3f9-156a-4f61-85bd-fd040cd322a3" ] } ],
                "names": { "en": [ "Wi School Paris 9" ], "fr": [ "Ecole Wi Paris 9" ], "default": [ "Wi School Paris 9" ], "display": "Wi School Paris 9" },
                "placetype": "education",
                "sub_placetype": "school",
                "regions": [ { "region": "FRANCE", "sub_region_names": [ "Paris" ] } ]
            }
        }
    ]
}
```
</details>

<details>
    <summary>query example with `geo_context: [bbox]` and `geo_context_mode: 'filter'`</summary>

    used `geo_context`: `{"bbox": [2.34509596673945, 48.87896264245859, 2.3502230438252525, 48.881502327359925]}`

```curl title="Query Search Request"
curl --location '<geocoding_url>/search/location/query?query=school&geo_context=%7B%22bbox%22%3A%20%5B2.34509596673945%2C%2048.87896264245859%2C%202.3502230438252525%2C%2048.881502327359925%5D%7D&geo_context_mode=filter' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Query Response"
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "query": "school",
            "disable_fuzziness": false,
            "limit": 5
        },
        "response": {
            "results_count": 2,
            "max_score": 1.2880917,
            "match_latency_ms": 7,
            "name": "",
            "place_types": [
                "education"
            ],
            "sub_place_types": [
                "school"
            ],
            "hierarchies": []
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [ [ -118.30812263653988, 33.71684417247593 ],
                        [ -118.30861990876181, 33.71674433152869 ],
                        [ -118.30879709771484, 33.71635922964194 ],
                        [ -118.30619642115158, 33.71550819588987 ],
                        [ -118.30586490633668, 33.715921827872904 ],
                        [ -118.30587062210924, 33.716183318328746 ],
                        [ -118.30812263653988, 33.71684417247593 ]
                    ]
                ],
                "type": "Polygon"
            },
            "properties": {
                "score": 1.2880917,
                "matches": [ { "layer": "osm_schools", "source": "OSM", "source_id": [ "1a5b981b-bb0e-44dd-b9e2-424b92f2de49" ] } ],
                "names": { "en": [ "White Point Elementary School" ], "fr": [ "Escuela Primaria White Point" ], "default": [ "White Point Elementary School" ], "display": "White Point Elementary School" },
                "placetype": "education",
                "sub_placetype": "school",
                "regions": [ { "region": "USA", "sub_region_names": [ "Los Angeles" ] } ]
            }
        }
    ]
}
```
</details>

<details>
    <summary>query example with `geo_context: [bbox]` and `geo_context_mode: 'bias'`</summary>

    used `geo_context`: `{"bbox": [2.34509596673945, 48.87896264245859, 2.3502230438252525, 48.881502327359925]}`

```curl title="Query Search Request"
curl --location '<geocoding_url>/search/location/query?query=school&geo_context=%7B%22bbox%22%3A%20%5B2.34509596673945%2C%2048.87896264245859%2C%202.3502230438252525%2C%2048.881502327359925%5D%7D&geo_context_mode=bias' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

:::note
**Notice how "Wi School Paris" appears before "White Point Elementary School" &nbsp;**
:::

```json title="Query Response"
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "query": "school",
            "disable_fuzziness": false,
            "limit": 5
        },
        "response": {
            "results_count": 2,
            "max_score": 1.2880917,
            "match_latency_ms": 7,
            "name": "",
            "place_types": [
                "education"
            ],
            "sub_place_types": [
                "school"
            ],
            "hierarchies": []
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [
                        [ 2.346441270696971, 48.88088750665477 ],
                        [ 2.3462780852304945, 48.88018258877358 ],
                        [ 2.347503576087604, 48.87999951892243 ],
                        [ 2.347737155284733, 48.88070864783427 ],
                        [ 2.346441270696971, 48.88088750665477 ] ] ],
                "type": "Polygon"
            },
            "properties": {
                "score": 1.2880917,
                "matches": [
                    { "layer": "osm_schools", "source": "OSM", "source_id": [ "dc02a3f9-156a-4f61-85bd-fd040cd322a3" ] } ],
                "names": { "en": [ "Wi School Paris 9" ], "fr": [ "Ecole Wi Paris 9" ], "default": [ "Wi School Paris 9" ], "display": "Wi School Paris 9" },
                "placetype": "education",
                "sub_placetype": "school",
                "regions": [ { "region": "FRANCE", "sub_region_names": [ "Paris" ] } ]
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "coordinates": [ [ [ -118.30812263653988, 33.71684417247593 ],
                        [ -118.30861990876181, 33.71674433152869 ],
                        [ -118.30879709771484, 33.71635922964194 ],
                        [ -118.30619642115158, 33.71550819588987 ],
                        [ -118.30586490633668, 33.715921827872904 ],
                        [ -118.30587062210924, 33.716183318328746 ],
                        [ -118.30812263653988, 33.71684417247593 ]
                    ]
                ],
                "type": "Polygon"
            },
            "properties": {
                "score": 1.2880917,
                "matches": [ { "layer": "osm_schools", "source": "OSM", "source_id": [ "1a5b981b-bb0e-44dd-b9e2-424b92f2de49" ] } ],
                "names": { "en": [ "White Point Elementary School" ], "fr": [ "Escuela Primaria White Point" ], "default": [ "White Point Elementary School" ], "display": "White Point Elementary School" },
                "placetype": "education",
                "sub_placetype": "school",
                "regions": [ { "region": "USA", "sub_region_names": [ "Los Angeles" ] } ]
            }
        }
    ]
}
```
</details>

<details>
    <summary>query example (port search) only from "google" as the data source</summary>

```curl title="Query Search Request"
curl --location '<geocoding_url>/search/location/query?query=port&source=google' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Query Response"
{
    "type": "FeatureCollection",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "query": "port",
            "source": [ "google" ],
            "disable_fuzziness": false,
            "limit": 5
        },
        "response": {
            "results_count": 1,
            "max_score": 1.2880917,
            "match_latency_ms": 4,
            "name": "",
            "place_types": [ "transportation" ],
            "sub_place_types": [ "port" ],
            "hierarchies": []
        }
    },
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [ -118.2505781304088, 33.7502674389752 ],
                        [ -118.25604403409116, 33.76075151051916 ],
                        [ -118.27057180697577, 33.748593059782564 ],
                        [ -118.27503083555426, 33.741097783576635 ],
                        [ -118.2747911028351, 33.734798055529765 ],
                        [ -118.27215404292296, 33.73136889520775 ],
                        [ -118.26807858669537, 33.720881194108856 ],
                        [ -118.26424286318695, 33.721997816398385 ],
                        [ -118.26640045650717, 33.72901625632974 ],
                        [ -118.2431463824787, 33.735794882347946 ],
                        [ -118.24492040460113, 33.739303607948656 ],
                        [ -118.25072193640723, 33.73794798097781 ],
                        [ -118.25220827926702, 33.74193505797223 ],
                        [ -118.24937943317966, 33.74508471776615 ],
                        [ -118.24798898340768, 33.74783559181691 ],
                        [ -118.24909175391655, 33.74803492708783 ],
                        [ -118.25096166912684, 33.74600168558719 ],
                        [ -118.25326310323155, 33.745363795966625 ],
                        [ -118.25278363779321, 33.74687877606813 ],
                        [ -118.2505781304088, 33.7502674389752 ]
                    ]
                ]
            },
            "properties": {
                "score": 1.2880917,
                "matches": [ { "layer": "google_ports", "source": "GOOGLE", "source_id": [ "1bb11f54-939e-457b-bf68-a3920ccf629c" ] }
                ],
                "names": { "en": [ "Port of Los Angeles" ], "fr": [ "Puerto de Los Ángeles" ], "default": [ "Port of Los Angeles" ], "display": "Port of Los Angeles" },
                "placetype": "transportation",
                "sub_placetype": "port",
                "regions": [ { "region": "USA", "sub_region_names": [ "Los Angeles" ] } ]
            }
        }
    ]
}
```
</details>

### Conversions

<details>
    <summary>WGS84 to Mapcolonies Control Grid example</summary>

```curl title="Request"
curl --location '<geocoding_url>/lookup/coordinates?lat=52.57326537485767&lon=12.948781146422107&target_grid=control' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Response"
{
    "type": "Feature",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "lat": 52.57326537485767,
            "lon": 12.948781146422107,
            "target_grid": "control"
        },
        "response": {
            "max_score": 1,
            "results_count": 1,
            "match_latency_ms": 0
        }
    },
    "bbox": [ 12.93694771534361, 52.51211561266182, 13.080296161196031, 52.60444267653175 ],
    "geometry": {
        "type": "Polygon",
        "coordinates": [ [ [ 12.93694771534361, 52.51211561266182 ],
                [ 12.93694771534361, 52.60444267653175 ],
                [ 13.080296161196031, 52.60444267653175 ],
                [ 13.080296161196031, 52.51211561266182 ],
                [ 12.93694771534361, 52.51211561266182 ] ] ]
    },
    "properties": {
        "name": "BRN",
        "tileName": "BRN",
        "subTileNumber": [ "06", "97", "97" ]
    }
}
```
</details>

<details>
    <summary>WGS84 to US Army MGRS example</summary>

```curl title="Request"
curl --location '<geocoding_url>/lookup/coordinates?lat=52.57326537485767&lon=12.948781146422107&target_grid=control' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

```json title="Response"
{
    "type": "Feature",
    "geocoding": {
        "version": "0.1.0",
        "query": {
            "lat": 52.57326537485767,
            "lon": 12.948781146422107,
            "target_grid": "MGRS"
        },
        "response": {
            "max_score": 1,
            "results_count": 1,
            "match_latency_ms": 0
        }
    },
    "bbox": [ 12.948777289238832, 52.57325754975297, 12.948791616108007, 52.57326678960368 ],
    "geometry": {
        "type": "Point",
        "coordinates": [ 12.948781146422107, 52.57326537485767 ]
    },
    "properties": {
        "name": "33UUU6099626777",
        "accuracy": "1m",
        "mgrs": "33UUU6099626777"
    }
}
```
</details>