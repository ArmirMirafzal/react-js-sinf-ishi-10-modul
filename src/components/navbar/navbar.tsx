import { Avatar, Box, Flex, Menu, Title } from '@mantine/core'
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react'
import { useAuth } from 'modules/auth/context'
import { logout } from 'modules/auth/service'

const Navbar = () => {
  const { user } = useAuth()

  return (
    <Box component="nav" className="navbar navbar-light bg-light">
      <Flex className="container" justify="space-between">
        <Title className="navbar-brand">Chess Game</Title>
        <Menu shadow="md" width="max-content" position="bottom-end">
          <Menu.Target>
            <Avatar sx={{ cursor: 'pointer' }} src={user?.avatarURL} radius="lg" alt="it's me" size="md" />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label sx={{ fontSize: 15 }} color="lime">
              Hi 👋🏻 {user?.email}
            </Menu.Label>
            <Menu.Divider />
            <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
            <Menu.Item icon={<IconUser size={14} />}>Profile</Menu.Item>
            <Menu.Item onClick={logout} color="red" icon={<IconLogout size={14} />}>
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Box>
  )
}

export default Navbar
