import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Formulario = ({info,setInfo,setConsulta}) => {

    const [error,setError]=useState(false)

    const {ciudad,pais}=info

    const handleChange = e => {

        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = e => {

        e.preventDefault()

        if(ciudad.trim()===''||pais.trim===''){
            setError(true);
            return;
        }

        setError(false)

        setConsulta(true)


    }

    return(
        <form
            onSubmit={handleSubmit}
        >
            {error?<Error mensaje="Todos los campos son obligatorios" />:null}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                ></input>
                <label htmlFor="ciudad">Ciudad:  </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione una opcion --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>

                </select>
                <label htmlFor="pais">Pais:  </label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}

Formulario.propTypes ={
    info: PropTypes.object.isRequired,
    setInfo: PropTypes.func.isRequired,
    setConsulta: PropTypes.func
}
 
export default Formulario