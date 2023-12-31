import React, { ChangeEvent } from "react";
import type { SchemaType } from "../schema/page";
import { shouldRenderComponent } from "../utils/validations";
import { FormState } from "./Form";

interface FieldRendererProps {
  fieldName: string;
  schema: SchemaType;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: FormState;
  defaultValue?: any;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({
  fieldName,
  schema,
  handleInputChange,
  formData,
  defaultValue,
}) => {
  const { title, type, renderConditions, placeholder } =
    schema.properties[fieldName];
  const shouldRender = shouldRenderComponent(formData, renderConditions);

  if (!shouldRender) return null;

  if (type === "string") {
    return (
      <div key={fieldName} className="mb-4">
        <label htmlFor={fieldName} className="block text-gray-700">
          {title}
        </label>
        <input
          type="text"
          id={fieldName}
          name={fieldName}
          onChange={handleInputChange}
          className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder={placeholder ?? `Enter your ${fieldName}`}
          required={schema.required.includes(fieldName)}
          defaultValue={defaultValue ?? ""}
        />
      </div>
    );
  }

  if (type === "text") {
    return (
      <div key={fieldName} className="mb-4">
        <label htmlFor={fieldName} className="block text-gray-700">
          {title}
        </label>
        <textarea
          id={fieldName}
          name={fieldName}
          rows={8}
          onChange={handleInputChange}
          className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder={placeholder ?? `Enter your ${fieldName}`}
          required={schema.required.includes(fieldName)}
          defaultValue={defaultValue ?? ""}
        ></textarea>
      </div>
    );
  }

  if (type === "boolean") {
    return (
      <div key={fieldName} className="mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id={fieldName}
            name={fieldName}
            onChange={handleInputChange}
            className="mr-2 focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            defaultValue={defaultValue ?? false}
          />
          <label htmlFor={fieldName} className="block text-gray-700">
            {title}
          </label>
        </div>
      </div>
    );
  }

  // we don't support this input type
  return null;
};

export default FieldRenderer;
