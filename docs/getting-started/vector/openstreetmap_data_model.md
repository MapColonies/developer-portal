# OpenStreetMap Data Model
The basic components of OpenStreetMap's conceptual data model of the physical world are called elements. Elements are of three types:

- nodes (defining points in space)
- ways (defining linear features and area boundaries)
- relations (which are sometimes used to explain how other elements work together).

All of the above can have one or more associated tags (which describe the meaning of a particular element).
When Sharing or creating OSM entities, the most common way to describe said elements is XML.

![OpenStreetMap Entities](.//assets/images/OpenStreetMap_entities.png)
## Node
A **node** represents a specific point on the earth's surface defined by its latitude and longitude, referred to the World Geodetic System 1984. Each node comprises at least an id number and a pair of coordinates.

Nodes can be used to define standalone point features. For example, a node could represent a park bench or a water well.

Nodes are also used to define the shape of a way. When used as points along ways, nodes usually have no tags, though some of them could. For example, `highway=traffic_signals` marks traffic signals on a road, and `power=tower` represents a pylon along an electric power line.

A node can be included as member of relation. The relation also may indicate the member's role: that is, the node's function in this particular set of related data elements.

## Way
A **way** is an ordered list of between 1 (!) and 2,000 nodes that define a polyline. Ways are used to represent linear features such as rivers and roads.

Ways can also represent the boundaries of areas (solid polygons) such as buildings or forests. In this case, the way's first and last node will be the same. This is called a "closed way". 

Note that closed ways occasionally represent loops, such as roundabouts on highways, rather than solid areas. The way's tags must be examined to discover which it is. For elements with tags that could both be a linear representation or an area-representation of a real life object (such as `man_made=pier`) the tag `area=yes` or `area=no` can be used to avoid ambiguity or misinterpretation.

Areas with holes, or with boundaries of more than 2,000 nodes, cannot be represented by a single way. Instead, the feature will require a more complex multipolygon relation data structure.

## Relation
A **relation** is a multi-purpose data structure that documents a relationship between two or more data elements (nodes, ways, and/or other relations). Examples include:

- A route relation, which lists the ways that form a major (numbered) highway, a cycle route, or a bus route.
- A turn restriction that says you can't turn from one way into another way.
- A multipolygon that describes an area (whose boundary is the 'outer way') with holes (the 'inner ways').
Thus, relations can have different meanings. The relation's meaning is defined by its tags. Typically, the relation will have a 'type' tag. The relation's other tags need to be interpreted in light of the type tag.

The relation is primarily an ordered list of nodes, ways, or other relations. These objects are known as the relation's members.

Each element can optionally have a role within the relation. For example, a turn restriction would have members with "from" and "to" roles, describing the particular turn that is forbidden.

A single element such as a particular way may appear multiple times in a relation.

## Tag
All types of data element (nodes, ways and relations) can have tags. Tags describe the meaning of the particular element to which they are attached.

A tag consists of two free format text fields; a 'key' and a 'value'. Each of these are Unicode strings of up to 255 characters. For example, `highway=residential` defines the way as a road whose main function is to give access to people's homes. An element cannot have 2 tags with the same 'key', the 'key's must be unique. For example, you cannot have an element tagged both `amenity=restaurant` and `amenity=bar`.

There is no fixed dictionary of tags, but there are many conventions documented on the OSM wiki (starting with the Map Features page). Tag usage can be measured with the Taginfo application. If there is more than one way to tag a given feature, it's probably best to use the most common approach.

Not all elements have tags. Nodes are often untagged if they are part of ways. Both ways and nodes may be untagged if they are members of a relation.