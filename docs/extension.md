#### GET /films

| Parameter  | Value  | Required? |
| ---------- | ------ | --------- |
| `director` | String | no        |

Example Request

```sh
curl localhost:3030/films?director=Quentin%20Tarantino
```

Example Response

```
{
  "films": [
    {
      "id": 2,
      "title": "Reservoir Dogs",
      "director": "Quentin Tarantino"
    },
    {
      "id": 4,
      "title": "Django Unchained",
      "director": "Quentin Tarantino"
    }
  ]
}
```

---

#### GET /films

(You may need to add some more data into the films array to be able to build this one effectively)
Parameter | Value | Required?
-|-|-
`limit` | Number | no
`from` | Number | no

Example Request

```sh
curl localhost:3030/films?limit=3&from=6
```

Example Response

```
{
  "films": [
    {
      "id": 6,
      "title": "Dodgeball"
    },
    {
      "id": 7,
      "title": "Stranger Than Fiction"
    },
    {
      "id": 8,
      "title": "This Is The End"
    }
  ]
}
```

---

#### GET /books

| Parameter | Value  | Required? |
| --------- | ------ | --------- |
| `orderBy` | String | no        |

Example Request

```sh
curl localhost:3030/books?orderBy=author
```

Example Response

```
{
  "books": [
    {
      "id": 3,
      "title": "How to Win Friends and Influence People",
      "type": "non-fiction",
      "author": "Dale Carnegie"
    },
    {
      "id": 4,
      "title": "The Lean Startup",
      "type": "non-fiction",
      "author": "Eric Reis"
    },
    {
      "id": 1,
      "title": "1984",
      "type": "fiction",
      "author": "George Orwell"
    },
    {
      "id": 2,
      "title": "Life of Pi",
      "type": "fiction",
      "author": "Yann Martel"
    }
  ]
}
```
