function DumbButton({ label, onClick }) {
    return (
        <button onClick={onClick}>{ label }</button>
    );
}

DumbButton.displayName = 'DumbButton'

export default DumbButton;
