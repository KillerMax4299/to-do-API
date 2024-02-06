# Documentation

## `GET` Routes

- Default route [`/`](https://the-to-do-api.vercel.app/)

  **Response**

  ```json
  "APi Connected"
  ```

- [`/username/:input`](https://the-to-do-api.vercel.app/username/)

  Returns the **Username** availability

  Example: `/username/Myname`

  **Response**

  if `Myname` is available response will be `true` else `false`

## `POST` Routes

- [`/register`](https://the-to-do-api.vercel.app/register)

  **Request Body**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

  

- [`/login`](https://the-to-do-api.vercel.app/login)

  **Request Body**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

  **Response**

  if **Credentials** are correct

  ```json
  "Bearer <JWT token>"
  ```

  each token created will be valid for **30 days**.

  Else
  `false`

## `CRUD` options 
valid `authorization` token is required from `/login` response.

The route for CRUD operations is `/json`
  - ### Read Todo (GET)

    ```
    Only valid token will return the list           //as array of objects
    ```

  - ### Add Todo (POST)
    
    ```js
    {
      "id": integer,
      "name": string
    }
    ```
  - ### Delete Todo (DELETE)
    
    ```js
    {
      "id": integer,
      "name": string
    }
    ```
  - ### Update Todo (PATCH)
    
    ```js
    {
      "index": integer,                // index of the element to update
      "id": integer,
      "name": string                   // new name of the element
    }
    ```
