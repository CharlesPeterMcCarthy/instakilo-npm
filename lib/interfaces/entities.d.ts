/// <reference types="googlemaps" />
export interface Post {
    _id?: string;
    description: string;
    imageURL: string;
    datetime?: Date;
    location: Location;
    hashTags: string[];
    comments?: Comment[];
    createdBy?: UserBrief;
}
export interface PostBrief {
    _id: string;
    imgURL: string;
}
export interface Comment {
    _id: string;
    text: string;
    datetime?: string;
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
    };
    dob: Date;
    posts?: Post[];
}
export interface UserProfile extends UserBrief {
    firstName: string;
    lastName: string;
    times: {
        signUpAt: Date;
    };
    dob: Date;
}
export interface MyUserProfile extends UserProfile {
    email: string;
}
export declare type GooglePlace = google.maps.places.AutocompletePrediction;
