const data = [
    { location: "dhaka", latitude: 23.8103, longitude: 90.4125 },
    { location: "chattogram", latitude: 22.3569, longitude: 91.7832 },
    { location: "new york", latitude: 40.7128, longitude: -74.006 },
    { location: "tokyo", latitude: 35.6895, longitude: 139.6917 },
    { location: "london", latitude: 51.5074, longitude: -0.1278 },
    { location: "paris", latitude: 48.8566, longitude: 2.3522 },
    { location: "dubai", latitude: 25.276987, longitude: 55.296249 },
    { location: "singapore", latitude: 1.3521, longitude: 103.8198 },
    { location: "hong kong", latitude: 22.3193, longitude: 114.1694 },
    { location: "sydney", latitude: -33.8688, longitude: 151.2093 },
    { location: "los angeles", latitude: 34.0522, longitude: -118.2437 },
    { location: "bangkok", latitude: 13.7563, longitude: 100.5018 },
    { location: "moscow", latitude: 55.7558, longitude: 37.6176 },
    { location: "istanbul", latitude: 41.0082, longitude: 28.9784 },
    { location: "mumbai", latitude: 19.076, longitude: 72.8777 },
    { location: "shanghai", latitude: 31.2304, longitude: 121.4737 },
    { location: "toronto", latitude: 43.65107, longitude: -79.347015 },
    { location: "beijing", latitude: 39.9042, longitude: 116.4074 },
    { location: "berlin", latitude: 52.52, longitude: 13.405 },
    { location: "rome", latitude: 41.9028, longitude: 12.4964 },
    { location: "são paulo", latitude: -23.5505, longitude: -46.6333 },
    { location: "seoul", latitude: 37.5665, longitude: 126.978 },
];

function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const filtered = data.filter((item) => item.location === location);

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0,
        };
        return defaultLocation;
    }
}

export { getLocationByName, getLocations };
