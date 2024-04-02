import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { StoreTypes, AppDispatch } from '.'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StoreTypes> = useSelector
