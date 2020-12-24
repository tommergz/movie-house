import React from 'react';
import { MoviesConsumer } from '../../context';

const ConsumerHoc = (Wrapped) => {
  return (props) => {
    return (
      <MoviesConsumer>
        {
          (value) => {
            return <Wrapped {...props} value={value} />
          }
        }
      </MoviesConsumer>
    )
  }
}

export default ConsumerHoc;