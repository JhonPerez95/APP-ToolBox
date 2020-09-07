import React from 'react';
import useForm from '../hooks/useForm';

const HelloWord = () => {
  const [formValue, handleInputChange, resetInput] = useForm({
    text: '',
  });
  const { text } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Send Text"
                name="text"
                value={text}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit btn btn-primary"
                value="Text"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelloWord;
