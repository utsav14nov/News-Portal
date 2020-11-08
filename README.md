#News Potal System

#Requirement

Node v14.*

#Deployment

Go to the project root

For Development (This will start server in development mode at host 'http://localhost:3000/')

1) RUN yarn install
2) Changing ApiKey(API_KEY) for News api if needed inside config/development.env 
3) RUN yarn start


For Production (This will create production build and start express server at host 'http://localhost:5000/')

1) RUN yarn install
2) Changing ApiKey(API_KEY) for News api if needed inside config/production.env
3) RUN yarn build

#Frontend Routes

1) /home
2) /details

#Filters taken in consideration

1) country = 'us'
2) category = 'general'

These values can be changed from contants/index.js file

#News Api Endpoints used

1) /v2/sources
2) /v2/top-headlines
3) /v2/everything



