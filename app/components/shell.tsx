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
  return (
    <AppShell
      navbar={
        <Navbar position="sticky">
          {/* <NavbarBrand>Brand</NavbarBrand> */}
          <Button
            display={{ base: "inline-flex", sm: "none" }}
            variant="ghost"
            onClick={mobileNav.onToggle}
          >
            {mobileNav.isOpen ? <FiX /> : <FiMenu />}
          </Button>
          <NavbarContent display={{ base: "none", sm: "flex" }}>
            <NavbarItem>
              <NavbarLink isActive href="#">
                Home
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink isActive href="#">
                Programs
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink isActive href="#">
                Register
              </NavbarLink>
            </NavbarItem>
          </NavbarContent>
          <Drawer {...mobileNav}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader>
                <DrawerCloseButton />
              </DrawerHeader>
              <DrawerBody fontSize="md">
                <NavbarContent flexDirection="column" justifyContent="stretch">
                  <NavbarItem>
                    <NavbarLink isActive href="#">
                      Home
                    </NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                    <NavbarLink href="#">Programs</NavbarLink>
                  </NavbarItem>
                  <NavbarItem>
                    <NavbarLink href="#">Register</NavbarLink>
                  </NavbarItem>
                </NavbarContent>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Navbar>
      }
    />
  );
}
