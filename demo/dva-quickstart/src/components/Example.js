import React from 'react';

const handleSubmit = () => {
  console.log('this is submit button')
}

const Example = () => {
  return (
    <div>
      <button onClick={this.handleSubmit}>发布</button>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
