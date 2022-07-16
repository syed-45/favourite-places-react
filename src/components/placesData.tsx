import { placeInfo } from "./placeEntry";
import PlaceEntry from "./placeEntry";

const places: placeInfo[] = [
  {
    title: "Home Town",
    imageURL:
      "https://a.cdn-hotels.com/gdcs/production114/d1461/2267d2c2-21e8-4964-bed0-f5bb480def60.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    placeName: "Newcastle upon Tyne",
    countryName: "United Kingdom",
    location:
      "https://www.google.com/maps/dir//Newcastle+upon+Tyne,+UK/@55.0023721,-1.6568434,12z/data=!4m17!1m7!3m6!1s0x487d857e0c6f64cd:0xbe252b072a76191!2sNewcastle+upon+Tyne,+UK!3b1!8m2!3d54.978252!4d-1.61778!4m8!1m0!1m5!1m1!1s0x487d857e0c6f64cd:0xbe252b072a76191!2m2!1d-1.61778!2d54.978252!3e3",
    reason: `It's where I was born and where I grew up!`,
  },
  {
    title: "Home Town 2",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Jaflong_Sylhet.jpg/800px-Jaflong_Sylhet.jpg",
    placeName: "Sylhet",
    countryName: "Bangladesh",
    location:
      "https://www.google.com/maps?q=sylhet&source=lmns&bih=784&biw=1919&hl=en&sa=X&ved=2ahUKEwjQo7Dimf34AhXNhFwKHaY0BicQ_AUoAXoECAEQAQ",
    reason: `It's where my parents were born and grew up!`,
  },
  {
    title: "The Holy Mosque",
    imageURL:
      "https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    placeName: "Masjid Al-Haram",
    countryName: "Saudi Arabia",
    location:
      "https://www.google.com/maps/place/Mecca+Saudi+Arabia/@21.4360154,39.8465466,11z/data=!3m1!4b1!4m5!3m4!1s0x15c21b4ced818775:0x98ab2469cf70c9ce!8m2!3d21.3890824!4d39.8579118",
    reason: `Most holy site in our religion, it was the very first mosque to be built on earth.`,
  },
  {
    title: "The Holy Mosque",
    imageURL:
      "https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    placeName: "Masjid Al-Haram",
    countryName: "Saudi Arabia",
    location:
      "https://www.google.com/maps?q=sylhet&source=lmns&bih=784&biw=1919&hl=en&sa=X&ved=2ahUKEwjQo7Dimf34AhXNhFwKHaY0BicQ_AUoAXoECAEQAQ",
    reason: `Most holy site in our religion, it was the very first mosque to be built on earth.`,
  },
];

function mapToComponent(p: placeInfo): JSX.Element {
  return (
    <PlaceEntry
      title={p.title}
      imageURL={p.imageURL}
      placeName={p.placeName}
      countryName={p.countryName}
      location={p.location}
      reason={p.reason}
    />
  );
}

export const placesComponent: JSX.Element[] = places.map(mapToComponent);
