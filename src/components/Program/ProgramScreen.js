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
        m_Description,
        M_Description,
    } = program;
    
    return (
        <>
        <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-4">
                <img 
                    src={ `../assets/heroes/${ programId }.jpg` }
                    alt={ Name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3> { Name } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { m_Description } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { m_Description } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { m_Description } </li>
                </ul>

                <h5> Characters </h5>
                <p> { M_Description } </p>
            </div>



            <div class="row">
                <div className='col-5'></div>
                <div class="col-2 text-center d-grid gap-2">
                    <button 
                        className="btn btn-outline-info"
                        onClick={ handleReturn }
                        variant="primary" size="xs"
                    >
                        Return
                    </button>
                </div>
                <div className='col-5'></div>
            </div>

            <div className="row mt-12 mt-5">
                <div className="col-6">
                    <Link to={ `/get-started` }>
                        <button 
                                className="btn btn-outline-info"
                                style={{float:"right"}}
                            >
                                Sign Up for a free class
                        </button>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to={ `/schedule` }>
                        <button 
                                className="btn btn-outline-info"
                                style={{float:"left"}}
                            >
                                Check out the schedule
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProgramScreen;