import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { activeParkingActions } from '../store/activeParking/activeParking.slice';
import { cartActions } from './../store/cart/cart.slice';
import { parkingsStoreActions } from '../store/parkingsStore/parkingsStore.slice';

const allActions = {
    ...activeParkingActions,
    ...cartActions,
    ...parkingsStoreActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
