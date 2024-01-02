/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GamingSession } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GamingSessionUpdateFormInputValues = {
    name?: string;
    pin?: string;
    playerIds?: string[];
    games?: string[];
    lastPlayedTime?: string;
};
export declare type GamingSessionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    pin?: ValidationFunction<string>;
    playerIds?: ValidationFunction<string>;
    games?: ValidationFunction<string>;
    lastPlayedTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GamingSessionUpdateFormOverridesProps = {
    GamingSessionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    pin?: PrimitiveOverrideProps<TextFieldProps>;
    playerIds?: PrimitiveOverrideProps<TextFieldProps>;
    games?: PrimitiveOverrideProps<TextFieldProps>;
    lastPlayedTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GamingSessionUpdateFormProps = React.PropsWithChildren<{
    overrides?: GamingSessionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gamingSession?: GamingSession;
    onSubmit?: (fields: GamingSessionUpdateFormInputValues) => GamingSessionUpdateFormInputValues;
    onSuccess?: (fields: GamingSessionUpdateFormInputValues) => void;
    onError?: (fields: GamingSessionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GamingSessionUpdateFormInputValues) => GamingSessionUpdateFormInputValues;
    onValidate?: GamingSessionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GamingSessionUpdateForm(props: GamingSessionUpdateFormProps): React.ReactElement;
