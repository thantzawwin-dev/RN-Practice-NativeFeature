class Place {
  id: string;
  title: string;
  imageUri: string;
  address: string;
  location: { lat: number; lng: number };

  constructor(
    title: string,
    imageUri: string,
    address: string,
    location: { lat: number; lng: number }
  ) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 0.1243223, lng: 0.1454313 }
    this.id = new Date().toISOString() + Math.random().toString();
  }
}
