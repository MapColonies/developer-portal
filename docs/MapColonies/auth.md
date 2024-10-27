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

In order to make requests either as a service or a client, you will need to identify yourself with a `token`.
The `token` should be used in **every** request to our services and will allow you to access our services in accordance to the permissions that were given to you.<br/>

**All services** will require an `API Token`, it will be specified in each service description.

:::warning
The token might have an **expiration date**
:::

:::info
**Important:** only **query parameter** `token` is currently supported
:::

## Supplying the token

When making any request, you need to add a special **header** or **query parameter** in which you supply the token.

| **How we supply the token** | **Name** |
| ----------- | ----------- |
| Query | token |
| Header | x-api-key |

## Using the token as a query parameter


```
<SERVICE_URL>/SUB/PATH?token=<token>
```

## Using the token as a header

```curl
curl --location --request <http_method> '<SERVICE_URL>' --header 'x-api-key: <token>'
```
