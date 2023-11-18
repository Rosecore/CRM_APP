export interface DataType {
    postal_code: string,
    country: string,
    country_iso_code: string,
    federal_district: string,
    region_fias_id: string,
    region_kladr_id: string,
    region_iso_code: string,
    region_with_type: string,
    region_type: string,
    region_type_full: string,
    region: string,
    area_fias_id: bigint,
    area_kladr_id: number,
    area_with_type: string,
    area_type: string,
    area_type_full: string,
    area: string,
    city_fias_id: bigint,
    city_kladr_id: number,
    city_with_type: string,
    city_type: string,
    city_type_full: string,
    city: string,
    city_area: string,
    city_district_fias_id: number,
    city_district_kladr_id: number,
    city_district_with_type: string,
    city_district_type: string,
    city_district_type_full: string,
    city_district: string,
    settlement_fias_id: number,
    settlement_kladr_id: number,
    settlement_with_type: string,
    settlement_type: string,
    settlement_type_full: string,
    settlement: string,
    street_fias_id: number,
    street_kladr_id: string,
    street_with_type: string,
    street_type: string,
    street_type_full: string,
    street: string,
    stead_fias_id: string,
    stead_cadnum: string,
    stead_type: string,
    stead_type_full: string,
    stead: string,
    house_fias_id: string,
    house_kladr_id: string,
    house_cadnum: string,
    house_type: string,
    house_type_full: string,
    house: string,
    block_type: string,
    block_type_full: string,
    block: string,
    entrance: string,
    floor: string,
    flat_fias_id: string,
    flat_cadnum: string,
    flat_type: string,
    flat_type_full: string,
    flat: string,
    flat_area: string,
    square_meter_price: string,
    flat_price: string,
    room_fias_id: string,
    room_cadnum: string,
    room_type: string,
    room_type_full: string,
    room: string,
    postal_box: string,
    fias_id: bigint,
    fias_code: null,
    fias_level: number,
    fias_actuality_state: number,
    kladr_id: number,
    geoname_id: number,
    capital_marker: number,
    okato: number,
    oktmo: number,
    tax_office: number,
    tax_office_legal: number,
    timezone: null,
    geo_lat: number,
    geo_lon: number,
    beltway_hit: null,
    beltway_distance: null,
    metro: null,
    divisions: null,
    qc_geo: number,
    qc_complete: null,
    qc_house: null,
    history_values: null,
    unparsed_parts: null,
    source: null,
    qc: null
}

export interface resultInfoType{
    value: string,
    unrestricted_value:string,
    data: DataType
}
export type resultType = {
    "suggestions" : resultInfoType[]
}