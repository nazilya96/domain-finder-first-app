import { Types } from "../types";


const inithialData = [
    {
        id:1,
        title: 'about',
        description: 'About us',
        url: 'facebook.com'
    },
]

export const dataReducer = (data = inithialData , action ) => {
    switch (action.types){
        case Types.ADD_DATA:
            return [...data , action.payload];
        case Types.DELETE_DATA:
                let arr = [...data]
                let newArr = arr.filter(r => r.id !== action.payload.id)
                return newArr;
        case Types.EDIT_DATA:
            let arr2 = [...data];
            let EditedObject = arr2.find(a => a.id === action.payload.id)
            EditedObject['title'] = action.payload.title;
            EditedObject['description'] = action.payload.description;
            EditedObject['url'] = action.payload.url;
            return arr2;
        default:
            return  data;
    }

}