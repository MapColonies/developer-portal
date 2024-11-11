"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3816],{12703:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var o=r(74848),i=r(28453);const t={id:"3d-tile-server",slug:"3d-tile-server",title:"3D Tile Model Server",tags:["3D","b3dm","smart-reality","photorealistic","API"]},s="3D Tile Server",l={id:"MapColonies/3D/services/3d-tile-server",title:"3D Tile Model Server",description:"Hardware Acceleration for WebGL / WebGL2 is crucial for 3D tiles rendering performance. for more information click here.",source:"@site/docs/MapColonies/3D/services/3Dtiles_server.md",sourceDirName:"MapColonies/3D/services",slug:"/MapColonies/3D/services/3d-tile-server",permalink:"/developer-portal/pr-preview/pr-121/docs/MapColonies/3D/services/3d-tile-server",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/services/3Dtiles_server.md",tags:[{inline:!0,label:"3D",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/3-d"},{inline:!0,label:"b3dm",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/b-3-dm"},{inline:!0,label:"smart-reality",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/smart-reality"},{inline:!0,label:"photorealistic",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/photorealistic"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-121/docs/tags/api"}],version:"current",frontMatter:{id:"3d-tile-server",slug:"3d-tile-server",title:"3D Tile Model Server",tags:["3D","b3dm","smart-reality","photorealistic","API"]},sidebar:"docSidebar",previous:{title:"Services",permalink:"/developer-portal/pr-preview/pr-121/docs/category/services-2"},next:{title:"3D Model Viewer \ud83c\udf0d",permalink:"/developer-portal/pr-preview/pr-121/docs/MapColonies/3D/services/3dViewer/3d-viewer"}},c={},d=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"3d-tile-server",children:"3D Tile Server"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Hardware Acceleration for WebGL / WebGL2 is crucial for 3D tiles rendering performance. for more information click ",(0,o.jsx)(n.a,{href:"/docs/MapColonies/3D/Guides/HardwareAcceleration",children:"here"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["In 3D, the 3DTiles server uses the ",(0,o.jsx)(n.strong,{children:"XYZ protocol"})," to serve the models files."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"How does it work?"})}),"\n",(0,o.jsx)(n.p,{children:"Just send a get request with the file you want to get."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Pay attention to the authentication you need to provide!\nFor further information, see: ",(0,o.jsx)(n.a,{href:"/docs/MapColonies/authentication",children:"Authentication"})]})}),"\n",(0,o.jsx)(n.p,{children:"The get request should be like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-curl",children:"<3D_MODEL_SERVING_SERVICE_URL>/[PATH_TO_FILE_TILESET_JSON]\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"[PATH_TO_FILE_TILESET_JSON]"})," - the full path to the wanted file."]}),"\n",(0,o.jsx)(n.p,{children:"An example:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"<3D_MODEL_SERVING_SERVICE_URL>/path/tileset.json"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This request is ",(0,o.jsx)(n.strong,{children:"without"})," the authentication"]})}),"\n",(0,o.jsx)(n.p,{children:"The response is the content of the file from the request."}),"\n",(0,o.jsx)(n.p,{children:"An example:"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Response example"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "asset": {\n    "version": "0.0",\n    "tilesetVersion": "1.0"\n  },\n  "geometricError": 27596589.783091642,\n  "root": {\n    "boundingVolume": {\n      "region": [\n        -1.3002877215936859,\n        0.7041575058907783,\n        -1.2780350790633774,\n        0.7172779626921096,\n        0,\n        540.9999999997664\n      ]\n    },\n    "geometricError": 597.7486716289187,\n    "refine": "add",\n    "content": {\n      "url": "0/0/0.b3dm",\n      "boundingVolume": {\n        "region": [\n          -1.3001359425259444,\n          0.7046416776785741,\n          -1.2847412414241195,\n          0.715974250610089,\n          0,\n          45.4\n        ]\n      }\n    },\n    "children": [\n      {\n        "boundingVolume": {\n          "region": [\n            -1.3002877215936859,\n            0.7041575058907783,\n            -1.2901045718929864,\n            0.7096268127518264,\n            0,\n            90.4\n          ]\n        },\n        "geometricError": 315.07835765914325,\n        "content": {\n          "url": "1/0/0.b3dm",\n          "boundingVolume": {\n            "region": [\n              -1.3002838399814296,\n              0.7042702559057864,\n              -1.2901097869367912,\n              0.7096162412925472,\n              0,\n              45.4\n            ]\n          }\n        },\n        "children": [\n          {\n            "boundingVolume": {\n              "region": [\n                -1.3002877215936859,\n                0.7041575058907783,\n                -1.292420442296141,\n                0.7082788949705112,\n                0,\n                30.7\n              ]\n            },\n            "geometricError": 208.26652664025082,\n            "content": {\n              "url": "2/0/0.b3dm",\n              "boundingVolume": {\n                "region": [\n                  -1.3002834211024092,\n                  0.7042036838121276,\n                  -1.2933332268056539,\n                  0.7082788949705112,\n                  0,\n                  16.2\n                ]\n              }\n            },\n            "children": [\n              {\n                "boundingVolume": {\n                  "region": [\n                    -1.3002852257728557,\n                    0.7041710828070297,\n                    -1.2947794415304408,\n                    0.707218443388975,\n                    0,\n                    22.4\n                  ]\n                },\n                "geometricError": 106.35154744399651,\n                "content": {\n                  "url": "3/0/0.b3dm",\n                  "boundingVolume": {\n                    "region": [\n                      -1.3002679103613466,\n                      0.7041822878208275,\n                      -1.2947794415304408,\n                      0.707218443388975,\n                      0,\n                      22.4\n                    ]\n                  }\n                },\n                "children": [\n                  {\n                    "boundingVolume": {\n                      "region": [\n                        -1.3002852257728557,\n                        0.7041710828070297,\n                        -1.296688695596441,\n                        0.7060297275607097,\n                        0,\n                        0\n                      ]\n                    },\n                    "geometricError": 0,\n                    "content": {\n                      "url": "4/0/0.b3dm"\n                    }\n                  },\n                  {\n                    "boundingVolume": {\n                      "region": [\n                        -1.2963847011286456,\n                        0.7044581196558126,\n                        -1.2947855885800665,\n                        0.7069076351557798,\n                        0,\n                        15.4\n                      ]\n                    },\n                    "geometricError": 23.081303749744492,\n                    "content": {\n                      "url": "4/1/0.b3dm"\n                    },\n                    "children": [\n                      {\n                        "boundingVolume": {\n                          "region": [\n                            -1.295899761395979,\n                            0.7051670619259972,\n                            -1.2956769317197185,\n                            0.7068777673362904,\n                            0,\n                            11.4\n                          ],\n                          "geometricError": 0,\n                          "content": {\n                            "url": "5/2/0.b3dm"\n                          }\n                        }\n                      },\n                      {\n                        "boundingVolume": {\n                          "region": [\n                            -1.2959047460563227,\n                            0.7068762419185242,\n                            -1.2955470390807973,\n                            0.7069071534449063,\n                            0,\n                            10.7\n                          ]\n                        },\n                        "geometricError": 0,\n                        "content": {\n                          "url": "3/0/7.b3dm"\n                        },\n                        "children": [\n                          {\n                            "boundingVolume": {\n                              "region": [\n                                -1.2949925392507924,\n                                0.7154444192637318,\n                                -1.294344742845622,\n                                0.7164660163254601,\n                                0,\n                                0\n                              ]\n                            },\n                            "geometricError": 0,\n                            "content": {\n                              "url": "4/1/14.b3dm"\n                            }\n                          }\n                        ]\n                      }\n                    ]\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n'})})]}),"\n",(0,o.jsxs)(n.p,{children:["This get request is actually the URL from the ",(0,o.jsx)(n.code,{children:"mc:links"})," element from the records showed in catalog service."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(96540);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);