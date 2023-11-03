import { useSelector } from 'react-redux';
import { setSearch } from './controls-slice';
import { useAppDispatch } from 'store';
import { selectSearch } from './controls-selectors';

type onSearch = React.ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
    const dispatch = useAppDispatch();
    const search = useSelector(selectSearch);

    const handleSearch: onSearch = (event) => {
        dispatch(setSearch(event.target.value));
    };

    return [search, handleSearch];
};
