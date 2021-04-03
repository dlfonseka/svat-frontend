import Button from './Button'

function Header() {
    return (
        <header className='header'>
            <Button text='File'/>
            <Button text='Edit'/>
            <Button text='View'/>
            <Button text='Help'/>
        </header>
    )
}

export default Header
