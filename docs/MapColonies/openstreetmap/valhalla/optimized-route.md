---
sidebar_position: 2
id: osm-valhalla-optimized-route
slug: osm-valhalla-optimized-route
title: Optimized Route API
tags:
  - osm
  - optimized-route
  - API
  - valhalla

---

# Optimized Route service API reference

The Optimized Route service provides a quick computation of time and distance between a set of location sources and location targets and returns them in an optimized route order, along with the shape.

![Optimized route example](../../../../static/img/openstreetmap/valhalla/optimized-route-example.png)

## Features
* Get to the shortest path. Get the shortest route for a large number of points. The service returns them in an optimized order, along with the shape.
* Use different transportation modes. Analyze travel times and distances by car, bicycle, or foot.
* Take a trip or make a loop. Either return to the starting point, or end the trip at a different destination.

## Optimized route service action

You can request the following action from the Optimized Route service: `/optimized_route?`. Since an optimized route is really an extension of the *many_to_many* matrix (where the source locations are the same as the target locations), the first step is to compute a cost matrix by sending a matrix request.  Then, we send our resulting cost matrix (resulting time or distance) to the optimizer which will return our optimized path.

| Optimized type | Description |
| :--------- | :----------- |
| `optimized_route` | Returns an optimized route stopping at each destination location exactly one time, always starting at the first location in the list and ending at the last location. This will result in a route with multiple legs.  |

## Inputs of the optimized route service

The optimized route request run locally takes the form of `localhost:8002/optimized_route?json={}`, where the JSON inputs inside the `{}` includes location information (at least four locations), as well as the name and options for the costing model

Here is an example of an Optimized Route scenario:

Given a list of cities and the distances and times between each pair, a salesperson wants to visit each city one time by taking the most optimized route and end at a destination (either return to origin or a different destination).

```json
{"locations":[{"lat":40.042072,"lon":-76.306572},{"lat":39.992115,"lon":-76.781559},{"lat":39.984519,"lon":-76.6956},{"lat":39.996586,"lon":-76.769028},{"lat":39.984322,"lon":-76.706672}],"costing":"auto","directions_options":{"units":"miles"}}
```

There is an option to name your optimized route request. You can do this by appending the following to your request `&id=`.  The `id` is returned with the response so a user could match to the corresponding request.

### Location parameters

A location must include a latitude and longitude in decimal degrees. The coordinates can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service, and so on. External search/geocoding services can be used to find places and geocode addresses, whose coordinates can be used as input to the service.

| Location parameters | Description |
| :--------- | :----------- |
| `lat` | Latitude of the location in degrees. |
| `lon` | Longitude of the location in degrees. |

Refer to the [route location documentation](./turn-by-turn/api-reference.md#locations) for more information on specifying locations.

### Costing parameters

The Optimized Route service uses the `auto`, `bicycle` and `pedestrian` costing models available in the Valhalla route service. The **multimodal costing is not supported** for the Optimized Route service at this time.  Refer to the [route costing models](./turn-by-turn/api-reference.md#costing-models) and [costing options](./turn-by-turn/api-reference.md#costing-options) documentation for more on how to specify this input.

### Other request options

| Options | Description |
| :------------------ | :----------- |
| `id` | Name your optimized request. If `id` is specified, the naming will be sent thru to the response. |

## Outputs of the optimized route service

If an optimized request has been named using the optional `&id=` input, then the name will be returned as a string `id`.

These are the results of a request to the Optimized Route service.

| Item | Description |
| :---- | :----------- |
| `optimized_route` | Returns an optimized route path from point 'a' to point 'n'.  Given a list of locations, an optimized route with stops at each intermediate location exactly one time, always starting at the first location in the list and ending at the last location.|
| `locations` | The specified array of lat/lngs from the input request.  The first and last locations in the array will remain the same as the input request.  The intermediate locations may be returned reordered in the response.  Due to the reordering of the intermediate locations, an `original_index` is also part of the `locations` object within the response.  This is an identifier of the location index that will allow a user to easily correlate input locations with output locations. |
| `units` | Distance units for output. Allowable unit types are mi (miles) and km (kilometers). If no unit type is specified, the units default to kilometers. |
| `warnings` (optional) | This array may contain warning objects informing about deprecated request parameters, clamped values etc. | 

## Examples

#### optimized route request

```json
<VALHALLA BASE URL>/optimized_route?json={"costing":"auto","locations":[{"lat":37.755545371651614,"lon":-122.49248879268177},{"lat":37.76378748950549,"lon":-122.48700002284123},{"lat":37.75980958653573,"lon":-122.48357478963833},{"lat":37.76223015859495,"lon":-122.4912040416903},{"lat":37.75921109492966,"lon":-122.49701367108483},{"lat":37.75514144886399,"lon":-122.50395875678804}]}`
```

<details>
  <summary>Lookup Results in JSON Format</summary>

```xml title="Lookup Results in JSON Format"
{
  "trip": {
      "locations": [
          {
              "type": "break",
              "lat": 37.755545,
              "lon": -122.492488,
              "side_of_street": "left",
              "original_index": 0
          },
          {
              "type": "break",
              "lat": 37.759809,
              "lon": -122.483574,
              "side_of_street": "left",
              "original_index": 2
          },
          {
              "type": "break",
              "lat": 37.763787,
              "lon": -122.487,
              "side_of_street": "left",
              "original_index": 1
          },
          {
              "type": "break",
              "lat": 37.76223,
              "lon": -122.491204,
              "side_of_street": "right",
              "original_index": 3
          },
          {
              "type": "break",
              "lat": 37.759211,
              "lon": -122.497013,
              "side_of_street": "left",
              "original_index": 4
          },
          {
              "type": "break",
              "lat": 37.755141,
              "lon": -122.503958,
              "side_of_street": "right",
              "original_index": 5
          }
      ],
      "legs": [
          {
              "maneuvers": [
                  {
                      "type": 3,
                      "instruction": "Drive east on Moraga Street.",
                      "verbal_succinct_transition_instruction": "Drive east.",
                      "verbal_pre_transition_instruction": "Drive east on Moraga Street.",
                      "verbal_post_transition_instruction": "Continue for 800 meters.",
                      "street_names": [
                          "Moraga Street"
                      ],
                      "time": 99.698,
                      "length": 0.829,
                      "cost": 220.654,
                      "begin_shape_index": 0,
                      "end_shape_index": 10,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 15,
                      "instruction": "Turn left onto 25th Avenue.",
                      "verbal_transition_alert_instruction": "Turn left onto 25th Avenue.",
                      "verbal_succinct_transition_instruction": "Turn left.",
                      "verbal_pre_transition_instruction": "Turn left onto 25th Avenue.",
                      "verbal_post_transition_instruction": "Continue for 400 meters.",
                      "street_names": [
                          "25th Avenue"
                      ],
                      "time": 42.183,
                      "length": 0.445,
                      "cost": 109.514,
                      "begin_shape_index": 10,
                      "end_shape_index": 15,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 6,
                      "instruction": "Your destination is on the left.",
                      "verbal_transition_alert_instruction": "Your destination will be on the left.",
                      "verbal_pre_transition_instruction": "Your destination is on the left.",
                      "time": 0.0,
                      "length": 0.0,
                      "cost": 0.0,
                      "begin_shape_index": 15,
                      "end_shape_index": 15,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  }
              ],
              "summary": {
                  "has_time_restrictions": false,
                  "has_toll": false,
                  "has_highway": false,
                  "has_ferry": false,
                  "min_lat": 37.755411,
                  "min_lon": -122.492479,
                  "max_lat": 37.75982,
                  "max_lon": -122.483052,
                  "time": 141.882,
                  "length": 1.275,
                  "cost": 330.169
              },
              "shape": "g`l_gA|bjshFiAot@}AyaA}A_bA_BabA}A}aAo@o`@m@o`@}A}aA_BabA}A{aAssBdGwmBvFwDJsDJyIV"
          },
          {
              "maneuvers": [
                  {
                      "type": 3,
                      "instruction": "Drive north on 25th Avenue.",
                      "verbal_succinct_transition_instruction": "Drive north. Then, in 400 meters, Turn left onto Irving Street.",
                      "verbal_pre_transition_instruction": "Drive north on 25th Avenue. Then, in 400 meters, Turn left onto Irving Street.",
                      "verbal_post_transition_instruction": "Continue for 400 meters.",
                      "street_names": [
                          "25th Avenue"
                      ],
                      "time": 34.835,
                      "length": 0.386,
                      "cost": 83.125,
                      "begin_shape_index": 0,
                      "end_shape_index": 8,
                      "verbal_multi_cue": true,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 15,
                      "instruction": "Turn left onto Irving Street.",
                      "verbal_transition_alert_instruction": "Turn left onto Irving Street.",
                      "verbal_succinct_transition_instruction": "Turn left.",
                      "verbal_pre_transition_instruction": "Turn left onto Irving Street.",
                      "verbal_post_transition_instruction": "Continue for 300 meters.",
                      "street_names": [
                          "Irving Street"
                      ],
                      "time": 27.609,
                      "length": 0.282,
                      "cost": 83.052,
                      "begin_shape_index": 8,
                      "end_shape_index": 16,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 10,
                      "instruction": "Turn right onto 28th Avenue.",
                      "verbal_transition_alert_instruction": "Turn right onto 28th Avenue.",
                      "verbal_succinct_transition_instruction": "Turn right. Then Your destination will be on the left.",
                      "verbal_pre_transition_instruction": "Turn right onto 28th Avenue. Then Your destination will be on the left.",
                      "verbal_post_transition_instruction": "Continue for 70 meters.",
                      "street_names": [
                          "28th Avenue"
                      ],
                      "time": 12.009,
                      "length": 0.072,
                      "cost": 28.812,
                      "begin_shape_index": 16,
                      "end_shape_index": 17,
                      "verbal_multi_cue": true,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 6,
                      "instruction": "Your destination is on the left.",
                      "verbal_transition_alert_instruction": "Your destination will be on the left.",
                      "verbal_pre_transition_instruction": "Your destination is on the left.",
                      "time": 0.0,
                      "length": 0.0,
                      "cost": 0.0,
                      "begin_shape_index": 17,
                      "end_shape_index": 17,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  }
              ],
              "summary": {
                  "has_time_restrictions": false,
                  "has_toll": false,
                  "has_highway": false,
                  "has_ferry": false,
                  "min_lat": 37.75982,
                  "min_lon": -122.486833,
                  "max_lat": 37.763794,
                  "max_lon": -122.483331,
                  "time": 74.454,
                  "length": 0.74,
                  "cost": 194.989
              },
              "shape": "wst_gAdgxrhFq{ApEi@@kDJ[@]@sDJo@BqkBrFb@bXJxGl@z_@`@zVHhFHxEf@`\\~A|aAqg@zA"
          },
          {
              "maneuvers": [
                  {
                      "type": 2,
                      "instruction": "Drive south on 28th Avenue.",
                      "verbal_succinct_transition_instruction": "Drive south. Then Turn right onto Irving Street.",
                      "verbal_pre_transition_instruction": "Drive south on 28th Avenue. Then Turn right onto Irving Street.",
                      "verbal_post_transition_instruction": "Continue for 70 meters.",
                      "street_names": [
                          "28th Avenue"
                      ],
                      "time": 6.499,
                      "length": 0.072,
                      "cost": 7.312,
                      "begin_shape_index": 0,
                      "end_shape_index": 1,
                      "verbal_multi_cue": true,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 10,
                      "instruction": "Turn right onto Irving Street.",
                      "verbal_transition_alert_instruction": "Turn right onto Irving Street.",
                      "verbal_succinct_transition_instruction": "Turn right.",
                      "verbal_pre_transition_instruction": "Turn right onto Irving Street.",
                      "verbal_post_transition_instruction": "Continue for 400 meters.",
                      "street_names": [
                          "Irving Street"
                      ],
                      "time": 39.258,
                      "length": 0.377,
                      "cost": 99.059,
                      "begin_shape_index": 1,
                      "end_shape_index": 5,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 15,
                      "instruction": "Turn left onto 32nd Avenue.",
                      "verbal_transition_alert_instruction": "Turn left onto 32nd Avenue.",
                      "verbal_succinct_transition_instruction": "Turn left. Then Your destination will be on the right.",
                      "verbal_pre_transition_instruction": "Turn left onto 32nd Avenue. Then Your destination will be on the right.",
                      "verbal_post_transition_instruction": "Continue for 80 meters.",
                      "street_names": [
                          "32nd Avenue"
                      ],
                      "time": 9.32,
                      "length": 0.08,
                      "cost": 18.636,
                      "begin_shape_index": 5,
                      "end_shape_index": 6,
                      "verbal_multi_cue": true,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 5,
                      "instruction": "Your destination is on the right.",
                      "verbal_transition_alert_instruction": "Your destination will be on the right.",
                      "verbal_pre_transition_instruction": "Your destination is on the right.",
                      "time": 0.0,
                      "length": 0.0,
                      "cost": 0.0,
                      "begin_shape_index": 6,
                      "end_shape_index": 6,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  }
              ],
              "summary": {
                  "has_time_restrictions": false,
                  "has_toll": false,
                  "has_highway": false,
                  "has_ferry": false,
                  "min_lat": 37.762237,
                  "min_lon": -122.491075,
                  "max_lat": 37.763794,
                  "max_lon": -122.486787,
                  "time": 55.078,
                  "length": 0.529,
                  "cost": 125.008
              },
              "shape": "el|_gAbb_shFpg@{A|A|aA|A~aA~AbbA|A|aA|k@cB"
          },
          {
              "maneuvers": [
                  {
                      "type": 3,
                      "instruction": "Drive north on 32nd Avenue.",
                      "verbal_succinct_transition_instruction": "Drive north. Then, in 300 meters, Turn left onto Lincoln Way.",
                      "verbal_pre_transition_instruction": "Drive north on 32nd Avenue. Then, in 300 meters, Turn left onto Lincoln Way.",
                      "verbal_post_transition_instruction": "Continue for 300 meters.",
                      "street_names": [
                          "32nd Avenue"
                      ],
                      "time": 26.903,
                      "length": 0.295,
                      "cost": 63.751,
                      "begin_shape_index": 0,
                      "end_shape_index": 4,
                      "verbal_multi_cue": true,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 15,
                      "instruction": "Turn left onto Lincoln Way.",
                      "verbal_transition_alert_instruction": "Turn left onto Lincoln Way.",
                      "verbal_succinct_transition_instruction": "Turn left.",
                      "verbal_pre_transition_instruction": "Turn left onto Lincoln Way.",
                      "verbal_post_transition_instruction": "Continue for 600 meters.",
                      "street_names": [
                          "Lincoln Way"
                      ],
                      "time": 40.579,
                      "length": 0.565,
                      "cost": 58.038,
                      "begin_shape_index": 4,
                      "end_shape_index": 18,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 15,
                      "instruction": "Turn left onto 38th Avenue.",
                      "verbal_transition_alert_instruction": "Turn left onto 38th Avenue.",
                      "verbal_succinct_transition_instruction": "Turn left.",
                      "verbal_pre_transition_instruction": "Turn left onto 38th Avenue.",
                      "verbal_post_transition_instruction": "Continue for 600 meters.",
                      "street_names": [
                          "38th Avenue"
                      ],
                      "time": 74.401,
                      "length": 0.602,
                      "cost": 153.07,
                      "begin_shape_index": 18,
                      "end_shape_index": 30,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 6,
                      "instruction": "Your destination is on the left.",
                      "verbal_transition_alert_instruction": "Your destination will be on the left.",
                      "verbal_pre_transition_instruction": "Your destination is on the left.",
                      "time": 0.0,
                      "length": 0.0,
                      "cost": 0.0,
                      "begin_shape_index": 30,
                      "end_shape_index": 30,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  }
              ],
              "summary": {
                  "has_time_restrictions": false,
                  "has_toll": false,
                  "has_highway": false,
                  "has_ferry": false,
                  "min_lat": 37.7592,
                  "min_lon": -122.497638,
                  "max_lat": 37.764883,
                  "max_lon": -122.491025,
                  "time": 141.884,
                  "length": 1.463,
                  "cost": 274.86
              },
              "shape": "{jy_gAbhgshF}k@bB}lBvFyCHsDJ~AzaAFdEL|Hv@nf@FxDFnD~AdbAFhEJhGx@xh@VxPdAvn@DlCfBfiApDKbDK`fBgFrEM|DMT?xfBiFhDIZAZAhDKf}AsE"
          },
          {
              "maneuvers": [
                  {
                      "type": 3,
                      "instruction": "Drive south on 38th Avenue.",
                      "verbal_succinct_transition_instruction": "Drive south.",
                      "verbal_pre_transition_instruction": "Drive south on 38th Avenue.",
                      "verbal_post_transition_instruction": "Continue for 400 meters.",
                      "street_names": [
                          "38th Avenue"
                      ],
                      "time": 53.403,
                      "length": 0.444,
                      "cost": 76.592,
                      "begin_shape_index": 0,
                      "end_shape_index": 4,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 10,
                      "instruction": "Turn right onto Moraga Street.",
                      "verbal_transition_alert_instruction": "Turn right onto Moraga Street.",
                      "verbal_succinct_transition_instruction": "Turn right.",
                      "verbal_pre_transition_instruction": "Turn right onto Moraga Street.",
                      "verbal_post_transition_instruction": "Continue for 600 meters.",
                      "street_names": [
                          "Moraga Street"
                      ],
                      "time": 71.757,
                      "length": 0.613,
                      "cost": 137.615,
                      "begin_shape_index": 4,
                      "end_shape_index": 12,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  },
                  {
                      "type": 5,
                      "instruction": "Your destination is on the right.",
                      "verbal_transition_alert_instruction": "Your destination will be on the right.",
                      "verbal_pre_transition_instruction": "Your destination is on the right.",
                      "time": 0.0,
                      "length": 0.0,
                      "cost": 0.0,
                      "begin_shape_index": 12,
                      "end_shape_index": 12,
                      "travel_mode": "drive",
                      "travel_type": "car"
                  }
              ],
              "summary": {
                  "has_time_restrictions": false,
                  "has_toll": false,
                  "has_highway": false,
                  "has_ferry": false,
                  "min_lat": 37.754905,
                  "min_lon": -122.503942,
                  "max_lat": 37.7592,
                  "max_lon": -122.49698,
                  "time": 125.16,
                  "length": 1.058,
                  "cost": 214.207
              },
              "shape": "_ms_gAvmsshFbOc@psBcGrmBwFzDMF|DtAb|@~A|aA|AzaA|A`bA|A|aA~A~aAl@d`@"
          }
      ],
      "summary": {
          "has_time_restrictions": false,
          "has_toll": false,
          "has_highway": false,
          "has_ferry": false,
          "min_lat": 37.754905,
          "min_lon": -122.503942,
          "max_lat": 37.764883,
          "max_lon": -122.483052,
          "time": 538.459,
          "length": 5.067,
          "cost": 1139.236
      },
      "status_message": "Found route between points",
      "status": 0,
      "units": "kilometers",
      "language": "en-US"
  }
}
```
</details>

## Error checking

The service checks the return to see that all locations can be reached. If one or more cannot be reached, it returns an error and lists the location number that cannot be reached.  Currently, one location is listed at this time, even if more than one have an issue.

This is an example which should return: `400::Location at index 3 is unreachable`

```json
{"locations":[{"lat":40.306600,"lon":-76.900022},{"lat":40.293246,"lon":-76.936230},{"lat":40.448678,"lon":-76.932885},{"lat":40.419753,"lon":-76.999632},{"lat":40.211050,"lon":-76.777071},{"lat":40.306600,"lon":-76.900022}],"costing":"auto"}
```

See the [HTTP return codes](./turn-by-turn/api-reference.md#http-status-codes-and-conditions) for more on messages you might receive from the service.