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

// To parse this data:
//
//   import { Convert, DonutDetails } from "./file";
//
//   const donutDetails = Convert.toDonutDetails(json);

export interface DonutDetails {
    id:                number;
    ref:               string;
    name:              string;
    calories:          number;
    extras:            string[];
    photo:             string;
    photo_attribution: string;
}

// Converts JSON strings to/from your types
export class ConvertDetail {
    public static toDonutDetails(json: string): DonutDetails {
        return JSON.parse(json);
    }

    public static donutDetailsToJson(value: DonutDetails): string {
        return JSON.stringify(value);
    }
}

