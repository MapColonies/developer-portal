# Authentication

In order to make requests either as a service or a client, you will need to identify yourself with a token.

> :information_desk_person: In order to enquire **auth token**, please [contact us](/classified/contact_us.md).

The token, should be used in **every** request to our services and will enable you to access our services in accordance to the permissions that were given to you. <br/>

> :information_source: The token might have an **expiration date**

When making any request, you need to add a special **header** or **query parameter** in which you supply the token.
> :heavy_exclamation_mark: **Important:** only **query parameter** `token` is currently supported

Some services will require an `API Token`, it will be specified in the service description.

# B2B Clients
If you are a developer who develops a backend service that communicates with one of our backend services and it requires a **token** don't forget to add the `Origin` header with one of the allowed origins as a value.


```javascript
const config = {
  headers:{
    Origin: 'https://my-allowed-origin.domain'
  }
};

const url = "api endpoint";

const data ={
  name: "Avi Itzik",
  email: "avi@meow.com"
};

axios.get(url, config)
  .then(res=> console.log(res))
  .catch(err=> console.log(err));

```
