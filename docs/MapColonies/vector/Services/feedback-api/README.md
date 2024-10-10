---
id: vector-feedback-api-service
slug: feedback-api ⚙️
title: Geocoding's Feedback Api
description: Feedback of Geocoding's responses
tags:
  - vector
  - API
  - osm
  - Geocoding
---

# Geocoding's Feedback Api ⚙️

:::info
Click [here](/docs/MapColonies/vector/services/feedback-api/api) for the OpenAPI
:::

Geocoding's feedback api is an API that gets from the user of geocoding the response and and puts it in redis for BI purposes.

## Usage

Once a user gets a response from Geocoding, the system that uses Geocoding will send the request ID and the chosen response ID back to us using the API.
