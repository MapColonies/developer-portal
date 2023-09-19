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


The API in general is split to two parts:
1. JSON payload - you can query the service with payload in JSON format.
2. Comressed payload(protobuf) - you can query the the service with COMRESSED(protobuf) payload for performance reason. <br/>
<i style={{color:'orange'}}>If you interested, contact us for explanation how to use it.</i>


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
  "productType": "MIXED",
  "excludeFields": [
    "productType"
  ]
}
```
#### 🔴 positions (required)
**Array** of geographical coordinates <br/>
Limited up to **250** coordinates

#### 🟡 productType (optional, MIXED is default)
**String** one of <i>DTM | DSM | MIXED</i>

#### 🟡 excludeFields (optional, empty by default)
**Array**, possible values are <i>productType | updateDate | resolutionMeter </i><br/>
By default you'll recieve coordinate respective elevation info along with returned **height**<br/>
Elevation info cotains following:<br/>

* <i>productType</i> - from which type of material it's extracted (DTM or DSM)
* <i>updateDate</i> - material update date
* <i>resolutionMeter</i> - resolution in meters of material where from height was extracted

:::caution
You can discard fully or partial elevation info by mentioning irrelevant fields in API call
:::

### Expected response time
* 1 point - 30ms
* 10 points - 50ms
* 100 points - 250ms 
* 250 points - 700ms 
