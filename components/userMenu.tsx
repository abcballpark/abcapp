// Defunct (for now) custom user menu. Using Clerk components for now.
// TODO(kevin): Build custom auth menus. For now, just use the Clerk components

import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Button,
  Link,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { useUser } from "@clerk/clerk-react";

import { PersonaAvatar } from "@saas-ui/react";

export function UserMenu() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <>
      {isSignedIn ? (
        <Menu>
          <MenuButton>
            <PersonaAvatar size="xs" />
          </MenuButton>
          <MenuList>
            <MenuGroup title={user?.emailAddresses[0].emailAddress || "User"}>
              <Link as={NextLink} href="/profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <Link as={NextLink} href="/players">
                <MenuItem>Players</MenuItem>
              </Link>
            </MenuGroup>
            <MenuDivider />
            <MenuItem>Sign Out</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button variant="primary">
          <Link href="/auth">Login or Create Account</Link>
        </Button>
      )}
    </>
  );
}
