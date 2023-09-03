import FormField from "./FormField";
import Plan from "./Plan";
import PlanDuration from "./PlanDuration";

interface InvalidateAction {
  type: "SET_EMAIL_INVALID" | "SET_NAME_INVALID" | "SET_PHONE_NUMBER_INVALID";
}

interface SetAction {
  type: "SET_EMAIL" | "SET_NAME" | "SET_PHONE_NUMBER";
  payload: FormField;
}

interface PlanAction {
  type: "SET_PLAN";
  payload: Plan;
}

interface PlanDurationAction {
  type: "SET_PLAN_DURATION";
  payload: PlanDuration;
}

type FormAction = SetAction | InvalidateAction | PlanAction | PlanDurationAction;

export default FormAction;
