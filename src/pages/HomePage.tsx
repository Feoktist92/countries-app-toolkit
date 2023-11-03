import { Controls } from '../features/controls/Controls';
import { CountryList } from '../features/countries/CountryList';

export const HomePage: React.FC = () => {
    return (
        <>
            <Controls />
            <CountryList />
        </>
    );
};
