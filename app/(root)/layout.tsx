import type {Metadata} from 'next'
import React from "react";

import Navbar from "@/components/Navbar";
import MainContainer from "@/components/MainContainer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <section className={'bg-white dark:bg-[#141625] transition-colors'}>
            <Navbar/>

            <MainContainer>
                {children}
            </MainContainer>
        </section>
    )
}
