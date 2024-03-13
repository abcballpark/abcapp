import { Badge, Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import {
  Persona,
  PersonaAvatar,
  PersonaDetails,
  PersonaLabel,
  PersonaSecondaryLabel,
  PersonaTertiaryLabel,
} from "@saas-ui/react";

interface PlayerProps {
  playerFirstName: string | null;
  playerLastName: string | null;
  playerBirthdate: string | null;
  jerseyNumberPreference?: string | null;
  canCoach: boolean;
}

export function Player(props: PlayerProps) {
  return (
    <Card margin={2} minW="300px">
      <CardHeader>
        <Persona size="lg">
          <PersonaAvatar
            size="lg"
            name={`${props.playerFirstName} ${props.playerLastName}`}
          />
          <PersonaDetails>
            <PersonaLabel>{`${props.playerFirstName} ${props.playerLastName}`}</PersonaLabel>
            {/* TODO(kevin): Add age calculation */}
            <PersonaSecondaryLabel>{`DOB: ${props.playerBirthdate}`}</PersonaSecondaryLabel>
            <PersonaTertiaryLabel>{`Jersey: ${props.jerseyNumberPreference}`}</PersonaTertiaryLabel>
          </PersonaDetails>
        </Persona>
      </CardHeader>
      <CardBody>
        {props.canCoach ? <Badge colorScheme="green">Can Coach</Badge> : null}
      </CardBody>
    </Card>
  );
}
