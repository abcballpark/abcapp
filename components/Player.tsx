import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { type Player } from "@/db";
import {
  Persona,
  PersonaAvatar,
  PersonaDetails,
  PersonaLabel,
  PersonaSecondaryLabel,
} from "@saas-ui/react";

interface PlayerProps {
  player: Player;
}

export function Player(props: PlayerProps) {
  return (
    <Card margin={2}>
      <CardHeader>
        <Persona size="xl">
          <PersonaAvatar
            size="xl"
            name={`${props.player.playerFirstName} ${props.player.playerLastName}`}
          />
          <PersonaDetails>
            <PersonaLabel>{`${props.player.playerFirstName} ${props.player.playerLastName}`}</PersonaLabel>
            {/* TODO(kevin): Add age calculation */}
            <PersonaSecondaryLabel>{`DOB: ${props.player.playerBirthdate}`}</PersonaSecondaryLabel>
          </PersonaDetails>
        </Persona>
      </CardHeader>
      <CardBody>
        <Heading size="md">Parent/Guardian</Heading>
        <Text size="sm">{`Name: ${props.player.parentFirstName} ${props.player.parentLastName}`}</Text>
        <Text>{`Email: ${props.player.parentEmail}`}</Text>
        <Text>{`Phone: ${props.player.parentPhone}`}</Text>
        <Text>{`Coaching: I am ${
          !props.player.canCoach ? "not" : ""
        } willing to coach a team`}</Text>
        <br />
      </CardBody>
    </Card>
  );
}
