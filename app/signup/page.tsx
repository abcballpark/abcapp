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
  useFormContext,
  useSnackbar,
} from "@saas-ui/react";
import { DateInput } from "@saas-ui/date-picker";
import { useUser } from "@clerk/clerk-react";
import { FormLabel, FormControl, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { trpc } from "@/app/trpc/client";

export default function Signup() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const snackbar = useSnackbar();
  const addPlayer = trpc.addAccountPlayer.useMutation();

  const onSubmit = (params: any) => {
    setLoading(true);
    // This gets rewritten by the server, just here for validation purposes.
    // We could compare the values to detect tampering.
    params.userId = user?.id;
    try {
      // Insert the new player
      addPlayer.mutate(params);
      setLoading(false);
      snackbar.success(`${params.playerFirstName} added!`);
      router.push("/account/players");
    } catch (error) {
      setLoading(false);
      snackbar.error("Error adding player");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormLayout>
        <Heading size="md">Parent/Guardian Info</Heading>
        <FormLayout columns={{ md: 2, sm: 1 }}>
          <Field
            label="First Name"
            name="parentFirstName"
            rules={{ required: true }}
            defaultValue={user?.firstName || ""}
          />
          <Field
            label="Last Name"
            name="parentLastName"
            rules={{ required: true }}
            defaultValue={user?.lastName || ""}
          />
        </FormLayout>
        <FormLayout columns={{ md: 2, sm: 1 }}>
          <Field
            label="Email"
            name="parentEmail"
            type="email"
            rules={{ required: true }}
            defaultValue={user?.primaryEmailAddress?.emailAddress}
          />
          <Field
            label="Phone"
            name="parentPhone"
            type="phone"
            rules={{ required: true }}
            defaultValue={user?.primaryPhoneNumber?.phoneNumber}
          />
        </FormLayout>
        <FormLayout>
          <Field
            label="I'm willing to help coach or manage a team"
            name="canCoach"
            type="checkbox"
          />
        </FormLayout>
        <Heading size="md">Player Info</Heading>
        <FormLayout columns={{ md: 3, sm: 1 }}>
          <Field
            label="Player First Name"
            name="playerFirstName"
            rules={{ required: true }}
          />
          <Field
            label="Player Last Name"
            name="playerLastName"
            rules={{ required: true }}
          />
          <Field
            label="Player Birthdate"
            name="playerBirthdate"
            rules={{ required: true }}
          />
          {/* TODO(kevin): Put some validation for min/max ages */}
          {/* <FormControl>
            <FormLabel>Player Birthdate</FormLabel>
            <DateInput name="playerBirthdate" rules={{ required: true }} />
          </FormControl> */}
        </FormLayout>
        <SubmitButton isLoading={loading} disableIfInvalid>
          {loading ? "Loading" : "Submit"}
        </SubmitButton>
      </FormLayout>
    </Form>
  );
}
