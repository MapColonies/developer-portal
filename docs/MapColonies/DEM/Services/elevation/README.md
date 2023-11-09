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

Elevation info might be returned from following materials:
1. DTM - terrain materials.
2. DSM - surface materials.
3. MIXED - according to most detailed(best resolution) materials.

## Usage


:::caution
**- You may request values for up to 250 points at once. In case you have more than that, you should divide it into bulks.**
**- Coordinates order is not preserved.**<br/>
**- You will need an API token as part of the service authentication. &nbsp;**<br/>
**- When getting a time-out in a result of request, please try same API call again.**
:::

### API parameters(payload) explanation
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