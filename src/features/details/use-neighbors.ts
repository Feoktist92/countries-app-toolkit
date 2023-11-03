import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectNeighbors } from './details-selectors';
import { loadNeighborsByBorder } from './details-slice';
import { useAppDispatch } from 'store';

export const useNeighbros = (borders: string[] = []) => {
    const dispatch = useAppDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByBorder(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
};
