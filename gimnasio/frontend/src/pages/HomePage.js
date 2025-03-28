import React from 'react';
const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src="/images/Home.jpg" alt='imagen principal' />
            </div>
            <div className='columnas'>
                <div className='bienvenidos left'>
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, ipsam porro fugit harum nisi ex cupiditate mollitia saepe voluptatem? Esse eligendi obcaecati ex! Reiciendis quibusdam vitae explicabo, voluptatum unde deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quia blanditiis a sapiente quod odio id optio ipsa adipisci veniam repellat pariatur, aut unde doloribus, illo aliquid commodi animi incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ad quam aspernatur voluptates harum illum laborum officia quisquam unde accusantium, eius maiores sint animi optio excepturi dolore veritatis nihil dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quidem ab ex nisi, officia itaque beatae sint, eligendi at, laboriosam voluptate! Modi aspernatur fuga animi magni exercitationem perferendis, ducimus quas!
                    </p>
                </div>
                <div className='testimonios right'>
                    <h2>Testimonios</h2>
                    <div className='testimonio'>
                        <span className='cita'>Simplemente Buenas Clases</span>
                        <span className='autor'>Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;