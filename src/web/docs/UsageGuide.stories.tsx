import React from 'react'
import { DonutChart } from 'amazing-react-charts'
import { Button } from 'flipper-ui'
import { PhotoCamera } from 'flipper-ui/icons'
import { Notification, useNotification } from 'ngi-core'
import type { Meta } from '@storybook/react'
import type { TNotificationType } from 'ngi-core/components/notification/useNotification'
import { WrapperButton, WrapperNotification } from '../../styles'
import { theme } from 'flipper-ui/theme'

const { primary } = theme.colors

const meta: Meta<typeof Button> = {
    title: 'Web/Usage Guide',
    component: Button
}

export default meta

export const donutChart = {
    render: () => {
        return (
            <DonutChart
                title='Donut Chart'
                colors={['red', 'orange', 'yellow', 'green']}
                donutRadius={['58%', '70%']}
                resultFormatType='percent'
                center={['50%', '50%']}
                legendPosition='outside'
                tooltip={{
                    label: 'Criticidade',
                    result: 'Total de SSs'
                }}
                toolboxTooltip={{ saveAsImage: { title: 'Save as Image' } }}
                data={[
                    { name: 'Emergencial', value: 120 },
                    { name: 'Alta', value: 234 },
                    { name: 'Média', value: 500 },
                    { name: 'Baixa', value: 440 }
                ]}
            />
        )
    }
}

export const flipperButton = {
    render: () => {
        return (
            <Button color='primary' variant='outlined'>
                Este é um botão!
            </Button>
        )
    },
    parameters: {
        layout: 'centered'
    }
}

export const flipperIcon = {
    render: () => {
        return <PhotoCamera htmlColor={primary.main} />
    },
    parameters: {
        layout: 'centered'
    }
}

const messageExtractor = (arg: Error | string) =>
    typeof arg === 'string' ? arg : arg.message

const NotificationWrapper = () => {
    const [notify] = useNotification()
    const variants: TNotificationType[] = [
        'error',
        'info',
        'success',
        'warning'
    ]

    return (
        <WrapperNotification>
            {variants.map(variant => (
                <WrapperButton
                    key={variant}
                    onClick={() => notify(variant, 'message')}>
                    {variant}
                </WrapperButton>
            ))}
        </WrapperNotification>
    )
}

export const notification = {
    render: () => {
        return (
            <Notification messageExtractor={messageExtractor}>
                <NotificationWrapper />
            </Notification>
        )
    },
    parameters: {
        layout: 'centered'
    }
}
