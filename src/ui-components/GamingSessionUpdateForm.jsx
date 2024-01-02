/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { GamingSession } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function GamingSessionUpdateForm(props) {
  const {
    id: idProp,
    gamingSession,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    pin: "",
    playerIds: [],
    games: [],
    lastPlayedTime: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [pin, setPin] = React.useState(initialValues.pin);
  const [playerIds, setPlayerIds] = React.useState(initialValues.playerIds);
  const [games, setGames] = React.useState(initialValues.games);
  const [lastPlayedTime, setLastPlayedTime] = React.useState(
    initialValues.lastPlayedTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gamingSessionRecord
      ? { ...initialValues, ...gamingSessionRecord }
      : initialValues;
    setName(cleanValues.name);
    setPin(cleanValues.pin);
    setPlayerIds(cleanValues.playerIds ?? []);
    setCurrentPlayerIdsValue("");
    setGames(cleanValues.games ?? []);
    setCurrentGamesValue("");
    setLastPlayedTime(cleanValues.lastPlayedTime);
    setErrors({});
  };
  const [gamingSessionRecord, setGamingSessionRecord] =
    React.useState(gamingSession);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(GamingSession, idProp)
        : gamingSession;
      setGamingSessionRecord(record);
    };
    queryData();
  }, [idProp, gamingSession]);
  React.useEffect(resetStateValues, [gamingSessionRecord]);
  const [currentPlayerIdsValue, setCurrentPlayerIdsValue] = React.useState("");
  const playerIdsRef = React.createRef();
  const [currentGamesValue, setCurrentGamesValue] = React.useState("");
  const gamesRef = React.createRef();
  const validations = {
    name: [],
    pin: [],
    playerIds: [],
    games: [],
    lastPlayedTime: [],
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
          name,
          pin,
          playerIds,
          games,
          lastPlayedTime,
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
          await DataStore.save(
            GamingSession.copyOf(gamingSessionRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GamingSessionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              pin,
              playerIds,
              games,
              lastPlayedTime,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Pin"
        isRequired={false}
        isReadOnly={false}
        value={pin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              pin: value,
              playerIds,
              games,
              lastPlayedTime,
            };
            const result = onChange(modelFields);
            value = result?.pin ?? value;
          }
          if (errors.pin?.hasError) {
            runValidationTasks("pin", value);
          }
          setPin(value);
        }}
        onBlur={() => runValidationTasks("pin", pin)}
        errorMessage={errors.pin?.errorMessage}
        hasError={errors.pin?.hasError}
        {...getOverrideProps(overrides, "pin")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              pin,
              playerIds: values,
              games,
              lastPlayedTime,
            };
            const result = onChange(modelFields);
            values = result?.playerIds ?? values;
          }
          setPlayerIds(values);
          setCurrentPlayerIdsValue("");
        }}
        currentFieldValue={currentPlayerIdsValue}
        label={"Player ids"}
        items={playerIds}
        hasError={errors.playerIds?.hasError}
        setFieldValue={setCurrentPlayerIdsValue}
        inputFieldRef={playerIdsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Player ids"
          isRequired={false}
          isReadOnly={false}
          value={currentPlayerIdsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.playerIds?.hasError) {
              runValidationTasks("playerIds", value);
            }
            setCurrentPlayerIdsValue(value);
          }}
          onBlur={() => runValidationTasks("playerIds", currentPlayerIdsValue)}
          errorMessage={errors.playerIds?.errorMessage}
          hasError={errors.playerIds?.hasError}
          ref={playerIdsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "playerIds")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              pin,
              playerIds,
              games: values,
              lastPlayedTime,
            };
            const result = onChange(modelFields);
            values = result?.games ?? values;
          }
          setGames(values);
          setCurrentGamesValue("");
        }}
        currentFieldValue={currentGamesValue}
        label={"Games"}
        items={games}
        hasError={errors.games?.hasError}
        setFieldValue={setCurrentGamesValue}
        inputFieldRef={gamesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Games"
          isRequired={false}
          isReadOnly={false}
          value={currentGamesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.games?.hasError) {
              runValidationTasks("games", value);
            }
            setCurrentGamesValue(value);
          }}
          onBlur={() => runValidationTasks("games", currentGamesValue)}
          errorMessage={errors.games?.errorMessage}
          hasError={errors.games?.hasError}
          ref={gamesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "games")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Last played time"
        isRequired={false}
        isReadOnly={false}
        value={lastPlayedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              pin,
              playerIds,
              games,
              lastPlayedTime: value,
            };
            const result = onChange(modelFields);
            value = result?.lastPlayedTime ?? value;
          }
          if (errors.lastPlayedTime?.hasError) {
            runValidationTasks("lastPlayedTime", value);
          }
          setLastPlayedTime(value);
        }}
        onBlur={() => runValidationTasks("lastPlayedTime", lastPlayedTime)}
        errorMessage={errors.lastPlayedTime?.errorMessage}
        hasError={errors.lastPlayedTime?.hasError}
        {...getOverrideProps(overrides, "lastPlayedTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || gamingSession)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || gamingSession) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
