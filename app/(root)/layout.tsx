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
        <React.Fragment>
            <Navbar/>

            <MainContainer>
                {children}
            </MainContainer>
        </React.Fragment>
    )
}
