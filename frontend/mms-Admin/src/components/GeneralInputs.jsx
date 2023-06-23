import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { Field, Formik, useFormik } from "formik";
import { countries } from "../pages/settings/countries";
// import CustomInput from "./forms/inputs/CustomInput";
import GeneralSocialInputs from "./GeneralSocialInputs";
import PropTypes from "prop-types";
import { useUpdateProfileMutation } from "src/services/user.service";
import { useAuth } from "src/store/auth.reducer";
import { toast } from "react-toastify";
import { pick } from "src/utils/helper";

const GeneralInputSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  bio: Yup.string().required(),
  website: Yup.string().url("Invalid URL"),
  country: Yup.string().required(),
  city: Yup.string().required("City is required"),
  gitHub: Yup.string().nullable().default(),
  instagram: Yup.string().nullable().default(),
  linkedIn: Yup.string().nullable().default(),
  twitter: Yup.string().nullable().default(),
  technical_proficiency: Yup.string().required(),
  previous_programs: Yup.string().required(),
  program_interest: Yup.string().required(),
  mentor_before: Yup.boolean().required(),
  years_of_experience: Yup.number().required(),
});

const Form = ({ label, children }) => (
  <Stack
    direction={"row"}
    spacing={5}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "start",
      width: "100%",
    }}
  >
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: 600,
        color: "#333333",
        textAlign: "start",
        width: "82.95px",
      }}
    >
      {label}
    </Typography>
    <Box sx={{ flexGrow: 1, width: "100%" }}>{children}</Box>
  </Stack>
);

Form.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};


function GeneralInputs() {

  const [updateProfile] = useUpdateProfileMutation()

  const auth = useAuth()

  const initialValues = { ...auth.data };

  const onSubmit = async (values) => {
    const res = await updateProfile({ ...pick(values, Object.keys(GeneralInputSchema.getDefault())), user_id: auth.data.user_id }).unwrap()
    if (res.success) {
      toast.success("Profile updated successfully!")
    }
  };

  const {
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    getFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: GeneralInputSchema,
    onSubmit,
    enableReinitialize: true,
  });
  return (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues}>
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Form label="Full Name">
            <Stack
              direction={"row"}
              spacing={3}
              sx={{ display: "flex", width: "100%" }}
            >
              <Stack
                
                sx={{ display: "flex", width: "100%" }}
              >
                <TextField
                  name="firstName"
                  onChange={handleChange}
                  value={values.firstName}
                  type="text"
                  label="First Name"
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Stack>

              <Stack
                direction={"column"}
                sx={{ display: "flex", width: "100%" }}
              >
                <TextField
                  name="lastName"
                  type="text"
                  label="Last Name"
                  onChange={handleChange}
                  value={values.lastName}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Stack>
            </Stack>
          </Form>
          <Form label="About">
            <TextField
              name="bio"
              label="Your Bio"
              multiline
              rows={4}
              value={values.bio}
              onChange={handleChange}
              error={touched.bio && Boolean(errors.bio)}
              helperText={touched.bio && errors.bio}
              sx={{ width: "100%" }}
            />
          </Form>
          <Form label="Website">
            <TextField
              name="website"
              label="www.example.com"
              value={values.website}
              onChange={handleChange}
              error={touched.website && Boolean(errors.website)}
              helperText={touched.website && errors.website}
              sx={{ width: "100%" }}
            />
          </Form>
          <Form label="Technical Proficiency">
            <TextField
              name="technical_proficiency"
              label="www.example.com"
              value={values.technical_proficiency}
              onChange={handleChange}
              error={touched.technical_proficiency && Boolean(errors.technical_proficiency)}
              helperText={touched.technical_proficiency && errors.technical_proficiency}
              sx={{ width: "100%" }}
            />
          </Form>
          <Form label="Previous Programs">
            <TextField
              name="previous_programs"
              label="Previous Programs"
              value={values.previous_programs}
              onChange={handleChange}
              error={touched.previous_programs && Boolean(errors.previous_programs)}
              helperText={touched.previous_programs && errors.previous_programs}
              sx={{ width: "100%" }}
            />
          </Form>
          <Form label="Program Interest">
            <TextField
              name="program_interest"
              label="Program Interest"
              value={values.program_interest}
              onChange={handleChange}
              error={touched.program_interest && Boolean(errors.program_interest)}
              helperText={touched.program_interest && errors.program_interest}
              sx={{ width: "100%" }}
            />
          </Form>
          <Form label="Mentor Before">
            <Checkbox
              name="mentor_before"
              label="Mentor Before"
              checked={values.mentor_before}
              onChange={handleChange}
              error={touched.mentor_before && Boolean(errors.mentor_before)}
              helperText={touched.mentor_before && errors.mentor_before}
            />
          </Form>
          <Form label="Years of experience">
            <TextField
              name="years_of_experience"
              label="Years of experience"
              type="number"
              value={values.years_of_experience}
              onChange={handleChange}
              error={touched.years_of_experience && Boolean(errors.years_of_experience)}
              helperText={touched.years_of_experience && errors.years_of_experience}
              sx={{ width: "100%" }}
            />
          </Form>
          <Stack direction={"row"} spacing={3}>
            <Stack
              direction={"row"}
              spacing="50px"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "start",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#333333",
                  textAlign: "start",
                  width: "82.95px",
                }}
              >
                Country
              </Typography>
              <Box sx={{ flexGrow: 1, width: "100%" }}>
                <Field name="country">
                  {({ field }) => (
                    <Autocomplete
                      {...field}
                      options={countries}
                      onChange={(event, value) =>
                        setFieldValue(field.name, value.code)
                      }
                      autoHighlight
                      getOptionLabel={(option) => option.label || ""}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "false", // disable autocomplete and autofill
                          }}
                        />
                      )}
                      freeSolo
                    />
                  )}
                </Field>
              </Box>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "start",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#333333",
                  textAlign: "start",
                  width: "82.95px",
                }}
              >
                City
              </Typography>
              <Box sx={{ flexGrow: 1, width: "100%" }}>
                <TextField
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={handleChange}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  sx={{ width: "100%" }}
                />
              </Box>
            </Stack>
          </Stack>

          {/** This is the component for Social Inputs **/}
          <GeneralSocialInputs
            errors={errors}
            touched={touched}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            getFieldValue={getFieldValue}
          />


          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width="100%"
          >
            <div></div>
            <Button
              type="submit"
              variant="contained"
              sx={{ px: 4, py: 1, borderRadius: "10px" }}
            >
              Save Changes
            </Button>
          </Stack>
        </Stack>
      </Formik>
    </form>
  );
}

GeneralSocialInputs.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};
export default GeneralInputs;
