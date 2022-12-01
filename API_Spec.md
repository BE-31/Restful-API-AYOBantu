# API SPEC
---

## Registrasi
Authentication : -
Request :
- Method : POST
- Endpoint : /auth/signup
- Body :
```json
{
  "user": "ObjectId",
  "title": "String",
  "address": "String",
  "description": "String",
  "image": "String",
  "supportingFile1": "String",
  "supportingFile2": "String",
  "category": "String"
}
```
Response :
```json
{
  "message": "String",
  "data": {
    "user": "ObjectId",
    "title": "String",
    "address": "String",
    "description": "String",
    "image": "String",
    "supportingFile1": "String",
    "supportingFile2": "String",
    "category": "String",
    "status": "String",
    "_id": "ObjectId",
    "createdAt": "Date"
  }
}
```

## Login
Authentication : -
Request :
- Method : POST
- Endpoint : /auth/login
- Body :
```json
{
  "username": "string",
  "password": "string"
}
```
Response :
```json
{
  "user": {
    "id": "ObjectId",
    "username": "String",
    "name": "String",
    "role": "String"
  },
  "message": "String",
  "accessToken": "String"
}
```

## Create Campaign
Authentication : **User**
Request :
- Method : POST
- Endpoint : /campaign
- Body :
```json
{
  "user": "ObjectId",
  "title": "String",
  "helpNeeded": "String",
  "description": "String",
  "image": "String",
  "supportingFile": "String",
  "category": "String"
}
```
Response :
```json
{
  "message": "String",
  "data": {
    "user": "ObjectId",
    "title": "String",
    "helpNeeded": "String",
    "description": "String",
    "image": "String",
    "supportingFile": "String",
    "category": "String",
    "status": "String",
    "_id": "ObjectId",
    "createdAt": "Date"
  }
}
```

## Get All Campaign Data
Authentication : **Admin**
Request :
- Method : GET
- Endpoint : /campaign/all

Response :
```json
{
  "message": "String",
  "data": [
    {
      "_id": "ObjectId",
      "user": {
        "_id": "ObjectId",
        "name": "String"
      },
      "title": "String",
      "description": "String",
      "image": "String",
      "category": "String",
      "status": "String",
      "createdAt": "Date",
      "__v": 0
    },
    {
      "_id": "ObjectId",
      "user": {
        "_id": "ObjectId",
        "name": "String"
      },
      "title": "String",
      "description": "String",
      "image": "String",
      "category": "String",
      "status": "String",
      "createdAt": "Date",
      "__v": 0
    },
    {
      "_id": "ObjectId",
      "user": {
        "_id": "ObjectId",
        "name": "String"
      },
      "title": "String",
      "description": "String",
      "image": "String",
      "category": "String",
      "status": "String",
      "createdAt": "Date",
      "__v": 0
    }
    ]
}
```

## Get Verified Campaign Data
Authentication : -
Request :
- Method : GET
- Endpoint : /campaign

Response :
```json
{
  "message": "String",
  "data": [
    {
      "_id": "ObjectId",
      "user": {
        "_id": "ObjectId",
        "name": "String"
      },
      "title": "String",
      "description": "String",
      "image": "String",
      "category": "String",
      "status": "String",
      "createdAt": "Date",
      "__v": 0
    }
  ],
{
  "message": "String",
  "data": [
    {
      "_id": "ObjectId",
      "user": {
        "_id": "ObjectId",
        "name": "String"
      },
      "title": "String",
      "description": "String",
      "image": "String",
      "category": "String",
      "status": "String",
      "createdAt": "Date",
      "__v": 0
    }
  ]
}
}
```

## Get All Campaign By A User
Authentication : **User**
Request :
- Method : GET
- Endpoint : /campaign/user/{user_id}

Response :
```json
{
  "message": "String",
  "data": [
    {
      "_id": "ObjectId",
      "user": {
        "_id": "ObjectId",
        "name": "String"
      },
      "title": "String",
      "description": "String",
      "image": "String",
      "category": "String",
      "status": "String",
      "createdAt": "Date",
      "__v": 0
    },
    {
      "_id": "ObjectId",
      "user": {
        "_id": "ObjectId",
        "name": "String"
      },
      "title": "String",
      "description": "String",
      "image": "String",
      "category": "String",
      "status": "String",
      "createdAt": "Date",
      "__v": 0
    }
  ]
}
```

## Get A Campaign By Id
Authentication : -
Request :
- Method : GET
- Endpoint : /campaign/{campaign_id}

Response :
```json
{
  "message": "String",
  "data": {
    "_id": "ObjectId",
    "user": "ObjectId",
    "title": "String",
    "description": "String",
    "image": "String",
    "category": "String",
    "status": "String",
    "createdAt": "Date",
    "__v": 0
  }
}
```

## Get Campaign By Category
Authentication : -
Request :
- Method : GET
- Endpoint : /campaign/kategori/{nama_kategori}

Response :
```json
{
  "message": "String",
  "data": {
    "_id": "ObjectId",
    "user": "ObjectId",
    "title": "String",
    "description": "String",
    "image": "String",
    "category": "String",
    "status": "String",
    "createdAt": "Date",
    "__v": 0
  }
}
```

## Update Campaign
---

## Delete Campaign By Id
Authentication : -
Request :
- Method : DELETE
- Endpoint : /campaign/{campaign_id}

Response :
```json
{
  "message": "String"
}
```





