import React from "react";
import s from "./HW12.module.css";
import {usedTypedSelector} from "../h10/bll/store";
import {useDispatch} from "react-redux";
import {ActionType, changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {Dispatch} from "redux";

const themes = ['dark', 'red', 'some', 'gray'];

function HW12() {


    const theme = usedTypedSelector<string>(state => state.theme.theme);

    const dispatch = useDispatch<Dispatch<ActionType>>()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperRadio options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
