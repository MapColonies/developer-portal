# CSW Service :card_file_box: 
 [Catalogue Service for the Web (CSW)](/ogc-protocols/ogc-csw.md) is a standard for exposing a catalogue of geospatial records in XML on the Internet (over HTTP). The catalogue is made up of records that describe geospatial data, geospatial services (e.g. [WMTS](/ogc-protocols/ogc-wmts.md)), and related resources.

| **Request** | **HTTP method binding(s)** |
| ----------- | ----------- |
| GetCapabilities | GET (KVP) / POST (XML) / SOAP |
| DescribeRecord | GET (KVP) / POST (XML) / SOAP |
| GetRecords | GET (KVP) / POST (XML) / SOAP |
| GetRecordById | GET (KVP) / POST (XML) / SOAP |
| GetRepositoryItem | GET (KVP) |
| GetDomain | GET (KVP) / POST (XML) / SOAP |

**_How can I see the records??_**

You need to send a post request with xml describing the specific records you want.

Of course, you have to add the authentication stage in order to get answer.

For more details, see: [Authentication](/ogc-protocols/ogc-csw-auth.md)

An example of a post request's body:

![alt text](../images/post_request.png?raw=true)

After sending the request, you will get a response with all the records matched to the filter query. For example:

![alt text](../images/post_response.png?raw=true)

You can see in the response how much records returned, from which schema and etc...
Of course, you can also see all the metadata of the matched records.