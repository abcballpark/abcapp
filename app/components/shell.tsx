"use client";

import {
  Button,
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

interface ShellProps {
  children?: React.ReactNode;
}

export function Shell(props: ShellProps) {
  const mobileNav = useDisclosure();
  const links = [
    { href: "#", label: "Home" },
    { href: "/baseball", label: "Baseball" },
    { href: "/softball", label: "Softball" },
    { href: "/soccer", label: "Soccer" },
    { href: "/basketball", label: "Basketball" },
    { href: "/about", label: "About ABC" },
  ];

  return (
    <AppShell
      navbar={
        <Navbar position="sticky">
          <NavbarBrand>ABC</NavbarBrand>
          <NavbarContent>
            <NavbarItem>
              <Button variant="primary">Sign Up!</Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent
            justifyContent="end"
            display={{ base: "none", sm: "flex" }}
          >
            {links.map((link) => (
              <NavbarItem key={link.href}>
                <NavbarLink href={link.href}>{link.label}</NavbarLink>
              </NavbarItem>
            ))}
          </NavbarContent>
          <Button
            display={{ base: "inline-flex", sm: "none" }}
            variant="ghost"
            onClick={mobileNav.onToggle}
          >
            {mobileNav.isOpen ? <FiX /> : <FiMenu />}
          </Button>
          <Drawer {...mobileNav}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>
                <DrawerCloseButton />
              </DrawerHeader>
              <DrawerBody fontSize="md">
                <NavbarContent flexDirection="column" justifyContent="stretch">
                  {links.map((link) => (
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
    />
  );
}
