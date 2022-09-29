# Export Service :card_file_box:
 The export module is responsible for packaging mapping data that can be downloaded by clients or transferred to other systems. Export can be requested for various mapping products within a specific region. The export module exposes an API and Web-based tool.

 > :no_entry: **Authentication must be integrated in order to communicate with export service.**<br/>
> **See the principles [here](/getting-started/raster/raster_authentication.md)**

Export OpenAPI (Swagger)

<figure>
    <img src="./assets/images/raster_exporter_openapi.png" style="display: block;margin-left: auto;margin-right: auto;">
</figure>

```yaml
openapi: 3.0.1
info:
  title: exporter-trigger
  description: Service that responsible for activating the export geopackage process
  version: 2.2.0
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT
paths:
  /create:
    post:
      tags:
        - createGpkg
      summary: Trigger export geopackage process
      operationId: exportTilesToGpkg
      requestBody:
        $ref: '#/components/requestBodies/ExportGetmapBody'
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                oneOf:
                  - $ref: '#/components/schemas/createGpkgJobResponse'
                  - $ref: '#/components/schemas/naiveCacheJobResponse'
                discriminator:
                  propertyName: response
        '400':
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
        '404':
          description: Could not find layer with matched dbId
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/error'
        '500':
          description: Internal Server Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/internalError'
components:
  requestBodies:
    ExportGetmapBody:
      description: Export to gpkg via GetMap
      required: true
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/exportGetMap'
  schemas:
    CommonResponse:
      type: object
      required:
        - status
      properties:
        status:
          type: string
          enum:
            - In-Progress
            - Completed
      discriminator:
        propertyName: response
    exportGetMap:
      type: object
      properties:
        dbId:
          type: string
          format: uuid
          description: ID as the primary key from the Raster Catalog
        bbox:
          $ref: '#/components/schemas/BBOX'
        targetResolution:
          type: number
          description: >-
            The target resolution in which the tiles will be created - DEGREE to
            PIXEL
        callbackURLs:
          type: array
          items:
            type: string
          description: The callback URL to notify the process if finished
        crs:
          $ref: '#/components/schemas/CRS'
        priority:
          type: number
          description: The priority of the record. Maximum priority = most urgent.
          minimum: 0
          maximum: 999999999
      required:
        - dbId
        - bbox
        - targetResolution
        - callbackURLs
      example:
        dbId: ef03ca54-c68e-4ca8-8432-50ae5ad7a7f8
        bbox:
          - 34.811938017107494
          - 31.95475033759175
          - 34.82237261707599
          - 31.96426962177354
        targetResolution: 0.0000429153442382812
        callbackURLs:
          - http://example.getmap.com/callback
          - http://example.getmap.com/callback2
        crs: EPSG:4326
        priority: 0
    createGpkgJobResponse:
      allOf:
        - $ref: '#/components/schemas/CommonResponse'
      type: object
      properties:
        status:
          type: string
          enum:
            - In-Progress
        id:
          type: string
          format: uuid
        taskIds:
          type: array
          items:
            type: string
            format: uuid
      required:
        - id
        - taskIds
    naiveCacheJobResponse:
      allOf:
        - $ref: '#/components/schemas/CommonResponse'
      type: object
      properties:
        status:
          type: string
          enum:
            - Completed
        fileUri:
          type: string
        expirationTime:
          type: string
          format: date
        fileSize:
          type: number
        dbId:
          type: string
          format: uuid
        packageName:
          type: string
        bbox:
          $ref: '#/components/schemas/BBOX'
        targetResolution:
          type: number
        requestId:
          type: string
        success:
          type: boolean
        errorReason:
          type: string
      required:
        - fileUri
        - expirationTime
        - fileSize
        - dbId
        - packageName
        - bbox
        - targetResolution
        - requestId
        - success
    error:
      type: object
      required:
        - message
      properties:
        message:
          type: string
    internalError:
      type: object
      required:
        - message
        - stacktrace
      properties:
        message:
          type: string
        stacktrace:
          type: string
    CRS:
      type: string
      description: List of supported
      enum:
        - EPSG:4326
    BBOX:
      type: array
      items:
        type: number
      minItems: 4
      maxItems: 4
      description: >-
        Bounding box corners (lower left, upper right)=[minx,miny,maxx,maxy] in
        crs units as array
```
