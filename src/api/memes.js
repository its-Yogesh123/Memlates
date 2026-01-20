const BASE_URL = " https://api.imgflip.com/get_memes";
export const getAllMemes= async ()=>{
    const response = await fetch(
        BASE_URL,{
            method:"GET"
        }
    );
    return await response.json();
};

