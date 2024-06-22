export interface ChartElement {
    _id: string;
    color: string;
    value: number;
    label: string;
}

export interface ChartData {
    planets: ChartElement[];
    systems: ChartElement[];
    shards: ChartElement[];
    dates: ChartElement[];
}