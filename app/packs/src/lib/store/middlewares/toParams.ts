import { snakeCase } from 'lodash';

const toParams = (source: Record<string, unknown>): string => {
  const params = new URLSearchParams();
  const appendParam = (value: Record<string, unknown> | [], key: string) => {
    if (Array.isArray(value)) {
      value.forEach((value2: Record<string, unknown>) =>
        appendParam(value2, `${key}[]`)
      );
    } else if (typeof value === 'object') {
      Object.keys(value).forEach((key2: string) => {
        appendParam(
          value[key2] as Record<string, unknown>,
          `${key}[${snakeCase(key2)}]`
        );
      });
    } else {
      params.append(key, `${value}`);
    }
  };

  Object.keys(source).forEach((key) => {
    const value = source[key] as Record<string, unknown> | [];

    appendParam(value, snakeCase(key));
  });

  return params.toString();
};

export default toParams;
