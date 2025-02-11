import { TutorialLayout } from "@/components/TutorialLayout"
import { Card } from '@mantine/core';

export default function TutorialsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <TutorialLayout> <Card shadow="sm" padding="lg" m="lg" radius="md" withBorder id="tabs" className='mt-4 py-8'>{children}</Card></TutorialLayout>
    )
}