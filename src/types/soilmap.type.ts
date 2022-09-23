export interface Soilmap {
  status: number;
  data: Data;
}

export interface Data {
  created_at: Date;
  updated_at: Date;
  id: string;
  account_id: string;
  origin_id: null;
  partfield_id: string;
  name: string;
  comment: null;
  year: null;
  import_status: string;
  metadata: null;
  is_hidden: boolean;
  task_id: null;
  type_id: number;
  source: Source;
  features: DataFeature[];
}

export interface DataFeature {
  type: string;
  features: FeatureFeature[];
}

export interface FeatureFeature {
  type: FeatureType;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: GeometryType;
  coordinates: Array<Array<Array<number[]>>>;
}

export enum GeometryType {
  MultiPolygon = "MultiPolygon",
}

export interface Properties {
  id: string;
  analysis: string;
  color: string;
}

export enum FeatureType {
  Feature = "Feature",
}

export interface Source {
  type: string;
}
