"use client";

import { Card, CardHeader, CardBody, Center } from "@chakra-ui/react";
import { Auth } from "@saas-ui/auth";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function AuthPage() {
  return (
    <Center>
      <Card width="480px">
        <CardHeader display="flex" alignItems="center" justifyContent="center">
          {/* Logo */}
        </CardHeader>
        <CardBody>
          <Auth
            type="password"
            providers={{
              google: {
                icon: FaGoogle,
                name: "Google",
              },
              apple: {
                icon: FaApple,
                name: "Apple",
              },
            }}
          />
        </CardBody>
      </Card>
    </Center>
  );
}
