import React, {useCallback} from "react";
import {SuperButton} from "../common/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setLoading} from "../../state/reducer9";
import preloader from "../../images/preloader.svg"
import styles from "../Loading/Loading.module.css"


export const Loading = () => {

    let dispatch = useDispatch()
    let loading = useSelector<AppRootStateType, boolean>((state) => state.auth.loading)

    const setOnClick = useCallback(() => {
        let action = setLoading(true)
        dispatch(action)
        onSetTimeout()
    }, [dispatch])

    const onSetTimeout = useCallback(() => {
        let action = setLoading(false)
        setTimeout(() => dispatch(action), 3000)
    }, [dispatch])




    return (
        <div>
            <div>
                <SuperButton onClick={setOnClick} name={"Loading"}/>
            </div>
            {loading && <div className={styles.preloader}>
                <img src={preloader}/>
            </div>}
        </div>
    )
}