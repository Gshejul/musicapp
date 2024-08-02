"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link';

export default function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
    return(
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        {/* <HoveredLink href="/courses">All courses</HoveredLink> */}
                        <HoveredLink href="/courses">Basic theory of OS</HoveredLink>
                        <HoveredLink href="/courses">Basic theory of CN</HoveredLink>
                        <HoveredLink href="/courses">Basic theory of DBMS</HoveredLink>
                        <HoveredLink href="/courses">Basic theory of Mysql</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}