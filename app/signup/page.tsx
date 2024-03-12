"use client";

import {
  Form,
  FormLayout,
  Field,
  ArrayFieldContainer,
  ArrayFieldRows,
  ArrayFieldRowFields,
  ArrayFieldRowContainer,
  ArrayFieldRemoveButton,
  SubmitButton,
} from "@saas-ui/react";
import { DateInput } from "@saas-ui/date-picker";
import { useUser } from "@clerk/clerk-react";
import { FormControl, FormLabel, Heading } from "@chakra-ui/react";
import { Key } from "react";

export default function Signup() {
  const onSubmit = (params: any) => {
    console.log(params);
  };

  const { user } = useUser();

  const columnLayout = (cols: number) => {
    return { base: cols, xs: 1 };
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormLayout>
        <Heading size="md">Parent/Guardian Info</Heading>
        <FormLayout columns={{ md: 2, sm: 1 }}>
          <Field
            label="First Name"
            name="parent_firstName"
            rules={{ required: true }}
            defaultValue={user?.firstName || ""}
          />
          <Field
            label="Last Name"
            name="parent_lastName"
            rules={{ required: true }}
            defaultValue={user?.lastName || ""}
          />
        </FormLayout>
        <FormLayout columns={{ md: 2, sm: 1 }}>
          <Field
            label="Email"
            name="email"
            type="email"
            rules={{ required: true }}
            defaultValue={user?.primaryEmailAddress?.emailAddress}
          />
          <Field
            label="Phone"
            name="phone"
            type="phone"
            rules={{ required: true }}
            defaultValue={user?.primaryPhoneNumber?.phoneNumber}
          />
        </FormLayout>
        <FormLayout>
          <Field
            label="I'm willing to help coach or manage a team"
            name="coach"
            type="checkbox"
          />
        </FormLayout>
        <Heading size="md">Player Info</Heading>
        <FormLayout columns={{ md: 3, sm: 1 }}>
          <Field
            label="Player First Name"
            name="player_firstName"
            rules={{ required: true }}
          />
          <Field
            label="Player Last Name"
            name="player_lastName"
            rules={{ required: true }}
          />
          {/* TODO(kevin): Put some validation for min/max ages */}
          <FormControl>
            <FormLabel>Player Birthdate</FormLabel>
            <DateInput name="player_birthdate" rules={{ required: true }} />
          </FormControl>
        </FormLayout>
        <SubmitButton>Submit</SubmitButton>
      </FormLayout>
    </Form>
  );
}
