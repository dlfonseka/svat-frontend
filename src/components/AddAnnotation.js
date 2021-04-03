function AddAnnotation({choices}) {
    return (
        <form className='add-annotation'>
            <div className='dropdown'>
                <label for='tools'>Select tool:</label>
                <select name='tools'>
                    <option value='' selected disabled>Select Tool</option>
                    {choices.map((e, key) => {
                            return <option key={key} value={e.value}>{e.name}</option>})
                    }
                </select>
            </div>
            <div classname='form-control' style={{display:'inline'}}>
                <input className='textbox' style={{display:'inline'}} type='text' placeholder={'Detail'}/>
            </div>
        </form>
    )
}

export default AddAnnotation
