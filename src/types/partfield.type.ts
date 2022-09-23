export interface Partfield {
  status: number;
  items: Item[];
  limit: number;
  offset: number;
  count: number;
}

export interface Item {
  id: string;
  parent_id: null;
  created_at: Date;
  updated_at: Date;
  designator: string;
  description: null | string;
  external_id: null | string;
  color: number;
  farm_id: number;
  customer_id: number;
  account_id: string;
  specified_area: null;
  calculated_area: number;
  crop_id: number;
  crop_variety_id: number;
  soil: string;
  year: null;
  center: number[];
  boundaries: Boundaries;
  color_hex: string;
}

export interface Boundaries {
  type: 'MultiPolygon';
  coordinates: Array<Array<Array<number[]>>>;
}
