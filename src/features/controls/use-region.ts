import { useSelector } from 'react-redux';
import { setRegion } from './controls-slice';
import { useAppDispatch } from 'store';
import { selectRegion } from './controls-selectors';
import { CountryOption } from './CustomSelect';
import { Region } from 'types';
import { SingleValue } from 'react-select';

type onSelect = (region: SingleValue<CountryOption>) => void;

export const useRegion = (): [Region | '', onSelect] => {
    const dispatch = useAppDispatch();
    const region = useSelector(selectRegion);

    const handleSelect: onSelect = (region) => {
        if (region) {
            dispatch(setRegion(region.value));
        } else {
            dispatch(setRegion(''));
        }
    };

    return [region, handleSelect];
};
