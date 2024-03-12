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

import { useUser, UserButton, SignInButton } from "@clerk/clerk-react";

// import { PersonaAvatar } from "@saas-ui/react";

export function UserMenu() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <>
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton>
          <Button variant="primary">Login or Create Account</Button>
        </SignInButton>
      )}
    </>
  );

  // TODO(kevin): Build custom auth menus. For now, just use the Clerk components
  // return (
  //   <>
  //     {isSignedIn ? (
  //       <Menu>
  //         <MenuButton>
  //           <PersonaAvatar size="xs" />
  //         </MenuButton>
  //         <MenuList>
  //           <MenuGroup title={user?.emailAddresses[0].emailAddress || "User"}>
  //             <Link as={NextLink} href="/profile">
  //               <MenuItem>Profile</MenuItem>
  //             </Link>
  //             <Link as={NextLink} href="/players">
  //               <MenuItem>Players</MenuItem>
  //             </Link>
  //           </MenuGroup>
  //           <MenuDivider />
  //           <MenuItem>Sign Out</MenuItem>
  //         </MenuList>
  //       </Menu>
  //     ) : (
  //       <Button variant="primary">
  //         <Link href="/auth">Login or Create Account</Link>
  //       </Button>
  //     )}
  //   </>
  // );
}
