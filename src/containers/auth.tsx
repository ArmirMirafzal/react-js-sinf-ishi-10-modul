import React from "react";
import { LoadingOverlay } from "@mantine/core";
import { AuthContext } from "modules/auth/context";
import { useProfile } from "modules/auth/hooks";

interface AuthProps {
	children: React.ReactNode;
}

const Auth = ({ children }: AuthProps) => {
	const [state, setState] = useProfile();

	if (state.isLoading) return <LoadingOverlay visible overlayBlur={2} />;

	return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default Auth;
