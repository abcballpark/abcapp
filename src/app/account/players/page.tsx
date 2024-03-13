"use client";
import { Wrap, WrapItem, Heading } from "@chakra-ui/react";

import { Player } from "@/components";
import { trpc } from "@/app/trpc/client";

export default function Players() {
  const players = trpc.getAccountPlayers.useQuery();

  return (
    <>
      <Heading>My Players</Heading>
      <br />
      <Wrap>
        {players.data?.map((player) => (
          <WrapItem>
            <Player
              key={player.id}
              playerFirstName={player.playerFirstName}
              playerLastName={player.playerLastName}
              playerBirthdate={player.playerBirthdate}
              jerseyNumberPreference={player.jerseyNumberPreference}
              canCoach={player.canCoach}
            />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
