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

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserResult {
  gender: string;
  name: string;
  location: Location;
  email: string;
  phone: string;
  picture: Picture;
}

interface UserData {
  results: UserResult[];
}

export default UserData;
