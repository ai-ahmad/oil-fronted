"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from 'next/image'; // Import Image from Next.js
import FormBg from "../../public/media/bg.png"
export default function ZayavkaForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
    consent: false,
    subscribe: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/zayavka/create",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          comment: formData.comment,
        }
      );

      if (response.status === 201) {
        setSuccess(true);
      }
    } catch (err) {
      setError("Error submitting the form, please try again.");
    }
  };

  return (
    <div className=" mx-auto  container flex justify-between items-center py-12">
      <div className="w-full max-w-lg ">
        <h2 className="text-3xl font-bold mb-4">
          Оставьте заявку <br /> и мы проконсультируем вас!
        </h2>

        {error && <div className="text-red-500">{error}</div>}
        {success && (
          <div className="text-green-500 mb-2">Заявка успешно отправлена!</div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              ФИО *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Ваше полное имя"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Телефон *
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="+998 (--) --- -- --"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder="Ваш email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="comment">
              Комментарий
            </label>
            <textarea
              name="comment"
              id="comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ваш комментарий"
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="form-checkbox"
              />
              <span className="ml-2 text-gray-700">
                Я даю согласие на обработку персональных данных
              </span>
            </label>
          </div>

          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2 text-gray-700">
                Я даю согласие на получение рекламной рассылки
              </span>
            </label>
          </div>
        </form>
       <div className="flex justify-center mt-5">
       <button
            type="submit"
            className="bg-red-500  w-[80%] text-white px-6 py-3 rounded-full"
            onClick={handleSubmit}
          >
            Отправить
          </button>
       </div>
      </div>

      <div className="hidden md:block absolute right-0">
        <Image
          src={FormBg}// Reference image from public folder, not imported
          alt="Form background"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
