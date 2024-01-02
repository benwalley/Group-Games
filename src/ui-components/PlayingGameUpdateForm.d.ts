/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PlayingGame } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayingGameUpdateFormInputValues = {
    gameId?: string;
    gameName?: string;
    startedBy?: string;
};
export declare type PlayingGameUpdateFormValidationValues = {
    gameId?: ValidationFunction<string>;
    gameName?: ValidationFunction<string>;
    startedBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayingGameUpdateFormOverridesProps = {
    PlayingGameUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    gameId?: PrimitiveOverrideProps<TextFieldProps>;
    gameName?: PrimitiveOverrideProps<TextFieldProps>;
    startedBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayingGameUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayingGameUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    playingGame?: PlayingGame;
    onSubmit?: (fields: PlayingGameUpdateFormInputValues) => PlayingGameUpdateFormInputValues;
    onSuccess?: (fields: PlayingGameUpdateFormInputValues) => void;
    onError?: (fields: PlayingGameUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayingGameUpdateFormInputValues) => PlayingGameUpdateFormInputValues;
    onValidate?: PlayingGameUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayingGameUpdateForm(props: PlayingGameUpdateFormProps): React.ReactElement;
