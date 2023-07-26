import React, { useState, ChangeEvent, FormEvent } from "react";
import FieldRenderer from "./FieldRenderer";
import type { SchemaType } from "../schema/page";
import { persistFormState } from "../lib/api";
import { useLocalFormState } from "../hooks/useLocalFormState";

interface FormProps {
  schema: SchemaType;
  data: FormState;
}

export type FormState = { [key: string]: any };

const Form: React.FC<FormProps> = ({ schema, data }) => {
  const [formData, setFormData] = useState<FormState>(data);
  const { setLocalFormState } = useLocalFormState(data);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    const fieldValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await persistFormState(formData);
      alert("Form Saved!");
    } catch (e) {
      console.error(e);
      alert("Redis is down but don't worry, your form is saved locally");
    } finally {
      setLocalFormState(formData);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {Object.keys(schema.properties).map((fieldName) => (
        <FieldRenderer
          key={fieldName}
          fieldName={fieldName}
          schema={schema}
          handleInputChange={handleInputChange}
          formData={formData}
          defaultValue={data[fieldName]}
        />
      ))}
      <div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
