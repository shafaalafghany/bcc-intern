# API CONTRACT
Dokumentasi API

# MODEL
## users
- name: string
- email: string
- password: string
- phone: string
- address: string
- gender: string
- role: int

## products
- product_name: string
- product_price: int
- product_img: string
- product_desc: string

## carts
- id_product: int
- product_name: string
- product_img : string
- quantity: int
- id_user: int

## transactions
- invoice: varchar
- id_user: int
- date: datetime
- total_price: int

## transaction_detail
- id_product: int
- price: int
- date: datetime
- id_user: int
- id_transaction: int
- qty: int

# ENDPOINT
## Users (/api/users)

### Register User (POST /)

**Url: localhost:8080/api/users/**

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

**Url: localhost:8080/api/users/signin**

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

**Url: localhost:8080/api/users/1**

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

### Update User (PUT /:id)

***Request (params): id***

**Url: localhost:8080/api/users/1**

***Request (body): JSON***
```
   {
       "name": "Alafghany,
       "email": "shafa@domain.com",
       "phone": "0123456789",
       "address": "Jalan jalan",
       "gender": "Laki - Laki"
   }
```

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "User updated"
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

**Url: localhost:8080/api/users/1**

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

## Products (/api/products)

### Add Product (POST /)

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/products/**

***Request (body): JSON***
```
   {
       "name": "Kopi 1",
       "price": 20000,
       "img": "robusta",
       "desc": "Kopi Jenis 1"
   }
```
***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "Add product successful"
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

### Get All Product

**Url: localhost:8080/api/products/**

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": [
            {
                "id_product": 1,
                "product_name": "Kopi 1",
                "product_price": 20000,
                "product_img": "kopi 1",
                "product_desc": "Kopi Jenis 1"
            },
            {
                "id_product": 2,
                "product_name": "Kopi 2",
                "product_price": 27000,
                "product_img": "kopi 2",
                "product_desc": "Kopi Jenis 2"
            },
            {
                "id_product": 3,
                "product_name": "Kopi 3",
                "product_price": 22000,
                "product_img": "kopi 3",
                "product_desc": "Kopi Jenis 3"
            }
        ]
    }

 500:
    {
        "status": false,
        "message": "Internal server error",
        "data": null
    }
```

### Get Product by ID (GET /:id)

***Request (params): id***

**Url: localhost:8080/api/products/1**

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": [
            {
                "id_product": 1,
                "product_name": "Kopi 1",
                "product_price": 20000,
                "product_img": "kopi 1",
                "product_desc": "Kopi Jenis 1"
            }
        ]
    }

 500:
    {
        "status": false,
        "message": "Internal server error",
        "data": null
    }
```

### Update Product (PUT /:id)

***Request (params): id***

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/products/1**

***Request (body): JSON***
```
   {
       "name": "Kopi 1000",
       "price": 200000,
       "img": "kopi 1",
       "desc": "Kopi Jenis Baru Boss"
   }
```

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "Update product successful"
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
        "message": "Parameter 'desc' required is missing",
        "data": null
    }
```

### Delete Product (DELETE /:id)

***Request (params): id***

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/products/1**

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "Delete product successful"
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
```

## Carts (/api/carts)

### Add Cart (POST /)

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/carts/**

***Request (body): JSON***
```
   {
       "productName": "Kopi 1",
       "idProduct": 1,
       "imgProduct": 'Kopi 1",
       "idUser": 1,
       "quantity": 2
   }
```

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "Add cart successful"
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
```

### Get All Carts (GET /)

***Request (params): id***

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/carts/1**

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": [
            {
                "id": 1,
                "id_product": 1,
                "product_name": 'Kopi 1',
                "product_img": 'Kopi 1'
                "quantity": 1,
                "id_user": 1,
            },
            {
                "id": 2,
                "id_product": 2,
                "product_name": 'Kopi 2',
                "product_img": 'Kopi 2',
                "quantity": 1,
                "id_user": 1,
            },
            {
                "id": 3,
                "id_product": 3,
                "product_name": 'Kopi 3',
                "product_img": 'Kopi 3',
                "quantity": 1,
                "id_user": 1,
            },
        ]
    }

 500:
    {
        "status": false,
        "message": "Internal server error",
        "data": null
    }
```

### Get Cart Amounts by ID (GET /amounts)

***Request (params): id***

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/carts/amounts/1**

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "count(product_name)": 1
    }

 500:
    {
        "status": false,
        "message": "Internal server error",
        "data": null
    }
```

### Update Cart (PUT /)

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/carts/**

***Request (body): JSON***
```
   {
       "idProduct": 1,
       "quantity": 2,
       "idUser": 1
   }
```

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "Update cart successful"
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
```

### Delete Cart (DELETE /:id)

**Url: localhost:8080/api/carts/1**

***Request (params): id***

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "Delete cart successful"
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
```

## Transaction (/api/transactions)

### Add Transactions (POST /)

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/transactions/**

***Request (body): JSON***
```
    {
        "date": "2021-03-17 12:03:21",
        "totalPrice": 12000,
        "idUser": 1,
        "detail": [
            {
                "idProduct": 1,
                "price": 6000,
                "idUser": 1,
                "qty": 2
            }
        ]
    }
```

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": "Add transaction successful",
        "data": {
            "date": "2021-03-17 12:03:21",
            "idUser": 1,
            "totalPrice": 12000,
            "detail": [
                {
                    "idProduct": 1,
                    "price": 6000,
                    "idUser": 1,
                    "qty": 2,
                    "idTransaction": 38
                }
            ],
            "invoice": "INV/2102050037"
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
```

### Get Transactions by ID User (GET /:id)

***Request (params): id***

***Request (headers): (Required) Authorization: Bearer <JWT_TOKEN>***

**Url: localhost:8080/api/transactions/1**

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": [
            {
                "id": 38,
                "invoice": "INV/2102050037",
                "id_user": 1,
                "date": "2021-03-17T05:03:21.000Z",
                "total_price": 12000
            },
            {
                "id": 37,
                "invoice": "INV/2102050036",
                "id_user": 1,
                "date": "2021-03-17T05:03:21.000Z",
                "total_price": 12000
            },
            {
                "id": 36,
                "invoice": "INV/2102050035",
                "id_user": 1,
                "date": "2021-03-17T05:03:21.000Z",
                "total_price": 12000
            },
        ]
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
```

### Get All Transaction (GET /)

**Url: localhost:8080/api/transactions/**

***Response: JSON***
```
 200:
    {
        "status": true,
        "message": [
            {
                "id": 9,
                "id_product": 1,
                "price": 6000,
                "date": "2021-03-12T16:45:54.000Z",
                "id_user": 1,
                "id_transaction": 38,
                "qty": 2
            },
            {
                "id": 8,
                "id_product": 1,
                "price": 6000,
                "date": "2021-03-12T16:45:54.000Z",
                "id_user": 1,
                "id_transaction": 37,
                "qty": 2
            },
            {
                "id": 7,
                "id_product": 1,
                "price": 6000,
                "date": "2021-03-12T16:45:54.000Z",
                "id_user": 1,
                "id_transaction": 36,
                "qty": 2
            },
        ]
    }
```