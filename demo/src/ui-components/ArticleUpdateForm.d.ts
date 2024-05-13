/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Article } from "../API.ts";
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
export declare type ArticleUpdateFormInputValues = {
    title?: string;
    description?: string;
    text?: string;
    published?: boolean;
};
export declare type ArticleUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    published?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticleUpdateFormOverridesProps = {
    ArticleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    published?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ArticleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArticleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    article?: Article;
    onSubmit?: (fields: ArticleUpdateFormInputValues) => ArticleUpdateFormInputValues;
    onSuccess?: (fields: ArticleUpdateFormInputValues) => void;
    onError?: (fields: ArticleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArticleUpdateFormInputValues) => ArticleUpdateFormInputValues;
    onValidate?: ArticleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArticleUpdateForm(props: ArticleUpdateFormProps): React.ReactElement;
