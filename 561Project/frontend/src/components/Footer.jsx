import React from 'react';
import { Container } from 'react-bootstrap';

const Footerbox = () => {
    return (
        <section className='bg-dark text-light p-3'>
            <Container>
                <div className='d-sm-flex align-items-center text-center'>
                    <h3>Copyright Fausto's Seashack Team</h3>
                </div>
            </Container>
        </section>
    )
}

export default Footerbox;