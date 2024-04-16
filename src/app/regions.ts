export interface City{
    name: string;
    streets: Street[];
}

export interface Street{
    name: string;
    houses: House[];
}

export interface House{
    name: string;
    user: User;
    maintainer: Maintainer;
    features: Feature;
}

export interface User{
    owner: string;
    tenant: string;
    dependent: String[];
}

export interface Maintainer{
    staff: string[];
}

export interface Feature{
    bedrooms: number;
    tvs: number;
    counters: number;
    cars: number;
    description: string;
}