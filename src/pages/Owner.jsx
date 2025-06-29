// src/pages/Owner.jsx
import style from "../components/styles/owner-style.module.css"
import Footer from '../components/Footer'
import { useState } from 'react'


function Owner() {
  const [favoriteMovies, setFavoriteMovies] = useState([
    'Interestelar',
    'El viaje de Chihiro',
    'Toy Story 3',
  ])
  const [newMovie, setNewMovie] = useState('')

  const handleAddMovie = () => {
    if (newMovie.trim() !== '') {
      setFavoriteMovies([...favoriteMovies, newMovie])
      setNewMovie('')
    }
  }


  return (
    <>
      <header className={style["owner-header"]}>
        <h1>Página del Desarrollador</h1>
      </header>

      <main className={style["owner-container"]}>
        <section className={style["owner-profile"]}>
          <div className={style["profile-left"]}>
            <img
              src="060125-9223.JPG"
              alt="Foto del dueño"
              className={style["owner-image"]}
            />
            <div className={style["social-icons"]}>
              <a href="mailto:alanoswaldonunoangel@gmail.com"><img src="https://www.svgrepo.com/show/511921/email-1573.svg" alt="correo" /></a>
              <a href="https://www.linkedin.com/in/alan-oswaldo-nuño-angel-3aa197233/"><img src="https://www.svgrepo.com/show/452051/linkedin.svg" alt="linkedin" /></a>
              <a href="https://github.com/Alan050102"><img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="github" /></a>
            </div>
          </div>

          <div className={style["profile-right"]}>
            <h2 className={style["owner-name"]}>Alan Oswaldo</h2>
            <p className={style["owner-email"]}>alanoswaldonunoangel@gmail.com</p>
            <p className={style["owner-description"]}>
              Soy un apasionado de la tecnología y el desarrollo web. Me encanta
              aprender nuevas herramientas y compartir mis proyectos.
            </p>
          </div>
        </section>

        <section className={style["owner-movies"]}>
          <h3>Mis películas favoritas:</h3>
          <ul className={style["movie-list"]}>
            {favoriteMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <div className={style["movie-form"]}>
            <input
              type="text"
              placeholder="Agregar nueva película"
              value={newMovie}
              onChange={(e) => setNewMovie(e.target.value)}
            />
            <button onClick={handleAddMovie}>Agregar</button>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
}

export default Owner
