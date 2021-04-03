function Button({text, onClick, id}) {
    return (
        <button id={id} onClick={onClick} className='btn'>
            {text}
        </button>
    )
}

export default Button
