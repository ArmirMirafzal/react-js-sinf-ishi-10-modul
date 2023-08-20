import { useNavigate } from 'react-router-dom'
import { Anchor, Button, Container, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { auth } from 'config'
import { AuthErrorCodes } from 'firebase/auth'
import { Service } from 'modules/auth'
import { IForm } from 'modules/auth/types'
import * as yup from 'yup'

import { GoogleButton } from 'components'

const schema = yup.object({
  name: yup.string().min(5).label('Name').required(),
  email: yup.string().email().label('Email').required(),
  avatarURL: yup.string().label('Avatar url').required(),
  password: yup.string().min(6).label('Password').required()
})

const Register = () => {
  const navigate = useNavigate()
  const form = useForm<IForm.Register>({
    initialValues: { name: '', email: '', password: '', avatarURL: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = async ({ name, avatarURL, password, email }: IForm.Register) => {
    try {
      const { user } = await Service.register({ email, password })

      await Service.updateProfile(user, { name, avatarURL })
      auth.updateCurrentUser(user)
    } catch (err: any) {
      if (err?.code === AuthErrorCodes.EMAIL_EXISTS) {
        notifications.show({ message: `this email ${email} already exist`, color: 'red' })
      } else notifications.show({ message: err?.message, color: 'red' })
    }
  }

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" weight={500} sx={{ textAlign: 'center' }}>
          Welcome to Chess Game
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl" onClick={Service.signInWithGoogle}>
            Google
          </GoogleButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack>
            <TextInput label="Name" placeholder="Your name" radius="md" {...form.getInputProps('name')} />
            <TextInput label="Avatar link" placeholder="Your avatar link" radius="md" {...form.getInputProps('avatarURL')} />
            <TextInput label="Email" placeholder="Your email address" radius="md" {...form.getInputProps('email')} />
            <PasswordInput label="Password" placeholder="Your password" radius="md" {...form.getInputProps('password')} />
          </Stack>
          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="dimmed" onClick={() => navigate('/auth/login')} size="xs">
              Already have an account? Login
            </Anchor>
            <Button type="submit" radius="xl">
              Register
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}

export default Register
