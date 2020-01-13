export interface Post {
    _id?: string;
    description: string;
    imageURL: string;
    times?: {
        createdAt: string | Date;
    };
    location: Location;
    hashTags: string[];
    comments?: Comment[];
    commentCount?: number;
    createdBy?: UserBrief;
}

export interface PostBrief {
    _id: string;
    imgURL?: string;
    imageURL?: string;
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
    }
    dob: Date;
    posts?: Post[];
}

export interface UserProfile extends UserBrief {
    firstName: string;
    lastName: string;
    times: {
        signedUpAt: Date | string;
    }
    dob: Date;
    postsCount: number;
}

export interface MyUserProfile extends UserProfile {
    email: string;
}

export type GooglePlace = google.maps.places.AutocompletePrediction;
