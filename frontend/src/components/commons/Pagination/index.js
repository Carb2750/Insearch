import { StyledDiv } from './style';

import Button from '../../commons/Button/index';

const pagination = (props) => {
    console.log(props.lastPage);
    return (
        <StyledDiv>
            <p>Page: {props.page}</p>
            <div>
                {props.page > 1 ? <Button theme='pagination' onClick={() => props.changePageHandler('previous')}>Anterior</Button > : <Button disabled theme='paginationGray' onClick={() => props.changePageHandler('previous')}>Anterior</Button >}
                {props.page < props.lastPage / props.pageLimit ? <Button theme='pagination' onClick={() => props.changePageHandler('next')}>Siguiente</Button > : <Button disabled theme='paginationGray' onClick={() => props.changePageHandler('next')}>Siguiente</Button >}
            </div>
         </StyledDiv>
    );
};

export default pagination;