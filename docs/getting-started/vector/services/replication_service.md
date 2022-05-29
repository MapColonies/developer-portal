# Replication Service 📦

## Purpose
The server lets users to replicate vector data of MapColonies via a REST API, it allows both getting a single vector layer snapshot
and keep track of changes in MapColonies vector DB for each layer.

## Terminology

There are two types of replicas:
1. Snapshot - A complete layer (e.g buildings, roads, sites) snapshot.
2. Delta - A time-related replica that describes what has changed in a single layer from time `T1` to `T2`.

## Usage
You can query for replicas via the replication service API.

> ⚠️ **You will need an API token as part of the service authentication &nbsp;**

You can see the full OpenAPI spec [here](<REPLICATION-VECTOR-SERVICE-URL>/docs/api)

The API in general is split to two parts:
1. Metadata - you can query the service what layers are available for replication.
2. replicas - you can query what replicas are available to download.


## Files structure

#### Snapshot
When receiving a response from the replication service API for snapshot, The response will contain an array of files to download.

Each downloaded file is a zip.

Each zip will contain one or more GeoJSON files.

Each GeoJSON file is a FeatureCollection

File hierarchy for snapshot

```sh
snapshot.zip/
├─ uuid1.geojson
├─ uuid2.geojson
├─ uuid3.geojson
```

#### Delta

When receiving a response from the replication service API for snapshot, The response will contain an array of files to download.

1. Each downloaded file is a *zip*.

2. Each *zip* will contain:
   1. *zero or more* GeoJSON files.
      1. Each GeoJSON file is a `FeatureCollection`

    2. *zero or more* `deleted_uuid.json` files.

### File hierarchy for delta
```sh
delta.zip/
├─ uuid1.geojson
├─ uuid2.geojson
├─ uuid3.geojson
├─ deleted_uuid1.json
├─ deleted_uuid2.json
├─ deleted_uuid3.json
```
### Delta GeoJSON file
The GeoJSON file is following the *official* specification of GeoJSON (RFC-7946).

Each feature in the feature collection will have a "diff" key, the "diff" key purpose is to present the changes of the feature from its previous version.

The structure (JSON schema) of the "diff" key is as follows:


```json
{
    "definitions": {
        "diff": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "isGeometryChanged": {
                    "type": "boolean"
                },
                "changedTags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            },
            "required": [
                "changedTags",
                "isGeometryChanged"
            ]
        }
    }
}
```

If no `deleted_uuid.json` files are present -> no features were deleted.

if no `uuid.geojson` files are present -> no changes occurred.

### Delta deleted_uuid.json files
Each file is a valid JSON object.

`deleted_uuid.json` files are indicating what features have been deleted from the layer.

The structure(JSON Schema) of the `deleted_uuid.json` files is:

```json
{
     "type": "array",
     "items": {
         "type": "string"
     }
 }
```

Each string is the unique identifier of the deleted feature.

Example of `deleted_uuid.json`:
```json
["{6b973f22-46d9-4540-908f-fe5395ac0ca5}", "{0e4bcbb5-aa99-4bf6-a818-fc9df28666aa}", "{5652897d-e661-4e14-83fc-969bab027bb2}"]
```
