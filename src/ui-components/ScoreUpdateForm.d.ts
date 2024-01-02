/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Score } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScoreUpdateFormInputValues = {
    gameId?: string;
    sessionId?: string;
    playerId?: string;
    score?: string;
    teamId?: string;
};
export declare type ScoreUpdateFormValidationValues = {
    gameId?: ValidationFunction<string>;
    sessionId?: ValidationFunction<string>;
    playerId?: ValidationFunction<string>;
    score?: ValidationFunction<string>;
    teamId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScoreUpdateFormOverridesProps = {
    ScoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameId?: PrimitiveOverrideProps<TextFieldProps>;
    sessionId?: PrimitiveOverrideProps<TextFieldProps>;
    playerId?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
    teamId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    score?: Score;
    onSubmit?: (fields: ScoreUpdateFormInputValues) => ScoreUpdateFormInputValues;
    onSuccess?: (fields: ScoreUpdateFormInputValues) => void;
    onError?: (fields: ScoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScoreUpdateFormInputValues) => ScoreUpdateFormInputValues;
    onValidate?: ScoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScoreUpdateForm(props: ScoreUpdateFormProps): React.ReactElement;
