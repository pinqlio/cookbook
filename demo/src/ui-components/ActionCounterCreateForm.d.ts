/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActionCounterCreateFormInputValues = {
    counter?: number;
};
export declare type ActionCounterCreateFormValidationValues = {
    counter?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionCounterCreateFormOverridesProps = {
    ActionCounterCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    counter?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActionCounterCreateFormProps = React.PropsWithChildren<{
    overrides?: ActionCounterCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActionCounterCreateFormInputValues) => ActionCounterCreateFormInputValues;
    onSuccess?: (fields: ActionCounterCreateFormInputValues) => void;
    onError?: (fields: ActionCounterCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActionCounterCreateFormInputValues) => ActionCounterCreateFormInputValues;
    onValidate?: ActionCounterCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActionCounterCreateForm(props: ActionCounterCreateFormProps): React.ReactElement;
