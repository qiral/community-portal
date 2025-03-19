"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const clubFormSchema = z.object({
  clubName: z.string().min(2, {
    message: "Kulüp adı en az 2 karakter olmalıdır.",
  }),
  description: z.string().min(10, {
    message: "Açıklama en az 10 karakter olmalıdır.",
  }),
  email: z.string().email({
    message: "Geçerli bir email adresi girin.",
  }),
})

type ClubFormValues = z.infer<typeof clubFormSchema>

export default function ClubForm() {
  const [activeTab, setActiveTab] = useState("kulup-bilgileri")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const form = useForm<ClubFormValues>({
    resolver: zodResolver(clubFormSchema),
    defaultValues: {
      clubName: "",
      description: "",
      email: "",
    },
  })

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  async function onSubmit(data: ClubFormValues) {
    setIsLoading(true)
    setError(null)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form data submitted:", data)
      setSuccessMessage("Değişiklikler başarıyla kaydedildi!")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null)
      }, 3000)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "Kaydetme sırasında bir hata oluştu.")
      } else {
        setError("Beklenmeyen bir hata oluştu.")
      }
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  }

  const tabsContainerStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#f8fafc",
  }

  const getTabStyle = (isActive: boolean): React.CSSProperties => ({
    flex: "1",
    padding: "14px 16px",
    fontSize: "14px",
    fontWeight: isActive ? "600" : "400",
    backgroundColor: isActive ? "white" : "#f8fafc",
    color: isActive ? "#2563eb" : "#64748b",
    border: "none",
    borderBottom: isActive ? "2px solid #2563eb" : "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
  })

  const formContainerStyle: React.CSSProperties = {
    padding: "32px",
    backgroundColor: "white",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#334155",
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "white",
    color: "#0f172a",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "15px",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    outline: "none",
  }

  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    minHeight: "140px",
    resize: "vertical",
  }

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    backgroundColor: "#1e40af",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    marginTop: "8px",
  }

  const disabledButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: "#93c5fd",
    cursor: "not-allowed",
  }

  const formGroupStyle: React.CSSProperties = {
    marginBottom: "24px",
  }

  const errorMessageStyle: React.CSSProperties = {
    color: "#dc2626",
    fontSize: "14px",
    marginTop: "6px",
  }

  const successMessageStyle: React.CSSProperties = {
    padding: "14px",
    backgroundColor: "#f0fdf4",
    borderRadius: "8px",
    color: "#16a34a",
    marginTop: "20px",
    fontSize: "14px",
  }

  const errorAlertStyle: React.CSSProperties = {
    padding: "14px",
    backgroundColor: "#fef2f2",
    borderRadius: "8px",
    color: "#dc2626",
    marginTop: "20px",
    fontSize: "14px",
  }

  return (
    <div style={containerStyle}>
      {/* Custom tabs */}
      <div style={tabsContainerStyle}>
        {[
          { id: "kulup-bilgileri", label: "Kulüp Bilgileri" },
          { id: "etkinlikler", label: "Etkinlikler" },
          { id: "galeri", label: "Galeri" },
          { id: "feed-postu", label: "Feed Postu" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            style={getTabStyle(activeTab === tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form content */}
      <div style={formContainerStyle}>
        {activeTab === "kulup-bilgileri" && (
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div style={formGroupStyle}>
              <label htmlFor="clubName" style={labelStyle}>
                Kulüp Adı
              </label>
              <input
                id="clubName"
                placeholder="Kulüp adını değiştir"
                style={{
                  ...inputStyle,
                  boxShadow: form.formState.errors.clubName ? "0 0 0 1px #ef4444" : "none",
                  borderColor: form.formState.errors.clubName ? "#ef4444" : "#cbd5e1",
                }}
                disabled={isLoading}
                {...form.register("clubName")}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6"
                  e.target.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.2)"
                }}
                onBlur={(e) => {
                  if (!form.formState.errors.clubName) {
                    e.target.style.borderColor = "#cbd5e1"
                    e.target.style.boxShadow = "none"
                  }
                }}
              />
              {form.formState.errors.clubName && (
                <p style={errorMessageStyle}>{form.formState.errors.clubName.message}</p>
              )}
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="description" style={labelStyle}>
                Açıklama
              </label>
              <textarea
                id="description"
                placeholder="Kulübünüzün açıklamasını değiştirin."
                style={{
                  ...textareaStyle,
                  boxShadow: form.formState.errors.description ? "0 0 0 1px #ef4444" : "none",
                  borderColor: form.formState.errors.description ? "#ef4444" : "#cbd5e1",
                }}
                disabled={isLoading}
                {...form.register("description")}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6"
                  e.target.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.2)"
                }}
                onBlur={(e) => {
                  if (!form.formState.errors.description) {
                    e.target.style.borderColor = "#cbd5e1"
                    e.target.style.boxShadow = "none"
                  }
                }}
              />
              {form.formState.errors.description && (
                <p style={errorMessageStyle}>{form.formState.errors.description.message}</p>
              )}
            </div>

            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>
                İletişim E-postası
              </label>
              <input
                id="email"
                type="email"
                placeholder="Kulüp mailini değiştirin: ornek@kulup.com"
                style={{
                  ...inputStyle,
                  boxShadow: form.formState.errors.email ? "0 0 0 1px #ef4444" : "none",
                  borderColor: form.formState.errors.email ? "#ef4444" : "#cbd5e1",
                }}
                disabled={isLoading}
                {...form.register("email")}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6"
                  e.target.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.2)"
                }}
                onBlur={(e) => {
                  if (!form.formState.errors.email) {
                    e.target.style.borderColor = "#cbd5e1"
                    e.target.style.boxShadow = "none"
                  }
                }}
              />
              {form.formState.errors.email && <p style={errorMessageStyle}>{form.formState.errors.email.message}</p>}
            </div>

            <button
              type="submit"
              style={isLoading ? disabledButtonStyle : buttonStyle}
              disabled={isLoading}
              onMouseOver={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "#1e3a8a"
                }
              }}
              onMouseOut={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "#1e40af"
                }
              }}
            >
              {isLoading ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
            </button>

            {error && <div style={errorAlertStyle}>{error}</div>}
            {successMessage && <div style={successMessageStyle}>{successMessage}</div>}
          </form>
        )}

        {activeTab === "etkinlikler" && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#64748b" }}>
            Etkinlikler içeriği burada görüntülenecek.
          </div>
        )}

        {activeTab === "galeri" && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#64748b" }}>
            Galeri içeriği burada görüntülenecek.
          </div>
        )}

        {activeTab === "feed-postu" && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#64748b" }}>
            Feed Postu içeriği burada görüntülenecek.
          </div>
        )}
      </div>
    </div>
  )
}

