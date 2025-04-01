import React from 'react';
import '../styles/components/pages/GaleriaPage.css';
import '../App.css';
const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <div className="galeria">
                <img src="/images/galeria/galeria_7.jpg" alt="img galeria 7" />
                <img src="/images/galeria/galeria_1.jpg" alt="img galeria 1" />
                <img src="/images/galeria/galeria_2.png" alt="img galeria 2" />
                <img src="/images/galeria/galeria_3.jpg" alt="img galeria 3" />
                <img src="/images/galeria/galeria_4.jpg" alt="img galeria 4" />
                <img src="/images/galeria/galeria_5.jpg" alt="img galeria 5" />
                <img src="/images/galeria/galeria_6.jpg" alt="img galeria 6" />
                <img src="/images/galeria/galeria_8.jpg" alt="img galeria 8" />
            </div>
        </main>

    );
}

export default GaleriaPage;