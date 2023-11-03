import { useNavigate } from 'react-router-dom';
import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { useCountries } from './use-countries';
import { CountryInfo } from 'types';

export const CountryList: React.FC = () => {
    const navigate = useNavigate();
    const [countries, { error, status }] = useCountries();

    return (
        <>
            {error && <h2>Can't load data</h2>}
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'received' && (
                <List>
                    {countries.map((c) => {
                        const countryInfo: CountryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        };
                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    );
};
