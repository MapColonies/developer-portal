# Model Server Authentication: 

The following section will help you understand how to make authenticated requests to our nginx service.

> :information_desk_person: In order to enquire **auth token**, please [contact us](/classified/contact_us.md).

When making **any** request to our nginx service, the `x-api-key` **header** or `token` **query parameter** must be supplied.<br/>
If token doesn't supplied then the request will get a **403** http response code.

An example for 403 http status code response:

![alt text](../images/403_response.png?raw=true)

Example for a get request with x-api-key header:

```curl
curl --location --request GET '<NGINX_SERVICE_URL>/<MODEL_NAME>/PATH-TO-FILE' \
--header 'x-api-key: <AUTH_TOKEN>' 
```

Example for a get request with token query-params:

```curl
curl --location --request GET '<NGINX_SERVICE_URL>/<MODEL_NAME>/PATH-TO-FILE?token=<AUTH_TOKEN>'
```

Replace following:
- `<NGINX_SERVICE_URL>` by real service.
- `<AUTH_TOKEN>` by received one.
