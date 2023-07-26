import { FormState } from "../components/Form";
import { RenderConditions } from "../schema/page";

export const shouldRenderComponent = (
  formData: FormState,
  conditions?: RenderConditions
) => {
  if (!conditions) return true;

  if (
    conditions.minLength &&
    formData[conditions.minLength.target] &&
    hasMinimumLength(
      formData[conditions.minLength.target],
      conditions.minLength.value
    )
  ) {
    return false;
  }

  if (conditions.showOnlyOnFirstWeek && isNotFirstWeek()) {
    return false;
  }

  return true;
};

export const hasMinimumLength = (text: string, minLength: number) => {
  return (text?.length ?? 0) >= minLength;
};

export const isNotFirstWeek = () => {
  return new Date().getDate() >= 7;
};
