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
| geometry | GeoJson (geometry (Polygon,4326)) | Feature's geometry |
| partId | integer | Internal unique polygon part identifier (1-2147483647) |
| recordId | UUID | The original record (layer) identifier in the catalog DB |
| productId | text | Product id of the layer |
| productType | text | Product type of the layer |
| id | text | External Id of the polygon part |
| name | text | Product name of the polygon part |
| updatedInVersion | text | Product version of the layer |
| ingestionDateUTC | date | The time this part was ingested |
| imagingTimeBeginUTC | date | Start imaging date (UTC time) of polygon parts |
| imagingTimeEndUTC | date | End imaging date (UTC time) of polygon parts |
| resolutionDegree | number | Polygon part ingestion resolution degree (1.67638e-7 to 0.703125) |
| resolutionMeter | number | Polygon part ingestion resolution meter (1.67638e-7 to 0.703125) |
| sourceResolutionMeter | number | Polygon part source resolution meter (0.0185 to 78273) |
| horizontalAccuracyCE90 | number | Polygon part accuracy (0.01 to 4000) |
| sensors | text (comma delimited) | Polygon part sensors array |
| countries | text (comma delimited) | Polygon part countries array |
| cities | text  (comma delimited) | Polygon part cities array |
| description | text | As was inserted by catalog manager |

