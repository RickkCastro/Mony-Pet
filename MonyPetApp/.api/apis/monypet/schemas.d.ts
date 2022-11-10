declare const CreatePets: {
  readonly response: {
    readonly default: {
      readonly type: 'object';
      readonly required: readonly ['code', 'message'];
      readonly properties: {
        readonly code: {
          readonly type: 'integer';
          readonly format: 'int32';
          readonly minimum: -2147483648;
          readonly maximum: 2147483647;
        };
        readonly message: {
          readonly type: 'string';
        };
      };
      readonly $schema: 'http://json-schema.org/draft-04/schema#';
    };
  };
};
declare const ListPets: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly limit: {
            readonly type: 'integer';
            readonly format: 'int32';
            readonly minimum: -2147483648;
            readonly maximum: 2147483647;
            readonly $schema: 'http://json-schema.org/draft-04/schema#';
            readonly description: 'How many items to return at one time (max 100)';
          };
        };
        readonly required: readonly [];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'array';
      readonly items: {
        readonly type: 'object';
        readonly required: readonly ['id', 'name'];
        readonly properties: {
          readonly id: {
            readonly type: 'integer';
            readonly format: 'int64';
            readonly minimum: -9223372036854776000;
            readonly maximum: 9223372036854776000;
          };
          readonly name: {
            readonly type: 'string';
          };
          readonly tag: {
            readonly type: 'string';
          };
        };
      };
      readonly $schema: 'http://json-schema.org/draft-04/schema#';
    };
    readonly default: {
      readonly type: 'object';
      readonly required: readonly ['code', 'message'];
      readonly properties: {
        readonly code: {
          readonly type: 'integer';
          readonly format: 'int32';
          readonly minimum: -2147483648;
          readonly maximum: 2147483647;
        };
        readonly message: {
          readonly type: 'string';
        };
      };
      readonly $schema: 'http://json-schema.org/draft-04/schema#';
    };
  };
};
declare const ShowPetById: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly petId: {
            readonly type: 'string';
            readonly $schema: 'http://json-schema.org/draft-04/schema#';
            readonly description: 'The id of the pet to retrieve';
          };
        };
        readonly required: readonly ['petId'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly required: readonly ['id', 'name'];
      readonly properties: {
        readonly id: {
          readonly type: 'integer';
          readonly format: 'int64';
          readonly minimum: -9223372036854776000;
          readonly maximum: 9223372036854776000;
        };
        readonly name: {
          readonly type: 'string';
        };
        readonly tag: {
          readonly type: 'string';
        };
      };
      readonly $schema: 'http://json-schema.org/draft-04/schema#';
    };
    readonly default: {
      readonly type: 'object';
      readonly required: readonly ['code', 'message'];
      readonly properties: {
        readonly code: {
          readonly type: 'integer';
          readonly format: 'int32';
          readonly minimum: -2147483648;
          readonly maximum: 2147483647;
        };
        readonly message: {
          readonly type: 'string';
        };
      };
      readonly $schema: 'http://json-schema.org/draft-04/schema#';
    };
  };
};
export { CreatePets, ListPets, ShowPetById };
