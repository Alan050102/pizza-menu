// import React from 'react'

export default function Header(){
    // Creando objeto de estilos para el componente
    const headerStyle = {
        color: " #FF6106",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: "3.2rem",
        letterSpacing: "10px",
        position: "relative",
        width: "100%",
        display: "block",
    }

    //const img = {}

    return (       
        <header>
            <h1 style={headerStyle}>React City Pizza</h1>
        </header>
    )
}