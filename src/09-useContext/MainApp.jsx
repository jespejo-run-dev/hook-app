import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import {  } from 'react-router'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* Default */}
                <Route path="/*" element={<Navigate to="/about" />} />

            </Routes>
        </>
    )
}
