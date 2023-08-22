import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadNeighborsByBorder, selectNeighbors } from './details-slice';

export const useNeighbros = (borders = []) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByBorder(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
};
