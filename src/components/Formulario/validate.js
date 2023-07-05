const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validate(inputs){
    let errors = {}
    
    if(inputs.name === ''){
        errors.name = 'Agrega un numbre'
    }
    if(inputs.phone === ''){
        errors.phone = 'Agrega un telefono'
    }
    if(inputs.mensaje === ''){
        errors.mensaje = 'Agrega un mensaje'
    }

    if(!regexEmail.test(inputs.email)){
        errors.email = 'Email invalido'
    }
  
    return errors
  
  }