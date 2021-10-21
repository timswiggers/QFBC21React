import './Spotlight.css';

type SpotlightProps = {
    name: string;
    imageUrl: string;
    className?: string;
};

export function Spotlight(props: SpotlightProps) {
    return (
        <div className="card Spotlight-Card">
            <div className="card-body Spotlight-Content" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
        </div>
    );
}
