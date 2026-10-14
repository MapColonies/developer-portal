---
id: dem-elevation-service
slug: elevation
title: Elevation ⛰️
description: Returns the elevation at geographic positions [lon, lat]
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
The Elevation service returns the elevation (height) at one or more geographic positions, given in `[longitude, latitude]` format, together with metadata about the source product, such as its type (DTM/DSM) and resolution.

## Terminology

### Product types

Elevation values can be taken from the following product types:
1. DTM - Digital Terrain Model (bare-earth terrain).
2. DSM - Digital Surface Model (terrain including surface features such as buildings and vegetation).
3. MIXED - the most detailed (highest-resolution) product available at each position, regardless of type.

### Confidence level

Each product carries two values that describe its accuracy:
* `resolutionMeter` - horizontal precision (values may be interpolated): the product contains a height value every `resolutionMeter` meters.
* `absoluteAccuracyLEP90` - vertical accuracy: each height has a 90% probability of deviating by at most `absoluteAccuracyLEP90` meters from the true value, i.e. the true height lies between `height - absoluteAccuracyLEP90` and `height + absoluteAccuracyLEP90`.

For every queried point, it is essential to retain the full metadata of the product from which its height was taken.

:::info
When **displaying** heights obtained from this API, you must also display the `productType`, `resolutionMeter` and `absoluteAccuracyLEP90` values.
:::

## Usage

:::warning
**- A single request may contain up to 250 positions. Larger sets must be split into multiple requests.**<br/>
**- An API token is required; see [authentication](/docs/MapColonies/authentication).**
:::

### Request

Send the positions as JSON in a `POST` request:

```bash
curl --location --request POST '<ELEVATION_SERVICE_URL>/points' \
--header 'x-api-key: <TOKEN>' \
--header 'Content-Type: application/json' \
--data '{"positions": [{"longitude": 35.2005, "latitude": 32.4005}], "productType": "MIXED"}'
```

### Request body
The request body has the following structure:

```json title="Request body"
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
**Array** of geographic positions, each with `longitude` and `latitude`.<br/>
Up to **250** positions per request.

#### 🟡 productType (optional, default `MIXED`)
**String**, one of <i>DTM | DSM | MIXED</i>.

### Response body
The response body has the following structure:

```json title="Response body"
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

The points in `data` are returned in the same order as the positions in the request.

Each point includes a `productId` field that references the product in `products` from which its height was taken.

If no height is available for a point (for example, when the point lies outside every product), it is returned with `"height": null` and without a `productId`.

`products` lists every product the service can return heights from, not only those referenced by the points in the response.

Each product contains the following fields:
* `productType` - the product type, as recorded in the product's catalog record (for example, `DTM`).
* `resolutionMeter` - horizontal precision; see [confidence level](#confidence-level).
* `absoluteAccuracyLEP90` - vertical accuracy; see [confidence level](#confidence-level).
* `updateDate` - the date the product was last updated.

## Errors

Errors are returned as JSON containing a `message`, an `errorCode` and the HTTP `status`:

```json
{"message": "Too many points", "errorCode": "TOO_MANY_POINTS_ERROR", "status": 400}
```

| **Status** | **errorCode** | **Cause** |
| ----------- | ----------- | ----------- |
| 400 | `EMPTY_POSITIONS_ARRAY` | `positions` is empty. |
| 400 | `TOO_MANY_POINTS_ERROR` | `positions` contains more than 250 positions. |
| 400 | `MISSING_REQUIRED_PROPERTY` | A required property (`positions`, `longitude` or `latitude`) is missing. |
| 400 | `INVALID_REQUEST` | Any other invalid value, for example an unknown `productType`. |
| 500 | `GENERAL_ERROR` | An internal server error. |

A request without a token is rejected with `401`, and a request with an invalid or expired token is rejected with `403` (see [authentication](/docs/MapColonies/authentication)).
