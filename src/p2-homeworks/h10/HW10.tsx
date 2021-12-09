import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {usedTypedSelector} from "./bll/store";
import {useDispatch} from "react-redux";
import { showLoadingAC} from "./bll/loadingReducer";
import {Loader} from "./loader/Loader";
import s from './HW10.module.css'

function HW10() {

   const loading = usedTypedSelector<boolean>(state => state.loading.loading)
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(showLoadingAC(true))
        setTimeout(()=> {
            dispatch(showLoadingAC(false))
        },2000)


        console.log('loading...')
    };

    return (
        <div className={s.wrapper}>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><Loader/></div>
                ) : (
                    <div>
                        <SuperButton className={s.button} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
