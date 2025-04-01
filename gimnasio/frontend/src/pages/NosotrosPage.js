import React from 'react';
import '../styles/components/pages/NosotrosPage.css';
import '../App.css';
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <h3>+50 Años de Experiencia.</h3>
                <p> En el año 1965 Hanshi Felix Garcia Ladrón de Guevara cinturón negro 9º dan se inicia en el Karate Goju
                    Ryu, logrando estar como Maestro en todas los proyectos importantes de las artes marciales en Chile...
                </p>
            </div>
            <div>
                <img src="/images/about.jpg" alt="Imagen 1 Nosotros" />
            </div>
            <div className="staff">
                <h2>Nuestro Equipo</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="/images/shihangarcia1.jpg" alt="Profe1" />
                        <h5>Felix Garcia L. de Guevara</h5>
                        <h6>Hashin 9th Dan</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem beatae libero iusto rerum
                            maxime ducimus officiis, consequuntur perspiciatis cum minus voluptate at tempore. Sapiente
                            iusto aspernatur veritatis ad asperiores.</p>
                    </div>
                    <div className="persona">
                        <img src="/images/germangarcia.JPG" alt="Profe2" />
                        <h5>German Garcia</h5>
                        <h6>Shihan 8th Dan</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem beatae libero iusto rerum
                            maxime ducimus officiis, consequuntur perspiciatis cum minus voluptate at tempore. Sapiente
                            iusto aspernatur veritatis ad asperiores.</p>
                    </div>
                    <div className="persona">
                        <img src="/images/logo.png" alt="Profe3" />
                        <h5>Profesor ...</h5>
                        <h6>Sensei Xth Dan</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem beatae libero iusto rerum
                            maxime ducimus officiis, consequuntur perspiciatis cum minus voluptate at tempore. Sapiente
                            iusto aspernatur veritatis ad asperiores.</p>
                    </div>
                    <div className="persona">
                        <img src="/images/logo.png" alt="Profe4" />
                        <h5>Profesor ...</h5>
                        <h6>Sensei Xth Dan</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quidem beatae libero iusto rerum
                            maxime ducimus officiis, consequuntur perspiciatis cum minus voluptate at tempore. Sapiente
                            iusto aspernatur veritatis ad asperiores.</p>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default NosotrosPage;