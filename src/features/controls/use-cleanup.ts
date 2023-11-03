import { clearControls } from './controls-slice';
import { useAppDispatch } from 'store';

export const useCleanup = () => {
    const dispatch = useAppDispatch();
    const cleanUp = () => dispatch(clearControls());

    return () => dispatch(cleanUp());
};
