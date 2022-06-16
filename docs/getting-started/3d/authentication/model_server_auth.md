# Model Server Authentication :lock_with_ink_pen: 

The following section will help you understand how to make authenticated requests to our model service.

> :information_desk_person: In order to enquire **auth token**, please [contact us](/classified/contact_us.md).

When making **any** request to our model service, the `x-api-key` **header** or `token` **query parameter** must be supplied.<br/>
If token doesn't supplied then the request will get a **403** http response code.

An example for 403 http status code response:

```response
HTTP/1.1 403 Forbidden
date: Thu, 16 Jun 2022 07:44:25 GMT
server: envoy
content-length: 0
Set-Cookie: blabla=blablabla; path=/; HttpOnly
```

Example for a get request with x-api-key header:

```curl
curl --location --request GET '<MODEL_SERVER_3D_SERVICE_URL>/[MODEL]/[PATH_TO_FILE]' \
--header 'x-api-key: <API_KEY>' 
```

Example for a get request with token query-params:

```curl
curl --location --request GET '<MODEL_SERVER_3D_SERVICE_URL>/[MODEL]/[PATH_TO_FILE]?token=<API_KEY>'
```

Replace following:

- `[MODEL]` - the name of the model.

- `[PATH_TO_FILE]` - the full path to the wanted file.

