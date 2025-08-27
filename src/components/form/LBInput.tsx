import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: "text" | "textarea";
  name: string;
  label?: string;
};

const { TextArea } = Input;

const LBInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            {type === "textarea" ? (
              <TextArea {...field} id={name} rows={8} />
            ) : (
              <Input {...field} type={type} id={name} size="large" />
            )}
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default LBInput;
