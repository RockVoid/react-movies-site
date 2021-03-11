import styled from 'styled-components';
import NoImg from '../img/breakMovie.svg';

const imgAPI = `https://image.tmdb.org/t/p/w500/`;

const MovieDiv = styled.div`
    border: 1px solid #40739e;
    background-color: #2f3640;
    box-shadow:  #273c75 0px 4px 12px;
    border-radius: 4px;
    width: 250px;
    min-width: 250px;
    overflow: hidden;
    position: relative;
    margin: 10px 0;
    
    .front {
        color: #ffffff;
        padding: 1rem;
        backface-visibility: hidden;
        transition: 0.4s ease-in;

        img {
            object-fit: fill;
            width: 100%;
            border-radius: 4px;
        }

        &__info-front {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                padding: 0.5rem;
                border-radius: 4px;
                font-weight: bolder;
                background-color: #192A56;
            }
        }
    }

    .back {
        position: absolute;
        top: 1rem;
        height: 70vh;
        text-align: center;
        color: #ffffff;
        border-radius: 4px;
        backface-visibility: hidden;
        overflow: auto;
        transform: rotateY(-180deg);
        transition: 0.4s ease-in;

        p {
            padding: 0.5rem 1rem;
        }
    }

    &:hover > .front {
        transform: rotateY(-180deg);
    }

    &:hover > .back {
        transform: rotateY(0deg);
    }

    .green {
        color: #4cd137;
    }

    .yellow {
        color: #fbc531;
    }
    
   .red {
        color: #e84118;
    }
`;

const ShowMovie = ({ title, vote_average, overview, poster_path }) => {
    const setAverage = v_average => {
        if (v_average < 5) return 'red';
        const note = v_average >= 8 ? 'green' : 'yellow';
        return note;
    }

    return (
        <MovieDiv>
            <div className="front">
                <img src={poster_path ? imgAPI + poster_path : NoImg} alt={title} />
                <div className="front__info-front">
                    <h2>{title}</h2>
                    <span className={setAverage(vote_average)}>{vote_average}</span>
                </div>
            </div>
            <div className="back">
                <h2>Overview</h2>
                <p>{overview ? overview : "Sorry. This movie don't have overview."}</p>
            </div>
        </MovieDiv>
    );
}

export default ShowMovie;