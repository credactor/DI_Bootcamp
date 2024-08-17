from pyowm import OWM
# from pyowm.utils import config
from pyowm.utils import timestamps
from datetime import datetime
owm = OWM('c60a758595d24e6ca73cdd4c980381c4')
mgr = owm.weather_manager()
# reg = owm.city_id_registry() # --- doesn't work ---

def get_weather(place):
    observation = mgr.weather_at_place(place)
    w = observation.weather
    city = observation.location.name
    country = observation.location.country
    lon = observation.location.lon
    lat = observation.location.lat
    message = (f"The weather now in {city}, {country}:\nTemperature: {w.temperature('celsius')['temp']}°C, wind speed: {w.wind()['speed']} m/s,\nhumidity: {w.humidity}%, pressure: {w.barometric_pressure()['press']} hPa.\nSunrise: {datetime.fromtimestamp(w.sunrise_time()).strftime('%H:%M:%S')}, sunset: {datetime.fromtimestamp(w.sunset_time()).strftime('%H:%M:%S')}\n")
    return message, city, country, lat, lon

place = 'Givatayim,IL'
message, city, country, lat, lon = get_weather(place)
print (message)
place = input ("Enter the city ('London' or 'London, UK'): ")
message, city, country, lat, lon = get_weather(place)
print (message)
tomorrow = timestamps.tomorrow()
daily_forecaster = mgr.forecast_at_place(city+","+country, '3h')
w = daily_forecaster.get_weather_at(tomorrow)
print (f"{city} weather forecast for tomorrow:\nTemperature: {w.temperature('celsius')['temp']}°C, wind speed: {w.wind()['speed']} m/s,\nhumidity: {w.humidity}%, pressure: {w.barometric_pressure()['press']} hPa.\n")
pol = owm.airpollution_manager()
air = pol.air_quality_at_coords(lat, lon)
print (f"Air quality in {city}, {country}:\nCO index: {air.co}, Ozone: {air.o3}\nAir quality index: {air.aqi}")