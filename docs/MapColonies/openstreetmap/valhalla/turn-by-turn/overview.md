---
sidebar_position: 1
id: osm-valhalla-overview
slug: osm-valhalla-overview
title: Overview
tags:
  - osm
  - overview
  - API
  - valhalla

---

# Routing overview

The Valhalla route service (a.k.a. turn-by-turn) is an open-source routing service that lets you integrate routing and navigation into a web or mobile application. The service works globally, and provides dynamic and customizable routing by driving, walking, bicycling, and using multimodal and transit options, with clear directions for maneuvers along the route.

![Routing settings](../../../../../static/img/openstreetmap/valhalla/routing-settings.png)
-
![Routing settings](../../../../../static/img/openstreetmap/valhalla/routing-transport.png)

## Route requests and results

When you [request a route](api-reference.md#inputs-of-a-route), you are sending and receiving JSON, which is a human-readable text format. In the JSON array, you need to specify the [locations](api-reference.md#locations) to visit on the route, the [costing model](api-reference.md#costing-models) that represents the mode of travel, such as car or bicycle, and your API key. The location coordinates, given in decimal degrees, can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service such as Mapbox Geocoding, and so on. Costing methods can have several options that can be adjusted to develop the the route path and estimate the time along the path.

The service [route results](api-reference.md#outputs-of-a-route) provide details about the trip, including locations, a summary with basic information about the entire trip and a list of legs. Each leg has its own summary, a shape, which is an encoded polyline of the route path, and a list of maneuvers. These maneuvers provide written narrative instructions, plus verbal alerts that can be used as audio guidance in navigation apps.

The JSON returned from the route query can be drawn on a map and shown as instructions for maneuvers along the route.

## Exapmles

![Routing settings](../../../../../static/img/openstreetmap/valhalla/route-example.png)
#### route request

`/route?json={"costing":"pedestrian","costing_options":{"pedestrian":{"exclude_polygons":[],"use_ferry":1,"use_living_streets":0.5,"use_tracks":0,"service_penalty":15,"service_factor":1,"shortest":false,"use_hills":0.5,"walking_speed":5.1,"walkway_factor":1,"sidewalk_factor":1,"alley_factor":2,"driveway_factor":5,"step_penalty":0,"max_hiking_difficulty":1,"use_lit":0,"transit_start_end_max_distance":2145,"transit_transfer_max_distance":800}},"exclude_polygons":[],"locations":[{"lon":35.0121459361267,"lat":31.800557317215137,"type":"break"},{"lon":35.01386761665345,"lat":31.803877333444206,"type":"break"}],"directions_options":{"units":"kilometers"},"id":"valhalla_directions"}`


<details>
  <summary>Lookup Results in JSON Format</summary>

```xml title="Lookup Results in JSON Format"
{
  "trip": {
      "locations": [
          {
              "type": "break",
              "lat": 31.800557,
              "lon": 35.012145,
              "original_index": 0
          },
          {
              "type": "break",
              "lat": 31.803877,
              "lon": 35.013867,
              "side_of_street": "left",
              "original_index": 1
          }
      ],
      "legs": [
          {
              "maneuvers": [
                  {
                      "type": 1,
                      "instruction": "Walk north on קוצ'ין/Cochin.",
                      "verbal_succinct_transition_instruction": "Walk north.",
                      "verbal_pre_transition_instruction": "Walk north on קוצ'ין, Cochin.",
                      "verbal_post_transition_instruction": "Continue for 100 meters.",
                      "street_names": [
                          "קוצ'ין",
                          "Cochin"
                      ],
                      "time": 104.012,
                      "length": 0.131,
                      "cost": 108.669,
                      "begin_shape_index": 0,
                      "end_shape_index": 12,
                      "travel_mode": "pedestrian",
                      "travel_type": "foot"
                  },
                  {
                      "type": 23,
                      "instruction": "Keep right to stay on קוצ'ין/Cochin.",
                      "verbal_transition_alert_instruction": "Keep right to stay on קוצ'ין.",
                      "verbal_pre_transition_instruction": "Keep right to stay on קוצ'ין, Cochin.",
                      "verbal_post_transition_instruction": "Continue for 30 meters.",
                      "street_names": [
                          "קוצ'ין",
                          "Cochin"
                      ],
                      "time": 25.03,
                      "length": 0.031,
                      "cost": 47.374,
                      "begin_shape_index": 12,
                      "end_shape_index": 29,
                      "travel_mode": "pedestrian",
                      "travel_type": "foot"
                  },
                  {
                      "type": 23,
                      "instruction": "Keep right to stay on קוצ'ין/Cochin.",
                      "verbal_transition_alert_instruction": "Keep right to stay on קוצ'ין.",
                      "verbal_pre_transition_instruction": "Keep right to stay on קוצ'ין, Cochin.",
                      "verbal_post_transition_instruction": "Continue for 100 meters.",
                      "street_names": [
                          "קוצ'ין",
                          "Cochin"
                      ],
                      "time": 109.609,
                      "length": 0.128,
                      "cost": 130.788,
                      "begin_shape_index": 29,
                      "end_shape_index": 50,
                      "travel_mode": "pedestrian",
                      "travel_type": "foot"
                  },
                  {
                      "type": 10,
                      "instruction": "Turn right to stay on קוצ'ין/Cochin.",
                      "verbal_transition_alert_instruction": "Turn right to stay on קוצ'ין.",
                      "verbal_succinct_transition_instruction": "Turn right.",
                      "verbal_pre_transition_instruction": "Turn right to stay on קוצ'ין, Cochin.",
                      "verbal_post_transition_instruction": "Continue for 70 meters.",
                      "street_names": [
                          "קוצ'ין",
                          "Cochin"
                      ],
                      "time": 70.101,
                      "length": 0.072,
                      "cost": 82.014,
                      "begin_shape_index": 50,
                      "end_shape_index": 52,
                      "travel_mode": "pedestrian",
                      "travel_type": "foot"
                  },
                  {
                      "type": 10,
                      "instruction": "Turn right to stay on קוצ'ין/Cochin.",
                      "verbal_transition_alert_instruction": "Turn right to stay on קוצ'ין.",
                      "verbal_succinct_transition_instruction": "Turn right.",
                      "verbal_pre_transition_instruction": "Turn right to stay on קוצ'ין, Cochin.",
                      "verbal_post_transition_instruction": "Continue for 70 meters.",
                      "street_names": [
                          "קוצ'ין",
                          "Cochin"
                      ],
                      "time": 60.141,
                      "length": 0.071,
                      "cost": 63.148,
                      "begin_shape_index": 52,
                      "end_shape_index": 58,
                      "travel_mode": "pedestrian",
                      "travel_type": "foot"
                  },
                  {
                      "type": 15,
                      "instruction": "Turn left onto מלבר/Malvar.",
                      "verbal_transition_alert_instruction": "Turn left onto מלבר.",
                      "verbal_succinct_transition_instruction": "Turn left.",
                      "verbal_pre_transition_instruction": "Turn left onto מלבר, Malvar.",
                      "verbal_post_transition_instruction": "Continue for 500 meters.",
                      "street_names": [
                          "מלבר",
                          "Malvar"
                      ],
                      "time": 543.568,
                      "length": 0.537,
                      "cost": 825.015,
                      "begin_shape_index": 58,
                      "end_shape_index": 130,
                      "travel_mode": "pedestrian",
                      "travel_type": "foot"
                  },
                  {
                      "type": 6,
                      "instruction": "Your destination is on the left.",
                      "verbal_transition_alert_instruction": "Your destination will be on the left.",
                      "verbal_pre_transition_instruction": "Your destination is on the left.",
                      "time": 0.0,
                      "length": 0.0,
                      "cost": 0.0,
                      "begin_shape_index": 130,
                      "end_shape_index": 130,
                      "travel_mode": "pedestrian",
                      "travel_type": "foot"
                  }
              ],
              "summary": {
                  "has_time_restrictions": false,
                  "has_toll": false,
                  "has_highway": false,
                  "has_ferry": false,
                  "min_lat": 31.80056,
                  "min_lon": 35.010666,
                  "max_lat": 31.804619,
                  "max_lon": 35.01387,
                  "time": 912.463,
                  "length": 0.972,
                  "cost": 1257.01
              },
              "shape": "an}s{@ee~waAkPr@gEXeEd@}Dp@wD|@mDjAeDtAwCbBkCnBq@p@iAfAkBfCW^Y^W\\YZWXYX[R[R[LQFa@@_@H]N[RYVS\\Q^SNURUNUNUNULULUJWJUJ}A`@}Aj@{At@uA|@sAdAoAhAiAnAeArA_AvAy@zAoQd^cNoG}TkK?oAPmAfKg_@VaAR_AP_AqA]qA[qAUsAOsAMsAKsAGsAEuACsACiB?gBFcBN_BZ{Ah@uAz@qApAkAdBeA`C}@|CmLvb@u@xB_A~AeAhAkAr@oA^qANqA?oAMkAUgAa@s@c@YSaAaAs@iAg@oA[uAOyAE}AD}AN}AV}A~AkIR}@R{@Rw@Rw@Ps@Pq@Po@Nm@Pk@Ni@~Qkl@~@yCv@mCt@eCp@aCj@cCh@gCd@oC`@_D^oDZcElA}SZmCXeC`AmGLiB@cB?_EA{@"
          }
      ],
      "summary": {
          "has_time_restrictions": false,
          "has_toll": false,
          "has_highway": false,
          "has_ferry": false,
          "min_lat": 31.80056,
          "min_lon": 35.010666,
          "max_lat": 31.804619,
          "max_lon": 35.01387,
          "time": 912.463,
          "length": 0.972,
          "cost": 1257.01
      },
      "status_message": "Found route between points",
      "status": 0,
      "units": "kilometers",
      "language": "en-US"
  },
  "id": "valhalla_directions"
}
```
</details>
