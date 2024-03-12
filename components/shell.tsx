"use client";

import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AppShell,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarLink,
} from "@saas-ui/react";
import { FiX, FiMenu } from "react-icons/fi";
import React from "react";
import { UserMenu } from "./userMenu";
import { AccountMenu } from "./accountMenu";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { NavLink } from "./NavLink";

interface ShellProps {
  children?: React.ReactNode;
}

export function Shell(props: ShellProps) {
  const { isSignedIn, user, isLoaded } = useUser();
  const mobileNav = useDisclosure();
  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/baseball", label: "Baseball" },
    { href: "/softball", label: "Softball" },
    { href: "/soccer", label: "Soccer" },
    { href: "/basketball", label: "Basketball" },
    { href: "/about", label: "About ABC" },
  ];

  const accountLinks: NavLink[] = [
    { href: "/account/players", label: "Players" },
    { href: "/account/teams", label: "Teams" },
  ];

  return (
    <AppShell
      variant="static"
      navbar={
        <Navbar
          position="sticky"
          background="transparent"
          backdropFilter="blur(20px)"
          borderBottomWidth="1px"
        >
          <NavbarBrand>ABC</NavbarBrand>
          <NavbarContent>
            <NavbarItem>
              <NavbarLink href="/signup">Sign Up!</NavbarLink>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justifyContent="end" display={{ base: "none", sm: "flex" }}>
            {navLinks.map((link) => (
              <NavbarItem key={link.href}>
                <NavbarLink href={link.href}>{link.label}</NavbarLink>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justifyContent="end" spacing={2}>
            {isSignedIn ? <AccountMenu links={accountLinks} /> : <></>}
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton>
                <Button variant="primary">Login</Button>
              </SignInButton>
            )}
            <Button
              display={{ base: "inline-flex", sm: "none" }}
              variant="ghost"
              onClick={mobileNav.onToggle}
            >
              {mobileNav.isOpen ? <FiX /> : <FiMenu />}
            </Button>
          </NavbarContent>
          <Drawer {...mobileNav}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>
                <DrawerCloseButton />
              </DrawerHeader>
              <DrawerBody fontSize="md">
                <NavbarContent flexDirection="column" justifyContent="stretch">
                  {navLinks.map((link) => (
                    <NavbarItem key={link.href}>
                      <NavbarLink href={link.href}>{link.label}</NavbarLink>
                    </NavbarItem>
                  ))}
                </NavbarContent>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Navbar>
      }
    >
      <Box as="main" flex="1" py="2" px="4">
        <Container
          maxW="container.xl"
          pt="8"
          px="8"
          display="flex"
          flexDirection="column"
          margin="0 auto"
          alignContent="center"
        >
          {props.children}
        </Container>
      </Box>
    </AppShell>
  );
}
