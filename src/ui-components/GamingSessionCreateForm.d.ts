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
export declare type GamingSessionCreateFormInputValues = {
    name?: string;
    pin?: string;
    playerIds?: string[];
    games?: string[];
    lastPlayedTime?: string;
};
export declare type GamingSessionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    pin?: ValidationFunction<string>;
    playerIds?: ValidationFunction<string>;
    games?: ValidationFunction<string>;
    lastPlayedTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GamingSessionCreateFormOverridesProps = {
    GamingSessionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    pin?: PrimitiveOverrideProps<TextFieldProps>;
    playerIds?: PrimitiveOverrideProps<TextFieldProps>;
    games?: PrimitiveOverrideProps<TextFieldProps>;
    lastPlayedTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GamingSessionCreateFormProps = React.PropsWithChildren<{
    overrides?: GamingSessionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GamingSessionCreateFormInputValues) => GamingSessionCreateFormInputValues;
    onSuccess?: (fields: GamingSessionCreateFormInputValues) => void;
    onError?: (fields: GamingSessionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GamingSessionCreateFormInputValues) => GamingSessionCreateFormInputValues;
    onValidate?: GamingSessionCreateFormValidationValues;
} & React.CSSProperties>;
export default function GamingSessionCreateForm(props: GamingSessionCreateFormProps): React.ReactElement;
