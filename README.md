# Restful-API-AYOBantu

## Documentation

> [Link Postman Documentation](https://martian-escape-849290.postman.co/workspace/My-Workspace~0bdd07d4-99e6-4b0c-88c2-464eed637175/collection/21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff?action=share&creator=24324521)

## MongoDB Schema

### User

```javascript
{
    "role": "string",
    "username": "string",
    "password": "string",
    "name": "string",
    "national_id": "string",
    "dob": "date",
    "contact": "string",
    "address": "string",
    "isDisability": "boolean",
    "typeOfDisability": "string",
    "organization": "string",
    "proofs": [objectId],
    "helpNeeded": "string",
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

### Proof
```javascript
{
    "userId": "objectId",
    "title": "string",
    "path": "string"
}
```