import React, { useMemo, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getProgramById } from '../../selectors/getProgramById';

const ProgramScreen = ({ history }) => {

    const { programId } = useParams();

    const program = useMemo(() => getProgramById( programId ), [ programId ]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if ( !program ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        Name,
        Instructors,
        Duration,
        Level,
        m_Description,
    } = program;
    
    return (
        <>
        <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-4">
                <img 
                    src={ "../assets/programs/"+programId+".jpg" }
                    alt={ Name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3> { Name } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Instructor/es: </b> { Instructors } </li>
                    <li className="list-group-item"> <b> Duración de la clase: </b> { Duration } </li>
                    <li className="list-group-item"> <b> Nivel de cinturon requerido: </b> { Level } </li>
                </ul>
                <br></br>

                <p> { m_Description } </p>

            </div>



            <div className="row">
                <div className='col-5'></div>
                <div className="col-2 text-center d-grid gap-2">
                    <button 
                        className="btn btn-dark"
                        onClick={ handleReturn }
                        variant="primary" size="xs"
                    >
                        Volver
                    </button>
                </div>
                <div className='col-5'></div>
            </div>

            <div className="row mt-12 mt-5">
                <div className="col-6">
                    <Link to={ `/get-started` }>
                        <button 
                                className="btn btn-info"
                                style={{float:"right"}}
                            >
                                Quiero una clase gratis!
                        </button>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to={ `/schedule` }>
                        <button 
                                className="btn btn-outline-info"
                                style={{float:"left"}}
                            >
                                Ver los horarios
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProgramScreen;