import { store } from './index';

export const getAppStoreData = () => {
    return (store.getState() && store.getState().App) ? store.getState().App : undefined;
};

export const getToastStoreData = () => {
    return (store.getState() && store.getState().Toast) ? store.getState().Toast : undefined;
};
