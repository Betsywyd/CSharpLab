// To parse this data:
//
//   import { Convert, FamousPerson } from "./file";
//
//   const famousPerson = Convert.toFamousPerson(json);

export interface FamousPerson {
    complete: Complete[];
    tiny:     Tiny[];
}

export interface Complete {
   
    firstName:  string;
    lastName:   string;
    innovation: string;
    year:       number;
}

export interface Tiny {
    name:     string;
    invented: string;
    year:     number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toFamousPerson(json: string): FamousPerson {
        return JSON.parse(json);
    }

    public static famousPersonToJson(value: FamousPerson): string {
        return JSON.stringify(value);
    }

    public static toComplete(json: string): Complete {
        return JSON.parse(json);
    }

    public static completeToJson(value: Complete): string {
        return JSON.stringify(value);
    }

    public static toTiny(json: string): Tiny {
        return JSON.parse(json);
    }

    public static tinyToJson(value: Tiny): string {
        return JSON.stringify(value);
    }
}

