import {IGifs, IGifRawSearch} from "./gifs"


const api = {
search: (query: string): Promise<IGifs[]> => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=1onyPAIshszx9FwpflWDVS7mdWSVMCUi&q=${query}&limit=25&offset=0&rating=g&lang=en`)
      .then((res) => res.json())
      .then((response: any) =>
        response.data.map((gifFounded :IGifRawSearch) => ({
            id: gifFounded.id,
            images: gifFounded.images.original.url,
            title: gifFounded.title
        })),
      );
  },

  getTrendingGifs:() =>{
    return fetch('https://api.giphy.com/v1/gifs/trending?api_key=1onyPAIshszx9FwpflWDVS7mdWSVMCUi&limit=25&rating=g')
    .then((res)=> res.json())
    .then((response:any)=>{
      response.data.map((treningGifs:IGifRawSearch)=>({
        id: treningGifs.id,
        images: treningGifs.images.original.url,
        title: treningGifs.title
      }))
    })

    }

}

export default api;