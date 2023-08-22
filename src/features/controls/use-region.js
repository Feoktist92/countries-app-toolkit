import { useDispatch, useSelector } from 'react-redux';
import { selectRegion, setRegion } from './controls-slice';

export const useRegion = () => {
    const dispatch = useDispatch();
    const region = useSelector(selectRegion);

    const handleSelect = (region) => {
        dispatch(setRegion(region?.value || ''));
    };

    return [region, handleSelect];
};
