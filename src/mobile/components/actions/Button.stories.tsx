import React from 'react'
import { Button } from 'flipper-ui'
import type { Meta, StoryObj } from '@storybook/react'
import { Teste as ThisButton } from './Button'

const meta: Meta<typeof Button> = {
    title: 'Mobile/Components/Actions/Button',
    component: Button
    // argTypes: {
    //     backgroundColor: { control: 'color' }
    // }
}

export default meta

type Story = StoryObj<typeof Button>

export const button: Story = {
    render: () => {
        return (
            <>
                <div
                    style={{
                        border: '1px solid red'
                    }}>
                    <Button margin='12px'>Button Flipper</Button>
                </div>
                <ThisButton />
            </>
        )
    }
}
