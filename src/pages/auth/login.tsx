import { useNavigate } from 'react-router-dom'
import { Anchor, Button, Container, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { signInWithGoogle } from 'modules/auth/service'
import { IForm } from 'modules/auth/types'
import * as yup from 'yup'

import { GoogleButton } from 'components'

const schema = yup.object({
  email: yup.string().email().label('Email').required(),
  password: yup.string().min(6).label('Password').required()
})

const Login = () => {
  const navigate = useNavigate()
  const form = useForm<IForm.Login>({
    initialValues: { email: '', password: '' },
    validate: yupResolver(schema)
  })

  const onSubmit = (values: IForm.Login) => {
    console.log('values = ', values)
  }

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" weight={500} sx={{ textAlign: 'center' }}>
          Welcome to Chess Game
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl" onClick={signInWithGoogle}>
            Google
          </GoogleButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack>
            <TextInput label="Email" placeholder="Your email address" radius="md" {...form.getInputProps('email')} />

            <PasswordInput label="Password" placeholder="Your password" radius="md" {...form.getInputProps('password')} />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="dimmed" onClick={() => navigate('/auth/register')} size="xs">
              Don't have an account? Register
            </Anchor>
            <Button type="submit" radius="xl">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}

export default Login
