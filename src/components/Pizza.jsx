// Estilos con .module.css solo funcionan donde son importados
import style from "./styles/pizza-style.module.css"

// * Poner entre llaves los props que se piden 
export default function Pizza({pizzaObject, onDelete}) {
    //console.log(pizzaObject)
    //const soldOut = true;
    console.log("props",pizzaObject)
    return(
        // Usando el operador ternario para tener una clase condicional
        <li className={`${style.pizza} ${pizzaObject.soldOut ? style["sold-out"] : ""}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <p>{pizzaObject.price}</p>
                <button onClick={() => onDelete(pizzaObject.name)}>Delete pizza 🗑️</button>
            </div>
        </li>
    )
}