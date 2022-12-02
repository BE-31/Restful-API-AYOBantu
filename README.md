# Restful-API-AYOBantu

## Documentation
API ini dipergunakan untuk Aplikasi AYO Bantu yang bertujuan untuk mengumpulkan pemuda ASEAN yang memerlukan bantuan baik berupa dana maupun bantuan lainnya dibawah naungan ASEAN Youth Organization. API ini mendukung login serta registrasi user baru, serta CRUD artikel yang dapat dilakukan oleh user dengan role admin.

## Register
---
Authentication : -\
Request :
- Method : POST
- Endpoint : /auth/signup
- Body :
```json
{
    "photo": "String",
    "username": "String",
    "email": "String",
    "password": "String",
    "name": "String",
    "national_id": "String",
    "dob": "String",
    "contact": "String",
    "address": "String"
}
```
Response :
```json
{
    "token": "String"
}
```
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)

## Verification
---
Authentication : -\
Request :
- Method : GET
- Endpoint : /auth/verification/:token
- Body : -
- Response :
```json
{
  "message": "String"
}
```
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)

## Login
---
Authentication : -\
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
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)

## Create Campaign
---
Authentication : **User**\
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
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)

## Get All Campaign Data
---
Authentication : **Admin**\
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
        "name": "String",
        "contact": "String"
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
        "name": "String",
        "contact": "String"
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
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)

## Get Verified Campaign Data
---
Authentication : -\
Request :
- Method : GET
- Endpoint : /campaign

Response :
```json
{
  {
    "message": "String",
    "data": [
      {
        "_id": "ObjectId",
        "user": {
          "_id": "ObjectId",
          "name": "String",
          "contact": "String"
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
  },
  {
    "message": "String",
    "data": [
      {
        "_id": "ObjectId",
        "user": {
          "_id": "ObjectId",
          "name": "String",
          "contact": "String"
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
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)


## Get All Campaign By A User
---
Authentication : **User**\
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
        "name": "String",
        "contact": "String"
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
        "name": "String",
        "contact": "String"
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
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)


## Get A Campaign By Id
---
Authentication : -\
Request :
- Method : GET
- Endpoint : /campaign/{campaign_id}

Response :
```json
{
  "message": "String",
  "data": {
    "_id": "ObjectId",
    "user": {
        "_id": "ObjectId",
        "name": "String",
        "contact": "String"
      },
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
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)


## Get Campaign By Category
---
Authentication : admin
Request :
- Method : GET
- Endpoint : /campaign/kategori/{nama_kategori}

Response :
```json
{
  "message": "String",
  "data": {
    "_id": "ObjectId",
    "user": {
        "_id": "ObjectId",
        "name": "String",
        "contact": "String"
      },
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
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)


## Get Verified Campaign By Category
---
Authentication : -
Request :
- Method : GET
- Endpoint : /campaign/kategori/ver/{nama_kategori}

Response :
```json
{
  "message": "String",
  "data": {
    "_id": "ObjectId",
    "user": {
        "_id": "ObjectId",
        "name": "String",
        "contact": "String"
      },
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
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)


## Update Campaign
---
Authentication : **Admin**\
Request :
- Method : PUT
- Endpoint : /campaign/{campaign_id}
- Body :
```json
{
   "status": "String",
   "keterangan": "String"
}
```
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
        "__v": 0,
        "keterangan": "String"
    }
}
```
> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)


## Delete Campaign By Id
---
Authentication : -\
Request :
- Method : DELETE
- Endpoint : /campaign/{campaign_id}

Response :
```json
{
  "message": "String"
}
```

Dokumentasi lebih lengkap dapat dilihat pada link berikut :

> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)


## MongoDB Schema

### User

```javascript
{
    "role": "string",
    "photo": "string",
    "username": "string",
    "email": "string",
    "isVerified": "boolean",
    "password": "string",
    "name": "string",
    "national_id": "string",
    "dob": "date",
    "contact": "string",
    "address": "string",
    "emailToken": "string",
    "createdAt": "date",
    "updatedAt": "date"
}
```
### Campaign

```javascript
{
    "user": "ObjectId",
    "title": "string",
    "address": "string",
    "description": "string",
    "image": "string",
    "supportingFile1": "string",
    "supportingFile2": "string",
    "category": "string",
    "keterangan": "string",
    "createdAt": "date",
    "updatedAt": "date"
}
```
### Article

```javascript
{
    "title": "string",
    "content": "string",
    "summary": "string",
    "image": "string",
    "createdAt": "date",
    "updatedAt": "date"
}
```
