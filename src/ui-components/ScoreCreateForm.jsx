/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Score } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ScoreCreateForm(props) {
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
    sessionId: "",
    playerId: "",
    score: "",
    teamId: "",
  };
  const [gameId, setGameId] = React.useState(initialValues.gameId);
  const [sessionId, setSessionId] = React.useState(initialValues.sessionId);
  const [playerId, setPlayerId] = React.useState(initialValues.playerId);
  const [score, setScore] = React.useState(initialValues.score);
  const [teamId, setTeamId] = React.useState(initialValues.teamId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGameId(initialValues.gameId);
    setSessionId(initialValues.sessionId);
    setPlayerId(initialValues.playerId);
    setScore(initialValues.score);
    setTeamId(initialValues.teamId);
    setErrors({});
  };
  const validations = {
    gameId: [],
    sessionId: [],
    playerId: [],
    score: [],
    teamId: [],
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
          sessionId,
          playerId,
          score,
          teamId,
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
          await DataStore.save(new Score(modelFields));
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
      {...getOverrideProps(overrides, "ScoreCreateForm")}
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
              sessionId,
              playerId,
              score,
              teamId,
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
        label="Session id"
        isRequired={false}
        isReadOnly={false}
        value={sessionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameId,
              sessionId: value,
              playerId,
              score,
              teamId,
            };
            const result = onChange(modelFields);
            value = result?.sessionId ?? value;
          }
          if (errors.sessionId?.hasError) {
            runValidationTasks("sessionId", value);
          }
          setSessionId(value);
        }}
        onBlur={() => runValidationTasks("sessionId", sessionId)}
        errorMessage={errors.sessionId?.errorMessage}
        hasError={errors.sessionId?.hasError}
        {...getOverrideProps(overrides, "sessionId")}
      ></TextField>
      <TextField
        label="Player id"
        isRequired={false}
        isReadOnly={false}
        value={playerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameId,
              sessionId,
              playerId: value,
              score,
              teamId,
            };
            const result = onChange(modelFields);
            value = result?.playerId ?? value;
          }
          if (errors.playerId?.hasError) {
            runValidationTasks("playerId", value);
          }
          setPlayerId(value);
        }}
        onBlur={() => runValidationTasks("playerId", playerId)}
        errorMessage={errors.playerId?.errorMessage}
        hasError={errors.playerId?.hasError}
        {...getOverrideProps(overrides, "playerId")}
      ></TextField>
      <TextField
        label="Score"
        isRequired={false}
        isReadOnly={false}
        value={score}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameId,
              sessionId,
              playerId,
              score: value,
              teamId,
            };
            const result = onChange(modelFields);
            value = result?.score ?? value;
          }
          if (errors.score?.hasError) {
            runValidationTasks("score", value);
          }
          setScore(value);
        }}
        onBlur={() => runValidationTasks("score", score)}
        errorMessage={errors.score?.errorMessage}
        hasError={errors.score?.hasError}
        {...getOverrideProps(overrides, "score")}
      ></TextField>
      <TextField
        label="Team id"
        isRequired={false}
        isReadOnly={false}
        value={teamId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gameId,
              sessionId,
              playerId,
              score,
              teamId: value,
            };
            const result = onChange(modelFields);
            value = result?.teamId ?? value;
          }
          if (errors.teamId?.hasError) {
            runValidationTasks("teamId", value);
          }
          setTeamId(value);
        }}
        onBlur={() => runValidationTasks("teamId", teamId)}
        errorMessage={errors.teamId?.errorMessage}
        hasError={errors.teamId?.hasError}
        {...getOverrideProps(overrides, "teamId")}
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
