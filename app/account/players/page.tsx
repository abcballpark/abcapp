"use client";
import { Flex, Heading } from "@chakra-ui/react";

import { Player } from "@/components";
import { trpc } from "@/app/trpc/client";

export default function Players() {
  const players = trpc.getAccountPlayers.useQuery();

  return (
    <>
      <Heading>My Players</Heading>
      <br />
      <Flex>
        {players.data?.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </Flex>
    </>
  );
}
