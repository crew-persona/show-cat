
export const setImageLike = async () => {
    const ipData = await fetch('https://geolocation-db.com/json/');
    const locationIp = await ipData.json();
    console.log(locationIp.IPv4);
    return locationIp;
}
