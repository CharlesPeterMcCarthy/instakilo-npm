export interface Post {
    _id?: string;
    description: string;
    imageURL: string;
    datetime?: Date;
    location: Location;
    hashTags: string[];
    comments?: Comment[];
}

export interface Comment {
    text: string;
    datetime?: Date;
    user?: UserBrief;
}

export interface Location {
    locationName: string;
    placeData: GooglePlace;
}

export interface UserBrief {
    _id: string;
    username: string;
    avatar: {
        _id: string;
        imageURL: string;
    };
}

export interface User extends UserBrief {
    firstName: string;
    lastName: string;
    email: string;
    times: {
        signUpAt: Date;
        confirmedAt: Date;
        lastLogin: Date;
    }
    dob: Date;
    posts?: Post[];
}

export type GooglePlace = google.maps.places.AutocompletePrediction;
