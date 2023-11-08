# Documentation

## `GET` Routes

- Default route [`/`](https://the-to-do-api.vercel.app/)

  **Response**

  ```json
  {
    "status": 200,
    "message": "APi Connected"
  }
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

  **Response**

  ```json
  {
    "status": 200,
    "message": "Successfully registered"
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
  {
    "user_id": "cead13f7-5225-47e3-9c06-0ea6583fc3e6",
    "pending_list": null,
    "completed_list": null
  }
  ```

  Else
  `false`
