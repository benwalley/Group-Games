/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayingGameCreateFormInputValues = {
    gameId?: string;
    gameName?: string;
    startedBy?: string;
};
export declare type PlayingGameCreateFormValidationValues = {
    gameId?: ValidationFunction<string>;
    gameName?: ValidationFunction<string>;
    startedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayingGameCreateFormOverridesProps = {
    PlayingGameCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameId?: PrimitiveOverrideProps<TextFieldProps>;
    gameName?: PrimitiveOverrideProps<TextFieldProps>;
    startedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayingGameCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayingGameCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayingGameCreateFormInputValues) => PlayingGameCreateFormInputValues;
    onSuccess?: (fields: PlayingGameCreateFormInputValues) => void;
    onError?: (fields: PlayingGameCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayingGameCreateFormInputValues) => PlayingGameCreateFormInputValues;
    onValidate?: PlayingGameCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayingGameCreateForm(props: PlayingGameCreateFormProps): React.ReactElement;
