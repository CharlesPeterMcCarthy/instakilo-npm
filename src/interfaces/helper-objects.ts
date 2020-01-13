export interface HashTagSearchResult {
    _tag: string;
    count: number;
}

export interface LocationSearchResult {
    _placeId: string;
    locationName: string;
    count: number;
}

export interface EditProfile {
    firstName: string;
    lastName: string;
    dob: Date | string;
}
