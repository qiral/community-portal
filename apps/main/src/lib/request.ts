import { supabase } from "@/lib/supabaseClient";

export async function MakeRequest(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body: unknown = null,
    extraHeaders: Record<string, string> = {}
) {
    const { data } = await supabase.auth.getSession();
    const accessToken = data.session?.access_token;

    if (!accessToken) {
        throw new Error("User is not authenticated");
    }
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        ...extraHeaders,
    };
    const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
    }
    return response.json();
}