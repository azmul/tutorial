"use client"
import { useWindowScroll } from '@mantine/hooks';
import { Button } from '@mantine/core';

export function ScrollToTop() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            {
                scroll.y > 100 && <Button pos="absolute" bottom={0} left={0} onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
            }
        </>
    );
}