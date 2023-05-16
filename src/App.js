import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Clima from './Components/Clima'
import Error from './Components/Error'


function App() {

  const [info,setInfo]=useState({
    ciudad:'',
    pais:''
})

  const {ciudad,pais}=info

  const [consulta, setConsulta]=useState(false)

  const [resultado, setResultado]=useState({})

  const [error, setError]=useState(false)

  useEffect(()=>{
    const consultar_api = async() => {
      if(consulta){
        const appId='7b8db0030beb1c8a223290f67e7cd4e6'
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const respuesta= await fetch(url)
        const resultado= await respuesta.json()
        setResultado(resultado)
        setConsulta(false)

        if(resultado.cod === "404"){
          setError(true)
        }else{
          setError(false)
        }
      }
      
    }
    consultar_api()
    //eslint-disable-next-line
  },[consulta])

  let componente

  if(error){
    componente= <Error mensaje="No hay resultados" />
  }else{
    componente=<Clima
                  resultado={resultado}
                />
  }

  return (
    <>
      <Header
         titulo="Clima React App"
      ></Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                  <Formulario
                    info={info}
                    setInfo={setInfo}
                    setConsulta={setConsulta}
                  ></Formulario>
            </div>
            <div className="col m6 s12">
                {componente}
            </div>
          </div>
        </div>
      </div>
   </>
  );
}

export default App;
