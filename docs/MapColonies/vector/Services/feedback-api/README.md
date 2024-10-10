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

```curl title="Tile Search Request"
curl --location '<geocoding_url>/search/control/tiles?tile=RIT&disable_fuzziness=true' \
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
