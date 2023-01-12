# Chat with groups on Flask/React

## Example "Best friends":

![example.png](example.png)


Installation
------------

Create file `.env` or delete `.example` in the `.env.example` file

Fill in the data in the file `.env`

```.env```

```dotenv
CHAT_ENGINE_PROJECT_ID=
CHAT_ENGINE_PRIVATE_KEY=
```


```frontend/.env```

```dotenv
REACT_APP_CHAT_ENGINE_PROJECT_ID=
```

**[Keys](https://chatengine.io/)** for application

For those who do not want to register:
* CHAT_ENGINE_PROJECT_ID=efa50b10-cc52-431a-a6db-61caf9f71802
* CHAT_ENGINE_PRIVATE_KEY=b78918e9-e621-459e-9f87-3daf56f8bf5c

It's a test chat

Run
-----

```
docker-compose up -d
```

### Standard ports

* [Backend](http://localhost:8000/): 8000
* [Frontend](http://localhost:3001/): 3000
