---
id: dem-elevation-service
slug: info
title: Elevation ⛰️
description: Service to return geographic coordinate [lat, lon] elevation 
tags:
  - dem
  - API
  - elevation
  - height
  - coordinate
---

# Elevation Service ⛰️

:::info
Click [here](/docs/MapColonies/dem/services/elevation/api) for the OpenAPI
:::

## Purpose
Allows users to request elevation(height) information at a given location(s)/position(s) in [lon,lat] format with/without extra data eg. resolution, DTM/DSM, etc.

## Terminology

### Product types

Elevation info might be returned from following material types:
1. DTM - terrain materials.
2. DSM - surface materials.
3. MIXED - according to most detailed (best resolution) materials.

### Confidence level

Calculated for each product and is represented by two values:
* `resolutionMeter` - precision on the horizontal plane (may be interpolated), meaning that for every `resolutionMeter` meters there is a value in the mesh
* `absoluteAccuracyLEP90` - each height measurement has a 90% chance to have a deviation of at most `x` meters from the given value (between `height` - `absoluteAccuracyLEP90` and `height` + `absoluteAccuracyLEP90`)

It is extremely important to provide all of the information about the product which the height was extracted from for each point you query.

:::info
When using the API to **display** the heights, we require you to provide the `productType`, `resolutionMeter` and `absoluteAccuracyLEP90` values as well.
:::

## Usage

:::caution
**- You may request values for up to 250 points at once. In case you have more than that, you should divide it into bulks.**
**- Coordinates order is not preserved.**<br/>
**- You will need an API token as part of the service authentication. &nbsp;**<br/>
**- When getting a time-out in a result of request, please try same API call again.**
:::

### API parameters (payload) explanation
The structure (JSON schema) is as follows:


```json title="JSON Schema of Request"
{
  "positions": [
    {
      "longitude": 0,
      "latitude": 0
    }
  ],
  "productType": "MIXED"
}
```
#### 🔴 positions (required)
**Array** of geographical coordinates <br/>
Limited up to **250** coordinates

#### 🟡 productType (optional, MIXED is default)
**String** one of <i>DTM | DSM | MIXED</i>

### API response explanation
The structure (JSON schema) is as follows:

```json title="JSON Schema of Response"
{
  "data": [
    {
      "longitude": 0,
      "latitude": 0,
      "height": 3,
      "productId": "world_terrain"
    }
  ],
  "products": {
    "world_terrain": {
      "productType": "DTM",
      "resolutionMeter": 30,
      "absoluteAccuracyLEP90": 17,
      "updateDate": "2019-08-24T14:15:22Z"
    }
  }
}
```

In the response, each point will have the `productId` field as a reference to the product it was returned from.

Each product has the following information:
* `productType` - the [type](#product-types) of the material
* `resolutionMeter` - precision on the horizontal plane, see [confidence level](#confidence-level)
* `absoluteAccuracyLEP90` - precision on the `z` axis, see [confidence level](#confidence-level)
* `updateDate` - date when the product was updated
