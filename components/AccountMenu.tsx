import { Button, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@saas-ui/react";
import { type NavLink } from "./NavLink";

interface AccountMenuProps {
  links: NavLink[];
}

export function AccountMenu(props: AccountMenuProps) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Account
      </MenuButton>
      <MenuList>
        {props.links.map((link) => (
          <Link key={link.href} href={link.href}>
            <MenuItem>{link.label}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
}
