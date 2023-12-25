---
id: osm-carto-lines-symbology
slug: osm-carto-lines-symbology
---

# Lines

## Roads
In OpenStreetMap, the major roads of a road network are sorted on an importance scale, from motorway to quaternary road


### Major roads
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-highway motorway carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_motorway_carto.png").default} decoding="async" width="100" height="100"/> |Motorway, the most important roads in a road network. Equivalent to freeway, Autobahn (Germany), etc.|`highway=motorway`|
|<img alt="Rendering-highway motorway link.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_motorway_link.png").default} decoding="async" width="100" height="100"/> |The link roads (sliproads / ramps) leading to and from a motorway|`highway=motorway_link`|
|<img alt="Rendering-highway construction motorway carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_motorway_carto.png").default} decoding="async" width="100" height="100"/> |Motorway under construction / Motorway link under construction|`highway=construction` + `construction=motorway` / `highway=construction` + `construction=motorway_link`|
|<img alt="Rendering-highway trunk carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_trunk_carto.png").default} decoding="async" width="100" height="100"/> |Trunks, the most important roads in a road network that aren't motorways|`highway=trunk`|
|<img alt="Rendering-highway trunk link.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_trunk_link.png").default} decoding="async" width="100" height="100"/> |The link roads (sliproads / ramps) leading to and from a trunk highway|`highway=trunk_link`|
|<img alt="Rendering-highway construction trunk carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_trunk_carto.png").default} decoding="async" width="100" height="100"/> |Trunk under construction / Trunk link under construction|`highway=construction` + `construction=trunk` / `highway=construction` + `construction=trunk_link`|
|<img alt="Rendering-highway primary carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_primary_carto.png").default} decoding="async" width="100" height="100"/> |Primary road|`highway=primary`|
|<img alt="Rendering-highway primary link.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_primary_link.png").default} decoding="async" width="100" height="100"/> |Connecting slip roads/ramps of primary highways|`highway=primary_link`|
|<img alt="Rendering-highway construction primary carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_primary_carto.png").default} decoding="async" width="100" height="100"/> |Primary road under construction / Primary road link under construction|`highway=construction` + `construction=primary` / `highway=construction` + `construction=primary_link`|
|<img alt="Rendering-highway secondary carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_secondary_carto.png").default} decoding="async" width="100" height="100"/> |Secondary road|`highway=secondary`|
|<img alt="Rendering-highway secondary link.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_secondary_link.png").default} decoding="async" width="100" height="100"/> |Connecting slip roads/ramps of secondary highways|`highway=secondary_link`|
|<img alt="Rendering-highway construction secondary carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_secondary_carto.png").default} decoding="async" width="100" height="100"/> |Secondary road under construction / Secondary road link under construction|`highway=construction` + `construction=secondary` / `highway=construction` + `construction=secondary_link`|
|<img alt="Rendering-highway tertiary carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_tertiary_carto.png").default} decoding="async" width="100" height="100"/> |Tertiary road|`highway=tertiary`|
|<img alt="Rendering-highway tertiary link.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_tertiary_link.png").default} decoding="async" width="100" height="100"/> |Connecting slip roads/ramps of tertiary highways|`highway=tertiary_link`|
|<img alt="Rendering-highway unclassified.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_unclassified.png").default} decoding="async" width="100" height="100"/> |Quaternary road|`highway=unclassified`|


### City roads
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-highway residential.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_residential.png").default} decoding="async" width="100" height="100"/> |Residential road|`highway=residential`|
|<img alt="Rendering-highway construction tertiary carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_tertiary_carto.png").default} decoding="async" width="100" height="100"/> |Tertiary road under construction / Tertiary road link under construction / Quaternary road under construction / Residential road under construction|`highway=construction` + `construction=tertiary` / `highway=construction` + `construction=tertiary_link` / `highway=construction` + `construction=unclassified` / `highway=construction` + `construction=residential` / `highway=construction` (without `construction=*`)|
|<img alt="Rendering-highway destination.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_destination.png").default} decoding="async" width="100" height="100"/> |Residential road only local traffic|`highway=residential` + `access=destination`|
|<img alt="Rendering-highway privat.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_privat.png").default} decoding="async" width="100" height="100"/> |Residential road only private traffic / prohibited to be used by the general public|`highway=residential` + `access=private` / `highway=residential` + `access=no`|
|<img alt="Rendering-highway service.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_service.png").default} decoding="async" width="100" height="100"/> |Access road (may be also outside of a city)|`highway=service`|
|<img alt="Rendering-highway service minor.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_service_minor.png").default} decoding="async" width="100" height="100"/> |Subordinated way in a parking lot / drive-through highway / driveway / slipway|`highway=service` + `service=parking_aisle` / `highway=service` + `service=drive-through` / `highway=service` + `service=driveway` / `highway=service` + `leisure=slipway`|
|<img alt="Rendering-highway construction service carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_service_carto.png").default} decoding="async" width="100" height="100"/> |Access road under construction|`highway=construction` + `construction=service`|
|<img alt="Living street osm.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Living_street_osm.png").default} decoding="async" width="100" height="100"/> |Living street|`highway=living_street`|
|<img alt="Rendering-highway construction living street carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_living_street_carto.png").default} decoding="async" width="100" height="100"/> |Living street under construction|`highway=construction` + `construction=living_street`|
|<img alt="Pedestrian with area osm.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Pedestrian_with_area_osm.png").default} decoding="async" width="100" height="100"/> |Pedestrian street|`highway=pedestrian`|
|<img alt="Rendering-highway construction pedestrian carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_pedestrian_carto.png").default} decoding="async" width="100" height="100"/> |Pedestrian street under construction|`highway=construction` + `construction=pedestrian`|


### Roads and ways for non-motorized vehicles
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-highway bridleway.png" src={require("/img/openstreetmap/osm-carto/lines/Rendering-highway_bridleway.png").default} decoding="async" width="100" height="75"/>|Bridleway|`highway=bridleway`|
|<img alt="Cycleway osm.png" src={require("/img/openstreetmap/osm-carto/lines/Cycleway_osm.png").default} decoding="async" width="100" height="75"/> |Cycleway|`highway=cycleway`|
|<img alt="Rendering-highway footway.png" src={require("/img/openstreetmap/osm-carto/lines/Rendering-highway_footway.png").default} decoding="async" width="100" height="75"/> |Footway / Multi-use path|`highway=footway` / `highway=path`|
|<img alt="Rendering-highway steps.png" src={require("/img/openstreetmap/osm-carto/lines/Rendering-highway_steps.png").default} decoding="async" width="100" height="75"/> |Steps|`highway=steps`|
|<img alt="Rendering-highway construction misc ways carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_misc_ways_carto.png").default} decoding="async" width="100" height="100"/> |Bridleway / Cycleway / Footway / Multi-use path / Steps / Track under construction|`highway=construction` + `construction=bridleway` / `highway=construction` + `construction=cycleway` / `highway=construction` + `construction=footway` / `highway=construction` + `construction=path` / `highway=construction` + `construction=steps` / `highway=construction` + `construction=track`|


### gricultural and/or forestry roads
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Mapnik-tracktype-grade1.png" src={require("/img/openstreetmap/osm-carto/lines/Mapnik-tracktype-grade1.png").default} decoding="async" width="100" height="75"/> |Track. Solid surface.|`highway=track` + `tracktype=grade1`|
|<img alt="Mapnik-tracktype-grade2.png" src={require("/img/openstreetmap/osm-carto/lines/Mapnik-tracktype-grade2.png").default} decoding="async" width="100" height="75"/> |Track. Mostly solid surface.|`highway=track` + `tracktype=grade2`|
|<img alt="Mapnik-tracktype-grade3.png" src={require("/img/openstreetmap/osm-carto/lines/Mapnik-tracktype-grade3.png").default} decoding="async" width="100" height="75"/> |Track. Even amount of solid and soft materials.|`highway=track` + `tracktype=grade3`|
|<img alt="Mapnik-tracktype-grade4.png" src={require("/img/openstreetmap/osm-carto/lines/Mapnik-tracktype-grade4.png").default} decoding="async" width="100" height="75"/> |Track. Mostly soft surface.|`highway=track` + `tracktype=grade4`|
|<img alt="Mapnik-tracktype-grade5.png" src={require("/img/openstreetmap/osm-carto/lines/Mapnik-tracktype-grade5.png").default} decoding="async" width="100" height="75"/> |Track. Soft surface.|`highway=track` + `tracktype=grade5`|
|<img alt="Mapnik-tracktype-not-set.png" src={require("/img/openstreetmap/osm-carto/lines/Mapnik-tracktype-not-set.png").default} decoding="async" width="100" height="75"/> |Track with unknown surface type.|`highway=track`|


### Miscellaneous roads
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-aeroway runway line.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-aeroway_runway_line.png").default} decoding="async" width="100" height="100"/> |Runway|`aeroway=runway`|
|<img alt="Rendering-aeroway taxiway line.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-aeroway_taxiway_line.png").default} decoding="async" width="100" height="100"/> |Taxiway|`aeroway=taxiway`|
|<img alt="Rendering-highway-bus guideway-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/Rendering-highway-bus_guideway-mapnik.png").default} decoding="async" width="100" height="75"/> |Way for guided buses|`highway=bus_guideway`|
|<img alt="Rendering-leisure track line.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-leisure_track_line.png").default} decoding="async" width="100" height="100"/> |Track (non-motorised)|`leisure=track`|
|<img alt="Rendering-highway-raceway-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway-raceway-mapnik.png").default} decoding="async" width="100" height="100"/> |Racetrack (motorised)|`highway=raceway`|
|<img alt="Rendering-highway-road-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway-road-mapnik.png").default} decoding="async" width="100" height="100"/> |Completely unknown road type. Anything from footpath to motorway is possible. This should be temporary, until the road type has been surveyed properly.|`highway=road`|
|<img alt="Rendering-highway construction road raceway carto.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_construction_road_raceway_carto.png").default} decoding="async" width="100" height="100"/> |Raceway under construction / Road with unknown classification under construction|`highway=construction` + `construction=raceway` / `highway=construction` + `construction=road`|
|<img alt="Rendering-man made pier.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-man_made_pier.png").default} decoding="async" width="100" height="100"/> |Pier, Landing stage|`man_made=pier`|


## Railways
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-railway rail.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_rail.png").default} decoding="async" width="100" height="100"/> |Railway for full-sized passenger trains|`railway=rail`|
|<img alt="Rendering-railway construction-125.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_construction-125.png").default} decoding="async" width="100" height="100"/> |Construction railway|`railway=construction`|
|<img alt="Rendering-railway disused-125.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_disused-125.png").default} decoding="async" width="100" height="100"/> |Disused railway|`railway=disused`|
|<img alt="Rendering-railway rail service.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_rail_service.png").default} decoding="async" width="100" height="100"/> |Railway full-sized passenger trains service segments (Siding track / Yard / Spur track)|`railway=rail` + `service=siding` / `railway=rail` + `service=yard` / `railway=rail` + `service=spur`|
|<img alt="Rendering-railway light rail funicular narrow gauge-125.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_light_rail_funicular_narrow_gauge-125.png").default} decoding="async" width="100" height="100"/> |Narrow gauge railway / Cable-driven inclined railway / Rails of a light rail|`railway=narrow_gauge` / `railway=funicular` / `railway=light_rail`|
|<img alt="Rendering-railway tram.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_tram.png").default} decoding="async" width="100" height="100"/> |Tram railway|`railway=tram`|
|<img alt="Rendering-railway subway.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_subway.png").default} decoding="async" width="100" height="100"/> |Subway railway|`railway=subway`|
|<img alt="Rendering-railway preserved.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_preserved.png").default} decoding="async" width="100" height="101"/> |Preserved railway|`railway=preserved`|
|<img alt="Rendering-railway miniature.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_miniature.png").default} decoding="async" width="100" height="100"/> |Miniature railway|`railway=miniature`|
|<img alt="Rendering-railway monorail.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-railway_monorail.png").default} decoding="async" width="100" height="100"/> |Monorail railway|`railway=monorail`|
|<img alt="Rendering-area-railway turntable-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/Rendering-area-railway_turntable-mapnik.png").default} decoding="async" width="94" height="94"/> |Railway turntable|`railway=turntable`|


## Aerial lifts
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Chair lift rendering.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Chair-lift-rendering.png").default} decoding="async" width="100" height="100"/> |Chairlift / Drag lift / T-bar lift / J-bar lift / Platter lift / Rope tow lift / Zip line|`aerialway=chair_lift` / `aerialway=drag_lift` / `aerialway=t-bar` / `aerialway=j-bar` / `aerialway=platter` / `aerialway=rope_tow` / `aerialway=zip_line`|
|<img alt="Aerialway gondola render.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Aerialway_gondola_render.png").default} decoding="async" width="100" height="100"/> |Gondola lift / Cable car run / Mixed lift|`aerialway=gondola` / `aerialway=cable_car` / `aerialway=mixed_lift`|
|<img alt="Aerialway goods.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Aerialway_goods.png").default} decoding="async" width="100" height="100"/> |An aerial lift for goods|`aerialway=goods`|


## Waterways
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-river.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-river.png").default} decoding="async" width="100" height="100"/> |River / Canal|`waterway=river` / `waterway=canal`|
|<img alt="Rendering-waterway river intermittent.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-waterway_river_intermittent.png").default} decoding="async" width="100" height="100"/> |River intermittent / Canal intermittent / River seasonal / Canal seasonal|`waterway=river` + `intermittent=*` / `waterway=river` + `seasonal=*` / `waterway=canal` + `intermittent=*` / `waterway=canal` + `seasonal=*`|
|<img alt="Rendering-waterway river tunnel.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-waterway_river_tunnel.png").default} decoding="async" width="100" height="100"/> |River in tunnel / Canal in tunnel|`waterway=river` + `tunnel=yes` / `waterway=canal` + `tunnel=yes`|
|<img alt="Rendering-waterway canal-tunnel-flooded.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-waterway_canal-tunnel-flooded.png").default} decoding="async" width="100" height="100"/> |Canal in tunnel|`waterway=canal` + `tunnel=flooded`|
|<img alt="Rendering-stream.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-stream.png").default} decoding="async" width="100" height="100"/> |Stream / Ditch / Drain|`waterway=stream` / `waterway=ditch` / `waterway=drain`|
|<img alt="Rendering-waterway stream intermittent.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-waterway_stream_intermittent.png").default} decoding="async" width="100" height="100"/> |Stream intermittent / Stream seasonal / Ditch intermittent / Ditch seasonal / Drain intermittent / Drain seasonal|`waterway=stream` + `intermittent=*` / `waterway=stream` + `seasonal=*` / `waterway=ditch` + `intermittent=*` / `waterway=ditch` + `seasonal=*` / `waterway=drain` + `intermittent=*` /  `waterway=drain` + `seasonal=*`|
|<img alt="Rendering-waterway stream tunnel.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-waterway_stream_tunnel.png").default} decoding="async" width="100" height="100"/> |Stream in pipe or tunnel / Ditch in pipe or tunnel / drain in pipe or tunnel|`waterway=stream` + `tunnel=yes` / `waterway=ditch` + `tunnel=yes` / `waterway=drain` + `tunnel=yes`|
|<img alt="Rendering-attraction water slide.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-attraction_water_slide.png").default} decoding="async" width="100" height="100"/> |Water slide|`attraction=water_slide`|

## Water traffic
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Route ferry.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Route_ferry.png").default} decoding="async" width="100" height="100"/> |Ferry route|`route=ferry`|

## Platforms
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-highway railway platform line.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-highway_railway_platform_line.png").default} decoding="async" width="100" height="100"/> |Platform at a bus stop or station / Railway platform|`highway=platform` / `railway=platform`|

## Energy supply
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Power line.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Power_line.png").default} decoding="async" width="100" height="100"/> |Major power line|`power=line`|
|<img alt="Power minor line.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Power_minor_line.png").default} decoding="async" width="100" height="100"/> |Minor power line / Path from tee area to the green of a golf course|`power=minor_line` / `golf=hole`|
|<img alt="Rendering-man-made-pipeline.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-man-made-pipeline.png").default} decoding="async" width="100" height="100"/> |Overground pipeline|`man_made=pipeline` + `location=overground`|
|<img alt="Rendering-man-made-pipeline-substance-gas.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-man-made-pipeline-substance-gas.png").default} decoding="async" width="100" height="100"/> |Overground gas pipeline|`man_made=pipeline` + `location=overground` + `substance=gas`|
|<img alt="Rendering-man-made-pipeline-substance-oil.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-man-made-pipeline-substance-oil.png").default} decoding="async" width="100" height="100"/> |Overground oil pipeline|`man_made=pipeline` + `location=overground` + `substance=oil`|
|<img alt="Rendering-man-made-pipeline-substance-water.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-man-made-pipeline-substance-water.png").default} decoding="async" width="100" height="100"/> |Overground water pipeline|`man_made=pipeline` + `location=overground` + `substance=water`|
|<img alt="Rendering-man made goods conveyor.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-man_made_goods_conveyor.png").default} decoding="async" width="100" height="100"/> |Conveyor system for transporting materials|`man_made=goods_conveyor`|

## Barriers
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="City-wall-render-eg1.png" src={require("/img/openstreetmap/osm-carto/lines/100px-City-wall-render-eg1.png").default} decoding="async" width="100" height="100"/> |City wall|`barrier=city_wall` / `historic=citywalls`|
|<img alt="Barrier fence mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Barrier_fence_mapnik.png").default} decoding="async" width="100" height="100"/> |Wall / Fence / Chain / Guard rail / Hand rail / Ditch|`barrier=retaining_wall` / `barrier=wall` / `barrier=fence` / `barrier=chain` / `barrier=guard_rail` / `barrier=handrail` / `barrier=ditch`|
|<img alt="Barrier hedge.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Barrier_hedge.png").default} decoding="async" width="100" height="100"/> |Hedge|`barrier=hedge`|
|<img alt="Rendering-man made breakwater.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-man_made_breakwater.png").default} decoding="async" width="100" height="100"/> |Breakwater / Groyne|`man_made=breakwater` / `man_made=groyne`|
|<img alt="Rendering-waterway-weir-way.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-waterway-weir-way.png").default} decoding="async" width="100" height="100"/> |Weir|`waterway=weir`|
|<img alt="Rendering-waterway-dam-way.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-waterway-dam-way.png").default} decoding="async" width="100" height="100"/> |Dam|`waterway=dam`|


## Nature
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-natural tree row-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-natural_tree_row-mapnik.png").default} decoding="async" width="100" height="100"/> |Line of trees|`natural=tree_row`|
|<img alt="Rendering-man made cutline.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-man_made_cutline.png").default} decoding="async" width="100" height="100"/> |A straight line cut in a forest|man_made=cutline|
|<img alt="Natural cliff-125.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Natural_cliff-125.png").default} decoding="async" width="100" height="100"/> |Cliff|`natural=cliff`|
|<img alt="Natural-arete-125.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Natural-arete-125.png").default} decoding="async" width="100" height="100"/> |Arete|`natural=arete`|
|<img alt="Natural-ridge-125.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Natural-ridge-125.png").default} decoding="async" width="100" height="100"/> |Ridge|`natural=ridge`|
|<img alt="Man made embankment.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Man_made_embankment.png").default} decoding="async" width="100" height="100"/> |Embankment|man_made=embankment|


## Boundaries
| Drawing | Description | Tags |
| :---: | --- | --- |
|<img alt="Rendering-adminlevel 2-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-adminlevel_2-mapnik.png").default} decoding="async" width="100" height="100"/> |National boundary|`boundary=administrative` + `admin_level=2`|
|<img alt="Rendering-adminlevel 3-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-adminlevel_3-mapnik.png").default} decoding="async" width="100" height="100"/> |Sub-national boundary (highest level)|`boundary=administrative` + `admin_level=3`|
|<img alt="Rendering-adminlevel 4-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-adminlevel_4-mapnik.png").default} decoding="async" width="100" height="100"/> |Sub-national boundary (second-highest level)|`boundary=administrative` + `admin_level=4`|
|<img alt="Rendering-adminlevel 5-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-adminlevel_5-mapnik.png").default} decoding="async" width="100" height="100"/> |Sub-national boundary (third-highest level)|`boundary=administrative` + `admin_level=5`|
|<img alt="Rendering-adminlevel 6-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-adminlevel_6-mapnik.png").default} decoding="async" width="100" height="100"/> |Sub-national boundary (fourth-highest level)|`boundary=administrative` + `admin_level=6`|
|<img alt="Rendering-adminlevel 7-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-adminlevel_7-mapnik.png").default} decoding="async" width="100" height="100"/> |Sub-national boundary (fifth-highest or sixth-highest level)|`boundary=administrative` + `admin_level=7` / `boundary=administrative` + `admin_level=8`|
|<img alt="Rendering-adminlevel 9-mapnik.png" src={require("/img/openstreetmap/osm-carto/lines/100px-Rendering-adminlevel_9-mapnik.png").default} decoding="async" width="100" height="100"/> |Sub-national boundary (seventh-highest or eighth-highest level)|`boundary=administrative` + `admin_level=9` / `boundary=administrative` + `admin_level=10`|
