// To parse this data:
//
//   import { Convert, Employee } from "./file";
//
//   const employee = Convert.toEmployee(json);

export interface Employee {
    id:    number;
    name:  string;
    hours: number;
    title: string;
    toDos: any[];
    isEditing?:boolean;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toEmployee(json: string): Employee {
        return JSON.parse(json);
    }

    public static employeeToJson(value: Employee): string {
        return JSON.stringify(value);
    }
}

