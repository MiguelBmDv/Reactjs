import React, {useState} from 'react';
import "../mensaje.css"
const Message = ({text}) => { 
	const [showMessage, setShowMessage] = useState (false);

		const handleClick = () => {
		setShowMessage (!showMessage);
    };

    return (
		<div>
			<button className='contenedor' onClick = {handleClick}> Mostrar/Ocultar </button>
			{showMessage && <p className="mensajetext">{text}</p>}
		</div>
	);
}

export default Message;

