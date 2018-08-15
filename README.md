# weatherlicious
A simple demo with OpenWeatherMap using openweathermap-node wrapper module. However, it can be extended to support other Weather API. The application shall return a common set of JSON result across different Weather API.
```
{"weather":"Rain","temperature":8.67,"humidity":81}
```

## Installation
```
npm install 
```

## Test
```
npm test
```

# Run
```
npm start
```

# Note
Register at openweathermap.org for APP_ID. Set OWM_APPID as environment variable.
```
export OWM_APPID=<your APPID here>
```

# Testing with CURL
```
curl http://localhost:8080/owm/city/New%20York
```

# Docker
```
docker run -p 8080:8080 -e "OWM_APPID=Your OpenWeatherMap APPID" -d <CITY_NAME>
```
