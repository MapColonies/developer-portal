# CSW Authentication
The following section will help you understand how to make authenticated requests to our CSW services.

> :information_desk_person: In order to enquire **auth token**, please [contuct us](/classified/contact_us.md).

When making **any** request to our CSW services, the `x-api-key` header must be supplied.<br/>
If token doesn't supplied then the request will get a **403** http response code.

Example for ***GetCapabilities*** request:
```curl
curl --location --request GET '<CSW_SERVICE_URL>/csw?request=GetCapabilities&service=CSW' \
--header 'Content-Type: application/xml' \
--header 'cache-control: no-cache' \
--header 'origin: stam' \
--header 'x-api-key: <AUTH_TOKEN>' 
```

Replace following:
- `<CSW_SERVICE_URL>` by real service.
- `<AUTH_TOKEN>` by recieved one.
