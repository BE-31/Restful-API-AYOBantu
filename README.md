# Restful-API-AYOBantu

## Documentation
API ini dipergunakan untuk Aplikasi AYO Bantu yang bertujuan untuk mengumpulkan pemuda ASEAN yang memerlukan bantuan baik berupa dana maupun bantuan lainnya dibawah naungan ASEAN Youth Organization. API ini mendukung login serta registrasi user baru, serta CRUD artikel yang dapat dilakukan oleh user dengan role admin.

### Daftar Endpoint
| Method | Endpoint | Fungsi |
| ------ | ------ | ------|
| POST | /auth/registrasi | Membuat akun user baru |
| POST | /auth/login | Masuk menggunakan akun yang sudah ada|
| GET | /article | Menampilkan list seluruh artikel|
| GET | /article/:id | Menampilkan artikel berdasarkan ID|
| POST | /article | Membuat artikel baru oleh user dengan role admin|
| PUT | /article/:id | Melakukan update terhadap artikel berdasarkan ID oleh user dengan role admin|
| DELETE | /article | Menghapus seluruh artikel oleh user dengan role admin|
| DELETE | /article/:id | Menghapus artikel berdasarkan ID oleh user dengan role admin|

Dokumentasi lebih lengkap dapat dilihat pada link berikut :

> [Link Postman Documantation](https://elements.getpostman.com/redirect?entityId=21505080-c03b47bf-5844-4c21-9a38-d0d5d298f0ff&entityType=collection)

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
