import { z } from "zod";
import { formOneStepOneScham } from "../validation/validation";
import { Dayjs } from "dayjs";

export interface Color_rgba {
  r: number;
  g: number;
  b: number;
  a: number;
}
export type FormFieldValues = Omit<
  z.infer<typeof formOneStepOneScham>,
  "dateRange"
> & {
  "range-picker": [Dayjs, Dayjs];
};
export type StepTwoFieldsValue = {
  [date: string]: {
    color: string;
    number: number;
    metaColor: Color_rgba;
  };
};
