import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInputWithRef = forwardRef<HTMLInputElement, PhoneInputProps>(
  (props, ref) => {
    const internalRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => internalRef.current);

    return (
      <PhoneInput
        {...props}
        inputProps={{
          ...props.inputProps,
          ref: internalRef,
        }}
      />
    );
  },
);

export default PhoneInputWithRef;
