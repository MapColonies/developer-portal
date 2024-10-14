---
id: vector-feedback-api-service
slug: info
title: Feedback Api ⚙️
description: Feedback for Geocoding responses
tags:
  - vector
  - API
  - osm
  - Geocoding
---

# Feedback Api ⚙️

:::info
Click [here](/docs/MapColonies/vector/services/feedback-api/api) for the OpenAPI
:::

:::note
If you're not familier with Geocoding API, [read more here](/docs/MapColonies/vector/Services/geocoding/README.md).
:::

Geocoding's feedback `API` collects `usage data` from the [Geocoding API](/docs/MapColonies/vector/Services/geocoding/README.md) user's response and stores it for BI purposes. We use this `data` to better understand and measure the relevance of our responses and adjust the `data` and `algorithm` accordingly.<br/><br/>

Once a user gets a response from `Geocoding`, the requesting system will send the `request ID` and the chosen `response ID` back to us.<br/>

:::caution
**You will need an API token as part of the [service authentication](/docs/MapColonies/authentication). &nbsp;**
:::



## Example

```curl title="Geocoding's Query Search Request"
curl --location '<geocoding_url>/search/location/query?query=school' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>'
```

<details style={{"background-color": "#f6f8fa", border: "var(--ifm-alert-border-width) solid var(--ifm-alert-border-color)", "border-left-width": "var(--ifm-alert-border-left-width)", color: "black"}}> 
<summary>Response 👇</summary>

##### Response headers
```json
"x-request-id": "4ac9cb81-8d6c-425d-b808-0c868bbaa97c"
```

##### Response payload
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
When sending the response to the `feedback API`, you need to provide two parameters:<br/>
📍 Request ID - from the header `'x-request-id'`.<br/>
📍 Chosen Response ID - the ID of the user's selected response (corresponding index of the result). <br/><br/>

Lets think of the current response as the actual response in this case:<br/>
📍 If the user chose `"White Point Elementary School"`, the Chosen Response ID would be `0`.<br/>
📍 If the user chose `"Wi School Paris 9"`, the Chosen Response ID would be `1`.<br/><br/>

Then our request to the `feedback API` would look like this: <br/>

```curl title="Geocoding's Feedback Api Request"
curl --location --request POST '<feedback_api_url>/feedback' \
--header 'x-api-key: <x-api-key>' \
--header 'x-user-id: <x-user-id>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request_id": "4ac9cb81-8d6c-425d-b808-0c868bbaa97c",
    "chosen_response_id": 1
}'
```

And we will receive (given the `request_id` and `chosen_response_id` actually exist):<br/>

<details style={{"background-color": "#f6f8fa", border: "var(--ifm-alert-border-width) solid var(--ifm-alert-border-color)", "border-left-width": "var(--ifm-alert-border-left-width)", color: "black"}}> 
<summary>Response 👇</summary>


```json
204     Feedback has been sent succesfully
```
</details>