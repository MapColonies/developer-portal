---
id: MapColonies-api-auth
title: Authentication
slug: authentication
description: MapColonies API Auth Convention
sidebar_position: 2
tags:
  - auth
  - API
  - token
  - clients
---

# Authentication

In order to make requests either as a service or a client, you will need to identify yourself with a token.
The token, should be used in **every** request to our services and will enable you to access our services in accordance to the permissions that were given to you. <br/>

:::caution
The token might have an **expiration date**
:::

When making any request, you need to add a special **header** or **query parameter** in which you supply the token.

:::info
**Important:** only **query parameter** `token` is currently supported
:::

**All services** will require an `API Token`, it will be specified in the service description.
