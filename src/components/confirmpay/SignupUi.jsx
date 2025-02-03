import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Typography } from "@mui/material";

export default function ResponsiveDatePickers({ value, onChange }) {
  const [error, setError] = React.useState("");

  const handleDateChange = (date) => {
    if (!date) {
      setError("Please enter a valid date of birth");
      return;
    }

    const today = dayjs();
    const age = today.diff(date, "year");
    const formattedDate = dayjs(date).format("DD-MM-YYYY");

    if (date.isAfter(today)) {
      setError("Please enter a valid date of birth");
    } else if (age < 18) {
      setError("The User must be 18 years in order to register");
    } else {
      setError("");
      onChange(formattedDate); // Pass formatted date back to parent
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DesktopDatePicker"]}>
        <DemoItem>
          <DesktopDatePicker
            value={value ? dayjs(value, "DD-MM-YYYY") : null}
            onChange={handleDateChange}
            format="DD-MM-YYYY"
            maxDate={dayjs().subtract(18, "year")} 
            slotProps={{
              textField: {
                style: { width: "500px" },
              },
            }}
          />
        </DemoItem>
      </DemoContainer>

      {error && (
        <Typography color="error" style={{ marginTop: "10px" }}>
          {error}
        </Typography>
      )}

      <Typography style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
        To sign up, you need to be at least 18. Your birthday won’t be shared
        with other people who use Airbnb.
      </Typography>
    </LocalizationProvider>
  );
}
