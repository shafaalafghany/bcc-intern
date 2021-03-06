# API CONTRACT
Dokumentasi API

# MODEL
## User
- nama: string
- email: string
- password: string
- phone: string
- address: string
- gender: string
- role: int

# ENDPOINT
## User (/api/users)

### Register User (POST /)
***Request (body): JSON***
```
   {
       "name": "Shafa Alafghany",
       "email": "shafa@domain.com",
       "password": "123456",
       "phone": "1234567890",
       "role": 2
   }
```
***Response: JSON***
```
 200:
    {
       "status": true,
       "message": {
           "id": 1,
           "name": "Shafa Alafghany",
           "email": "shafa@domain.com",
           "password": "123456",
           "phone": "1234567890",
           "address": null,
           "gender": null,
           "role": 2,
           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoiU2hhZmEgQWxhZmdoYW55IiwiZW1haWwiOiJhbGFmQGRvbWFpbi5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsInBob25lIjoiMTIzNDU2Nzg5MCIsImFkZHJlc3MiOm51bGwsImdlbmRlciI6bnVsbCwicm9sZSI6Mn0sImlhdCI6MTYxNDMyNzk2MSwiZXhwIjoxNjE0OTMyNzYxfQ.beFn0Af9LMOnlkO_Tp6Yrb_IxJ6Ssq-D58Urzy_g-dY"
       }
   }

 501:
    {
        "status": false,
        "message": "Parameter 'role' value expected is 'Number' ",
        "data": null
    }

 500:
    {
        "status": false,
        "message":{
            "code": "ER_DUP_ENTRY",
            "errno": 1062,
            "sqlState": "23000",
            "sqlMessage": "Duplicate entry 'shafa@domain.com' for key 'email'
        },
        "data": null
    }

 500:
    {
        "status": false,
        "message": "Internal server error",
        "data": null
    }
```
### Login User (POST /signin)

***Request (body): JSON***
```
   {
       "email": "shafa@domain.com",
       "password": "123456"
   }
```
***Response: JSON***
```
 200:
    {
       "status": "Sign in successful",
       "message": {
           "id": 1,
           "name": "Shafa Alafghany",
           "email": "shafa@domain.com",
           "password": "123456",
           "phone": "1234567890",
           "address": null,
           "gender": null,
           "role": 2,
           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoiU2hhZmEgQWxhZmdoYW55IiwiZW1haWwiOiJhbGFmQGRvbWFpbi5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiIsInBob25lIjoiMTIzNDU2Nzg5MCIsImFkZHJlc3MiOm51bGwsImdlbmRlciI6bnVsbCwicm9sZSI6Mn0sImlhdCI6MTYxNDMyNzk2MSwiZXhwIjoxNjE0OTMyNzYxfQ.beFn0Af9LMOnlkO_Tp6Yrb_IxJ6Ssq-D58Urzy_g-dY"
       }
   }

 401:
    {
        "status": false,
        "message": "Incorrect email or password",
        "data": null
    }

 500:
    {
        "status": false,
        "message": "Internal server error",
        "data": null
    }

 501:
    {
        "status": false,
        "message": "Parameter 'password' required is missing",
        "data": null
    }
```
### Get User by ID (GET /:id)

***Request (params): id***
***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": {
            "id": 1,
            "name": "Shafa Alafghany",
            "email": "shafa@domain.com",
            "password": "123456",
            "phone": "1234567890",
            "address": null,
            "gender": null,
            "role": 2
        }
    }

 400:
    {
        "status": false,
        "message": "Bearer token invalid",
        "data": {
            "name": "JsonWebTokenError",
            "message": "invalid signature"
        }
    }

 500:
    {
        "status": false,
        "message": "Internal server error",
        "data": null
    }

 501:
    {
        "status": false,
        "message": "User with bearer not match",
        "data": null
    }
```
### Delete User (DELETE /:id)

***Request (params): id***
***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "User deleted"
    }

 400:
    {
        "status": false,
        "message": "Bearer token invalid",
        "data": {
            "name": "JsonWebTokenError",
            "message": "invalid signature"
        }
    }
 500:
    {
        "status": false,
        "message": "Internal server error",
        "data": null
    }

 501:
    {
        "status": false,
        "message": "User with bearer not match",
        "data": null
    }
```