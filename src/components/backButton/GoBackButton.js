import style from "./GoBackButton.module.css"
export default function GoBackButton({goBack}) {
    return (<button className={style.button} onClick ={goBack}>Go back</button>)
}