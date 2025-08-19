import { Form, TimePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const LBTimePicker = ({ name, label }: TDatePickerProps) => {
  const { control } = useFormContext(); // ensure you're using <FormProvider />

  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} validateStatus={error ? "error" : ""}>
            <TimePicker
              size="large"
              style={{ width: "100%" }}
              format="HH:mm"
              use12Hours={false}
              value={field.value ? dayjs(field.value, "HH:mm") : null}
              onChange={(time) => {
                const formatted = time ? time.format("HH:mm") : "";
                field.onChange(formatted); // set string in form state
              }}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default LBTimePicker;
