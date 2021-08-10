import React from 'react';
import './InputLabel.css';

function InputLabel(props) {
    const { type, name, defaultValue, field, onChange, onBlur, hasError } = props;

    return (
        <div className="form-group ">
            <div className="col-md-12 inputLabel">
                <input className="form-control inputLabel" type={type}
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={name}
                    onChange={(event) => onChange(field, event)}
                    onBlur={onBlur} />
                {hasError && name !== 'PASSWORD' &&
                    <div className="error">{`*Invalid ${name}`} </div>}
                {hasError && name === 'PASSWORD' &&
                    <div className="error">{`*Invalid ${name}.`}<br />password must contain 5 digits</div>}
            </div>
        </div>
    )
}

export default InputLabel



