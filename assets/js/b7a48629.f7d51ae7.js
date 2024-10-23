"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4644],{18943:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-1.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.1","info":{"title":"feedback api","description":"Api to eventually do BI on the data from responses from Geocoding.","version":"1.0.0","license":{"name":"MIT","url":"https://opensource.org/licenses/MIT"}},"paths":{"/feedback":{"post":{"operationId":"createFeedback","tags":["feedback"],"summary":"creates a new record of a chosen result from Geocoding","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/feedback"}}}},"responses":{"204":{"description":"Feedback has been sent succesfully"},"400":{"description":"Bad Request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/error"}}}},"404":{"description":"Not Found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/error"}}}}}}}},"components":{"schemas":{"error":{"type":"object","required":["message"],"properties":{"message":{"type":"string"}}},"feedback":{"type":"object","required":["request_id","chosen_result_id"],"properties":{"request_id":{"type":"string"},"chosen_result_id":{"type":"number","format":"int64"}}}}}}}')}}]);