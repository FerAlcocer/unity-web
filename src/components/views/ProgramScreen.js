import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getProgramById } from '../../selectors/getProgramById';

const ProgramScreen = ({ history }) => {

    const { programId } = useParams();

    const program = useMemo(() => getProgramById( programId ), [ programId ]);

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
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/heroes/${ programId }.jpg` }
                    alt={ Name }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { Name } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { m_Description } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { m_Description } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { m_Description } </li>
                </ul>

                <h5> Characters </h5>
                <p> { M_Description } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

            <div className="row mt-12 mt-5">
                <div className="col-6">
                        <button 
                                className="btn btn-outline-info"
                                style={{float:"right"}}
                                onClick={ handleReturn }
                            >
                                Sign Up for a free class
                        </button>
                </div>
                <div className="col-6">
                        <button 
                                className="btn btn-outline-info"
                                style={{float:"left"}}
                                onClick={ handleReturn }
                            >
                                Check out the schedule
                        </button>

                </div>
            </div>


            

        </div>
    )
    /*return (<div></div>)*/
}

export default ProgramScreen;