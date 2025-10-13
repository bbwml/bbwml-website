"use client";

export async function uploadToCloudinary(file, opts = { resource_type: "image" }) {
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!preset || !cloudName) throw new Error("Cloudinary env not set");

  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", preset);

  const endpoint =
    opts.resource_type === "raw"
      ? `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`
      : `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const res = await fetch(endpoint, { method: "POST", body: form });
  if (!res.ok) throw new Error("Upload failed");
  const json = await res.json();
  return { url: json.secure_url, public_id: json.public_id, resource_type: json.resource_type || "image" };
}
