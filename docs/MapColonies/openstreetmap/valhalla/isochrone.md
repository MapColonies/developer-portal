---
sidebar_position: 4
id: osm-valhalla-isochrone
slug: osm-valhalla-isochrone
title: Isochrone API
tags:
  - osm
  - isochrone
  - API
  - valhalla

---

# Isochrone & Isodistance service API reference

An isochrone is a line that connects points of equal travel time about a given location, from the Greek roots of `iso` for equal and `chrone` for time. Valhalla's isochrone service computes areas that are reachable within specified time intervals from a location, and returns the reachable regions as contours of polygons or lines that you can display on a map.

Isodistances follow the same concept, but instead of time one specifies distance intervals.

Isochrone maps share some of the same concepts and terminology with familiar topographic maps, which depict contour lines for points of equal elevation. For this reason other terms common in topography apply, such as contours or isolines.

This is an example of 15, 30, 45 and 60 minute bicycle isochrones centered in Lancaster, PA.

![Isochrones for travel times by walking in Lancaster, PA](../../../../static/img/openstreetmap/valhalla/isochrone.png)

## Inputs of the Isochrone service

An isochrone request run locally takes the form of `localhost:8002/isochrone?json={}`, where the JSON inputs inside the `{}` includes an array of at least one location and options for the [route costing model](./turn-by-turn/api-reference.md#costing-models).

For example, you can use the isochrone service to find out where you can travel within a 15-minute walk from your office building. The API request for this uses `isochrone?` as the request action, `pedestrian` costing, and a single contour for a 15-minute time interval. The response is GeoJSON, which you can display on a map to visualize where you might be able to walk.

```json
{"locations":[{"lat":40.744014,"lon":-73.990508}],"costing":"pedestrian","contours":[{"time":15.0,"color":"ff0000"}]}&id=Walk_From_Office
```

There is an option to name your isochrone request by appending `&id=`. The `id` is returned with the response so you can match it to your corresponding request.

### Location parameters

The `locations` must include a latitude and longitude in decimal degrees. The coordinates can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service, and so on. External search services, such as Mapbox Geocoding can be used to find places and geocode addresses, whose coordinates can be used as input to the service.

| Location parameters | Description |
| :--------- | :----------- |
| `lat` | Latitude of the location in degrees. |
| `lon` | Longitude of the location in degrees. |

Refer to the [route location documentation](./turn-by-turn/api-reference.md#locations) for more information on specifying locations.

### Costing parameters

The isochrone service uses the `auto`, `bicycle`, `pedestrian`, and `multimodal` and all other costing models available in the Valhalla Turn-by-Turn service. Refer to the [route costing models](./turn-by-turn/api-reference.md#costing-models) and [costing options](./turn-by-turn/api-reference.md#costing-options) documentation for more on how to specify this input.

### Other request parameters

<details>
  <summary>Parameter description</summary>

| Parameter | Description |
| :------------------ | :----------- |
| `date_time` | The local date and time at the location. <ul><li>`type`<ul><li>0 - Current departure time.</li><li>1 - Specified departure time.</li><li>2 - Specified arrival time. Note: This is not yet implemented for `multimodal`.</li></ul></li><li>`value` - the date and time specified in ISO 8601 format (YYYY-MM-DDThh:mm) in the local time zone of departure or arrival. For example, "2016-07-03T08:06"</li></ul> |
| `id` | Name of the isochrone request. If `id` is specified, the name is returned with the response. |
| `contours` | A JSON array of contour objects with the time in minutes or distance in kilometers and color to use for each isochrone contour. You can specify up to four contours (by default).<ul><li>`time` - A floating point value specifying the time in minutes for the contour.</li><li>`distance` - A floating point value specifying the distance in kilometers for the contour.</li><li>`color` - The color for the output of the contour. Specify it as a Hex value, but without the `#`, such as `"color":"ff0000"` for red. If no color is specified, the isochrone service will assign a default color to the output.</li></ul>You can only specify **one metric per contour**, i.e. `time` or `distance`.  |
| `polygons` | A Boolean value to determine whether to return geojson polygons or linestrings as the contours. The default is `false`, which returns lines; when `true`, polygons are returned. Note: When `polygons` is `true`, any contour that forms a ring is returned as a polygon. |
| `denoise` | A floating point value from `0` to `1` (default of `1`) which can be used to remove smaller contours. A value of `1` will only return the largest contour for a given time value. A value of `0.5` drops any contours that are less than half the area of the largest contour in the set of contours for that same time value. |
| `generalize` | A floating point value in meters used as the tolerance for Douglas-Peuckergeneralization. Note: Generalization of contours can lead to self-intersections, as well as intersections of adjacent contours. |
| `show_locations` | A boolean indicating whether the input locations should be returned as MultiPoint features: one feature for the exact input coordinates and one feature for the coordinates of the network node it snapped to. Default false. 

</details>

## Outputs of the Isochrone service

In the service response, the isochrone contours are returned as GeoJSON, which can be integrated into mapping applications.

The contours are calculated using rasters and are returned as either polygon or line features, depending on your input setting for the `polygons` parameter. If an isochrone request has been named using the optional `&id=` input, then the `id` is returned as a name property for the feature collection within the GeoJSON response. A `metric` attribute lets you know whether it's a `distance` or `time` contour. A warnings array may also be included. This array may contain warning objects informing about deprecated request parameters, clamped values etc. | 

See the HTTP return codes for more on messages you might receive from the service.

### Draw isochrones on a map

Most JavaScript-based GeoJSON renderers, including Leaflet, can use the isochrone styling information directly from the response. At present, you cannot control the opacity through the API.

When making a map, drawing the isochrone contours as lines is more straightforward than polygons, and, therefore, currently is the default and recommended method. When deciding between the output as lines and polygons, consider your use case and the additional styling considerations involved with polygons. For example, fills should be rendered as semi-transparent over the other map layers so they are visible, although you may have more flexibility when using a vector-based map. In addition, polygons from multiple contour levels do not have overlapping areas cut out or removed. In other words, the outer contours include the areas of any inner contours, causing the colors and transparencies to blend when multiple contour polygons are drawn at the same time.

## Examples
![Isochrone example](../../../../static/img/openstreetmap/valhalla/isochrone-example.png)

```json
<VALHALLA BASE URL>/isochrone?json={"costing":"pedestrian","costing_options":{"pedestrian":{"exclude_polygons":[],"use_ferry":1,"use_living_streets":0.5,"use_tracks":0,"service_penalty":15,"service_factor":1,"shortest":false,"use_hills":0.5,"walking_speed":5.1,"walkway_factor":1,"sidewalk_factor":1,"alley_factor":2,"driveway_factor":5,"step_penalty":0,"max_hiking_difficulty":1,"use_lit":0,"transit_start_end_max_distance":2145,"transit_transfer_max_distance":800}},"contours":[{"time":1},{"time":2},{"time":3}],"locations":[{"lon":35.208714008331306,"lat":31.78339608836721,"type":"break"}],"directions_options":{"units":"kilometers"},"id":"valhalla_isochrones_lonlat_35.208714008331306,31.78339608836721_range_3_interval_1"}`
```

<details>
  <summary>Lookup 'Many To Many' Results in JSON Format</summary>

```xml title="Lookup Results in JSON Format"
{
  "id": "valhalla_isochrones_lonlat_35.208714008331306,31.78339608836721_range_3_interval_1",
  "type": "FeatureCollection",
  "features": [
      {
          "properties": {
              "fill": "#bf4040",
              "fillOpacity": 0.33,
              "fill-opacity": 0.33,
              "fillColor": "#bf4040",
              "color": "#bf4040",
              "contour": 3,
              "opacity": 0.33,
              "metric": "time"
          },
          "geometry": {
              "coordinates": [
                  [
                      35.209714,
                      31.784679
                  ],
                  [
                      35.208714,
                      31.785037
                  ],
                  [
                      35.207714,
                      31.784796
                  ],
                  [
                      35.207385,
                      31.783726
                  ],
                  [
                      35.206662,
                      31.783396
                  ],
                  [
                      35.206649,
                      31.782396
                  ],
                  [
                      35.207868,
                      31.781550
                  ],
                  [
                      35.208714,
                      31.781309
                  ],
                  [
                      35.210372,
                      31.782396
                  ],
                  [
                      35.210588,
                      31.783396
                  ],
                  [
                      35.209714,
                      31.784679
                  ]
              ],
              "type": "LineString"
          },
          "type": "Feature"
      },
      {
          "properties": {
              "fill": "#bfaa40",
              "fillOpacity": 0.33,
              "fill-opacity": 0.33,
              "fillColor": "#bfaa40",
              "color": "#bfaa40",
              "contour": 2,
              "opacity": 0.33,
              "metric": "time"
          },
          "geometry": {
              "coordinates": [
                  [
                      35.208714,
                      31.784654
                  ],
                  [
                      35.207428,
                      31.783396
                  ],
                  [
                      35.208714,
                      31.781960
                  ],
                  [
                      35.209848,
                      31.782396
                  ],
                  [
                      35.209991,
                      31.783396
                  ],
                  [
                      35.208714,
                      31.784654
                  ]
              ],
              "type": "LineString"
          },
          "type": "Feature"
      },
      {
          "properties": {
              "fill": "#6abf40",
              "fillOpacity": 0.33,
              "fill-opacity": 0.33,
              "fillColor": "#6abf40",
              "color": "#6abf40",
              "contour": 1,
              "opacity": 0.33,
              "metric": "time"
          },
          "geometry": {
              "coordinates": [
                  [
                      35.208714,
                      31.784150
                  ],
                  [
                      35.208124,
                      31.783396
                  ],
                  [
                      35.208714,
                      31.782647
                  ],
                  [
                      35.209365,
                      31.783396
                  ],
                  [
                      35.208714,
                      31.784150
                  ]
              ],
              "type": "LineString"
          },
          "type": "Feature"
      }
  ]
}
```
</details>
