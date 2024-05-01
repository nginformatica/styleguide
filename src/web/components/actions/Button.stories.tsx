import React from 'react'
import { Button } from 'flipper-ui'
import type { Meta, StoryObj } from '@storybook/react'
import { Teste as ThisButton } from './Button'
import { theme } from 'flipper-ui/theme'

const { graphic } = theme.colors

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
            <>
                <div
                    style={{
                        border: '1px solid red',
                        backgroundColor: graphic.pink.main
                    }}>
                    <Button margin='12px'>Button Flipper</Button>
                </div>
                <ThisButton />
            </>
        )
    }
}
