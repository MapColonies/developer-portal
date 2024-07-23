---
id: polygon-parts-profile-v1
slug: polygon-parts-profile-v1
description: v1 Profile for polygon parts attributes
title: Profile v1
tags:
  - raster
  - polygon parts
  - v1
  - wfs
---

# Polygon Parts Attributes Information


| **Polygon Part Queryable <br/> Attribute Name** | **Type** | **Description** | 
| ----------- | ----------- | ----------- | 
| geometry | GeoJson (geometry (Polygon,4326)) | The feature's geometry |
| partId | integer | Internal unique part identifier (1-2147483647) |
| recordId | UUID | Mapcolonies reaster catalog identifier for the layer |
| productId | text | Mapcolonies raster layer identifier |
| productType | text | Mapcolonies raster layer type |
| id | text | External Id of the part |
| name | text | Part name |
| updatedInVersion | text | Mapcolonies raster layer version |
| ingestionDateUTC | date | The time the part was ingested |
| imagingTimeBeginUTC | date | Start imaging date (UTC time) of  part |
| imagingTimeEndUTC | date | End imaging date (UTC time) of part |
| resolutionDegree | number | Part resolution degree (1.67638e-7 to 0.703125) |
| resolutionMeter | number | Part resolution meter (1.67638e-7 to 0.703125) |
| sourceResolutionMeter | number | Part source resolution meter (0.0185 to 78273) |
| horizontalAccuracyCE90 | number | Part horizontal accuracy (0.01 to 4000) |
| sensors | text (comma delimited) | The sensors used to create the part |
| countries | text (comma delimited) | All of the countries that the part has data in |
| cities | text  (comma delimited) | All of the cities that the part has data in |
| description | text | Part description |

