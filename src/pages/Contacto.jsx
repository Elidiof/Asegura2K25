import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContactButtons from "../components/ContactButtons";

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto | Asegura2K25</title>
      </Helmet>

      <section className="pt-6 pb-8 bg-[#1e3a8a]">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Contáctenos
        </h1>

        <div className="mx-auto max-w-2xl bg-white rounded-2xl shadow-xl p-6 space-y-6">
          <p className="text-gray-700 text-center text-lg">
            Contáctenos por WhatsApp o email y le responderemos lo antes posible
          </p>

          <ContactButtons />
