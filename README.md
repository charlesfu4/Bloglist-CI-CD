# Getting Started with the Bloglist app 

## Environmental variables
Before starting the backend, configure your own `.env` files as follow

```
MONGODB_URI=mongodb+srv://fullstack:${YOUR_MONGODB_PASSWORD}@${YOUR_MONGODB_URL}.mongodb.net/bloglist?retryWrites=true
TEST_MONGODB_URI=mongodb+srv://fullstack:${YOUR_MONGODB_PASSWORD}@${YOUR_MONGODB_URL}.mongodb.net/bloglist-test?retryWrites=true
PORT=5000
SECRET={YOUR_OWN_SECRET}
```

## Setup

#### `npm install`
#### `npm run build`
#### `npm start:prod`


## Testing

### Backend integration test

#### `npm run test`

### End to end test

#### `npm run start:test`

Then open another terminal and run

#### `npm run test:e2e`


## Deployed Version
If you are not interested in running the application on your local machine. You can access the Bloglist through https://bloglistredux.herokuapp.com.
