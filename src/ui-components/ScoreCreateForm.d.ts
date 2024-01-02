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
export declare type ScoreCreateFormInputValues = {
    gameId?: string;
    sessionId?: string;
    playerId?: string;
    score?: string;
    teamId?: string;
};
export declare type ScoreCreateFormValidationValues = {
    gameId?: ValidationFunction<string>;
    sessionId?: ValidationFunction<string>;
    playerId?: ValidationFunction<string>;
    score?: ValidationFunction<string>;
    teamId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScoreCreateFormOverridesProps = {
    ScoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameId?: PrimitiveOverrideProps<TextFieldProps>;
    sessionId?: PrimitiveOverrideProps<TextFieldProps>;
    playerId?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
    teamId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScoreCreateFormProps = React.PropsWithChildren<{
    overrides?: ScoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScoreCreateFormInputValues) => ScoreCreateFormInputValues;
    onSuccess?: (fields: ScoreCreateFormInputValues) => void;
    onError?: (fields: ScoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScoreCreateFormInputValues) => ScoreCreateFormInputValues;
    onValidate?: ScoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScoreCreateForm(props: ScoreCreateFormProps): React.ReactElement;
