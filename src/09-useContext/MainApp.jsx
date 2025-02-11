import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router'
import {  } from 'react-router'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>

            <Navbar />
            
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
