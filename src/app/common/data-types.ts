export interface VideoViewDetails {
    age: number;
    region: string;
    date: string;
}

export interface Video {
    selected?: boolean;
    title: string;
    author: string;
    id: string;
    viewDetails: VideoViewDetails[];
}
