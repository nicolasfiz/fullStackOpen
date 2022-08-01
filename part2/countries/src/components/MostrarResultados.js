import Pais from "./Pais"
import Option from "./Option"

const MostrarResultados = ({bus, res}) => {
    const lista = res.filter(elem => elem.name.common.toLowerCase().includes(bus.toLowerCase()))
    //console.log(lista)
    if(lista.length>10&&bus.length>0){
        return(
            <div>
                <p>Too many, matches, specify another filter</p>
            </div>
        )
    }else if(lista.length>1&&bus.length>0){
        return(
            <ul>
                {lista.map(elem => <Option key={elem.name.common} pais={elem}/>)}
            </ul>
        )
    }else if(lista.length===1){
        const pais = lista.shift()
        return(
            <>
                <Pais pais={pais} />
            </>
        )
    }
}

export default MostrarResultados