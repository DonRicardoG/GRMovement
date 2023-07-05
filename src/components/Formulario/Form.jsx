import React, {useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import style from './Form.module.css'
import Error from '../Error/Error'
import { toast } from "react-toastify";

const serviceId = 'service_um4thii';
const templateId = 'template_i7g4j37';
const publicId= 'xOMplY3fFsgfnpCa5';


const Form = () => {
    const form = useRef();
    const [inputs, setInputs] = useState({
        name: '',
        email:'',
        phone:'',
        mensaje:''
    });

    const[error , setError] = useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputs.name === '' || inputs.email==='' || inputs.phone === '' || inputs.mensaje === ''){
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 2000);

            return
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
            (result) => {
              toast.success("Message sent");
              setFormulario({
                user_name: "",
                user_email: "",
                message: "",
              });
              console.log(result.text);
            },
            (error) => {
              toast.error("Message not send, try again");
              console.log(error.text);
            }
          );

        setInputs({
            name: '',
            email:'',
            phone:'',
            mensaje:'',
        })
    }

    const handleOnChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }


  return (
    <form ref={form} className={style.formContainer} onSubmit={handleSubmit}>
        {error && <Error children={'Hay almenos un campo vacio'}/>}
        <label>nombre y apellido:</label>
        <input 
            placeholder='Juan Perez' 
            type="text" 
            value={inputs.name}
            onChange={handleOnChange}
            name='name'
        />
        <label>correo electronico:</label>
        <input 
            placeholder='correo@correo.com' 
            type="email"
            value={inputs.email}
            onChange={handleOnChange}
            name='email' 
        />
        <label>telefono:</label>
        <input 
            placeholder='888-888-8888' 
            type="phone"
            value={inputs.phone}
            onChange={handleOnChange}
            name='phone' 
        />
        <label>Mensaje:</label>
        <textarea 
            name="mensaje" 
            id="mensaje" 
            cols="30" 
            rows="10"
            value={inputs.mensaje}
            onChange={handleOnChange}
        />

        <button  
            className={style.formBtn} 
            action='submit'
        >enviar</button>
    </form>
  )
}

export default Form