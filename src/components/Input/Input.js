function Input({ id, type = 'text', name, value, onChange }) {
    return (
        <label htmlFor={id}>
            <input id={id} type={type} name={name} value={value} onChange={onChange} />
        </label>
    )
}

// Input.displayName = "Input";

export default Input;
