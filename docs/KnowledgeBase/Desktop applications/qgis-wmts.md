---
id: qgis-wmts
slug: qgis-wmts
title: Add WMTS connection in QGIS
sidebar_position: 2
tags:
  - qgis
  - wmts
  - connection
---

## Prerequisites

### MapColonies token

In order to create a connection to our `WMTS` service you will need a `token`, contact us to receive one.

[Read more about `tokens`](/docs/MapColonies/auth.md).

### QGIS application

Install the `QGIS` application (version >3.26).

## Create a new connection in QGIS

Open your `QGIS` application. In the browser windows (on the left), right click on `WMS/WMTS` and select `New Connection...`.

<figure>
    <img src={require("/img/qgis/qgis-wmts-add-connection.png").default} style={{"display":"block","marginLeft":"auto","marginRight":"auto","height":"350px"}}/>
</figure>

A connection creation form will open, fill the following:
1. `Name` - connection name
2. `URL` - `WMTS Cpabilities` URL provided by us

Now click on `Advanced` under `HTTP Headers` and add a new header with the `Key` "x-api-key" and the value will be the `token` provided by us.

At the end of the process the form should look similar to this:

<figure>
    <img src={require("/img/qgis/qgis-wmts-new-connection.png").default} style={{"display":"block","marginLeft":"auto","marginRight":"auto","height":"500px"}}/>
</figure>

Click `OK` to create the connection. Now we can see it under `WMS/WMTS`:

<figure>
    <img src={require("/img/qgis/qgis-wmts-connection.png").default} style={{"display":"block","marginLeft":"auto","marginRight":"auto"}}/>
</figure>

Drag any layer to the `Layers` panel in order to view it.

And that's it, you are ready to start working with with our service and your data!
