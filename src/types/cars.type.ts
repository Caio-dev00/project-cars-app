export interface CarsProps {
    id: string;
    name: string;
    year: string;
    owner: string;
    km: string;
    price: string;
    city: string;
    uid: string;
    images: CarImagesProps[];
  }
  
  export interface CarImagesProps {
    name: string;
    uid: string;
    url: string;
  }