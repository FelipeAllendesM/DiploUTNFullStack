import React from 'react';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras formas de contactarnos</h2>
                <p>
                    También puede comunicarse a traves de los siguientes medios:
                </p>
                <ul>
                    <li>Telefono: +569 XXXX XXXX</li>
                    <li>Email: micorreo@gmail.com</li>
                    <li>Facebook:
                        <a href="https://www.facebook.com/share/g/14npmDzX7u/">
                            Casa Central IGRS Chile
                        </a>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default ContactoPage;