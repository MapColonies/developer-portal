export type CustomFields = {
    askAi: {
        enabled: boolean,
        endpoint: string,
    },
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
};
  
