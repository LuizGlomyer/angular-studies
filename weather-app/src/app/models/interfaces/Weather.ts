export interface WeatherData {
  coord: {
    lon: number
    lat: number
  }

  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }

  sys: {
    type: number
    id: number
    country: number
    sunrise: number
    sunset: number
  }

  wind: {
    speed: number
    deg: number
  }

  clouds: {
    all: number
  }

  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]

  base: string,
  visibility: number
  dt: number
  timezone: number
  id: number
  name: string
  cod: number
}