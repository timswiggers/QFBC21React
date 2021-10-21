import { Link } from 'react-router-dom';
import './Spotlight.css';

type SpotlightProps = {
    name: string;
    imageUrl: string;
    className?: string;
    shortName: string;
};

export function Spotlight(props: SpotlightProps) {
    return (
        <div className="card Spotlight-Card">
            <div className="card-body Spotlight-Content" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
            <Link to={`/detail/${props.shortName}`} className="btn btn-primary Spotlight-Button">
                {props.name}
            </Link>
        </div>
    );
}
