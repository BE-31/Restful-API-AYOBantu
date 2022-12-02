# Restful-API-AYOBantu

## Documentation

> [Link Postman Documantation](https://martian-escape-849290.postman.co/workspace/My-Workspace~0bdd07d4-99e6-4b0c-88c2-464eed637175/collection/21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff?action=share&creator=24324521)

> API Specification can be seen at 'API_Spec.md'

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