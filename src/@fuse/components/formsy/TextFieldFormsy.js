import React from 'react';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withFormsy } from 'formsy-react';
import _ from '@lodash';

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#3e3e3e',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#fefefe',
		},
		'& .MuiOutlinedInput-root': {
			transition: 'box-shadow .5s',
			'& fieldset': {
				borderColor: '#3e3e3e',
			},
			'&:hover, &.Mui-focused': {
				// boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			},
			'&:hover fieldset': {
				borderColor: '#3e3e3e',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#3e3e3e',
			},
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderRadius: '2.4rem',
		}
	},
})(TextField);

function TextFieldFormsy(props) {
	const importedProps = _.pick(props, [
		'autoComplete',
		'autoFocus',
		'children',
		'className',
		'defaultValue',
		'disabled',
		'FormHelperTextProps',
		'fullWidth',
		'id',
		'InputLabelProps',
		'inputProps',
		'InputProps',
		'inputRef',
		'label',
		'multiline',
		'name',
		'onBlur',
		'onChange',
		'onFocus',
		'placeholder',
		'required',
		'rows',
		'rowsMax',
		'select',
		'SelectProps',
		'type',
		'variant'
	]);

	const errorMessage = props.getErrorMessage();
	const value = props.getValue() || '';

	function changeValue(event) {
		props.setValue(event.currentTarget.value);
		if (props.onChange) {
			props.onChange(event);
		}
	}

	return (
		<CssTextField
			{...importedProps}
			onChange={changeValue}
			value={value}
			error={Boolean(errorMessage)}
			helperText={errorMessage}
		/>
	);
}

export default React.memo(withFormsy(TextFieldFormsy));
