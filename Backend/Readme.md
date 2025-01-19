# ✨ **API Documentation** ✨

This document provides detailed information about the `/users`, `/captains`, `/maps`, and `/rides` API endpoints, including their descriptions, expected data formats, response examples, and status codes.

---

## 🚀 **User Endpoints**

### 1. `/users/register`

#### **Method**
`POST`

#### **URL**
`/users/register`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                                       | Required |
|-------------|----------|---------------------------------------------------|----------|
| **fullname**    | Object   | The user's full name containing `firstname` and `lastname`. | Yes      |
| **firstname**   | String   | The user's first name (min length: 3 characters). | Yes      |
| **lastname**    | String   | The user's last name (min length: 3 characters).  | No       |
| **email**       | String   | The user's email address (must be unique).        | Yes      |
| **password**    | String   | The user's password (min length: 6 characters).   | Yes      |

### 📝 **Example Request Body**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the authentication token and the newly created user's data.

#### ✅ **Success Response** (Status Code: `201`)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64a5f0c1234abc56789ef012",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `400`)
If the request validation fails, the server responds with the following structure:
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

### 2. `/users/login`

#### **Method**
`POST`

#### **URL**
`/users/login`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                             | Required |
|-------------|----------|-----------------------------------------|----------|
| **email**       | String   | The user's email address.                | Yes      |
| **password**    | String   | The user's password.                     | Yes      |

### 📝 **Example Request Body**
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword123"
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the authentication token and the user's data.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64a5f0c1234abc56789ef012",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `400` or `401`)
If the login fails due to invalid credentials, the server responds with the following structure:
```json
{
  "error": "Invalid email or password"
}
```

---

### 3. `/user/profile`

#### **Method**
`GET`

#### **URL**
`/user/profile`

### 📝 **Headers**
| Header          | Value        | Required |
|------------------|--------------|----------|
| **Authorization** | Bearer token | Yes      |

### 📤 **Response Format**
The server responds with the authenticated user's profile details.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "user": {
    "_id": "64a5f0c1234abc56789ef012",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `401`)
If the user is not authenticated, the server responds with:
```json
{
  "error": "Unauthorized"
}
```

---

### 4. `/user/logout`

#### **Method**
`POST`

#### **URL**
`/user/logout`

### 📝 **Headers**
| Header          | Value        | Required |
|------------------|--------------|----------|
| **Authorization** | Bearer token | Yes      |

### 📤 **Response Format**
The server responds with a message confirming the logout.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "message": "User logged out successfully"
}
```

#### ❌ **Error Response** (Status Code: `401`)
If the user is not authenticated, the server responds with:
```json
{
  "error": "Unauthorized"
}
```

---

## 🚀 **Captain Endpoints**

### 1. `/captains/register`

#### **Method**
`POST`

#### **URL**
`/captains/register`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                                       | Required |
|-------------|----------|---------------------------------------------------|----------|
| **fullname**    | Object   | The captain's full name containing `firstname` and `lastname`. | Yes      |
| **firstname**   | String   | The captain's first name (min length: 3 characters). | Yes      |
| **lastname**    | String   | The captain's last name (min length: 3 characters).  | No       |
| **email**       | String   | The captain's email address (must be unique).        | Yes      |
| **password**    | String   | The captain's password (min length: 6 characters).   | Yes      |
| **licenseNumber** | String | The captain's license number.                      | Yes      |

### 📝 **Example Request Body**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "janedoe@example.com",
  "password": "securepassword456",
  "licenseNumber": "ABCD1234"
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the authentication token and the newly created captain's data.

#### ✅ **Success Response** (Status Code: `201`)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64a5f0c1234abc56789ef013",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "janedoe@example.com",
    "licenseNumber": "ABCD1234",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `400`)
If the request validation fails, the server responds with the following structure:
```json
{
  "errors": [
    {
      "msg": "License number is required",
      "param": "licenseNumber",
      "location": "body"
    }
  ]
}
```

---

### 2. `/captains/login`

#### **Method**
`POST`

#### **URL**
`/captains/login`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                             | Required |
|-------------|----------|-----------------------------------------|----------|
| **email**       | String   | The captain's email address.                | Yes      |
| **password**    | String   | The captain's password.                     | Yes      |

### 📝 **Example Request Body**
```json
{
  "email": "janedoe@example.com",
  "password": "securepassword456"
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the authentication token and the captain's data.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "64a5f0c1234abc56789ef013",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "janedoe@example.com",
    "licenseNumber": "ABCD1234",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `400` or `401`)
If the login fails due to invalid credentials, the server responds with the following structure:
```json
{
  "error": "Invalid email or password"
}
```

---

### 3. `/captain/profile`

#### **Method**
`GET`

#### **URL**
`/captain/profile`

### 📝 **Headers**
| Header          | Value        | Required |
|------------------|--------------|----------|
| **Authorization** | Bearer token | Yes      |

### 📤 **Response Format**
The server responds with the authenticated captain's profile details.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "captain": {
    "_id": "64a5f0c1234abc56789ef013",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "janedoe@example.com",
    "licenseNumber": "ABCD1234",
    "socketId": null
  }
}
```

#### ❌ **Error Response** (Status Code: `401`)
If the captain is not authenticated, the server responds with:
```json
{
  "error": "Unauthorized"
}
```

---

### 4. `/captain/logout`

#### **Method**
`POST`

#### **URL**
`/captain/logout`

### 📝 **Headers**
| Header          | Value        | Required |
|------------------|--------------|----------|
| **Authorization** | Bearer token | Yes      |

### 📤 **Response Format**
The server responds with a message confirming the logout.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "message": "Captain logged out successfully"
}
```

#### ❌ **Error Response** (Status Code: `401`)
If the captain is not authenticated, the server responds with:
```json
{
  "error": "Unauthorized"
}
```

---

## 🚀 **Maps Endpoints**

### 1. `/maps/nearby`

#### **Method**
`GET`

#### **URL**
`/maps/nearby`

### 📥 **Query Parameters**
| Parameter | Type   | Description                       | Required |
|-----------|--------|-----------------------------------|----------|
| **lat**   | Number | Latitude of the current location. | Yes      |
| **lng**   | Number | Longitude of the current location.| Yes      |

### 📤 **Response Format**
The server responds with a JSON object containing a list of nearby locations.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "locations": [
    {
      "name": "Location 1",
      "lat": 12.9715987,
      "lng": 77.594566
    },
    {
      "name": "Location 2",
      "lat": 12.2958104,
      "lng": 76.6393805
    }
  ]
}
```

#### ❌ **Error Response** (Status Code: `400`)
If the request validation fails, the server responds with:
```json
{
  "error": "Invalid latitude or longitude"
}
```

---

## 🚀 **Rides Endpoints**

### 1. `/rides/request`

#### **Method**
`POST`

#### **URL**
`/rides/request`

### 📥 **Request Data Format**
The request body should contain the following fields:

| Field       | Type     | Description                                       | Required |
|-------------|----------|---------------------------------------------------|----------|
| **userId**      | String   | The ID of the user requesting the ride.            | Yes      |
| **pickupLocation** | Object   | The pickup location containing `lat` and `lng`. | Yes      |
| **dropoffLocation** | Object   | The dropoff location containing `lat` and `lng`. | Yes      |

### 📝 **Example Request Body**
```json
{
  "userId": "64a5f0c1234abc56789ef012",
  "pickupLocation": {
    "lat": 12.9715987,
    "lng": 77.594566
  },
  "dropoffLocation": {
    "lat": 12.2958104,
    "lng": 76.6393805
  }
}
```

### 📤 **Response Format**
The server responds with a JSON object containing the ride details.

#### ✅ **Success Response** (Status Code: `201`)
```json
{
  "ride": {
    "_id": "64a5f0c1234abc56789ef014",
    "userId": "64a5f0c1234abc56789ef012",
    "pickupLocation": {
      "lat": 12.9715987,
      "lng": 77.594566
    },
    "dropoffLocation": {
      "lat": 12.2958104,
      "lng": 76.6393805
    },
    "status": "requested"
  }
}
```

#### ❌ **Error Response** (Status Code: `400`)
If the request validation fails, the server responds with:
```json
{
  "errors": [
    {
      "msg": "User ID is required",
      "param": "userId",
      "location": "body"
    }
  ]
}
```

---

### 2. `/rides/status`

#### **Method**
`GET`

#### **URL**
`/rides/status`

### 📥 **Query Parameters**
| Parameter | Type   | Description                       | Required |
|-----------|--------|-----------------------------------|----------|
| **rideId**| String | The ID of the ride.               | Yes      |

### 📤 **Response Format**
The server responds with a JSON object containing the ride status.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "ride": {
    "_id": "64a5f0c1234abc56789ef014",
    "status": "ongoing"
  }
}
```

#### ❌ **Error Response** (Status Code: `400`)
If the request validation fails, the server responds with:
```json
{
  "error": "Invalid ride ID"
}
```

---

### 3. `/rides/get-fare`

#### **Method**
`GET`

#### **URL**
`/rides/get-fare`

### 📥 **Query Parameters**
| Parameter     | Type   | Description                       | Required |
|---------------|--------|-----------------------------------|----------|
| **pickup**    | String | The pickup location address.      | Yes      |
| **destination** | String | The destination location address. | Yes      |

### 📤 **Response Format**
The server responds with a JSON object containing the fare details.

#### ✅ **Success Response** (Status Code: `200`)
```json
{
  "auto": 100,
  "car": 150,
  "motorcycle": 80
}
```

#### ❌ **Error Response** (Status Code: `400`)
If the request validation fails, the server responds with:
```json
{
  "errors": [
    {
      "msg": "Invalid pickup address",
      "param": "pickup",
      "location": "query"
    },
    {
      "msg": "Invalid destination address",
      "param": "destination",
      "location": "query"
    }
  ]
}
```

---

## 🛠 **Implementation Details**

- **User Controller:** [`user.controller.js`](Backend/controllers/user.controller.js)
- **User Service:** [`user.service.js`](Backend/services/user.service.js)
- **User Model:** [`user.model.js`](Backend/models/user.model.js)
- **User Routes:** [`user.routes.js`](Backend/routes/user.routes.js)

- **Captain Controller:** [`captain.controller.js`](Backend/controllers/captain.controller.js)
- **Captain Service:** [`captain.service.js`](Backend/services/captain.service.js)
- **Captain Model:** [`captain.model.js`](Backend/models/captain.model.js)
- **Captain Routes:** [`captain.routes.js`](Backend/routes/captain.routes.js)

- **Ride Controller:** [`ride.controller.js`](Backend/controllers/ride.controller.js)
- **Ride Service:** [`ride.service.js`](Backend/services/ride.service.js)
- **Ride Model:** [`ride.model.js`](Backend/models/ride.model.js)
- **Ride Routes:** [`ride.routes.js`](Backend/routes/ride.routes.js)

---

🎉 **Thank you for using the `/users`, `/captains`, `/maps`, and `/rides` API endpoints!**