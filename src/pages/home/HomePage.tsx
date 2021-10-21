import { useQuery } from 'react-query';
import api from '../../api';
import { SpotlightCategory } from './SpotlightCategory';
import styles from './HomePage.module.css';
import { Spotlight } from './Spotlight';

export function HomePage() {
    const x = useQuery('spotlights', api.spotlights.getSpotlights);

    return (
        <div className="container mb-5">
            <h1>Spotlights</h1>
            {x.isLoading && <i>Loading...</i>}
            {x.data?.map((category) => (
                <SpotlightCategory name={category.name} key={category.name}>
                    <div className={styles.grid}>
                        {category.spotlights.map((spotlight) => (
                            <Spotlight
                                key={spotlight.shortName}
                                name={spotlight.fullName}
                                imageUrl={spotlight.imageUrl}
                            />
                        ))}
                    </div>
                </SpotlightCategory>
            ))}
        </div>
    );
}
