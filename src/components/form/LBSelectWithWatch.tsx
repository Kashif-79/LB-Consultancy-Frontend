import { Form, Select } from "antd";
import type React from "react";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options?: { value: string; label: string; disabled?: boolean }[];
  mode?: "multiple" | undefined;
  disabled?: boolean;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const LBSelectWithWatch = ({
  label,
  name,
  options,
  mode,
  disabled,
  onValueChange,
}: TPHSelectProps) => {
  const method = useFormContext();
  const inputValue = useWatch({
    control: method.control,
    name,
  });
  useEffect(() => {
    onValueChange(inputValue), [inputValue];
  });
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            disabled={disabled}
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            options={options}
            size="large"
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default LBSelectWithWatch;
