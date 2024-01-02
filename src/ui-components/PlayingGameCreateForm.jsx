/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PlayingGame } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PlayingGameCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    gameId: "",
    gameName: "",
    startedBy: "",
  };
  const [gameId, setGameId] = React.useState(initialValues.gameId);
  const [gameName, setGameName] = React.useState(initialValues.gameName);
  const [startedBy, setStartedBy] = React.useState(initialValues.startedBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGameId(initialValues.gameId);
    setGameName(initialValues.gameName);
    setStartedBy(initialValues.startedBy);
    setErrors({});
  };
  const validations = {
    gameId: [],
    gameName: [],
    startedBy: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          gameId,
          gameName,
          startedBy,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new PlayingGame(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlayingGameCreateForm")}
      {...rest}
    >
      <TextField
        label="Game id"
        isRequired={false}
        isReadOnly={false}
        value={gameId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameId: value,
              gameName,
              startedBy,
            };
            const result = onChange(modelFields);
            value = result?.gameId ?? value;
          }
          if (errors.gameId?.hasError) {
            runValidationTasks("gameId", value);
          }
          setGameId(value);
        }}
        onBlur={() => runValidationTasks("gameId", gameId)}
        errorMessage={errors.gameId?.errorMessage}
        hasError={errors.gameId?.hasError}
        {...getOverrideProps(overrides, "gameId")}
      ></TextField>
      <TextField
        label="Game name"
        isRequired={false}
        isReadOnly={false}
        value={gameName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameId,
              gameName: value,
              startedBy,
            };
            const result = onChange(modelFields);
            value = result?.gameName ?? value;
          }
          if (errors.gameName?.hasError) {
            runValidationTasks("gameName", value);
          }
          setGameName(value);
        }}
        onBlur={() => runValidationTasks("gameName", gameName)}
        errorMessage={errors.gameName?.errorMessage}
        hasError={errors.gameName?.hasError}
        {...getOverrideProps(overrides, "gameName")}
      ></TextField>
      <TextField
        label="Started by"
        isRequired={false}
        isReadOnly={false}
        value={startedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameId,
              gameName,
              startedBy: value,
            };
            const result = onChange(modelFields);
            value = result?.startedBy ?? value;
          }
          if (errors.startedBy?.hasError) {
            runValidationTasks("startedBy", value);
          }
          setStartedBy(value);
        }}
        onBlur={() => runValidationTasks("startedBy", startedBy)}
        errorMessage={errors.startedBy?.errorMessage}
        hasError={errors.startedBy?.hasError}
        {...getOverrideProps(overrides, "startedBy")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
