import { Skills } from './skills';
import { Address } from './address';

export interface Profile {
    id: number;
    givenName: string;
    lastName: string;
    imageUrl: string;
    about: string;

    phone: string;
    email: string;

    address: Address;
    skills: Skills[];
}
