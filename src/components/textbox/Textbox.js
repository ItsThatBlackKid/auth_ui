const Textbox = ({value, onChangeFunc, inputID, inputName, type}) => {

    return (
        <input type={type} value={value}
               onChange={
                   (e) => onChangeFunc(e.target.value)
               }
               id={inputID}
               name={inputName}
        />
    )
}


export default Textbox