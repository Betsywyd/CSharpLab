// To parse this data:
//
//   import { Convert, Donut } from "./file";
//
//   const donut = Convert.toDonut(json);

export interface Donut {
    count:   number;
    results: Result[];
}

export interface Result {
    id:                number;
    ref:               string;
    name:              string;
    photo:             string;
    photo_attribution: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toDonut(json: string): Donut {
        return JSON.parse(json);
    }

    public static donutToJson(value: Donut): string {
        return JSON.stringify(value);
    }

    public static toResult(json: string): Result {
        return JSON.parse(json);
    }

    public static resultToJson(value: Result): string {
        return JSON.stringify(value);
    }
}
