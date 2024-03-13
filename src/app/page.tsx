"use client";

import { Heading, Text, Link, UnorderedList, ListItem } from "@chakra-ui/react";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Heading size="xl">What's Happening at ABC</Heading>
      <br />
      <Heading size="lg">BASEBALL --- SOFTBALL</Heading>
      <br />
      <Heading size="md">
        ... as well as Tee Ball & PAL/GAL Ball (machine pitch) for the younger kids!
      </Heading>
      <br />
      <Text fontSize="lg">
        In-person sign-up sessions for ABC's youth recreational baseball and softball
        programs (2024 season) have already been held, however...
      </Text>
      <br />
      <Heading size="lg">IT'S NOT TOO LATE! Join the fun this season...</Heading>
      <br />
      <Text>
        <strong>
          ABC will continue to accept registrations on an "as space available" basis (and
          for now, space is available!)
        </strong>{" "}
        To submit a registration, head to the <Link href="/signup">Sign Up Page</Link> or
        click the button above.
      </Text>
      <br />
      <Text>
        <strong>For those still needing an ID Card</strong>, you can come to the Field
        House at ABC on any Tuesday in April (6 pm to 8 pm) to complete the process.{" "}
        <Link href="id-card">Read more...</Link>
      </Text>
      <br />
      <Text as="b">We’ll see YOU at the ball park soon!</Text>
      <br />
      <hr />
      <br />
      <Text as="u">
        <b>Work with us on the ABC Ball Park team!</b>
      </Text>
      <br />
      <Heading size="lg">UMPIRES - CONCESSION CREW - GROUND CREW</Heading>
      <br />
      <UnorderedList>
        <ListItem>
          <Link>
            Read more about these jobs at the ball park for the Spring / Summer 2024
            season.
          </Link>
        </ListItem>
        <ListItem>
          <Link>View/print a Concession Job Application and FAQ sheet</Link>
        </ListItem>
      </UnorderedList>
      <br />
      <hr />
      <br />
      <Heading size="lg">ABC BALLPARK RULES</Heading>
      <Text>
        <b>REMINDER:</b> Park and league rules <b>PROHIBIT outside food or beverages</b>{" "}
        from being brought into the park (except water/sports drinks for players).
      </Text>
      <Text>
        For the safety of all,{" "}
        <b>pets of any kind are not allowed (no matter how small or cute)</b> on park
        grounds.
      </Text>
      <br />
      <hr />
      <br />
      <Heading size="lg">
        ABC Ball Park is proud to support STL Youth Sports Outreach in its mission to
        provide sports equipment for children coming from families in need.
      </Heading>
      <br />
      <Link>Read more about STL Youth Sports Outreach here...</Link>
      <br />
      <hr />
      <br />
      <Heading size="lg">The ABC Information and Rainout telephone number is</Heading>
      <Heading size="xl">
        <Link href="tel:314-423-5049">314-423-5049</Link>
      </Heading>
      <br />
      <Text>Please call for up-to-date field and game status information.</Text>
      <br />
      <Text>
        <b>ATTENTION All managers and/or team representatives</b>
        <br />
        When league games at ABC are canceled due to weather/field conditions: Please read
        about the rainout/weather rescheduling process on the{" "}
        <Link>Rescheduling Weather Cancelled Games page.</Link>
      </Text>
    </>
  );
}
