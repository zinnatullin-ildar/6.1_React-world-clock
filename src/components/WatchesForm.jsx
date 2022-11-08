import { useState } from 'react';

const emptyForm = {
    id: '',
    name: '',
    timeZone: '',
};

function WatchesForm(props) {
    const { onSubmit } = props;

    const [form, setForm] = useState(emptyForm);

    function onChange(e) {
        setForm((prevState) => {
            if (e.target.name === 'name') {
                return { ...prevState, name: e.target.value };
            }
            if (e.target.name === 'timezone') {
                return { ...prevState, timeZone: e.target.value };
            }
        });
    }

    function onClick(e) {
        e.preventDefault();
        onSubmit(form);
        setForm(emptyForm);
    }

    return (
        <form className='input-form'>
            <div className='form-name'>
                <label htmlFor='Name'>
                    Название города
                </label>
                <input
                    name='name'
                    value={form.name}
                    type='text'
                    onChange={onChange}
                    required
                />
            </div>
            <div className='form-timezone'>
                <label htmlFor='Time zone'>
                    Временная зона (UTC)
                </label>
                <input
                    name='timezone'
                    value={form.timeZone}
                    type='number'
                    onChange={onChange}
                    required
                />
            </div>
            <button
                className='btn-add'
                onClick={onClick}
            >
                Добавить
            </button>
        </form>
    );
}

export default WatchesForm;
