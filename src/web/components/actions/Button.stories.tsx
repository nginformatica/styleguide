import React from 'react'
import { Button } from 'flipper-ui'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
    title: 'Web/Components/Actions/Button',
    component: Button,
    argTypes: {
        color: { control: 'color' }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const button: Story = {
    render: () => {
        return (
            <Button color='primary' variant='contained'>
                I'm a button!
            </Button>
        )
    }
}
