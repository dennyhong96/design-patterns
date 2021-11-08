import { TextRange } from "../TextRange";
import { FormatterTypes } from "./FormatterTypes";

export type TextRangeWithFormatterType = TextRange & { type: FormatterTypes };
