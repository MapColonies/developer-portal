# :lock_with_ink_pen: 3D Authentication

In order to make requests either as a service or a client, you will need to identify yourself with a token.

> :information_desk_person: In order to enquire **auth token**, please [contact us](/classified/contact_us.md).

The token, should be used in **every** request to our services and will enable you to access our services in accordance to the permissions that were given to you. <br/>

> :information_source: The token has an **expiration date**.

When making any request, you need to add a special **query parameter** in which you supply the token! Otherwise, you will get only 403 http response code (forbidden).

Here is the instructions how to do it:


Add the token in query params by inserting in the end of the url: `?token=<API_KEY>`.
> the char '?' allows you to add a query parameter.

Replace `<API_KEY>` by received one.

For further information, see:

- [Catalog Service](/ogc-protocols/ogc-csw-auth.md)
- [Model Server](/getting-started/3d/authentication/model_server_auth)

<br/>
<br/>
<table style=" width: 100%; display: table !important;">
    <tbody>
        <tr>
            <td align="left">
                <a href="#/getting-started/3d/3d_services">Previous (Services)</a>
            </td>
            <td align="right">
                <a href="#/catalog-information/v2_0/3d_profile">Next (Catalog profile)</a>
            </td>
        </tr>
    </tbody>
</table>
