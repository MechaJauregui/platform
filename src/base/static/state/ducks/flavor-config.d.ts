type PlaceFilterConfig = {
  placeProperty: string;
  operator: "equals" | "includes";
  datasetSlug: string;
  value: string | number;
  label: string;
  icon?: string;
};

type PlaceFiltersConfig = PlaceFilterConfig[];

type FlavorConfig = {
  placeFilters?: PlaceFiltersConfig;
};

export const placeFiltersConfigSelector: (state: any) => PlaceFiltersConfig;

export const loadFlavorConfig: (config: FlavorConfig) => void;