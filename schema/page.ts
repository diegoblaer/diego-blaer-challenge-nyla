export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    heading: {
      title: 'Heading',
      type: 'string',
      placeholder: 'This is a custom placeholder',
    },
    description: {
      title: 'Description',
      type: 'string',
    },
    primaryButtonText: {
      title: 'Primary Button Text',
      type: 'string',
    },
    secondaryButtonText: {
      title: 'Secondary Button Text',
      type: 'string',
    },
    truncateDescription: {
      title: 'Truncate Description',
      type: 'boolean',
      renderConditions: { minLength: { value: 5, target: 'description' } },
    },
  },
  required: [
    'heading',
    'description',
    'primaryButtonText',
    'secondaryButtonText',
  ],
};

export type SchemaType = {
  type: string;
  properties: {
    [key: string]: {
      title: string;
      type: string;
      renderConditions?: RenderConditions;
      placeholder?: string;
    };
  };
  required: string[];
};

type MinLengthCondition = {
  minLength?: {
    value: number;
    target: string;
  };
};

export type RenderConditions = MinLengthCondition;
