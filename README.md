# Restful-API-AYOBantu

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