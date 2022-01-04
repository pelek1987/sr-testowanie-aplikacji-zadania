function CounterButton({ label, onClick }) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}

CounterButton.displayName = 'CounterButton'

export default CounterButton;
