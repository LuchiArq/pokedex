import {useState, useEffect} from 'react'
import {getListPokemon} from '../Requests/getListPokemon'


const  useListPokemon = (language) =>{

    const [PageRange , setPageRange] = useState({start:0,range:5})
    const {start,range} = PageRange;
    const [PokeList, setPokeList] = useState()
    const [Loading,setLoading ] = useState(true)

    const nextPage = () =>{
        setPageRange({...PageRange,
            start:PageRange.start+PageRange.range})
    }

    const PreviousPage = () =>{
        if(PageRange.start==0) return
        setPageRange({...PageRange,
            start:PageRange.start-PageRange.range})
    }

    useEffect(() => {
        setLoading(true)
        getListPokemon(start, range,language)
        .then(resp=>{
            setPokeList(resp)
            setLoading(false)
        })
    }, [start])

    return {PokeList,nextPage,PreviousPage,Loading}
}

export default useListPokemon