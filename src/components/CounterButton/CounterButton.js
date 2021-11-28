function CounterButton({ label, handleCounterChange, actionType, payload }) {
    return (
        <button onClick={() => handleCounterChange(actionType, payload)}>
            {label}
        </button>
    );
}

CounterButton.displayName = 'CounterButton'

export default CounterButton;
