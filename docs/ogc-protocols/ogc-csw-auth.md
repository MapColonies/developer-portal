# CSW Authentication :lock_with_ink_pen: 
The following section will help you understand how to make authenticated requests to our CSW services.

> :information_desk_person: In order to enquire **auth token**, please [contact us](/classified/contact_us.md).

When making **any** request to our CSW services, the `x-api-key` **header** or `token` **query parameter** must be supplied.<br/>
If token doesn't supplied then the request will get a **403** http response code.

> :heavy_exclamation_mark: **Important:** only **query parameter** `token` is currently supported

Example for ***GetCapabilities*** request:
```curl
curl --location --request GET '<CSW_SERVICE_URL>/csw?request=GetCapabilities&service=CSW?token=<AUTH_TOKEN>' \
--header 'Content-Type: application/xml' \
--header 'cache-control: no-cache' \
--header 'origin: my_origin'
<!-- --header 'x-api-key: <AUTH_TOKEN>' -->
```

Replace following:
- `<CSW_SERVICE_URL>` by real service.
- `<AUTH_TOKEN>` by received one.
