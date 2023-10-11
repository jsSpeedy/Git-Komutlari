import './Card.css'


function Card({ title, par, lesson, i }) {
    return (
        <div className="Card">
            <h6>{title}</h6>
            <b>{i}</b>
            <p>{par}</p>
            {lesson > 20 && i === 0 && <p>üst düzey</p>}
            <button>Devamı</button>
        </div>
    );
}

export default Card