# Data Coverage Service Authentication
The following section will help you understand how to make authenticated requests to our Data Coverage (Superior DEM) services.

> :information_desk_person: In order to enquire **auth token**, please [contact us](/classified/contact_us.md).

When making **any** request to our CSW services, the `x-api-key` **header** or `token` **query parameter** must be supplied.<br/>
If token doesn't supplied then the request will get a **403** http response code.

Example for ***GetCoverage*** request if authentication via **header**:
```curl
curl --location --request GET '<SUPERIOR-DEM-SERVICE_URL>?service=WCS&version=2.0.1&coverageId=DTMBestResolution&request=GetCoverage&format=image/geotiff&subset=Long(33,35)&subset=Lat(29,33)' \
--header 'x-api-key: <AUTH_TOKEN>' 
```

Example for ***GetCoverage*** request if authentication via **queryParams**:
```curl
curl --location --request GET '<SUPERIOR-DEM-SERVICE_URL>?service=WCS&version=2.0.1&coverageId=DTMBestResolution&request=GetCoverage&format=image/geotiff&subset=Long(33,35)&subset=Lat(29,33)&token=<AUTH_TOKEN>'
```

Replace following:
- `<SUPERIOR-DEM-SERVICE_URL>` by real service.
- `<AUTH_TOKEN>` by received one.
