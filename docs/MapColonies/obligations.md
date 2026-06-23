---
id: obligations
slug: obligations
title: Obligations
sidebar_position: 2
tags:
  - obligations
  - recommendations
  - catalog
  - catalogue
  - raster
  - vector
  - 3d
  - dem
---

Here we detail the must-haves for every application that wishes to work with our services.

# General

## Application Startup

When your application is loaded or refreshed you are required make a request to our `catalogue` services in order to fetch **up-to-date information**. Caching the request may result in errors due to changed metadata and links, new products or even deleted products that don't exist anymore.

## Catalog items

In order to use our services you are required to go through the catalogue. The `catalogue` is the gateway to many of our services, it details the available `products` and `product metadata` for a particular domain.

## Pagination

Some of our services return multiple results per request, according to filter parameters, and due to geographic entities the returned payload may be very large. In order to solve this issue we implement `pagination` using special parameters.

You should be using `pagination` in order to control the amount of results returned and easily split a request that yields a huge amount of data or records in to multiple requests. Read more in the documentation page for each service in order to understand how to use this feature.

## Hardcoded Links

We require that you fetch and extract any link that is available in our `catalogue services` through your code.<br/>
Any link that **isn't available** through the catalogue service may be held as an **easily configurable** parameter.

:::warning
We hold the right to change any link that is available through our catalogue services at any time.
:::

# Domain specific

## Raster

### Basemaps

At application startup there is usually a set of default Raster layers that are displayed.
The `productId` and `productType` for each layer should be held as an **easily configurable** list of parameters
in case you want to use different layers in the future.

We also recommend that the layers are loaded in the same order as described in the list for easy swapping.

## Vector

### Using Feedback API with Geocoding

While interacting with Geocoding API, for BI purposes and to better understand our users's needs and interests, for each response sent from Geocoding API, we require the users to provide 'feedback' on our response by using Geocoding's [`Feedback API`](/docs/MapColonies/vector/Services/geocoding/feedback).

## DEM

### Displaying Elevation results

If you choose to display [`Elevation`](/docs/MapColonies/DEM/Services/elevation) results in your application UI, you must clearly present the following fields:
- `productType`
- `resolutionMeter`
- `absoluteAccuracyLEP90`
Displaying these fields is critical to ensuring end-users can make informed decisions based on the returned data.
