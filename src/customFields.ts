export type CustomFields = {
    mapColoniesBaseURLS: {
        raster: {
            catalog: string,
        },
        _3D: {
            catalog: string,
        },
        vector: {
            nominatim: string,
            replication: string,
            query: string
        },
        dem: {
            catalog: string,
            elevation: string,
        }
        playground: string,
        puzzle: string
    },
    azimuth: {
        enabled: boolean,
        // base URL of the AzimuthAI engine, without a trailing path (e.g. https://host)
        endpoint: string,
    },
};
  