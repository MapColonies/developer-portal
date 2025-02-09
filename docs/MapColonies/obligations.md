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

Here we detail the must-haves for every apllication that wishes to work with our services.

### Application Startup

When your application is loaded or refreshed you are required make a request to our `catalogue` services in order to fetch **up-to-date information**. Caching the request may result in errors due to changed metadata and links, new products or even deleted products that don't exist anymore.

### Catalog items

In order to use our services you are required to go through the catalogue. The `catalogue` is the gatewat to many of our services, it details the available `products` and `product metadata` for a particular domain.

### Hardcoded Links

:::warning
We hold the right to change any link that is available through our catalogue services at any time.
:::

We require that you fetch and extract any link that is available in our `catalogue services` through your code.<br/>
Any link that **isn't available** through the catalogue service may be held as an **easily configureable** parameter.

### Basemaps

At application startup there is usually a set of default Raster layers that are displayed. The `productId` and `productType` for each layer should be held as an **easily configureable** list of parameters in case you want to use different layers in the future.

We also recommend the layers are loaded in the same order as described in the list for easy swapping.
