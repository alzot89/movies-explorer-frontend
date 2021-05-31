import { useState } from 'react';
import './checkbox.css';

function FilterCheckbox() {

    const [checked, setChecked] = useState(false)

    return (
        <div className={`checkbox ${checked && 'checkbox_active'}`} onClick={() => { setChecked(!checked) }} >
            <label htmlFor="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox"></input>
                Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;