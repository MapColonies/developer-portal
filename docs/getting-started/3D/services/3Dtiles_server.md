# 3D Tile Server

In 3D, the 3DTiles server uses the [XYZ protocol](../../../library/xyz-protocol.md) to serve the models files.

**How does it work?**

Just send a get request with the file you want to get.

> :information_source: Pay attention to the authentication you need to provide!
For further information, see: [Authentication](/getting-started/3D/authentication/3Dtiles_server_auth.md)

The get request should be like:

```curl
<3D_MODEL_SERVING_SERVICE_URL>/[PATH_TO_FILE_TILESET_JSON]
```

`[PATH_TO_FILE_TILESET_JSON]` - the full path to the wanted file.

An example:

`<3D_MODEL_SERVING_SERVICE_URL>/path/tileset.json`

> :information_source: This request is **without** the authentication

The response is the content of the file from the request.

An example:

<details>
  <summary>Response example</summary>

```json
{
  "asset": {
    "version": "0.0",
    "tilesetVersion": "1.0"
  },
  "geometricError": 27596589.783091642,
  "root": {
    "boundingVolume": {
      "region": [
        -1.3002877215936859,
        0.7041575058907783,
        -1.2780350790633774,
        0.7172779626921096,
        0,
        540.9999999997664
      ]
    },
    "geometricError": 597.7486716289187,
    "refine": "add",
    "content": {
      "url": "0/0/0.b3dm",
      "boundingVolume": {
        "region": [
          -1.3001359425259444,
          0.7046416776785741,
          -1.2847412414241195,
          0.715974250610089,
          0,
          45.4
        ]
      }
    },
    "children": [
      {
        "boundingVolume": {
          "region": [
            -1.3002877215936859,
            0.7041575058907783,
            -1.2901045718929864,
            0.7096268127518264,
            0,
            90.4
          ]
        },
        "geometricError": 315.07835765914325,
        "content": {
          "url": "1/0/0.b3dm",
          "boundingVolume": {
            "region": [
              -1.3002838399814296,
              0.7042702559057864,
              -1.2901097869367912,
              0.7096162412925472,
              0,
              45.4
            ]
          }
        },
        "children": [
          {
            "boundingVolume": {
              "region": [
                -1.3002877215936859,
                0.7041575058907783,
                -1.292420442296141,
                0.7082788949705112,
                0,
                30.7
              ]
            },
            "geometricError": 208.26652664025082,
            "content": {
              "url": "2/0/0.b3dm",
              "boundingVolume": {
                "region": [
                  -1.3002834211024092,
                  0.7042036838121276,
                  -1.2933332268056539,
                  0.7082788949705112,
                  0,
                  16.2
                ]
              }
            },
            "children": [
              {
                "boundingVolume": {
                  "region": [
                    -1.3002852257728557,
                    0.7041710828070297,
                    -1.2947794415304408,
                    0.707218443388975,
                    0,
                    22.4
                  ]
                },
                "geometricError": 106.35154744399651,
                "content": {
                  "url": "3/0/0.b3dm",
                  "boundingVolume": {
                    "region": [
                      -1.3002679103613466,
                      0.7041822878208275,
                      -1.2947794415304408,
                      0.707218443388975,
                      0,
                      22.4
                    ]
                  }
                },
                "children": [
                  {
                    "boundingVolume": {
                      "region": [
                        -1.3002852257728557,
                        0.7041710828070297,
                        -1.296688695596441,
                        0.7060297275607097,
                        0,
                        0
                      ]
                    },
                    "geometricError": 0,
                    "content": {
                      "url": "4/0/0.b3dm"
                    }
                  },
                  {
                    "boundingVolume": {
                      "region": [
                        -1.2963847011286456,
                        0.7044581196558126,
                        -1.2947855885800665,
                        0.7069076351557798,
                        0,
                        15.4
                      ]
                    },
                    "geometricError": 23.081303749744492,
                    "content": {
                      "url": "4/1/0.b3dm"
                    },
                    "children": [
                      {
                        "boundingVolume": {
                          "region": [
                            -1.295899761395979,
                            0.7051670619259972,
                            -1.2956769317197185,
                            0.7068777673362904,
                            0,
                            11.4
                          ],
                          "geometricError": 0,
                          "content": {
                            "url": "5/2/0.b3dm"
                          }
                        }
                      },
                      {
                        "boundingVolume": {
                          "region": [
                            -1.2959047460563227,
                            0.7068762419185242,
                            -1.2955470390807973,
                            0.7069071534449063,
                            0,
                            10.7
                          ]
                        },
                        "geometricError": 0,
                        "content": {
                          "url": "3/0/7.b3dm"
                        },
                        "children": [
                          {
                            "boundingVolume": {
                              "region": [
                                -1.2949925392507924,
                                0.7154444192637318,
                                -1.294344742845622,
                                0.7164660163254601,
                                0,
                                0
                              ]
                            },
                            "geometricError": 0,
                            "content": {
                              "url": "4/1/14.b3dm"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```
</details>

This get request is actually the URL from the `mc:links` element from the records showed in CSW service.
