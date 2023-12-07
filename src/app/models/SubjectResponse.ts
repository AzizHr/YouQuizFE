import {Subject} from "./Subject";

export interface SubjectResponse {
  id?: number;
  title?: string;
  parent?: Subject;
  children?: Subject[]
}
