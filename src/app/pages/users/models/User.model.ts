interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface UserResult {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  phone: string;
  picture: Picture;
}

interface UserData {
  results: UserResult[];
}

export default UserData;
