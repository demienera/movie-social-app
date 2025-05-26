import type { TextFieldProps } from '@mui/material';
import type { FieldHookConfig } from 'formik';

export type FieldTextProps = TextFieldProps & FieldHookConfig<string>;
