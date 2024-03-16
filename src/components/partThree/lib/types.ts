import { z } from "zod";
import { ColorSchema } from "./validation";

export const lowLevelRegex = new RegExp(
  /\s*[\w\-+.!?:;,()[\]{}]+(?:\s+[\w\-+.!?:;,()[\]{}%]+)*\s*$/
);
export interface Color_rgba {
  r: number;
  g: number;
  b: number;
  a: number;
}
export interface FieldsValue {
  title: string;
  description: string;
  keywords: string;
  color: string;
}
export type ColorOptions = {
  label: string;
  value: z.infer<typeof ColorSchema>;
};

export type SetCategoryResponse =
  | {
      status: "Success";
      ok: true;
      message: string;
    }
  | {
      status: "Error";
      ok: false;
      message: string;
    };
