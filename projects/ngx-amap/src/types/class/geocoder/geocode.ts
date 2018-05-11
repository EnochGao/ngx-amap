import { LngLat } from '../amap.lng-lat';
import { AddressComponent } from './address-component';

export interface Geocode {
  addressComponent: AddressComponent;
  formattedAddress: string;
  location: LngLat;
  adcode: string;
  level: string;
}
