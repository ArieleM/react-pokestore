import React from 'react'
import {Link} from 'react-router-dom';
import './style.css'
import Header from '../../components/Header'


export default function Home() {
  return (
    <>
    <Header/>
      <div className="home">
        <h2 className="home__title">Que tipo de pokemon vamos pegar hoje?</h2>
          <Link to='/fire'><button className="home__button">Fire</button> </Link>
          <Link to='/water'><button className="home__button">Water</button></Link>
      </div>
    </>
  )
}
