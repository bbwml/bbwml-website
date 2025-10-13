// lib/cloudinaryUpload.js
export async function uploadToCloudinary(file, { folder = "applications" } = {}) {
  if (!file) throw new Error("No file provided");

  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  if (!cloud || !preset) throw new Error("Missing Cloudinary env vars");

  const isPdf =
    file.type === "application/pdf" ||
    (file.name && file.name.toLowerCase().endsWith(".pdf"));

  const resource = isPdf ? "raw" : "auto";
  const endpoint = `https://api.cloudinary.com/v1_1/${cloud}/${resource}/upload`;

  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", preset);
  if (folder) fd.append("folder", folder);

  const res = await fetch(endpoint, { method: "POST", body: fd });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error?.message || "Cloudinary upload failed");

  return {
    secure_url: json.secure_url,
    public_id: json.public_id,
    resource_type: json.resource_type, // raw | image | video
    format: json.format,               // pdf | jpg | png ...
  };
}
