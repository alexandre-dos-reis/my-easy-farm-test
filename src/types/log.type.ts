export interface Log {
  count: number;
  data: Data;
  returned: number;
}

export interface Data {
  type: "Feature" | "MultiPoint";
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: "Feature" | "MultiPoint";
  coordinates: Array<number[]>;
}

export interface Properties {
  time: number[];
  props: Prop[];
}

export interface Prop {
  value: number;
}
