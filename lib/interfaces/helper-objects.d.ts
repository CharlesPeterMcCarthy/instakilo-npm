export interface HashTagSearchResult {
    _tag: string;
    count: number;
}
export interface LocationSearchResult {
    _placeId: string;
    locationName: string;
    count: number;
}
export interface UserSearchResult {
    userId: string;
    username: string;
    avatar: {
        _id: string;
        imageURL: string;
    };
    count: number;
}
export interface EditProfile {
    firstName: string;
    lastName: string;
    dob: Date | string;
}
