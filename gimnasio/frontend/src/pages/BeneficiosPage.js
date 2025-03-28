import React from 'react';
const BeneficiosPage = (props) => {
    return (
        <main className="holder">
            <h2>Beneficios de Entrenar con Nosotros!</h2>
            <div class="benef_titulo">
                <h3>¿Porque entrenar Karate-Do?</h3>
            </div>
            <div class="beneficio">
                <img src="../../../public/images/beneficio-1.png" alt="Image beneficio1" />
                <div class="info">
                    <h4>Mejora de la condición física</h4>
                    <p>El Karate Do es un arte marcial que involucra movimientos dinámicos, lo que mejora la
                        resistencia, la fuerza muscular, la flexibilidad y la coordinación.</p>
                </div>
            </div>
            <div class="beneficio">
                <img src="../../../public/images/beneficio-2.png" alt="Image beneficio2" />
                <div class="info">
                    <h4>Disciplina y Autocontrol</h4>
                    <p>La práctica del Karate Do fomenta el desarrollo de la autodisciplina, la paciencia y el control
                        emocional, ya que los entrenamientos requieren concentración y esfuerzo continuo.</p>
                </div>
            </div>
            <div class="beneficio">
                <img src="../../../public/images/beneficio-3.png" alt="Image beneficio3" />
                <div class="info">
                    <h4>Defensa Personal</h4>
                    <p>Aprender técnicas de Karate Do proporciona habilidades útiles para la defensa personal, lo que puede
                        aumentar la confianza en situaciones potencialmente peligrosas.</p>
                </div>
            </div>
            <div class="beneficio">
                <img src="../../../public/images/beneficio-4.png" alt="Image beneficio4" />
                <div class="info">
                    <h4>Crecimiento Personal y Espiritual</h4>
                    <p>El Karate Do no solo es una práctica física, sino también una filosofía de vida que promueve valores
                        como el respeto, la humildad y el esfuerzo constante para mejorar uno mismo.</p>
                </div>
            </div>
        </main>
    );
}

export default BeneficiosPage;