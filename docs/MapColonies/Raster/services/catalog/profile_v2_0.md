---
id: raster-profile-v2
slug: raster-catalog-profile-v2
description: v2 Profile
title: Profile v2
tags:
  - raster
  - catalog
  - v2
---

# Raster Catalog Profile Information - v2

1. **typename** = `mc:MCRasterRecord`
2. **main_namespace** = `http://schema.mapcolonies.com/raster` (This site doesn't exist)
3. The **Raster** sub-system Catalog profile fields with information of each of them:



:::tip
<p style={{color:"red", }}><b>Important: New version is comming soon!</b></p>
:::

## Coming new parameters for v2

| **PYCSW Queryable/XML <br/> Element Name** | **Type** | **Description** |
| ----------- | ----------- | ----------- |
| mc:maxHorizontalAccuracyCE90 | double | EP90 / CE90 Maximum absolute plane accuracy range in meters float unsigned valid: 0.01 to 4000 |
| mc:minResolutionMeter | double | the min resolution of the “resolution part” product (max) resolution in meters double unsigned valid: 0.0185 to 78271.52 |
| mc:minResolutionDeg | double | the min resolution of the “resolution part” product (max) resolution in degrees double unsigned valid: 1.67638e-7 to 0.703125 |
mc:links | | will include a new link for 'polygon parts' WFS capabilities


- New WFS service that will include details about the parts that assembles the raster record