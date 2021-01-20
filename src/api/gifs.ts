export interface IGifs {
    id:string,
    url:string
}

export interface IGifRawSearch{
    id:string,
    images:{
        original:{
            url:string
        }
    },
    title:string
}