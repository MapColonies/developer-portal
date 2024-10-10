---
id: vector-feedback-api-service
slug: feedback-api ⚙️
title: Geocoding's Feedback Api
description: Feedback of Geocoding's responses
tags:
  - vector
  - API
  - osm
  - Geocoding
---

# Geocoding's Feedback Api ⚙️

:::info
Click [here](/docs/MapColonies/vector/services/feedback-api/api) for the OpenAPI
:::

:::note
If you're not familier with Geocoding API, [read first here](/docs/MapColonies/vector/Services/geocoding/README.md).
:::

Geocoding's feedback api is an API that gets from the user of [Geocoding API](/docs/MapColonies/vector/Services/geocoding/README.md) the response and and puts it in redis for BI purposes.

## Usage

:::caution
**You will need an API token as part of the [service authentication](/docs/MapColonies/authentication). &nbsp;**
:::

Once a user gets a response from Geocoding, the system that uses Geocoding will send the request ID and the chosen response ID back to us using the API.

## Example

```curl title="Geocoding's Query Search Request"
curl --location '<geocoding_url>/search/location/query?query=school' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

<details style={{"background-color": "#f6f8fa", border: "var(--ifm-alert-border-width) solid var(--ifm-alert-border-color)", "border-left-width": "var(--ifm-alert-border-left-width)", color: "black"}}> 
<summary>Response 👇</summary>

```json
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

Notice this response listed 2 features.<br/><br/>
When sending the response to the feedback api you get the request ID from the header 'x-request-id', and the response ID you get from what the user chose out of the options. <br/>
-> If the user chose "White Point Elementary School", the chosen response ID would be 0 in this case.<br/>
-> If the user chose "Wi School Paris 9", the chosen response ID would be 1 in this case.<br/>