import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [state, setstate] = useState(
        {
            data: [],
            loading: true
        }

    );

    useEffect(() => {
        

        setTimeout(() => {
            getGifs(category)
                .then( imgs => {
                    setstate({
                        data: imgs,
                        loading: false
            });
        })

        }, 3000);
        
    }, [category])

   /*  setTimeout(() => {
        setstate({
            data: [1,2,3,4],
            loading: false
        })
    }, 3000); */



    return state;
}