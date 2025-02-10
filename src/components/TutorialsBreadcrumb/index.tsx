"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { startCase } from "lodash";
import { Title } from "@mantine/core"

export function TutorialsBreadcrumb() {
    const pathname = usePathname(); // Get pathname (without hash)
    const [pathWithHash, setPathWithHash] = useState("");


    useEffect(() => {
        const updatePath = () => {
            if (typeof window !== "undefined") {
                setPathWithHash(window.location.hash);
            }
        };

        updatePath(); // Get initial path
        window.addEventListener("hashchange", updatePath); // Listen for hash changes

        return () => window.removeEventListener("hashchange", updatePath);
    }, [pathname]); // Runs when the route changes

    const pathSegments = Array.from(pathWithHash.split("-"));

    return <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                    <Title order={4}>
                        {pathSegments.length >= 1 ? startCase(pathSegments[0]) : ""}</Title>
                </BreadcrumbLink>
            </BreadcrumbItem>
            {
                pathSegments.length > 1 && <BreadcrumbSeparator className="hidden md:block" />
            }
            <BreadcrumbItem>
                <BreadcrumbPage>
                    <Title order={4}>
                        {
                            pathSegments.length > 1 ? startCase(pathSegments[1]) : ""
                        }</Title></BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}