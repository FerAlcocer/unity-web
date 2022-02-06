import { programs } from '../data/programs';

export const getProgramById = ( id ) => {
    return programs.find( program => program.id === (parseInt(id)) );

}
