import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Teste as Colors } from './Colors'

const meta: Meta<typeof Colors> = {
    title: 'Web/Design/Colors',
    component: Colors
    // argTypes: {
    //     backgroundColor: { control: 'color' }
    // }
}

export default meta

type Story = StoryObj<typeof Colors>

export const colors: Story = {
    render: () => {
        return <Colors />
    }
}
